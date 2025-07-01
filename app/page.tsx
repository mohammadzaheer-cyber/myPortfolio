"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Home } from "@/components/pages/home"
import { About } from "@/components/pages/about"
import { Experience } from "@/components/pages/experience"
import { Projects } from "@/components/pages/projects"
import { Skills } from "@/components/pages/skills"
import { Contact } from "@/components/pages/contact"
import { WelcomeAnimation } from "@/components/welcome-animation"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [showWelcome, setShowWelcome] = useState(true)

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home key="home" setCurrentPage={setCurrentPage} />
      case "about":
        return <About key="about" />
      case "experience":
        return <Experience key="experience" />
      case "projects":
        return <Projects key="projects" />
      case "skills":
        return <Skills key="skills" />
      case "contact":
        return <Contact key="contact" />
      default:
        return <Home key="home" setCurrentPage={setCurrentPage} />
    }
  }

  if (showWelcome) {
    return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="pt-20">
          <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  )
}
