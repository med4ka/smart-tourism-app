"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Map, Calendar, Wallet, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function SmartTrip() {
  const [budget, setBudget] = useState("Menengah");
  const [style, setStyle] = useState("Budaya & Alam");
  const [days, setDays] = useState(3);
  
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<any[] | null>(null);

  const generateTrip = async () => {
    setIsLoading(true);
    toast.loading("Gari (Garuda AI) sedang meracik rute rahasia untukmu...");

    try {
      const res = await fetch("http://localhost:8080/api/smart-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ budget, style, days: Number(days) }),
      });

      if (!res.ok) throw new Error("Gagal terhubung ke Markas Golang");

      const rawText = await res.text();
      
      try {
        const data = JSON.parse(rawText);
        setItinerary(data);
        toast.dismiss();
        toast.success("Itinerary cerdasmu sudah siap!");
      } catch (parseError) {
        console.error("Bukan JSON murni:", rawText);
        toast.dismiss();
        toast.error("AI memberikan format yang aneh, cek console.");
      }

    } catch (err) {
      toast.dismiss();
      toast.error("Waduh, koneksi ke Golang terputus. Pastikan backend nyala!");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" /> Smart Planner
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-10">
        
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-orange-100/50 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Atur Parameter Perjalanan</h2>
            <p className="text-sm text-gray-500 mt-2 font-medium">Beri tahu AI kami apa yang kamu inginkan, sisanya kami yang urus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Wallet className="w-3 h-3"/> Budget</label>
              <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer">
                <option value="Hemat">Hemat (Backpacker)</option>
                <option value="Menengah">Menengah (Comfort)</option>
                <option value="Mewah">Mewah (Luxury)</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Map className="w-3 h-3"/> Gaya Liburan</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer">
                <option value="Budaya & Sejarah">Budaya & Sejarah</option>
                <option value="Alam & Petualangan">Alam & Petualangan</option>
                <option value="Kuliner & Santai">Kuliner & Santai</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Calendar className="w-3 h-3"/> Durasi (Hari)</label>
              <input type="number" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-orange-500/20" />
            </div>
          </div>

          <button 
            onClick={generateTrip}
            disabled={isLoading}
            className={`w-full py-4 text-white font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 ${isLoading ? 'bg-orange-400 cursor-not-allowed animate-pulse' : 'bg-gray-900 hover:bg-orange-700 hover:scale-[1.02] active:scale-95'}`}
          >
            <Sparkles className="w-5 h-5" /> 
            {isLoading ? 'Merakit Itinerary...' : 'Generate AI Itinerary'}
          </button>
        </div>

        {itinerary && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-500" /> Hasil Racikan Gari (Garuda AI)
            </h3>
            
            {itinerary.map((dayPlan, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-[2rem] border border-orange-100 shadow-sm relative overflow-hidden group hover:border-orange-300 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Hari ke-{dayPlan.day}</h4>
                    <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mt-1">{dayPlan.theme}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {dayPlan.activities.map((act: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}