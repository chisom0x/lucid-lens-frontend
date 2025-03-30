"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollToDreamEntry = () => {
    const element = document.getElementById("dream-entry")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-8 md:pt-12">
      {/* Abstract animated background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
            fill="white"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{
              y: [20, 0, 20],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z"
            fill="white"
            initial={{ y: -20, opacity: 0.05 }}
            animate={{
              y: [-20, 0, -20],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="z-10 text-center w-full max-w-4xl mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight md:leading-tight">
            Let's decode your brain's nonsense.
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lucid Lens helps you unravel the mysteries of your dreams—one bizarre symbol at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            onClick={scrollToDreamEntry}
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6"
            size="lg"
          >
            Translate Your Dream
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

