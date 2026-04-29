import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import FloatingMascot from "./components/FloatingMascot"; 
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NusaPath",
  description: "Travel smarter, not harder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-gray-50 text-gray-900 pb-20`}>
        <Navbar />
        {children}
        <MobileNav />
        <Toaster position="top-center" richColors />
        
        <FloatingMascot />
      </body>
    </html>
  );
}