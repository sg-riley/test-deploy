"use client";

import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Eye } from "lucide-react";
import {
  BedDouble,
  Bath,
  Wifi,
  Utensils,
  Image as Landscape,
  Home,
  Waves,
  Leaf,
  ParkingCircle,
  Sprout,
} from "lucide-react";

const accommodations = [
  {
    id: "nyanglan",
    name: "The Great View Villa",
    description:
      "The Great View Villa adalah villa modern dengan konsep eco-friendly yang dikelilingi pemandangan alam yang asri.",
    image: "/images/akomodasi_villa_3.jpg",
    facilities: [
      { name: "2 Kamar Tidur", color: "bg-purple-100 text-purple-700" },
      { name: "Kamar Mandi Dalam", color: "bg-blue-100 text-blue-700" },
      { name: "WiFi Gratis", color: "bg-green-100 text-green-700" },
      { name: "Sarapan Tradisional", color: "bg-orange-100 text-orange-700" },
      { name: "View Sawah", color: "bg-pink-100 text-pink-700" },
    ],
    contact: "+6283119348852",
  },
];

export default function AkomodasiPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const iconMap: { [key: string]: JSX.Element } = {
    "2 Kamar Tidur": <BedDouble className="w-4 h-4" />,
    "Kamar Mandi Dalam": <Bath className="w-4 h-4" />,
    "WiFi Gratis": <Wifi className="w-4 h-4" />,
    "Sarapan Tradisional": <Utensils className="w-4 h-4" />,
    "View Sawah": <Landscape className="w-4 h-4" />,
    "Villa Keluarga": <Home className="w-4 h-4" />,
    "Kolam Renang": <Waves className="w-4 h-4" />,
    "Eco-Friendly": <Leaf className="w-4 h-4" />,
    "Parkir Luas": <ParkingCircle className="w-4 h-4" />,
    "Kebun Organik": <Sprout className="w-4 h-4" />,
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
  {/* Header */}
  <div className="relative bg-[url('/images/statistik.jpg')] bg-cover bg-center text-white h-[280px] md:h-[300px] lg:h-[320px]">
    {/* Overlay full */}
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
        Akomodasi
      </h1>
      <p className="text-base md:text-lg text-slate-200 max-w-2xl animate-fade-in-delay">
        Temukan pengalaman menginap yang tak terlupakan di tengah keindahan alam desa
      </p>
    </div>
  </div>
      {/* List Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {accommodations.map((item, index) => (
            <Card
              key={item.id}
              className={`overflow-hidden transition-all duration-700 ease-out bg-white border border-gray-200 shadow-md rounded-xl ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/5 relative h-64 md:h-80">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
                        {item.name}
                      </h2>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {item.facilities.map((f, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${f.color}`}
                          >
                            {iconMap[f.name] || null}
                            {f.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={`/akomodasi/${item.id}`}>
                        <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm">
                          <Eye className="w-4 h-4" />
                          View details
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        className="border-2 border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-full flex items-center gap-2 text-sm"
                        onClick={() =>
                          window.open(`https://wa.me/${item.contact.replace(/[^0-9]/g, "")}`, "_blank")
                        }
                      >
                        <Phone className="w-4 h-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Animasi fade-in style */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.4s forwards;
        }
      `}</style>
    </div>
  );
}
