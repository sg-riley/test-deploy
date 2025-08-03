/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
  BedDouble,
  Bath,
  Wifi,
  Utensils,
  LandmarkIcon as Landscape,
  Home,
  Waves,
  Leaf,
  ParkingCircle,
  Sprout,
  MapPin,
  Phone,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

const iconMap: { [key: string]: JSX.Element } = {
  "2 Kamar Tidur": <BedDouble className="w-4 h-4" />,
  "Kamar Mandi Dalam": <Bath className="w-4 h-4" />,
  "WiFi Gratis": <Wifi className="w-4 h-4" />,
  "Sarapan Tradisional": <Utensils className="w-4 h-4" />,
  "View Alam Asri": <Landscape className="w-4 h-4" />,
  "Villa Keluarga": <Home className="w-4 h-4" />,
  "Kolam Renang": <Waves className="w-4 h-4" />,
  "Eco-Friendly": <Leaf className="w-4 h-4" />,
  "Parkir Luas": <ParkingCircle className="w-4 h-4" />,
  "Kebun Organik": <Sprout className="w-4 h-4" />,
};

const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=The+Great+View+Villa";

export default function DetailContent({ data }: { data: any }) {
  return (
    <div className="opacity-100 translate-y-0 transition-all duration-700 ease-out">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-15">
        {/* LEFT: Konten utama */}
        <div className="md:col-span-2">
          {/* ✅ Carousel Gambar Akomodasi */}
          <div className="rounded-lg overflow-hidden mb-4 mt-15 relative">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {data.images.map((src: string, index: number) => (
                  <CarouselItem key={index} className="basis-full">
                    <Card className="rounded-xl overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={src}
                          alt={`Gambar ${index + 1}`}
                          width={1200}
                          height={600}
                          className="w-full h-[300px] object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Deskripsi */}
          <div className="bg-white p-6 rounded-lg shadow mt-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              Tentang Akomodasi
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>

        {/* RIGHT: Sidebar info */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              Fasilitas
            </h3>
            <ul className="space-y-3">
              {data.facilities.map((f: any, i: number) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-blue-600">
                    {iconMap[f.name] || <span className="w-4 h-4" />}
                  </div>
                  <span className="text-sm font-medium">{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <a
              href={`https://wa.me/${data.contact.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Hubungi via WhatsApp
            </a>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-100 text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 inline-block" />
              Lihat di Peta
            </a>
            <a
              href="/akomodasi"
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-100 text-center block"
            >
              ← Kembali ke Daftar Akomodasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
