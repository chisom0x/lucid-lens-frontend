import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DreamEntrySection from "@/components/dream-entry-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <DreamEntrySection />
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Lucid Lens. All rights reserved.</p>
      </footer>
    </main>
  )
}

