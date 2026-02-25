import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function Profil() {
  const misiPoints = [
    "Menumbuhkan budaya belajar sepanjang hayat dengan membekali keterampilan berpikir kritis, kreatif, dan pemecahan masalah, serta meningkatkan literasi dan numerasi bagi siswa.",
    "Mengembangkan potensi siswa secara optimal melalui berbagai program pembelajaran inovatif, berbasis teknologi dan informasi, serta berpusat pada siswa.",
    "Membentuk karakter siswa yang memiliki 8 dimensi profil lulusan melalui kegiatan intrakurikuler, kokurikuler, ekstrakurikuler, pembinaan budi pekerti, dan mampu mengimplementasikan dalam kehidupan sehari-hari.",
    "Menanamkan kesadaran akan pentingnya perlindungan dan pelestarian lingkungan melalui program adiwiyata dan gerakan sekolah sehat.",
    "Membangun kemitraan dengan seluruh stakeholder (orang tua, guru, siswa, komunitas, lembaga terkait, masyarakat) untuk menciptakan lingkungan belajar yang kondusif."
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 gsap-reveal">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
                <p className="text-gray-600 mb-4">
                  SMP Negeri 17 Malang adalah institusi pendidikan yang berkomitmen untuk memberikan pendidikan berkualitas tinggi kepada generasi muda Indonesia. Dengan dedikasi penuh, kami telah menghasilkan ribuan lulusan yang sukses di berbagai bidang.
                </p>
                <p className="text-gray-600 mb-4">
                  Kami percaya bahwa setiap siswa memiliki potensi unik yang perlu dikembangkan melalui pendekatan pembelajaran yang holistik, inovatif, dan berpusat pada siswa.
                </p>
                <p className="text-gray-600">
                  Komitmen kami adalah menjadi sekolah unggul yang menghasilkan lulusan berkarakter, berprestasi, dan berwawasan global.
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                  <span className="text-white text-9xl">🏫</span>
                </div>
              </div>
            </div>

            {/* Visi Section */}
            <div className="mb-16 gsap-reveal">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Visi</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "Terwujudnya insan pembelajar sepanjang hayat yang memiliki dimensi profil lulusan, dan peduli lingkungan"
                </p>
              </div>
            </div>

            {/* Misi Section */}
            <div className="mb-16 gsap-reveal">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Misi</h3>
              <p className="text-gray-600 mb-8 text-base">
                Berdasarkan visi tersebut, berikut adalah misi dari SMPN 17 Malang:
              </p>
              <div className="space-y-4">
                {misiPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex-shrink-0 pt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-blue-600">{index + 1}.</span> {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nilai Section */}
            <div className="mb-16 gsap-reveal">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Nilai-Nilai Inti</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Integritas, Inovasi, Inklusivitas, Inspirasi, dan Investasi dalam pengembangan sumber daya manusia.
                </p>
              </div>
            </div>

            {/* Key Information */}
            <div className="bg-gray-50 p-8 rounded-xl gsap-reveal">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Informasi Penting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Lokasi</h4>
                  <p className="text-gray-600">Malang, Jawa Timur</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Kontak</h4>
                  <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 07:00 - 15:00</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Status</h4>
                  <p className="text-gray-600">SMP Negeri 17 Malang</p>
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
