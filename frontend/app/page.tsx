"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Navigation,
  ChevronDown,
  Search,
  ArrowRight,
  Heart,
  MapPin,
  Zap,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Store,
  Receipt,
  Plane
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [greeting, setGreeting] = useState("Halo");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Selamat Pagi");
    else if (hour >= 12 && hour < 15) setGreeting("Selamat Siang");
    else if (hour >= 15 && hour < 18) setGreeting("Selamat Sore");
    else setGreeting("Selamat Malam");
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      toast.loading(`Gari sedang menyusun rute untuk "${searchQuery}"...`);
      setTimeout(() => {
        toast.dismiss();
        toast.success(`Itinerary cerdas untuk ${searchQuery} siap!`);
        router.push("/smartrip");
      }, 2500);
    }
  };

  return (
    <main className="max-w-7xl mx-auto w-full pt-8 pb-24 md:pb-12 px-4 md:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex items-center gap-6">
            
          <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center p-2 shadow-inner shrink-0">
             <div className="w-12 h-12 bg-orange-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                <Plane className="w-6 h-6" />
             </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              {greeting}, Tulalit! 🦅
            </h2>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-orange-600">
                <Navigation className="w-3 h-3 fill-orange-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Lokasi Saat Ini</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group w-fit">
                <h3 className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Ciputat, Tangerang Selatan</h3>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-md relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Ketik destinasi & tekan Enter..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-orange-100 rounded-2xl text-sm shadow-sm focus:ring-4 focus:ring-orange-700/5 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-10">
          
          <section className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-orange-100/50 group cursor-pointer" onClick={() => router.push('/smartrip')}>
            <div className="relative w-full min-h-[400px] md:aspect-[21/8] md:min-h-0 bg-orange-800 flex flex-col overflow-hidden">
              <img 
                src="/wisata-indah.png" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-900/40 to-transparent flex flex-col justify-end p-7 md:p-12 pb-10 md:pb-12">
                <span className="w-fit bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">
                  Smart AI Feature
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-[1.1] mb-3">
                  Tanpa Pusing<br />Itinerary
                </h3>
                <p className="text-xs md:text-sm text-orange-100 opacity-90 max-w-[240px] md:max-w-md leading-relaxed mb-6">
                  Biar Gari yang atur, kamu tinggal bawa koper dan nikmati perjalanannya.
                </p>
                <button className="w-fit px-7 py-3.5 bg-white text-orange-700 text-xs font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
                  Mulai Sekarang
                </button>
              </div>
            </div>
          </section>

          <section className="mt-12 px-6 md:px-10">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Trending Banget</h3>
                <p className="text-xs text-gray-400 mt-1">Destinasi yang paling banyak dicari minggu ini</p>
              </div>
              <Link href="/trending" className="text-xs font-bold text-orange-700 flex items-center gap-1 hover:underline">
                Lihat Semua <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 cursor-pointer" onClick={() => router.push('/trending')}>
                <div className="h-52 rounded-[2rem] overflow-hidden relative">
                  <img src="/borobur.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Candi" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Sejarah</span>
                  <h4 className="font-bold text-lg text-gray-800 mt-1 group-hover:text-orange-700 transition-colors">Candi Borobudur</h4>
                  <div className="flex items-center gap-1 text-gray-400 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-medium">Magelang, Indonesia</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 cursor-pointer" onClick={() => router.push('/trending')}>
                <div className="h-52 rounded-[2rem] overflow-hidden relative">
                  <img src="/uluwatu-temple.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Uluwatu" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Budaya</span>
                  <h4 className="font-bold text-lg text-gray-800 mt-1 group-hover:text-orange-700 transition-colors">Uluwatu Temple</h4>
                  <div className="flex items-center gap-1 text-gray-400 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-medium">Badung, Bali</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="font-bold text-sm text-gray-800 mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" /> QUICK MENU
            </h3>
            <div className="space-y-4">
              <Link href="/smartrip" className="w-full flex items-center justify-between p-4 bg-orange-50/50 hover:bg-orange-100 transition-colors rounded-2xl group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-700 shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-gray-700">NusaPath</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/tripassist" className="w-full flex items-center justify-between p-4 bg-red-50/50 hover:bg-red-100 transition-colors rounded-2xl group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-gray-700">Trip Assist</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/transaction" className="w-full flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100 transition-colors rounded-2xl group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-700 shadow-sm">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-gray-700">Transaction</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/merchandise" className="w-full flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-100 transition-colors rounded-2xl group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-purple-700 shadow-sm">
                    <Store className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-gray-700">Merchandise</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <h3 className="font-bold text-sm mb-6 opacity-60 tracking-widest uppercase">My Next Trip</h3>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-orange-500">28<span className="text-xs block text-white opacity-50 uppercase font-medium">Apr</span></div>
              <div>
                <p className="font-bold">Bali Culture Week</p>
                <p className="text-[10px] opacity-60 mt-1">Uluwatu, Bali • 3 Days</p>
              </div>
            </div>
            <Link href="/booking" className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-xs font-bold flex items-center justify-center">Buka Itinerary</Link>
          </div>
        </div>
      </div>
    </main>
  );
}