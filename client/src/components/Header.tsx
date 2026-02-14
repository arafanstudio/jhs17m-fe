import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Akademik", href: "/akademik" },
  { label: "Ekstrakurikuler", href: "/ekstrakurikuler" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "E-learning", href: "/elearning" },
  { label: "Perpustakaan", href: "/perpustakaan" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">📚</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">ESASHAKA</h1>
                <p className="text-xs text-gray-500">SMP Negeri 17 Malang</p>
              </div>
              <div className="w-24 h-24 -ml-10">
                <DotLottieReact
                  src="https://lottie.host/f0407f01-d251-47d9-b1fc-2d5ef2f85b43/bIFPRK6Cm4.lottie"
                  loop
                  autoplay
                />
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
