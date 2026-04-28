"use client";

import { useState } from "react";
import { X, Wallet, Smartphone, CreditCard, Receipt, CheckCircle2, Box, ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  product 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  product: any;
}) {
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [isProcessing, setIsProcessing] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  if (!isOpen || !product) return null;

  const handleClose = () => {
    // Reset state kalau modal ditutup
    setTimeout(() => setSuccessData(null), 300);
    onClose();
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    toast.loading("Memproses pembayaran...");

    try {
      // Ubah string "Rp 150.000" jadi angka 150000 buat dikirim ke Golang
      const priceNumber = parseInt(product.price.replace(/[^0-9]/g, '')) || 150000;

      // Tembak API Backend Golang lu
      const res = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: "Tulalit Jendral", // Nama user lu
          destination_id: product.id || 1,
          amount_paid: priceNumber
        }),
      });

      if (!res.ok) throw new Error("Gagal terhubung ke Markas Golang");

      const data = await res.json();
      
      toast.dismiss();
      toast.success("Transaksi berhasil dicatat ke IPFS!");
      
      // Simpan data (termasuk ticket_hash) buat ditampilin di struk
      setSuccessData(data);

    } catch (err) {
      toast.dismiss();
      toast.error("Koneksi ke backend terputus! Pastikan Golang nyala.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center px-4 pb-4 md:pb-0">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-6 shadow-2xl animate-in slide-in-from-bottom-10 md:zoom-in duration-300 overflow-hidden">
        
        {/* JIKA PEMBAYARAN SUKSES (STRUK WEB3) */}
        {successData ? (
          <div className="text-center py-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Pembayaran Sukses!</h2>
            <p className="text-sm text-gray-500 mt-2 font-medium">Bukti transaksimu telah diamankan.</p>

            <div className="mt-8 bg-gray-50 border border-gray-100 rounded-3xl p-5 text-left space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Item</p>
                <p className="text-sm font-bold text-gray-800">{product.name}</p>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Box className="w-3 h-3" /> Web3 IPFS Hash (Pinata)
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <code className="flex-1 bg-gray-200/50 text-gray-700 text-xs px-3 py-2 rounded-xl truncate font-mono">
                    {successData.ticket_hash}
                  </code>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(successData.ticket_hash);
                      toast("Hash disalin ke clipboard!");
                    }}
                    className="p-2 bg-white rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <a 
                href={`https://gateway.pinata.cloud/ipfs/${successData.ticket_hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-purple-50 text-purple-700 font-bold text-xs rounded-2xl hover:bg-purple-100 transition-colors"
              >
                Cek IPFS <ExternalLink className="w-3 h-3" />
              </a>
              <button 
                onClick={handleClose}
                className="py-3.5 bg-gray-900 text-white font-bold text-xs rounded-2xl shadow-xl hover:bg-black transition-colors"
              >
                Tutup Struk
              </button>
            </div>
          </div>
        ) : (
          
          /* JIKA BELUM BAYAR (FORM KASIR) */
          <div className="animate-in fade-in slide-in-from-left-8 duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-orange-600" /> Checkout
              </h2>
              <button onClick={handleClose} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-3xl mb-6 flex gap-4 items-center border border-gray-100">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{product.store}</p>
                <p className="text-sm font-bold text-orange-700 mt-1">{product.price}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Metode Pembayaran</h4>
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => setPaymentMethod("qris")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "qris" ? "border-orange-500 bg-orange-50/50" : "border-gray-100 hover:border-orange-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === "qris" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-gray-700">QRIS (OVO, Dana, LinkAja)</span>
                  </div>
                  {paymentMethod === "qris" && <CheckCircle2 className="w-5 h-5 text-orange-500" />}
                </button>

                <button 
                  onClick={() => setPaymentMethod("gopay")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "gopay" ? "border-green-500 bg-green-50/50" : "border-gray-100 hover:border-green-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === "gopay" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                      <Wallet className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-gray-700">GoPay</span>
                  </div>
                  {paymentMethod === "gopay" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </button>
              </div>
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 text-white rounded-2xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 ${isProcessing ? 'bg-orange-400 cursor-not-allowed animate-pulse' : 'bg-gray-900 hover:bg-orange-700 active:scale-95'}`}
            >
              {isProcessing ? 'Memproses Pembayaran...' : (
                <><CreditCard className="w-4 h-4" /> Bayar Sekarang</>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}