"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            MZ
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "relative px-3 py-2 font-medium transition-colors",
                  currentPage === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              variant="ghost"
              size="icon"
              className="ml-4"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            <Button
              onClick={() => window.open("https://drive.google.com/file/d/1VL3_sLleLKKZmwcg4ulZECDQZW_WE8N4/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} variant="ghost" size="icon">
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "block w-full text-left px-3 py-2 font-medium transition-colors",
                  currentPage === item.id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400",
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
