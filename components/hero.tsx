"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              MZ
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Mohammad Zaheer
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
              Full Stack Software Developer Engineer
            </h2>
            <div className="flex items-center justify-center text-gray-500 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Mumbai, India</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate Mobile Application Developer with expertise in React Native and Full Stack Development. Currently
            contributing to innovative fintech solutions while building scalable applications that enhance user
            experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => window.open("https://github.com/mohammadzaheer", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              onClick={() => window.open("https://linkedin.com/in/mohammadzaheer", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              onClick={() => window.open("mailto:zk6394973@gmail.com", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
            <Button
              onClick={() => window.open("tel:+917081984525", "_blank")}
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
          </div>

          <Button onClick={scrollToAbout} variant="ghost" size="lg" className="animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
