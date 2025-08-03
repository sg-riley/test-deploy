"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, TreePine, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [sectionStates, setSectionStates] = useState<{ [key: string]: "hidden" | "visible" | "exit" }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      setLastScrollY(currentScrollY)
      setScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, sectionId]))
            setSectionStates((prev) => ({
              ...prev,
              [sectionId]: "visible",
            }))
          } else {
            setVisibleElements((prev) => {
              const newSet = new Set(prev)
              newSet.delete(sectionId)
              return newSet
            })
            setSectionStates((prev) => ({
              ...prev,
              [sectionId]: "exit",
            }))
          }
        })
      },
      { threshold: 0.5, rootMargin: "0px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)
  const getSectionState = (id: string) => sectionStates[id] || "hidden"

  const getAnimationClass = (id: string) => {
    const state = getSectionState(id)

    if (state === "visible") {
      return `opacity-100 translate-y-0 transition-all duration-800 ease-out`
    } else if (state === "exit") {
      if (scrollDirection === "down") {
        return `opacity-0 -translate-y-12 transition-all duration-600 ease-in`
      } else {
        return `opacity-0 translate-y-12 transition-all duration-600 ease-in`
      }
    } else {
      if (scrollDirection === "down") {
        return `opacity-0 translate-y-12 transition-all duration-800 ease-out`
      } else {
        return `opacity-0 -translate-y-12 transition-all duration-800 ease-out`
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section id="home" className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/40"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image src="/images/hero.jpg" alt="Village landscape" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />

        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div
            className="max-w-4xl px-6"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <h1 className="text-6xl md:text-8xl font-extralight mb-6 tracking-wide animate-fade-in">Nyanglan</h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-delay">
              Harmoni alam dan tradisi Bali di desa yang tenang.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm animate-fade-in-delay-2"
            >
              <Link href="/galeri">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="relative min-h-screen lg:h-screen overflow-hidden flex items-center py-20 lg:py-0">

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div
              id="about-text"
              data-animate
              className={`transition-all duration-1000 ease-out ${isVisible("about-text") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
            >
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 md:mb-8">Tentang Desa</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                Desa Nyanglan merupakan salah satu desa yang terletak di Kecamatan Banjarangkan, Kabupaten Klungkung, Bali. Dikenal dengan suasana alam yang sejuk, hamparan persawahan, dan masyarakat yang masih memegang teguh nilai-nilai adat dan budaya Bali.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Desa ini juga menjadi tempat berlangsungnya berbagai upacara adat serta menjadi lokasi yang strategis untuk program pemberdayaan dan pengembangan desa berbasis potensi lokal. Dengan posisi geografis yang masih asri dan minim polusi, Nyanglan adalah potret desa Bali yang autentik dan damai.
              </p>
            </div>
            <div
              id="about-image"
              data-animate
              className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible("about-image") ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
                }`}
            >
              <div className="w-full max-w-md mx-auto md:max-w-none">
                <Image
                  src="/images/about.jpg"
                  alt="Village center"
                  width={500}
                  height={600}
                  unoptimized
                  className="rounded-lg shadow-2xl w-full h-auto"
                  style={{ aspectRatio: "5/6", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            top: "-120%",
            height: "200%",
          }}>
          <Image src="/images/about-bg.jpg" alt="about-bg" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div
            id="features-header"
            data-animate
            className={`text-center mb-12 ${getAnimationClass("features-header")}`}
            style={{ transitionDelay: "0ms" }}
          >
            <h2 className="text-4xl font-extralight text-gray-900 mb-4">Highlights Desa</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Informasi singkat tentang desa</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community",
                description: "Masyarakat yang aktif dalam kegiatan adat, gotong royong, dan pelestarian budaya.",
              },
              {
                icon: <TreePine className="w-6 h-6" />,
                title: "Nature",
                description: "Lanskap sawah, perbukitan kecil, dan udara segar menjadikan desa ini cocok untuk ekowisata.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Location",
                description: "Berada di Kecamatan Banjarangkan, Kabupaten Klungkung, Bali.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Events",
                description: "Upacara keagamaan seperti Galungan, Kuningan, dan Ngaben",
              },
            ].map((feature, index) => (
              <div
                key={index}
                id={`features`}
                data-animate
                className={`flex-1 text-center group ${getAnimationClass("features")} bg-white p-6 rounded-lg shadow-sm hover:shadow-md`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <div className="text-gray-700">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            top: "-250%",
            height: "200%",
          }}
        >
          <Image src="/images/statistik.jpg" alt="Village aerial view" fill className="object-cover opacity-30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div
            id="stats-header"
            data-animate
            className={`mb-12 ${getAnimationClass("stats-header")}`}
            style={{ transitionDelay: "0ms" }}
          >
            <h2 className="text-4xl font-extralight">Berdasarkan Angka</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Informasi singkat lain tentang desa tapi ada angka nya
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center max-w-4xl mx-auto">
            {[
              { number: "1847", label: "Bangunan" },
              { number: "1,516", label: "Penduduk" },
              { number: "15", label: "Bisnis lokal" },
              { number: "167.600 ha", label: "Luas wilayah" },
            ].map((stat, index) => (
              <div
                key={index}
                id={`stats`}
                data-animate
                className={`flex-1 ${getAnimationClass("stats")}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="text-3xl md:text-4xl font-extralight mb-2 text-white">{stat.number}</div>
                <div className="text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ease-out ${isVisible("contact-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <h2 className="text-4xl font-extralight text-gray-900 mb-6">Temukan Keindahan Nyanglan</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Jelajahi kehidupan desa yang damai, budaya yang lestari, dan lanskap alam yang memukau.
              Nyanglan menanti untuk dikenali lebih dekat melalui cerita dan potret yang kami abadikan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/galeri">Lihat Galeri</Link>
              </Button>
              <Button size="lg" variant="outline" className="transform hover:scale-105 transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

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
  )
}
