"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Star, 
  Store, 
  Heart, 
  Filter,
  Sparkles,
  ShoppingBasket
} from "lucide-react";
import CheckoutModal from "../components/CheckoutModal";

const PRODUCTS = [
  {
    id: 1,
    name: "Patung Borobudur Mini",
    category: "Souvenirs",
    price: "Rp 125.000",
    rating: 4.8,
    store: "Mekar Jaya",
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/98/MTA-103743295/no-brand_souvenir-stupa-patung-budha-kuningan-brass-antik-candi-borobudur-jogja_full01.jpg"
  },
  {
    id: 2,
    name: "Batik Tulis Indigo",
    category: "Fashion",
    price: "Rp 350.000",
    rating: 4.9,
    store: "Batik Solo Center",
    image: "https://thebatik.co.id/wp-content/uploads/2016/11/thebatikcoid-warna-alam-sido-asih-ii-349x465.jpg"
  },
  {
    id: 3,
    name: "Kopi Luwak Asli",
    category: "Food",
    price: "Rp 150.000",
    rating: 4.7,
    store: "Java Coffee",
    image: "https://images.squarespace-cdn.com/content/v1/588551611b631b4396755e60/1547912018568-NL5A27IGMJGF4OHZJFRZ/Kaya+Kopi+w+certificates-min.jpg?format=1000w"
  }
];

export default function Merchandise() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="font-bold text-lg text-gray-800">Local Merchandise</h1>
          <div className="w-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {["All", "Souvenirs", "Food", "Fashion"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200" 
                  : "bg-white text-gray-400 border border-gray-100 hover:border-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 rounded-[2.5rem] text-white mb-10 relative overflow-hidden shadow-xl shadow-purple-100">
          <div className="relative z-10 max-w-sm">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">UMKM Support</span>
            <h2 className="text-2xl font-bold mt-4">Bawa Pulang Kenangan Lokal</h2>
            <p className="text-xs opacity-70 mt-2 leading-relaxed">Dukunganmu sangat berarti bagi para pengrajin dan komunitas lokal.</p>
          </div>
          <ShoppingBag className="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 -rotate-12" />
        </div>

        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" /> Produk Pilihan
          </h3>
          <button className="p-2 bg-white border border-gray-100 rounded-xl">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden relative mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors z-10">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="px-2 flex-1 flex flex-col">
                <h4 className="font-bold text-sm text-gray-800 line-clamp-1 mb-1">{product.name}</h4>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <p className="text-xs font-bold text-purple-600">{product.price}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-[10px] font-bold text-gray-800">{product.rating}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full mt-4 py-2.5 bg-gray-50 hover:bg-purple-600 hover:text-white text-gray-900 text-[10px] font-bold rounded-xl transition-colors"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner">
              <ShoppingBasket className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Toko Saya</h3>
              <p className="text-xs text-gray-400 mt-1">Daftarkan produk UMKM kamu di sini</p>
            </div>
          </div>
          <button className="w-full md:w-fit px-8 py-4 bg-gray-900 text-white text-xs font-bold rounded-2xl hover:bg-black transition-colors">
            Mulai Berjualan
          </button>
        </div>
      </main>

      <CheckoutModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </div>
  );
}