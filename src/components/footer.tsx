"use client"

import Link from "next/link"
//lol

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Nyanglan</h3>
            <p className="text-gray-400">
              A village where every story matters and every resident is family.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/galeri" className="block text-gray-400 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/akomodasi" className="block text-gray-400 hover:text-white transition-colors">
                Akomodasi
              </Link>
              <Link href="/kuliner" className="block text-gray-400 hover:text-white transition-colors">
                Wisata Kuliner
              </Link>
              <Link href="/produk/kacangkace" className="block text-gray-400 hover:text-white transition-colors">
                Kacang Kace
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Balai Desa Nyanglan</p>
              <p>Nyanglan, Klungkung, Bali 80761</p>
              <p>Phone: (+62) 8123-4567-890</p>
              <p>Email: info@nyanglan.gov</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Village of Nyanglan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
