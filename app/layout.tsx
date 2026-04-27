import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valle Proteção Veicular Itumbiara - Carro e Moto Protegidos sem Carência",
  description:
    "Proteção veicular em Itumbiara e região. Carro ou moto, sem carência, sem análise de perfil. Motoboy, Uber, autônomo — todos aceitos. Cobertura em todo Brasil.",
  keywords:
    "proteção veicular Itumbiara, seguro carro Itumbiara, seguro moto Itumbiara, Valle proteção veicular, proteção veicular Goiás, proteção veicular Goiatuba, proteção veicular Buriti Alegre",
  openGraph: {
    title: "Valle Proteção Veicular Itumbiara",
    description:
      "Proteção veicular sem carência e sem análise de perfil em Itumbiara e região.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <SchemaOrg />
        <Header />
        <div className="pt-16">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
