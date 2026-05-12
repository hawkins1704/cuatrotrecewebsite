import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
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

const siteUrl = getSiteUrl();

const title = "CUATROTRECE — Agencia de Crecimiento Digital";
const description =
  "Somos una agencia de crecimiento digital que nos encargamos de que tu negocio crezca usando servicios digitales como SEO, Google Ads acompañados de Growth Marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "CUATROTRECE",
    locale: "es_PE",
    type: "website",
    images: [{ url: "/images/logo.jpg", alt: "CUATROTRECE" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: [{ url: "/images/favicon.jpg", type: "image/jpeg" }],
  },
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
