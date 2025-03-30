"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-4 bg-zinc-950 flex items-center justify-center">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">About Lucid Lens</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Lucid Lens deciphers the messages hidden in your dreams, blending psychology, symbolism, and AI-powered
          insights. Our advanced technology helps you understand the subconscious patterns and meanings behind your
          dream experiences, providing valuable insights into your inner world.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Psychological Insights",
              description: "Understand the psychological aspects of your dream symbols",
            },
            {
              title: "Pattern Recognition",
              description: "Identify recurring themes and patterns in your dream life",
            },
            {
              title: "Personal Growth",
              description: "Use dream insights to facilitate personal development",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

