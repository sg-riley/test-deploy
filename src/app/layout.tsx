import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//ini metadata untuk keperluan SEO (dina)

export const metadata: Metadata = {
  title: {
    default: "Desa Wisata Nyanglan",
    template: "%s | Desa Wisata Nyanglan",
  },
  description:
    "Website Desa Wisata Nyanglan — Jelajahi pesona alam, budaya, dan kuliner khas yang menjadi daya tarik wisatawan lokal maupun mancanegara.",
  keywords: [
    "Nyanglan",
    "Desa Nyanglan",
    "Wisata Desa Nyanglan",
    "Desa Wisata Bali",
    "Pariwisata Desa Nyanglan",
    "Desa Adat Nyanglan",
    "Kuliner Khas Nyanglan",
    "Akomodasi di Desa Nyanglan",
    "Budaya Tradisional Bali",
    "Festival Budaya Desa Nyanglan",
    "UMKM Desa Nyanglan",
    "Galeri Foto Desa Nyanglan",
    "Kampung Wisata Bali",
    "Wisata Pedesaan di Bali",
    "Desa Wisata Terbaik di Bali",
    "Atraksi Budaya di Desa Nyanglan",
    "Kesenian Tradisional Bali",
    "Liburan ke Desa Nyanglan",
    "Tempat Wisata di Bangli Bali",
    "Eco Tourism Bali",
    "Desa Wisata Berbasis Budaya",
    "Kacang Kace",
    "Kacang Kace Nyanglan",
  ],
  authors: [{ name: "Kelompok 110 KKN 87 UAJY" }],
  creator: "Kelompok 110 KKN 87 UAJY",
  metadataBase: new URL("https://www.visit-nyanglan.site/"),
  openGraph: {
    title: "Desa Wisata Nyanglan – Pesona Alam dan Budaya Bali",
    description:
      "Jelajahi keindahan alam, cita rasa kuliner, dan kekayaan budaya di Desa Wisata Nyanglan, Klungkung, Bali.",
    url: "https://www.visit-nyanglan.site/",
    siteName: "Desa Wisata Nyanglan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desa Wisata Nyanglan - Bali",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
