import { Instagram, Facebook, Twitter, Music, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-pink-600",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-gray-700",
  },
  {
    name: "TikTok",
    icon: Music,
    href: "https://tiktok.com",
    color: "hover:text-gray-900",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    color: "hover:text-red-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Sekolah Kami</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Menyediakan pendidikan berkualitas untuk membangun generasi masa depan yang cerdas, berkarakter, dan berwawasan global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/profil" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="/akademik" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Program Akademik
                </a>
              </li>
              <li>
                <a href="/perpustakaan" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Perpustakaan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 Jl. Pendidikan No. 123</p>
              <p>📞 (021) 1234-5678</p>
              <p>✉️ info@sekolahkami.id</p>
              <p>🕐 Senin - Jumat: 07:00 - 15:00</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                  title={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Sekolah Kami. Semua hak dilindungi.</p>
            <p className="mt-2">
              Dikembangkan dengan ❤️ untuk pendidikan yang lebih baik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
