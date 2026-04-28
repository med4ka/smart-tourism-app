"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { 
  ArrowLeft, Camera, Moon, Bell, User, ShieldCheck, 
  CreditCard, Languages, LogOut, ChevronRight 
} from "lucide-react";

export default function Account() {
  const router = useRouter();
  
  // State biar Toggle Button-nya interaktif bisa dipencet
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifOn, setIsNotifOn] = useState(true);

  const handleLogout = () => {
    toast.loading("Sedang mengeluarkan akun...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Berhasil keluar. Sampai jumpa Tulalit!");
      router.push("/");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      {/* HEADER ATAS */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800">My Account</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* =========================================
              KOLOM KIRI (PROFILE & APP SETTINGS)
          ========================================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Profile Card Identik dengan account.html */}
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm text-center relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gipari" className="w-full h-full rounded-full border-4 border-white shadow-xl bg-orange-50" alt="Avatar" />
                  <button className="absolute bottom-1 right-1 w-10 h-10 bg-orange-700 text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg hover:scale-105 active:scale-95 transition-all">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tulalit</h2>
                <p className="text-sm text-gray-400 font-medium mt-1">tulalit.pa@email.com</p>
                
                <div className="mt-8 flex justify-center gap-4">
                  <div className="px-4 py-2 bg-orange-50 rounded-2xl">
                    <p className="text-[10px] font-bold text-orange-700 uppercase tracking-wider">Trips</p>
                    <p className="text-lg font-bold text-orange-950">12</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-50 rounded-2xl">
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Points</p>
                    <p className="text-lg font-bold text-blue-950">2.4k</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Settings Identik dengan account.html */}
            <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-xl">
              <h4 className="text-xs font-bold opacity-50 uppercase tracking-widest mb-6">App Settings</h4>
              <div className="space-y-5">
                
                <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsDarkMode(!isDarkMode)}>
                  <div className="flex items-center gap-3">
                    <Moon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${isDarkMode ? 'bg-orange-600' : 'bg-gray-700'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${isDarkMode ? 'right-1 bg-white' : 'left-1 bg-white/20'}`}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsNotifOn(!isNotifOn)}>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium">Notifications</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${isNotifOn ? 'bg-orange-600' : 'bg-gray-700'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${isNotifOn ? 'right-1 bg-white' : 'left-1 bg-white/20'}`}></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =========================================
              KOLOM KANAN (ACCOUNT SETTINGS & LAINNYA)
          ========================================= */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Pengaturan Akun */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pengaturan Akun</h3>
              <div className="grid gap-4">
                <button className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-700 rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Informasi Pribadi</p>
                      <p className="text-xs text-gray-400">Nama, Email, dan Nomor Telepon</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange-700 transition-colors" />
                </button>

                <button className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Keamanan & Password</p>
                      <p className="text-xs text-gray-400">Ganti password dan Autentikasi 2FA</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange-700 transition-colors" />
                </button>

                <button className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Metode Pembayaran</p>
                      <p className="text-xs text-gray-400">Kartu Kredit, E-Wallet, dan Riwayat</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange-700 transition-colors" />
                </button>
              </div>
            </div>

            {/* Lainnya */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Lainnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl hover:bg-white border border-transparent hover:border-gray-200 transition-all">
                  <Languages className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-600">Bahasa (Indonesia)</span>
                </button>
                
                {/* Tombol Logout beneran jalan! */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl hover:bg-red-50 border border-transparent hover:border-red-100 transition-all text-red-600 group"
                >
                  <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">Keluar Akun</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}