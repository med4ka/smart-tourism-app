"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Star, 
  Heart, 
  Filter,
  Sparkles,
  ShoppingBasket,
  X,
  Store,
  MapPin,
  Tag
} from "lucide-react";
import { toast } from "sonner";
import CheckoutModal from "../components/CheckoutModal";

const PRODUCTS = [
  {
    id: 1,
    name: "Patung Borobudur Mini",
    category: "Souvenirs",
    price: "Rp 125.000",
    rating: 4.8,
    store: "Mekar Jaya",
    image: "/boro-mini.jpg",
    description: "Miniatur Candi Borobudur yang dipahat dengan detail dari batu asli lereng Gunung Merapi. Cocok sebagai pajangan elegan di ruang tamu Anda sekaligus mendukung pengrajin pahat lokal Magelang."
  },
  {
    id: 2,
    name: "Batik Tulis Indigo",
    category: "Fashion",
    price: "Rp 350.000",
    rating: 4.9,
    store: "Batik Solo Center",
    image: "/batik-indigo.jpg",
    description: "Kain batik tulis asli dengan pewarna alami indigo (nila). Memiliki motif klasik warisan budaya yang dibuat langsung oleh pengrajin lokal dengan ketelitian tinggi. Sangat nyaman dan eksklusif."
  },
  {
    id: 3,
    name: "Kopi Luwak Asli",
    category: "Food",
    price: "Rp 150.000",
    rating: 4.7,
    store: "Java Coffee",
    image: "/kopi-luwak.jpg",
    description: "Biji kopi luwak liar pilihan dari dataran tinggi Nusantara. Memiliki aroma khas dan tingkat keasaman rendah yang ramah di lambung. Dikemas eksklusif untuk menjaga kesegaran rasa premiumnya."
  }
];

export default function Merchandise() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [detailProduct, setDetailProduct] = useState<any>(null); 
  const [isAddProductOpen, setIsAddProductOpen] = useState(false); 

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddProductOpen(false);
    toast.success("Produk UMKM berhasil didaftarkan ke jaringan NusaPath!");
  };

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

      <main className="max-w-6xl mx-auto px-6 pt-8 animate-in fade-in duration-500">
        
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
          <button className="p-2 bg-white border border-gray-100 rounded-xl hover:bg-gray-100 transition-colors">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div 
                className="aspect-square rounded-[2rem] overflow-hidden relative mb-4 cursor-pointer bg-gray-100 flex items-center justify-center"
                onClick={() => setDetailProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover md:object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full text-gray-600 hover:bg-white hover:text-red-500 transition-colors z-10">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="px-2 flex-1 flex flex-col">
                <h4 
                  className="font-bold text-sm text-gray-800 line-clamp-1 mb-1 cursor-pointer hover:text-purple-600 transition-colors"
                  onClick={() => setDetailProduct(product)}
                >
                  {product.name}
                </h4>
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
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner shrink-0">
              <ShoppingBasket className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Toko Saya</h3>
              <p className="text-xs text-gray-400 mt-1">Daftarkan produk UMKM kamu ke ekosistem Web3 kami</p>
            </div>
          </div>
          <button 
            onClick={() => setIsAddProductOpen(true)}
            className="w-full md:w-fit px-8 py-4 bg-gray-900 text-white text-xs font-bold rounded-2xl hover:bg-purple-700 transition-colors active:scale-95 whitespace-nowrap"
          >
            Mulai Berjualan
          </button>
        </div>
      </main>

      {detailProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setDetailProduct(null)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="relative h-56 w-full bg-gray-50 flex items-center justify-center">
              <img src={detailProduct.image} alt={detailProduct.name} className="w-full h-full object-cover mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              
              <button 
                onClick={() => setDetailProduct(null)} 
                className="absolute top-4 right-4 p-2.5 bg-white/50 backdrop-blur-md rounded-full text-gray-800 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 -mt-8 relative z-10">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full uppercase tracking-widest mb-3 inline-block shadow-sm">
                {detailProduct.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{detailProduct.name}</h3>
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Store className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-bold">{detailProduct.store}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-800">{detailProduct.rating}</span>
                </div>
              </div>

              <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100 mb-6">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Tag className="w-3 h-3 text-purple-600" /> Deskripsi Produk
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {detailProduct.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Harga</p>
                  <p className="text-xl font-black text-gray-900">{detailProduct.price}</p>
                </div>
                <button 
                  onClick={() => {
                    setDetailProduct(null);
                    setTimeout(() => setSelectedProduct(detailProduct), 100);
                  }}
                  className="px-6 py-4 bg-purple-600 text-white text-sm font-bold rounded-2xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30 active:scale-95"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddProductOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setIsAddProductOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-300">
            <button 
              onClick={() => setIsAddProductOpen(false)} 
              className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-8 pt-2">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <Store className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900">Daftar UMKM</h2>
              <p className="text-xs text-gray-500 font-medium mt-2">Jangkau turis global dengan ekosistem NusaPath.</p>
            </div>

            <form onSubmit={handleSimulateSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">Nama Produk</label>
                <div className="relative group">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <input required type="text" placeholder="Contoh: Kain Tenun Ikat" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-medium outline-none focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-500/10 transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">Asal Daerah / Lokasi</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  <input required type="text" placeholder="Contoh: Sumba, NTT" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-medium outline-none focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-500/10 transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">Harga (Rp)</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 group-focus-within:text-purple-600 transition-colors">Rp</span>
                  <input required type="number" placeholder="150000" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-medium outline-none focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-500/10 transition-all" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-6 py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-purple-700 transition-all shadow-xl shadow-gray-900/20 active:scale-95"
              >
                Upload Produk
              </button>
            </form>
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