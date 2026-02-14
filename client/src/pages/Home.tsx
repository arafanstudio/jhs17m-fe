import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImageCarousel from "@/components/HeroImageCarousel";
import MediaEsashaka from "@/components/MediaEsashaka";
import WhySMPN17 from "@/components/WhySMPN17";
import HeadmasterSection from "@/components/HeadmasterSection";
import FacilitySection from "@/components/FacilitySection";
import AwardSection from "@/components/AwardSection";
import ActivitySection from "@/components/ActivitySection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          duration={3000}
        />
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Blur Background */}
        <section className="relative w-full overflow-hidden">
          {/* Blurred Background Carousel */}
          <div className="absolute inset-0">
            <HeroImageCarousel isBlurred />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <div className="flex items-center mb-4">
	                    <h1 className="text-5xl font-bold text-white">
	                      Selamat Datang di Sekolah Kami
	                    </h1>
	                  </div>
                  <p className="text-xl text-white mb-6">
                    Membangun generasi masa depan yang cerdas, berkarakter, dan berwawasan global melalui pendidikan berkualitas.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                      Pelajari Lebih Lanjut
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-gray-200 font-bold py-3 px-8 rounded-lg transition-colors">
                      Hubungi Kami
                    </button>
                  </div>
                </div>

                {/* Right Image Carousel */}
                <div className="hidden md:block w-full h-96 rounded-2xl shadow-2xl float-accent shadow-black overflow-hidden">
                  <HeroImageCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Esashaka Section */}
        <MediaEsashaka />

        {/* Kenapa Harus SMPN 17 Section */}
        <WhySMPN17 />

        {/* Sambutan Kepala Sekolah Section */}
        <HeadmasterSection />

        {/* Fasilitas Sekolah Section */}
        <FacilitySection />

        {/* Prestasi & Penghargaan Section */}
        <AwardSection />

        {/* Kegiatan - Kegiatan Section */}
        <ActivitySection />

        {/* Features Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Keunggulan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎓",
                  title: "Kurikulum Modern",
                  description: "Kurikulum terkini yang disesuaikan dengan perkembangan zaman dan kebutuhan industri.",
                },
                {
                  icon: "👨‍🏫",
                  title: "Guru Berpengalaman",
                  description: "Tim pengajar profesional dengan sertifikasi internasional dan dedikasi tinggi.",
                },
                {
                  icon: "🏫",
                  title: "Fasilitas Lengkap",
                  description: "Sarana dan prasarana modern untuk mendukung proses pembelajaran yang optimal.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Bergabunglah dengan Kami
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Jadilah bagian dari komunitas pembelajaran yang dinamis dan inovatif.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Daftar Sekarang
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
