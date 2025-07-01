"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Code, Smartphone, Database } from "lucide-react"

interface WelcomeAnimationProps {
  onComplete: () => void
}

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1)
      } else {
        onComplete()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  const icons = [
    <Code key="code" className="w-16 h-16 text-blue-500" />,
    <Smartphone key="mobile" className="w-16 h-16 text-purple-500" />,
    <Database key="database" className="w-16 h-16 text-green-500" />,
  ]

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold">
            MZ
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Mohammad Zaheer
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8 opacity-90"
        >
          Full Stack Software Developer Engineer
        </motion.p>

        <div className="flex justify-center space-x-8 mb-8">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: currentStep > index ? 1 : 0,
                rotate: currentStep > index ? 0 : -180,
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / 3) * 100}%` }}
          className="h-1 bg-white/50 rounded-full mx-auto max-w-xs"
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
