"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export default function DreamEntrySection() {
  const [dreamText, setDreamText] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!dreamText.trim()) return

    setIsLoading(true)
    setInterpretation("")

    try {
      const response = await fetch("http://localhost:3000/interpret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: dreamText }),
      })

      const data = await response.json()

      if (data.status && data.success) {
        setInterpretation(data.data.interpretation)
      } else {
        setInterpretation("Failed to retrieve interpretation. Please try again.")
      }
    } catch (error) {
      setInterpretation("Error connecting to the server. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="dream-entry"
      ref={ref}
      className="py-20 md:py-32 px-4 bg-zinc-950 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Translate Your Dream</h2>
          <p className="text-lg text-gray-300">
            Enter the details of your dream below and receive an instant interpretation
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Textarea
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
            placeholder="Describe your dream in detail..."
            className="min-h-[200px] bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
          />
          <div className="text-center">
            <Button
              type="submit"
              disabled={isLoading || !dreamText.trim()}
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Interpreting...
                </>
              ) : (
                "Get Interpretation"
              )}
            </Button>
          </div>
        </motion.form>

        {interpretation && (
          <motion.div
            className="mt-12 p-6 border border-zinc-800 rounded-lg bg-zinc-900/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Dream Interpretation</h3>
            <p className="text-gray-300 leading-relaxed">{interpretation}</p>
            <div className="mt-6 pt-6 border-t border-zinc-800 text-sm text-gray-400">
              <p>
                Note: This is an AI-generated interpretation based on common dream symbolism and psychology. For
                professional analysis, please consult with a qualified therapist.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
