"use client";

interface CTAWhatsAppProps {
  label?: string;
  className?: string;
  variant?: "green" | "blue" | "outline";
}

export default function CTAWhatsApp({
  label = "📱 FAZER COTAÇÃO NO WHATSAPP",
  className = "",
  variant = "green",
}: CTAWhatsAppProps) {
  const message = encodeURIComponent(
    "Olá Humberto, quero fazer uma cotação na Valle"
  );
  const href = `https://wa.me/556499399013?text=${message}`;

  const base =
    "inline-block font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl text-center btn-shine";

  const styles = {
    green: "bg-green-500 hover:bg-green-600 text-white",
    blue: "bg-[#1A3A8F] hover:bg-[#1246D6] text-white",
    outline: "border-2 border-[#1A3A8F] text-[#1A3A8F] hover:bg-[#1A3A8F] hover:text-white bg-transparent",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
