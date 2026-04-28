"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Plane, Train, Hotel, RefreshCw, HelpCircle, 
  MessageCircle, ChevronRight, X, QrCode, Download, Share2, Box
} from "lucide-react";
import { toast } from "sonner";

const ACTIVE_TICKETS = [
  {
    id: "#BK-99201",
    type: "flight",
    provider: "Garuda Indonesia",
    code: "GA-402",
    route: "Jakarta (CGK) → Yogyakarta (YIA)",
    date: "28 Apr 2026",
    time: "08:30 WIB",
    passenger: "Tulalit Jendral",
    seat: "12A",
    gate: "Gate 5 (T3)",
    status: "Paid",
    hash: "QmVDYqz1MKwChd6YywCy5ubxQ8BBK4Q1WMdw3dHCXduP8g"
  },
  {
    id: "#TR-44211",
    type: "train",
    provider: "Kereta Api Argo Lawu",
    code: "Eksekutif",
    route: "Gambir (GMR) → Solo Balapan (SLO)",
    date: "30 Apr 2026",
    time: "10:15 WIB",
    passenger: "Tulalit Jendral",
    seat: "Eko-1 / 14C",
    gate: "Peron 3",
    status: "Paid",
    hash: "QmX8zP9kL2mN5bV7cR4eT1yU6iO3pA0sD9fG5hJ2kL4mN6"
  }
];

export default function Booking() {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const handleDownload = () => {
    toast.success("E-Ticket sedang diunduh ke perangkatmu!");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800">Booking & Tiket</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Booking & Tiket</h2>
            <p className="text-sm text-gray-400 mt-1 font-medium">Kelola semua transaksi dan tiket perjalananmu di sini.</p>
          </div>
          
          <div className="flex gap-2 bg-white p-1 rounded-2xl border border-gray-100 shadow-sm w-fit">
            <button 
              onClick={() => setActiveTab('active')} 
              className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${activeTab === 'active' ? 'bg-orange-700 text-white shadow-lg shadow-orange-100' : 'text-gray-400 hover:text-orange-700'}`}
            >
              Aktif
            </button>
            <button 
              onClick={() => setActiveTab('history')} 
              className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${activeTab === 'history' ? 'bg-orange-700 text-white shadow-lg shadow-orange-100' : 'text-gray-400 hover:text-orange-700'}`}
            >
              Riwayat
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            
            {activeTab === 'active' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {ACTIVE_TICKETS.map((ticket, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-orange-200 transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex gap-6">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shadow-inner shrink-0">
                          {ticket.type === "flight" ? <Plane className="w-8 h-8" /> : <Train className="w-8 h-8" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full uppercase tracking-widest">{ticket.status}</span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ID {ticket.id}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">{ticket.provider} ({ticket.code})</h3>
                          <p className="text-xs text-gray-400 mt-1">{ticket.route}</p>
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-between md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Berangkat</p>
                          <p className="text-sm font-bold text-gray-800">{ticket.date.split(' ')[0]} {ticket.date.split(' ')[1]}, {ticket.time.split(' ')[0]}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedTicket(ticket)}
                          className="text-xs font-bold text-orange-700 flex items-center gap-1 hover:underline"
                        >
                          Lihat Rincian <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-gray-100/50 p-6 rounded-3xl border border-dashed border-gray-200 flex justify-between items-center opacity-70">
                  <div className="flex items-center gap-4">
                    <Hotel className="text-gray-400 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-500 line-through">Potato Head Village - Bali</h4>
                      <p className="text-[10px] text-gray-400 font-medium tracking-wide">COMPLETED ON 12 MAR 2026</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">Rp 2.100.000</span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-orange-700 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg leading-tight">Sinkronkan ke Smart Trip?</h3>
                <p className="text-xs text-orange-100 mt-2 opacity-80 leading-relaxed">
                  Secara otomatis tambahkan jadwal tiket pesawat & kereta ke dalam Itinerary Planning kamu.
                </p>
                <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toast("Sinkronisasi otomatis diaktifkan!")}
                  >
                    <span className="text-[10px] font-bold">Auto-Sync Itinerary</span>
                    <div className="w-8 h-4 bg-orange-400 rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <RefreshCw className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 rotate-12" />
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Butuh Bantuan?</h4>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-700 shadow-sm group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Pusat Bantuan</span>
                </button>
                <button className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-700 shadow-sm group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Chat CS (Live)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {selectedTicket && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedTicket(null)}></div>
          
          <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300 overflow-hidden">
            <div className="bg-orange-700 p-6 text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">E-Ticket</span>
                <h3 className="font-bold text-lg leading-none mt-1">{selectedTicket.provider}</h3>
              </div>
              <button onClick={() => setSelectedTicket(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-xl font-black text-gray-900 tracking-tight">{selectedTicket.route.split('→')[0].trim()}</p>
                <Plane className="w-5 h-5 text-orange-500 mx-auto my-2 rotate-90" />
                <p className="text-xl font-black text-gray-900 tracking-tight">{selectedTicket.route.split('→')[1].trim()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</p>
                  <p className="text-sm font-bold text-gray-800">{selectedTicket.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Time</p>
                  <p className="text-sm font-bold text-gray-800">{selectedTicket.time}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gate</p>
                  <p className="text-sm font-bold text-gray-800">{selectedTicket.gate}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Seat</p>
                  <p className="text-sm font-bold text-orange-600">{selectedTicket.seat}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Box className="w-3 h-3" /> Web3 Hash (IPFS)
                </p>
                <code className="block w-full bg-gray-100 text-gray-500 text-[10px] px-3 py-2 rounded-xl truncate font-mono">
                  {selectedTicket.hash}
                </code>
              </div>

              <div className="flex flex-col items-center justify-center pt-4 border-t border-dashed border-gray-200">
                <QrCode className="w-24 h-24 text-gray-900" />
                <p className="text-[10px] font-bold text-gray-400 tracking-widest mt-2">{selectedTicket.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-gray-100">
              <button onClick={handleDownload} className="p-4 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors border-r border-gray-100">
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button onClick={() => toast("Link tiket disalin!")} className="p-4 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" /> Share Ticket
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}