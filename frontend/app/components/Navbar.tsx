"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Ticket, CircleUserRound } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-[0.8rem] bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-200 transition-transform group-hover:scale-105 group-hover:rotate-3">
                  <svg viewBox="0 0 100 100" className="w-6 h-6 transform -rotate-12 translate-x-0.5">
                      <path d="M10 90 L90 50 L10 10 L30 50 Z" fill="white" stroke="white" strokeWidth="5" strokeLinejoin="round" />
                        </svg>
                         </div>
                          <div className="flex flex-col">
                            <h1 className="font-bold text-xl tracking-tight text-orange-700 leading-none">SmartTrip</h1>
                            <span className="text-[9px] text-gray-400 font-medium tracking-wider uppercase opacity-70 mt-0.5">AI Nusantara Travel</span>
                        </div>
                      </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className={`nav-link flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${pathname === '/' ? 'text-orange-700 bg-orange-50/50 font-bold' : 'text-gray-500 hover:text-orange-700 hover:bg-orange-50/30'}`}
            >
              <Compass className="w-4 h-4" /> Home
            </Link>
            <Link 
              href="/booking" 
              className={`nav-link flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${pathname === '/booking' ? 'text-orange-700 bg-orange-50/50 font-bold' : 'text-gray-500 hover:text-orange-700 hover:bg-orange-50/30'}`}
            >
              <Ticket className="w-4 h-4" /> Booking
            </Link>
            <Link 
              href="/account" 
              className={`nav-link flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${pathname === '/account' ? 'text-orange-700 bg-orange-50/50 font-bold' : 'text-gray-500 hover:text-orange-700 hover:bg-orange-50/30'}`}
            >
              <CircleUserRound className="w-4 h-4" /> Account
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
                <span className="text-[10px] text-gray-400 leading-none">Welcome back,</span>
                <span className="text-xs font-bold">Tulalit</span>
            </div>
            <Link href="/account" className="w-10 h-10 rounded-full border-2 border-orange-100 p-0.5 shadow-sm overflow-hidden hover:scale-105 transition-transform">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gipari" alt="avatar" className="w-full h-full rounded-full bg-orange-50" />
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}