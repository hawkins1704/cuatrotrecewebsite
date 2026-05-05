import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CUATRO TRECE — Agencia de Crecimiento Digital",
  description:
    "No somos una agencia tradicional. Convertimos clics en clientes. SEO, Paid Media y Social Media con foco en resultados medibles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
