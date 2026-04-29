"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, MapPin, Heart, Star, X } from "lucide-react";
import CheckoutModal from "../components/CheckoutModal";

const MOCK_DESTINATIONS = [
  {
    id: 1,
    name: "Candi Borobudur",
    category: "Sejarah",
    price: "Rp 350.000",
    store: "Magelang, Indonesia",
    rating: 4.9,
    image: "/borobur.png",
    description: "Candi Buddha terbesar di dunia peninggalan Wangsa Syailendra. Nikmati pemandangan matahari terbit yang memukau dari puncak candi, dikelilingi stupa-stupa megah dan relief sejarah yang sangat kaya akan nilai budaya Nusantara."
  },
  {
    id: 2,
    name: "Uluwatu Temple & Kecak",
    category: "Budaya",
    price: "Rp 150.000",
    store: "Badung, Bali",
    rating: 4.8,
    image: "/uluwatu-temple.png",
    description: "Pura suci yang berdiri kokoh di atas tebing karang terjal dengan pemandangan langsung ke Samudra Hindia. Saksikan pertunjukan magis Tari Kecak saat matahari terbenam yang menciptakan siluet mempesona tak terlupakan."
  },
  {
    id: 3,
    name: "Snorkeling Raja Ampat",
    category: "Bahari",
    price: "Rp 1.200.000",
    store: "Papua Barat Daya",
    rating: 5.0,
    image: "/snorkeling_raja.png",
    description: "Surga bawah laut di ujung timur Indonesia. Jelajahi keanekaragaman hayati laut terkaya di dunia, berenang bersama pari manta yang anggun, dan nikmati gugusan pulau karang eksotis yang tiada duanya."
  },
  {
    id: 4,
    name: "Jeep Tour Bromo Tengger",
    category: "Alam",
    price: "Rp 600.000",
    store: "Jawa Timur",
    rating: 4.7,
    image: "/sewa_jeep.png",
    description: "Petualangan memacu adrenalin melintasi lautan pasir berbisik dengan Jeep 4x4. Saksikan keindahan pemandangan sunrise dari titik Penanjakan dan lihat langsung kawah aktif Gunung Bromo yang sangat menakjubkan."
  }
];

export default function TrendingPage() { 
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [detailProduct, setDetailProduct] = useState<any>(null);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" /> Trending Now
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10">
        <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="px-4 py-1.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4 inline-block">Viral & Paling Dicari</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Destinasi Sensasional</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {MOCK_DESTINATIONS.map((place) => (
            <div 
              key={place.id} 
              className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div 
                className="h-52 rounded-[2rem] overflow-hidden relative mb-4 cursor-pointer"
                onClick={() => setDetailProduct(place)}
              >
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-red-500 shadow-sm">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold rounded-full shadow-lg">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <div className="px-3 flex-1 flex flex-col">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{place.category}</span>
                <h4 
                  className="font-bold text-base text-gray-800 mt-1 mb-2 line-clamp-2 cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => setDetailProduct(place)}
                >
                  {place.name}
                </h4>
                <div className="flex items-center gap-1 text-gray-400 mb-4">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-medium">{place.store}</span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Harga</p>
                    <p className="text-sm font-bold text-gray-900">{place.price}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-bold text-yellow-700">{place.rating}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProduct(place)}
                  className="w-full mt-4 py-3 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-md"
                >
                  Pesan Tiket
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* POP UP DETAIL WISATA */}
      {detailProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailProduct(null)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="relative h-64 w-full">
              <img src={detailProduct.image} alt={detailProduct.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              
              <button 
                onClick={() => setDetailProduct(null)} 
                className="absolute top-4 right-4 p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1.5 bg-orange-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-3 inline-block shadow-lg shadow-orange-900/50">
                  {detailProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">{detailProduct.name}</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-bold">{detailProduct.store}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-800">{detailProduct.rating}</span>
                </div>
              </div>

              <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 mb-6">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Flame className="w-3 h-3 text-orange-600" /> Info Wisata
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {detailProduct.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Harga Tiket</p>
                  <p className="text-xl font-black text-gray-900">{detailProduct.price}</p>
                </div>
                <button 
                  onClick={() => {
                    setDetailProduct(null); 
                    setTimeout(() => setSelectedProduct(detailProduct), 100); 
                  }}
                  className="px-6 py-4 bg-gray-900 text-white text-sm font-bold rounded-2xl hover:bg-orange-700 transition-colors shadow-xl shadow-gray-900/20 active:scale-95 whitespace-nowrap"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CheckoutModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </div>
  );
}