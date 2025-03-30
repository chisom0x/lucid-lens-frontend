"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Lucid Lens</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </button>
          <Button onClick={() => scrollToSection("dream-entry")} className="bg-white text-black hover:bg-gray-200 px-6">
            Translate Dream
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              How It Works
            </button>
            <Button
              onClick={() => scrollToSection("dream-entry")}
              className="bg-white text-black hover:bg-gray-200 w-full"
            >
              Translate Dream
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

