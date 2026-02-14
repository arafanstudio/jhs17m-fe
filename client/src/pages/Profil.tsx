import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profil() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Profil Sekolah</h1>
            <p className="text-blue-100 mt-2">Mengenal lebih dekat tentang institusi kami</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
                <p className="text-gray-600 mb-4">
                  Sekolah Kami adalah institusi pendidikan yang berkomitmen untuk memberikan pendidikan berkualitas tinggi kepada generasi muda Indonesia. Dengan pengalaman lebih dari 25 tahun, kami telah menghasilkan ribuan lulusan yang sukses di berbagai bidang.
                </p>
                <p className="text-gray-600 mb-4">
                  Kami percaya bahwa setiap siswa memiliki potensi unik yang perlu dikembangkan melalui pendekatan pembelajaran yang holistik dan inovatif.
                </p>
                <p className="text-gray-600">
                  Visi kami adalah menjadi sekolah terdepan dalam menghasilkan lulusan yang berkarakter, berprestasi, dan siap menghadapi tantangan global.
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                  <span className="text-white text-9xl">🏫</span>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Visi</h3>
                <p className="text-gray-700">
                  Menjadi sekolah unggul yang menghasilkan lulusan berkarakter, berprestasi, dan berwawasan global.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Misi</h3>
                <p className="text-gray-700">
                  Menyelenggarakan pendidikan berkualitas dengan pendekatan inovatif, mengembangkan potensi siswa secara holistik, dan membentuk karakter yang kuat.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Nilai</h3>
                <p className="text-gray-700">
                  Integritas, Inovasi, Inklusivitas, Inspirasi, dan Investasi dalam pengembangan sumber daya manusia.
                </p>
              </div>
            </div>

            {/* Key Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Informasi Penting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Lokasi</h4>
                  <p className="text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan 12345</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Kontak</h4>
                  <p className="text-gray-600">(021) 1234-5678 | info@sekolahkami.id</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 07:00 - 15:00</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Tahun Berdiri</h4>
                  <p className="text-gray-600">1999</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
