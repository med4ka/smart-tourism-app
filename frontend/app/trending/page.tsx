"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, MapPin, Heart, Star, Loader2 } from "lucide-react";
import CheckoutModal from "../components/CheckoutModal";
import { toast } from "sonner";

export default function TrendingPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [places, setPlaces] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("https://aspirate-shine-chihuahua.ngrok-free.dev/api/destinations", { cache: "no-store" });
        if (!res.ok) throw new Error("Gagal terhubung ke Markas Golang");
        
        const data = await res.json();
        const formattedData = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: `Rp ${item.price.toLocaleString('id-ID')}`,
          store: "Nusantara, Indonesia",
          rating: item.rating,
          image: item.image_url 
        }));

        setPlaces(formattedData);
      } catch (error) {
        console.error(error);
        toast.error("Gagal menarik data destinasi dari database!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

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

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-orange-500">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="text-sm font-bold text-gray-500 animate-pulse">Menarik data dari Supabase...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {places.map((place) => (
              <div 
                key={place.id} 
                className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
              >
                <div className="h-52 rounded-[2rem] overflow-hidden relative mb-4">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-red-500 shadow-sm">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <div className="px-3 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{place.category}</span>
                  <h4 className="font-bold text-base text-gray-800 mt-1 mb-2 line-clamp-2">{place.name}</h4>
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
                    Pesan Tiket Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
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