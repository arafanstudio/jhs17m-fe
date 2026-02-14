import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Elearning() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Platform E-Learning</h1>
            <p className="text-blue-100 mt-2">Pembelajaran digital untuk era modern</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Platform E-Learning Kami</h2>
              <p className="text-gray-700 text-lg">
                Platform E-Learning Sekolah Kami adalah solusi pembelajaran digital yang dirancang untuk melengkapi pembelajaran di kelas. Dengan teknologi terkini, siswa dapat belajar kapan saja dan di mana saja dengan akses ke materi pembelajaran, tugas, dan kuis interaktif.
              </p>
            </div>

            {/* Features */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: "📹",
                  title: "Video Pembelajaran",
                  description: "Akses video pembelajaran berkualitas tinggi dari guru berpengalaman.",
                },
                {
                  icon: "📝",
                  title: "Materi Digital",
                  description: "Koleksi lengkap materi pembelajaran dalam format PDF dan interaktif.",
                },
                {
                  icon: "✍️",
                  title: "Tugas & Kuis",
                  description: "Sistem penugasan dan kuis online dengan penilaian otomatis.",
                },
                {
                  icon: "💬",
                  title: "Forum Diskusi",
                  description: "Ruang diskusi untuk tanya jawab dan kolaborasi antar siswa.",
                },
                {
                  icon: "📊",
                  title: "Analitik Pembelajaran",
                  description: "Dashboard untuk melacak kemajuan dan performa belajar siswa.",
                },
                {
                  icon: "📱",
                  title: "Akses Mobile",
                  description: "Aplikasi mobile untuk belajar di smartphone atau tablet.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-600 transition-all"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* How to Access */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cara Mengakses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Login ke Platform",
                    description: "Gunakan username dan password yang diberikan sekolah untuk masuk ke platform.",
                  },
                  {
                    step: "2",
                    title: "Pilih Kelas & Mata Pelajaran",
                    description: "Akses kelas dan mata pelajaran yang sesuai dengan jadwal Anda.",
                  },
                  {
                    step: "3",
                    title: "Mulai Belajar",
                    description: "Pelajari materi, kerjakan tugas, dan ikuti kuis untuk meningkatkan pemahaman.",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold mb-8">Manfaat E-Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Belajar dengan fleksibel sesuai kecepatan Anda",
                  "Akses materi kapan saja dan di mana saja",
                  "Interaksi langsung dengan guru dan teman sekelas",
                  "Umpan balik instan dari sistem penilaian otomatis",
                  "Melacak kemajuan pembelajaran dengan detail",
                  "Persiapan yang lebih baik untuk ujian",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">✓</div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Akses Platform E-Learning</h2>
              <p className="text-gray-600 mb-6">
                Klik tombol di bawah untuk mengakses platform E-Learning kami.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Buka Platform E-Learning
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
