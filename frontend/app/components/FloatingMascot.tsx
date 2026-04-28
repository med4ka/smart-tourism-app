"use client";

import { useState } from "react";
import { Bird, X, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function FloatingMascot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    toast.success("Gari sedang mencari jawaban untukmu...");
    setMessage(""); 
    
    setTimeout(() => {
      toast.info("Gari: Fitur Chat AI masih dalam pengembangan untuk babak final!");
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 md:bottom-10 right-4 md:right-8 z-[90] flex flex-col items-end">
      
      {isOpen && (
        <div className="bg-white w-[280px] md:w-80 rounded-[2rem] rounded-br-none shadow-2xl border border-orange-100 mb-4 animate-in slide-in-from-bottom-4 zoom-in duration-300 overflow-hidden">
          
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <Bird className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">Gari (Garuda AI)</h4>
                <p className="text-[10px] opacity-90 flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3 text-yellow-300" /> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors active:scale-95">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4 bg-orange-50/30 h-48 overflow-y-auto no-scrollbar">
            <div className="bg-orange-100 text-orange-950 text-xs font-medium p-4 rounded-2xl rounded-tl-none inline-block max-w-[90%] shadow-sm leading-relaxed border border-orange-200/50">
              Halo Jendral! 🦅 Saya <b>Gari</b>, asisten AI perjalananmu. Mau cari destinasi budaya, alam, atau kuliner Nusantara hari ini?
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya Gari..." 
              className="flex-1 bg-gray-50 text-xs font-medium rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 transition-all border border-transparent focus:border-orange-200" 
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-700 transition-colors shadow-md active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-orange-700 to-orange-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-700/30 hover:scale-110 active:scale-95 transition-all relative border-2 border-white"
      >
        <Bird className="w-7 h-7 md:w-8 md:h-8" />
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>

    </div>
  );
}