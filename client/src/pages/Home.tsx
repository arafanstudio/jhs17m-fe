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
        {/* Hero Section with Blur Background - Modified to h-screen */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Blurred Background Carousel */}
          <div className="absolute inset-0">
            <HeroImageCarousel isBlurred />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="gsap-hero-content">
                    <div className="flex items-center mb-4">
	                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
	                      Selamat Datang di Sekolah Kami
	                    </h1>
	                  </div>
                  <p className="text-xl md:text-2xl text-white mb-8 opacity-90 max-w-2xl">
                    Membangun generasi masa depan yang cerdas, berkarakter, dan berwawasan global melalui pendidikan berkualitas.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105">
                      Pelajari Lebih Lanjut
                    </button>
                    <button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105">
                      Hubungi Kami
                    </button>
                  </div>
                </div>

                {/* Right Image Carousel */}
                <div className="hidden md:block w-full h-[500px] rounded-2xl shadow-2xl float-accent shadow-black/50 overflow-hidden gsap-hero-image">
                  <HeroImageCarousel />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Media Esashaka Section */}
        <div className="gsap-reveal">
          <MediaEsashaka />
        </div>

        {/* Kenapa Harus SMPN 17 Section */}
        <div className="gsap-reveal">
          <WhySMPN17 />
        </div>

        {/* Sambutan Kepala Sekolah Section */}
        <div className="gsap-reveal">
          <HeadmasterSection />
        </div>

        {/* Fasilitas Sekolah Section */}
        <div className="gsap-reveal">
          <FacilitySection />
        </div>

        {/* Prestasi & Penghargaan Section */}
        <div className="gsap-reveal">
          <AwardSection />
        </div>

        {/* Kegiatan - Kegiatan Section */}
        <div className="gsap-reveal">
          <ActivitySection />
        </div>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 gsap-reveal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bergabunglah dengan Kami
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Jadilah bagian dari komunitas pembelajaran yang dinamis dan inovatif untuk masa depan yang lebih gemilang.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 text-lg">
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
