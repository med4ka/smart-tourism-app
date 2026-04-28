"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Truck, Hotel, Ticket, Plane, Train, BusFront, Ship, 
  Palmtree, Building, Home, Star, Calendar, Users, CheckCircle
} from "lucide-react";
import CheckoutModal from "../components/CheckoutModal"; 

export default function Transaction() {
  const [activeTab, setActiveTab] = useState("new-booking");
  const [selectedService, setSelectedService] = useState("transport");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openCheckout = () => {
    setSelectedProduct({
      name: "Tiket Pesawat (x2) & Pajak",
      store: "Garuda Indonesia",
      price: "Rp 1.950.000",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200"
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800">Booking & Transaction</h1>
          <div className="w-10"></div> 
        </div>
        
        <div className="max-w-6xl mx-auto flex justify-around px-2 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
          <button onClick={() => setActiveTab('new-booking')} className={`py-4 px-2 transition-all ${activeTab === 'new-booking' ? 'text-orange-700 border-b-2 border-orange-700' : ''}`}>New Booking</button>
          <button onClick={() => setActiveTab('history')} className={`py-4 px-2 transition-all ${activeTab === 'history' ? 'text-orange-700 border-b-2 border-orange-700' : ''}`}>History</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10">
        {activeTab === 'new-booking' && (
          <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-8">
                
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  <button onClick={() => setSelectedService('transport')} className={`shrink-0 flex flex-col items-center gap-3 p-6 rounded-[2rem] min-w-[120px] transition-all ${selectedService === 'transport' ? 'bg-orange-700 text-white shadow-xl' : 'bg-white border border-gray-100 text-gray-400 hover:border-orange-200'}`}>
                    <Truck className="w-6 h-6" />
                    <span className="text-xs font-bold">Transport</span>
                  </button>
                  <button onClick={() => setSelectedService('stay')} className={`shrink-0 flex flex-col items-center gap-3 p-6 rounded-[2rem] min-w-[120px] transition-all ${selectedService === 'stay' ? 'bg-orange-700 text-white shadow-xl' : 'bg-white border border-gray-100 text-gray-400 hover:border-orange-200'}`}>
                    <Hotel className="w-6 h-6" />
                    <span className="text-xs font-bold">Stay</span>
                  </button>
                  <button onClick={() => setSelectedService('tickets')} className={`shrink-0 flex flex-col items-center gap-3 p-6 rounded-[2rem] min-w-[120px] transition-all ${selectedService === 'tickets' ? 'bg-orange-700 text-white shadow-xl' : 'bg-white border border-gray-100 text-gray-400 hover:border-orange-200'}`}>
                    <Ticket className="w-6 h-6" />
                    <span className="text-xs font-bold">Tickets</span>
                  </button>
                </div>

                {selectedService === 'transport' && (
                  <div className="animate-in fade-in duration-300 space-y-4">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Pilih Moda Transportasi</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button className="flex items-center gap-3 p-4 bg-white border-2 border-orange-700 rounded-2xl group">
                        <div className="w-8 h-8 bg-orange-50 text-orange-700 rounded-lg flex items-center justify-center"><Plane className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-orange-700">Pesawat</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Train className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Kereta Api</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><BusFront className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Bus</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Ship className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Kapal Laut</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedService === 'stay' && (
                  <div className="animate-in fade-in duration-300 space-y-4">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Pilih Tipe Penginapan</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Hotel className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Hotel</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Palmtree className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Villa</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Building className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Apartemen</span>
                      </button>
                      <button className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-orange-200">
                        <div className="w-8 h-8 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center group-hover:text-orange-700"><Home className="w-4 h-4" /></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-orange-700">Homestay</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedService === 'tickets' && (
                  <div className="animate-in fade-in duration-300 space-y-4">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Pilih Tiket Wisata</label>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-orange-200">
                        <div className="flex items-center gap-4"><Ticket className="text-orange-700" /><span className="text-xs font-bold">Tiket Terusan Candi Borobudur</span></div>
                        <span className="text-xs font-bold text-orange-700">Rp 50.000</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-10 space-y-4">
                  <div className="flex justify-between items-end px-2">
                    <h4 className="text-sm font-bold text-gray-800">Populer di Sekitar Borobudur</h4>
                    <span className="text-[10px] font-bold text-orange-700 cursor-pointer">Lihat Semua</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-[10px] font-bold text-gray-400">4.9 (230 Reviews)</span>
                        </div>
                        <h5 className="text-sm font-bold text-gray-800">Plataran Borobudur</h5>
                        <p className="text-[10px] text-gray-400 mt-1">Rp 3.200.000 / Malam</p>
                        <span className="mt-2 w-fit px-2 py-0.5 bg-orange-50 text-orange-700 text-[8px] font-bold rounded-full uppercase">Luxury Stay</span>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-[10px] font-bold text-gray-400">4.7 (120 Reviews)</span>
                        </div>
                        <h5 className="text-sm font-bold text-gray-800">Saraswati Hotel</h5>
                        <p className="text-[10px] text-gray-400 mt-1">Rp 850.000 / Malam</p>
                        <span className="mt-2 w-fit px-2 py-0.5 bg-blue-50 text-blue-700 text-[8px] font-bold rounded-full uppercase">Authentic Java</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pilih Tanggal</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-600" />
                        <input type="date" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-orange-500/20 outline-none" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jumlah Orang</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-600" />
                        <input type="number" defaultValue={1} min={1} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold outline-none" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tipe Tiket / Kelas</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <button className="p-4 border-2 border-orange-700 bg-orange-50 rounded-2xl text-xs font-bold text-orange-700">Ekonomi</button>
                      <button className="p-4 border-2 border-gray-50 bg-gray-50 rounded-2xl text-xs font-bold text-gray-400 hover:border-orange-200">Bisnis</button>
                      <button className="p-4 border-2 border-gray-50 bg-gray-50 rounded-2xl text-xs font-bold text-gray-400 hover:border-orange-200">First Class</button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-2xl sticky top-28">
                  <h4 className="text-xs font-bold opacity-40 uppercase tracking-widest mb-6">Price Summary</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-60">Tiket Pesawat (x2)</span>
                      <span className="font-bold">Rp 1.800.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="opacity-60">Pajak & Biaya</span>
                      <span className="font-bold">Rp 150.000</span>
                    </div>
                    <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-end">
                      <span className="text-xs opacity-60">Total Bayar</span>
                      <span className="text-2xl font-bold text-orange-500">Rp 1.950.000</span>
                    </div>
                  </div>
                  <button 
                    onClick={openCheckout}
                    className="w-full mt-8 py-4 bg-orange-700 text-white font-bold rounded-2xl shadow-xl shadow-orange-700/20 hover:scale-[1.02] transition-transform"
                  >
                    Bayar Sekarang
                  </button>
                  <p className="text-[9px] text-center opacity-30 mt-4 font-medium italic">
                    *E-Tiket akan otomatis masuk ke menu History & Itinerary.
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}

        {activeTab === 'history' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center justify-between group">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                            <CheckCircle />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Garuda Indonesia</h4>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">20 Apr 2026 • Lunas</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        )}
      </main>

      <CheckoutModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </div>
  );
}