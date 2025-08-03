/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const galleryItems = [
  { id: 1, image: "/images/gallery/babi_guling.jpg", title: "Babi Guling Bu Subur", caption: "Babi Guling Bu Subur adalah salah satu sajian kuliner khas Bali yang menjadi daya tarik utama bagi wisatawan yang berkunjung ke Desa Nyanglan. Dimasak dengan bumbu tradisional yang meresap hingga ke tulang, babi guling ini disajikan lengkap dengan lawar, sambal embe, dan nasi hangat. Selain kelezatannya, suasana makan di tengah desa yang asri menambah kesan otentik yang sulit dilupakan." },
  { id: 2, image: "/images/gallery/pura_dalam.jpg", title: "Pura Dalam Agung Desa Nyanglan", caption: "Pura Dalam Agung merupakan pura utama di Desa Nyanglan yang menjadi pusat kegiatan spiritual dan adat warga. Dengan arsitektur khas Bali yang megah dan nuansa sakral yang kental, pura ini tidak hanya menjadi tempat ibadah, tetapi juga daya tarik wisata budaya. Setiap upacara keagamaan di pura ini mencerminkan keharmonisan antara manusia dan alam, sekaligus memperlihatkan kekayaan tradisi leluhur yang masih dijaga hingga kini." },
  { id: 3, image: "/images/gallery/purnama_aturpiuning.jpg", title: "Purnama & Atur Piuning di Kantor Desa Nyanglan", caption: "Setiap bulan purnama, warga Desa Nyanglan bersama perangkat desa melaksanakan persembahyangan bersama di Kantor Desa sebagai wujud rasa syukur dan memohon kelancaran dalam menjalankan tugas serta kehidupan sehari-hari, sedangkan untuk upacara Atur Piuning itu dilakukan setiap ada kegiatan KKN di desa Nyanglan. Prosesi ini dilakukan dengan penuh khidmat, menggabungkan nilai spiritual dan kebersamaan yang memperkuat ikatan antara pemerintah desa dan masyarakat. Suasana sakral dengan iringan dupa dan sesajen menjadikan kantor desa sebagai tempat yang tidak hanya administratif, tetapi juga bernuansa religius." },
  { id: 4, image: "/images/gallery/kantor_desa.jpg", title: "Pusat pelayanan masyarakat dan kegiatan pemerintahan di Desa Nyanglan", caption: "Kantor Desa Nyanglan merupakan pusat pelayanan dan pemerintahan desa yang menjadi tempat warga mengurus berbagai keperluan administrasi. Bangunan ini juga menjadi tempat rapat, koordinasi, serta pelaksanaan berbagai program pembangunan dan kegiatan sosial masyarakat. Dengan desain yang sederhana namun bersih dan tertata, kantor desa mencerminkan semangat pelayanan, keterbukaan, dan gotong royong dalam membangun Desa Nyanglan yang maju dan berbudaya." },
  { id: 5, image: "/images/gallery/sawah_carik.jpg", title: "Keindahan alam dan ketenangan khas pedesaan di Sawah Carik Desa Nyanglan", caption: "Sawah Carik Desa Nyanglan menyajikan pemandangan alam yang asri dengan hamparan hijau persawahan yang tertata rapi. Terletak di jantung desa, area ini menjadi simbol ketahanan pangan sekaligus daya tarik wisata alam pedesaan. Suara gemericik air irigasi dan semilir angin di antara tanaman padi menciptakan suasana damai dan menenangkan. Selain sebagai sumber penghidupan, sawah ini juga sering dijadikan latar kegiatan budaya dan edukasi pertanian bagi pengunjung." },
  { id: 6, image: "/images/gallery/balai_banjar.jpg", title: "Kebugaran dan kebersamaan para lansia melalui senam rutin di Balai Banjar Desa Nyanglan", caption: "Setiap Jumat sore, para lansia Desa Nyanglan berkumpul di Balai Banjar untuk mengikuti kegiatan senam bersama. Kegiatan ini tidak hanya bertujuan menjaga kesehatan dan kebugaran fisik, tetapi juga menjadi ajang sosialisasi dan mempererat kebersamaan antarwarga lanjut usia. Dengan iringan musik yang ceria dan gerakan yang disesuaikan, senam lansia menciptakan suasana semangat, ceria, dan penuh energi positif di tengah komunitas desa." },
  { id: 7, image: "/images/gallery/latihan.jpg", title: "Persiapan Odalan melalui latihan tabuh di Balai Banjar Desa Nyanglan, wujud pelestarian budaya Bali", caption: "Menjelang pelaksanaan Odalan, sekaa tabuh (kelompok seni tabuh) Desa Nyanglan rutin menggelar latihan di Balai Banjar. Dentingan gamelan dan semangat para penabuh menciptakan suasana yang semarak dan penuh dedikasi. Latihan ini menjadi bagian penting dalam pelestarian budaya Bali, sekaligus membangun rasa tanggung jawab terhadap tradisi. Balai Banjar pun menjadi ruang tumbuhnya kreativitas seni dan kebersamaan warga desa." },
]

export default function GalleryPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
const observerRef = useRef<IntersectionObserver | null>(null)

useEffect(() => {
  observerRef.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute("data-id") || "")
          if (!isNaN(id)) {
            setVisibleItems((prev) => new Set(prev).add(id))
          }
        }
      })
    },
    { threshold: 0.2 }
  )

  const elements = document.querySelectorAll("[data-animate-card]")
  elements.forEach((el) => observerRef.current?.observe(el))

  return () => observerRef.current?.disconnect()
}, [])


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image src="/images/galeri.jpg" alt="Gallery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-6" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <span className="text-sm font-medium animate-fade-in">GALERI</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-wide leading-tight animate-fade-in-delay">
              Potret <span className="font-semibold">Desa Nyanglan</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto animate-fade-in-delay-2">
              Cerita yang terlukis dalam setiap jepretan, menampilkan kehangatan dan keindahan desa kami.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 space-y-12 max-w-6xl mx-auto">
      {galleryItems.map((item, index) => {
        const isEven = index % 2 === 1 
        const [title, ...descParts] = item.caption.split(".")
        const description = descParts.join(".").trim()

        return (
          <div
            key={item.id}
            data-id={item.id}
            data-animate-card
            className={`
              bg-gray-100 shadow-md border border-slate-300 rounded-lg overflow-hidden
              transition duration-700 ease-out transform
              ${visibleItems.has(item.id)
                ? "opacity-100 translate-x-0"
                : isEven
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"}
              hover:shadow-xl hover:scale-[1.01] hover:border-slate-600
            `}
          >
            <div className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2 min-h-92 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                {description && <p className="text-gray-700">{item.caption}</p>}
              </div>
            </div>
          </div>
        )

      })}
    </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Cerita dari Balik Lensa</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Setiap foto adalah jendela menuju momen kecil yang penuh makna — dari kegiatan harian hingga tradisi yang mengakar kuat di Desa Nyanglan.
          </p>
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
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
