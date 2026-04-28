"use client";

import { X, Mail, ArrowRight, Compass } from "lucide-react";
import { toast } from "sonner";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleLogin = (provider: string) => {
    toast.loading(`Menyambungkan ke ${provider}...`);
    setTimeout(() => {
      toast.dismiss();
      toast.success(`Selamat datang kembali, Jendral!`);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-[400px] rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="text-center mb-8 pt-4">
          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
            <Compass className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Mulai Petualangan</h2>
          <p className="text-xs text-gray-500 font-medium mt-2">Masuk untuk menyimpan Itinerary & Tiket Web3 Anda.</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => handleLogin("Google")}
            className="w-full py-3.5 bg-white border border-gray-200 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50/50 transition-all active:scale-95 shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Lanjutkan dengan Google
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center"><span className="bg-white px-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Atau</span></div>
          </div>

          <div className="space-y-3">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-600 transition-colors" />
              <input type="email" placeholder="Alamat Email" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-medium outline-none focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-500/10 transition-all" />
            </div>
            <button 
              onClick={() => handleLogin("Email")}
              className="w-full py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-orange-700 transition-all shadow-xl shadow-gray-900/20 active:scale-95 flex items-center justify-center gap-2"
            >
              Masuk <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-8 leading-relaxed font-medium">
          Dengan masuk, Anda menyetujui <br/>
          <span className="text-gray-700 font-bold hover:text-orange-600 cursor-pointer transition-colors">Syarat & Ketentuan</span> dan <span className="text-gray-700 font-bold hover:text-orange-600 cursor-pointer transition-colors">Kebijakan Privasi</span> kami.
        </p>
      </div>
    </div>
  );
}