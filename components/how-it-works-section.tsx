"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PenLine, Brain, Lightbulb } from "lucide-react"

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <PenLine className="w-10 h-10 mb-4" />,
      title: "Enter your dream",
      description: "Share the details of your dream in our intuitive interface",
    },
    {
      icon: <Brain className="w-10 h-10 mb-4" />,
      title: "AI interprets the meaning",
      description: "Our advanced AI analyzes symbols, emotions, and patterns",
    },
    {
      icon: <Lightbulb className="w-10 h-10 mb-4" />,
      title: "Gain insights into your subconscious",
      description: "Receive personalized insights about your dream's meaning",
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-32 px-4 bg-black flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it easy to understand your dreams in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-white mb-2">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-300 font-medium">No sign-up required — get instant dream interpretations</p>
        </motion.div>
      </div>
    </section>
  )
}

