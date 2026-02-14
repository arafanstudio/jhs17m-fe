import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Akademik() {
  const programs = [
    {
      name: "Kelas 1-3 (SD)",
      icon: "🎒",
      description: "Fondasi pendidikan dasar dengan fokus pada literasi, numerasi, dan pengembangan karakter.",
    },
    {
      name: "Kelas 4-6 (SD)",
      icon: "📖",
      description: "Pendalaman materi akademik dengan pengenalan berbagai bidang ilmu pengetahuan.",
    },
    {
      name: "Kelas 7-9 (SMP)",
      icon: "🔬",
      description: "Pembelajaran terpadu dengan metode sains dan teknologi yang modern.",
    },
    {
      name: "Kelas 10-12 (SMA)",
      icon: "🎓",
      description: "Program peminatan dengan persiapan masuk perguruan tinggi terkemuka.",
    },
  ];

  const subjects = [
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Matematika",
    "Sains",
    "Sejarah",
    "Geografi",
    "Pendidikan Jasmani",
    "Seni Rupa",
    "Seni Musik",
    "Teknologi Informasi",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Program Akademik</h1>
            <p className="text-blue-100 mt-2">Kurikulum modern untuk masa depan yang cerah</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Programs */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Jenjang Pendidikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.name}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>

            {/* Subjects */}
            <div className="bg-gray-50 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Mata Pelajaran</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <p className="text-gray-700 font-medium">{subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Methods */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Metode Pembelajaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👥",
                  title: "Pembelajaran Interaktif",
                  description: "Metode diskusi dan kolaborasi untuk meningkatkan pemahaman siswa.",
                },
                {
                  icon: "🔬",
                  title: "Pembelajaran Berbasis Proyek",
                  description: "Siswa belajar melalui proyek nyata yang relevan dengan kehidupan sehari-hari.",
                },
                {
                  icon: "💻",
                  title: "Teknologi Pendidikan",
                  description: "Menggunakan teknologi terkini untuk mendukung proses pembelajaran.",
                },
              ].map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
