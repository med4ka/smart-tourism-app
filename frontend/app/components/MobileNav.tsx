"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Ticket, CircleUserRound } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around py-4 pb-8 z-50">
      <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-orange-700' : 'text-gray-400 hover:text-gray-600'}`}>
        <Compass className="w-5 h-5" />
        <span className="text-[10px] font-bold">Home</span>
      </Link>
      <Link href="/booking" className={`flex flex-col items-center gap-1 ${pathname === '/booking' ? 'text-orange-700' : 'text-gray-400 hover:text-gray-600'}`}>
        <Ticket className="w-5 h-5" />
        <span className="text-[10px] font-bold">Booking</span>
      </Link>
      <Link href="/account" className={`flex flex-col items-center gap-1 ${pathname === '/account' ? 'text-orange-700' : 'text-gray-400 hover:text-gray-600'}`}>
        <CircleUserRound className="w-5 h-5" />
        <span className="text-[10px] font-bold">Account</span>
      </Link>
    </nav>
  );
}