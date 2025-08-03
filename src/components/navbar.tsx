"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsAnimating(false)
      }, 300)
    } else {
      setIsOpen(true)
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/galeri", label: "Gallery" },
    { href: "/akomodasi", label: "Akomodasi" },
    { href: "/kuliner", label: "Wisata Kuliner" },
    { href: "/kacang-kace", label: "Kacang Kace" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen mx-auto px-15 py-8">
          <div className="flex items-center justify-end">
            {/* <Link href="/" className="text-2xl font-light text-gray-900">
              Nyanglan
            </Link> */}

            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 flex items-center justify-center rounded-lg transition-colors group cursor-pointer bg-gray-900"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 ">
                {/* Always keep hamburger appearance, regardless of menu state */}
                <span className="absolute left-0 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center group-hover:w-6 translate-y-1 w-6" />
                <span className="absolute left-0 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center group-hover:w-6 opacity-100 scale-100 translate-y-3 w-4" />
                <span className="absolute left-0 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center group-hover:w-6 translate-y-5 w-6" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {(isOpen || isAnimating) && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${isOpen && !isAnimating ? "opacity-100" : "opacity-0"
            }`}
          onClick={toggleMenu}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Sidebar */}
      {(isOpen || isAnimating) && (
        <div
          className={`fixed top-0 right-0 h-full w-80 md:w-150 ps-10 bg-[#1C2230] z-50 text-white transition-all duration-500 ease-out ${isOpen && !isAnimating ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0"
            }`}
        >
          {/* Grid dengan proporsi 3:1 */}
          <div className="grid grid-cols-5 h-full">

            {/* Left Column (3/4 width): Content */}
            <div className="col-span-4 flex flex-col justify-between py-6 px-4">


              {/* Middle Section: Navigation */}
              <div className="flex flex-col gap-6 text-lg font-light tracking-widest uppercase pt-12">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="hover:text-white/80 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Bottom Section: Social + Contact */}
              <div className="text-xs text-white/80 space-y-4 pt-12">
                <div>
                  <p className="font-semibold text-white">Desa Nyanglan</p>
                  <p>Banjar Nyanglan Kaja</p>
                  <p>Kec. Banjarangkan, Kab. Klungkung</p>
                  <p>Bali 80752</p>
                </div>
                <div>
                  <p>Email: info@nyanglan.id</p>
                  <p>Phone: +62 812-3456-7890</p>
                  <p>Website: www.nyanglan.id</p>
                </div>
              </div>
            </div>

            {/* Right Column (1/4 width): Close Button */}
            <div className="col-span-1 flex items-start justify-center p-6 border-s ">
              <button onClick={toggleMenu} aria-label="Close menu" className="cursor-pointer">
                <div className="relative w-10 h-10">
                  <span className="absolute w-8 h-0.5 bg-white rotate-45 top-1/2 left-0" />
                  <span className="absolute w-8 h-0.5 bg-white -rotate-45 top-1/2 left-0" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
