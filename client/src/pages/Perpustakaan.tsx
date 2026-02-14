import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Perpustakaan() {
  const collections = [
    {
      icon: "📚",
      category: "Buku Pelajaran",
      count: "3,500+",
      description: "Koleksi lengkap buku pelajaran untuk semua mata pelajaran dan tingkat kelas.",
    },
    {
      icon: "📖",
      category: "Fiksi & Sastra",
      count: "2,000+",
      description: "Novel, cerpen, puisi, dan karya sastra dari penulis lokal dan internasional.",
    },
    {
      icon: "🔬",
      category: "Referensi Ilmiah",
      count: "1,500+",
      description: "Buku referensi untuk penelitian dan pengembangan pengetahuan ilmiah.",
    },
    {
      icon: "🎨",
      category: "Seni & Budaya",
      count: "800+",
      description: "Buku tentang seni, musik, tari, dan warisan budaya nusantara.",
    },
    {
      icon: "💻",
      category: "Teknologi & IT",
      count: "600+",
      description: "Buku tentang programming, web development, dan teknologi terkini.",
    },
    {
      icon: "🌍",
      category: "Geografi & Sejarah",
      count: "1,200+",
      description: "Buku tentang geografi, sejarah, dan peradaban dunia.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Perpustakaan Sekolah</h1>
            <p className="text-blue-100 mt-2">Pusat pembelajaran dan sumber pengetahuan</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Perpustakaan Kami</h2>
              <p className="text-gray-700 text-lg">
                Perpustakaan Sekolah Kami adalah pusat pembelajaran yang menyediakan koleksi lengkap buku, jurnal, dan sumber daya digital. Dengan lebih dari 10,000 judul buku dan akses ke database online, perpustakaan kami mendukung pembelajaran akademik dan pengembangan literasi siswa.
              </p>
            </div>

            {/* Collections */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Koleksi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-600 transition-all"
                >
                  <div className="text-5xl mb-4">{collection.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{collection.category}</h3>
                  <p className="text-blue-600 font-bold text-lg mb-2">{collection.count}</p>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan Perpustakaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: "🔍",
                  title: "Pencarian Katalog Online",
                  description: "Cari buku dan sumber daya melalui sistem katalog online yang mudah digunakan.",
                },
                {
                  icon: "🏷️",
                  title: "Peminjaman & Pengembalian",
                  description: "Sistem peminjaman yang fleksibel dengan periode peminjaman hingga 2 minggu.",
                },
                {
                  icon: "💾",
                  title: "Akses Database Digital",
                  description: "Akses ke e-books, jurnal digital, dan database akademik berkualitas tinggi.",
                },
                {
                  icon: "👨‍💼",
                  title: "Konsultasi Pustakawan",
                  description: "Bantuan dari pustakawan profesional untuk penelitian dan pencarian informasi.",
                },
                {
                  icon: "📖",
                  title: "Program Literasi",
                  description: "Program membaca, diskusi buku, dan workshop literasi untuk siswa.",
                },
                {
                  icon: "🖥️",
                  title: "Ruang Belajar Kolaboratif",
                  description: "Ruang nyaman dengan komputer dan WiFi untuk belajar dan penelitian kelompok.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Jam Operasional */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Jam Operasional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hari Kerja</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Senin - Jumat: 07:00 - 16:00</p>
                    <p>Istirahat: 12:00 - 13:00</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hari Libur</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Sabtu: 08:00 - 12:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Peraturan */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Peraturan Perpustakaan</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Menjaga ketenangan dan kebersihan perpustakaan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Tidak diperbolehkan membawa makanan dan minuman ke dalam perpustakaan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mengembalikan buku tepat waktu sesuai dengan tanggal jatuh tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Bertanggung jawab atas kerusakan atau kehilangan buku yang dipinjam</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Menggunakan komputer dan fasilitas sesuai dengan ketentuan yang berlaku</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
