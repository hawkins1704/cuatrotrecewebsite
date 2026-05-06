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
  title: "CUATROTRECE — Agencia de Crecimiento Digital",
  description:
    "Somos una agencia de crecimiento digital que nos encargamos de que tu negocio crezca usando servicios digitales como SEO, Google Ads acompañados de Growth Marketing.",
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
