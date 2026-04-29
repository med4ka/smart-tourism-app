"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { 
  ArrowLeft, Camera, Moon, Bell, User, ShieldCheck, 
  CreditCard, Languages, LogOut, ChevronRight, X, 
  Mail, Phone, KeyRound, Lock, Eye, Smartphone, Laptop, 
  MoreVertical, Plus, Wifi
} from "lucide-react";

export default function Account() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifOn, setIsNotifOn] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLogout = () => {
    toast.loading("Sedang mengeluarkan akun...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Berhasil keluar. Sampai jumpa Tulalit!");
      router.push("/");
    }, 1500);
  };

  const handleSimulateSave = (e: React.FormEvent, message: string) => {
    e.preventDefault();
    setActiveModal(null);
    toast.success(message);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
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
          
          
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm text-center relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src="/profile.jpg" className="w-full h-full rounded-full border-4 border-white shadow-xl bg-orange-50 object-cover" alt="Avatar" />
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

          <div className="lg:col-span-8 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pengaturan Akun</h3>
              <div className="grid gap-4">
                
                <button onClick={() => setActiveModal('personal')} className="w-full flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
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

                <button onClick={() => setActiveModal('security')} className="w-full flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
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

                <button onClick={() => setActiveModal('payment')} className="w-full flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-orange-200 shadow-sm group">
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

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Lainnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl hover:bg-white border border-transparent hover:border-gray-200 transition-all">
                  <Languages className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-600">Bahasa (Indonesia)</span>
                </button>
                <button onClick={handleLogout} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl hover:bg-red-50 border border-transparent hover:border-red-100 transition-all text-red-600 group">
                  <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">Keluar Akun</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {activeModal === 'personal' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Informasi Pribadi</h2>
            
            <form onSubmit={(e) => handleSimulateSave(e, "Informasi Pribadi berhasil diperbarui!")} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-600" />
                  <input type="text" defaultValue="Tulalit MA" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Alamat Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-600" />
                  <input type="email" defaultValue="tulalit.ma@gmail.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nomor Telepon</label>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-4 bg-gray-50 rounded-2xl"><span className="text-sm font-bold text-gray-800">+62</span></div>
                  <div className="relative flex-1 group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-600" />
                    <input type="tel" defaultValue="81234567890" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                  </div>
                </div>
              </div>
              
              <button type="submit" className="w-full py-4 bg-orange-700 text-white text-sm font-bold rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-800 active:scale-95 transition-all mt-4">
                Simpan Perubahan
              </button>
            </form>

            <div className="mt-8 p-6 border-2 border-dashed border-red-100 rounded-[2rem] flex items-center justify-between">
              <div><h4 className="text-sm font-bold text-gray-800">Hapus Akun</h4><p className="text-[10px] text-gray-400">Tindakan tidak bisa dibatalkan.</p></div>
              <button className="px-6 py-2.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all">Hapus</button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'security' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><KeyRound className="w-5 h-5" /></div>
              <h2 className="text-xl font-bold text-gray-900">Ganti Password</h2>
            </div>
            
            <form onSubmit={(e) => handleSimulateSave(e, "Password berhasil diubah!")} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password Saat Ini</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-blue-600" />
                  <input required type="password" placeholder="••••••••" className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-blue-600"><Eye className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password Baru</label>
                <div className="relative group">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-blue-600" />
                  <input required type="password" placeholder="Minimal 8 karakter" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-800 outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all">
                Update Password
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Perangkat Aktif</h4>
              <div className="bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden">
                <div className="p-4 flex items-center justify-between border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center"><Laptop className="w-4 h-4" /></div>
                    <div><p className="text-sm font-bold text-gray-800">MacBook Pro — Jakarta</p><p className="text-[10px] text-blue-600 font-bold">Sedang Aktif</p></div>
                  </div>
                  <MoreVertical className="w-4 h-4 text-gray-300" />
                </div>
                <div className="p-4 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center"><Smartphone className="w-4 h-4" /></div>
                    <div><p className="text-sm font-bold text-gray-800">iPhone 13 — Bandung</p><p className="text-[10px] text-gray-400 font-medium">Terakhir aktif 2 jam lalu</p></div>
                  </div>
                  <button className="text-[10px] font-bold text-red-500 hover:underline">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'payment' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
            
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Rekening Terhubung</h2>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all"><Plus className="w-5 h-5" /></button>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Kartu Kredit/Debit</h3>
              <div className="bg-gradient-to-br from-orange-500 to-indigo-600 p-8 rounded-[2.5rem] shadow-xl shadow-indigo-200 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Main Card</p>
                    <h4 className="text-lg font-bold">Bank Mandiri</h4>
                  </div>
                  <Wifi className="w-6 h-6 opacity-80 rotate-90" />
                </div>
                <div className="space-y-6 relative z-10">
                  <p className="text-xl md:text-2xl font-bold tracking-[0.2em]">**** **** **** 4242</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] font-bold opacity-60 uppercase mb-1">Card Holder</p>
                      <p className="text-sm font-bold uppercase tracking-wider">Tulalit MA</p>
                    </div>
                    
                    <span className="text-lg font-black italic tracking-widest">VISA</span> 
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Dompet Digital</h3>
              <div className="grid gap-3">
                <div className="p-5 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-between shadow-sm hover:border-indigo-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center p-2 font-black text-blue-500 text-xs text-center">GPay</div>
                    <div><p className="text-sm font-bold text-gray-800">GoPay</p><p className="text-[10px] text-gray-400 font-medium">Terhubung: 0812 **** 7890</p></div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 px-4 py-2 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">Rp 450.000</span>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-between shadow-sm hover:border-indigo-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center p-2 font-black text-purple-600 text-sm">OVO</div>
                    <div><p className="text-sm font-bold text-gray-800">OVO</p><p className="text-[10px] text-gray-400 font-medium">Belum Terhubung</p></div>
                  </div>
                  <button className="text-[10px] font-bold text-indigo-600 hover:underline">Hubungkan</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}