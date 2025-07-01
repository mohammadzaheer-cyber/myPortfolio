"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download } from "lucide-react"

interface HomeProps {
  setCurrentPage: (page: string) => void
}

export function Home({ setCurrentPage }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const handleViewWorkClick = () => {
    setCurrentPage("projects")
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -50 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/Zaheer.png?height=160&width=160"
                alt="Mohammad Zaheer"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 500 }}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
        >
          Mohammad Zaheer
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
        >
          Full Stack Software Developer Engineer
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8"
        >
          <MapPin className="w-5 h-5 mr-2" />
          <span>Mumbai, India</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate Mobile Application Developer with expertise in React Native and Full Stack Development. Currently
          contributing to innovative fintech solutions while building scalable applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("https://github.com/mohammadzaheer-cyber", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("https://www.linkedin.com/in/mohammad-zaheer-4b348618a/", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("mailto:zk6394973@gmail.com", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("tel:+917081984525", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleViewWorkClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("https://drive.google.com/file/d/1VL3_sLleLKKZmwcg4ulZECDQZW_WE8N4/view?usp=drive_link", "_blank")}
              variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">60%</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">25%</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">User Retention</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}