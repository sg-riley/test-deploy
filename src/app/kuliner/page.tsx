"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useState } from "react";
import Image from "next/image";
//import { title } from "process";

const KulinerBukSuburItem = [
    {
        title: "Babi Guling Ibu Subur Nyanglan",
        image: "/images/kuliner/bbs01.jpg",
    },
    {
        title: "Babi Guling Ibu Subur Nyanglan",
        image: "/images/kuliner/bbs02.jpg",
    },
    {
        title: "Babi Guling Ibu Subur Nyanglan",
        image: "/images/kuliner/bbs03.jpg",
    },
];

export default function KulinerPage() {
  const [scrollY, setScrollY] = useState(0);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src="/images/kuliner/b2.jpg"
            alt="Kuliner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div
            className="max-w-2xl px-6"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <span className="text-sm font-medium animate-fade-in">KULINER</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-wide leading-tight animate-fade-in-delay">
              Cita Rasa Khas{" "}
              <span className="font-semibold">Desa Nyanglan</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto animate-fade-in-delay-2">
              Sajian lokal yang menggugah selera, mengajak Anda merasakan
              kelezatan dan kehangatan dari dapur tradisional kami.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white max-w-5/6 mx-auto px-6 py-16 flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl text-gray-900 mb-4 animate-fade-in">
            Babi Guling Ibu Subur Nyanglan
          </h2>
        </div>

        <div className="w-full mx-auto my-16">
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="p-0">
              {KulinerBukSuburItem.map((_, index) => (
                <CarouselItem key={index} className={cn("md:basis-[60%]", {})}>
                  <Card
                    className={cn(
                      "transition-transform duration-500 p-0 aspect-3/2",
                      {
                        "scale-[0.9]": index !== current - 1,
                      }
                    )}
                  >
                    <CardContent className="relative aspect-3/2 p-0 overflow-hidden rounded-lg border border-slate-400 shadow-md">
                      <Image
                        src={_.image}
                        alt={_.title}
                        fill
                        className="object-cover rounded-lg border border-slate-400 shadow-md"
                        priority
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

        <div className="max-w-5xl mx-auto text-gray-800 text-lg leading-relaxed space-y-6 animate-fade-in">
          <p className="text-center text-base md:text-lg">
            Babi Guling Ibu Subur Nyanglan menyajikan cita rasa khas Bali dengan
            olahan bumbu tradisional yang meresap sempurna ke dalam daging.
            Dagingnya empuk, kulitnya renyah, dan perpaduan rasa pedas gurihnya
            menggugah selera. Yang membuat tempat ini semakin menarik adalah
            lokasinya yang berada di dekat hamparan sawah yang hijau dan asri,
            menciptakan suasana makan yang tenang dan menyegarkan. Menikmati
            babi guling di tempat ini bukan hanya soal rasa, tetapi juga
            pengalaman bersantap di tengah nuansa pedesaan Bali yang alami.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 animate-fade-in">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.810566561962!2d115.39379445604678!3d-8.466175472212639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21b34bfd68971%3A0x74e23f877f19ae9c!2sMek%20Subur%20Suckling%20Pig!5e0!3m2!1sen!2sid!4v1753090400745!5m2!1sen!2sid"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

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
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}
