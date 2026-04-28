"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = encodeURIComponent("Olá Humberto, quero fazer uma cotação na Valle");
  const waHref = `https://wa.me/556499399013?text=${message}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className={`fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1A3A8F] flex items-center justify-center">
            <span className="text-white font-extrabold text-sm">V</span>
          </div>
          <div className="leading-tight">
            <span className="text-[#1A3A8F] font-extrabold text-lg tracking-tight">VALLE</span>
            <p className="text-gray-400 text-[10px] leading-none hidden sm:block">Proteção Veicular</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            { href: "/", label: "Início" },
            { href: "/carro", label: "🚗 Carro" },
            { href: "/moto", label: "🏍️ Moto" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-[#1A3A8F] ${
                pathname === item.href
                  ? "text-[#1A3A8F] font-bold"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1A3A8F] hover:bg-[#1246D6] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-sm btn-shine"
        >
          Cotar agora
        </a>
      </div>
    </motion.header>
  );
}
