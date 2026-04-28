"use client";

import Link from "next/link";
import { 
  ArrowLeft, ShieldAlert, CloudRain, Users, AlertTriangle, 
  PhoneCall, BellRing, MapPin, Navigation
} from "lucide-react";
import { toast } from "sonner";

export default function TripAssist() {
  const handleSOS = () => {
    toast.error("MENGIRIM SINYAL DARURAT!", {
      description: "Lokasi Anda telah dikirim ke pihak berwajib & kontak darurat.",
      duration: 4000,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" /> Trip Assist
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Kolom Kiri: SOS & Info Utama */}
          <div className="w-full md:w-1/3 space-y-6">
            
            {/* Tombol SOS */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-red-100 shadow-xl shadow-red-100/50 text-center animate-in zoom-in duration-500">
              <h2 className="text-sm font-bold text-gray-800 mb-2">Emergency Hub</h2>
              <p className="text-[10px] text-gray-400 mb-6">Tekan & tahan untuk bantuan darurat</p>
              
              <button 
                onClick={handleSOS}
                className="w-32 h-32 mx-auto bg-gradient-to-b from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-red-500/40 border-4 border-red-100 hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 animate-ping rounded-full opacity-0 group-hover:opacity-100"></div>
                <BellRing className="w-10 h-10 mb-1 z-10" />
                <span className="font-extrabold tracking-widest z-10">S O S</span>
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-red-600 bg-red-50 py-2 px-4 rounded-xl">
                <MapPin className="w-3 h-3" /> 
                Lokasi Aktif (Akurasi 5m)
              </div>
            </div>

            {/* Kontak Darurat Lokal */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4 animate-in slide-in-from-left-4 duration-500 delay-150">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Kontak Darurat (Magelang)</h3>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-gray-600 group-hover:text-red-600">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 group-hover:text-red-600">Polisi Pariwisata</span>
                </div>
                <span className="text-[10px] font-bold opacity-50">110</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-gray-600 group-hover:text-red-600">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 group-hover:text-red-600">Ambulans / RSUD</span>
                </div>
                <span className="text-[10px] font-bold opacity-50">118</span>
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Real-time Monitoring */}
          <div className="w-full md:w-2/3 space-y-6 animate-in slide-in-from-bottom-8 duration-700">
            
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <Navigation className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold tracking-tight">Real-Time Monitor</h2>
                <p className="text-xs text-gray-400 mt-1">Candi Borobudur & Sekitarnya</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cuaca */}
              <div className="bg-white p-6 rounded-[2rem] border border-blue-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <CloudRain className="w-4 h-4 text-blue-500" /> Cuaca Lokal
                  </h3>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="flex items-end gap-4 mb-4">
                  <div className="text-4xl font-black text-gray-900">28°<span className="text-xl text-gray-400 font-medium">C</span></div>
                  <div className="pb-1">
                    <p className="text-sm font-bold text-gray-700">Hujan Ringan</p>
                    <p className="text-[10px] text-gray-400">Peluang hujan 65%</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[10px] text-blue-800 font-medium">
                    💡 <b>Saran Gari:</b> Bawa payung atau jas hujan jika ingin mengeksplorasi zona luar candi.
                  </p>
                </div>
              </div>

              {/* Kepadatan */}
              <div className="bg-white p-6 rounded-[2rem] border border-orange-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-600" /> Kepadatan Lokasi
                  </h3>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Tinggi</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-2 uppercase">
                    <span>Zona 1 (Puncak)</span>
                    <span className="text-red-600">85% Penuh</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[85%] rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-[10px] text-orange-800 font-medium">
                    💡 <b>Saran Gari:</b> Lokasi sangat ramai. Disarankan berkunjung ke museum sekitar dulu untuk menghindari kerumunan.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}