import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Database, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full Stack Development",
      description: "Expert in React Native, React, and modern web technologies",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Applications",
      description: "Specialized in cross-platform mobile app development",
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Backend Integration",
      description: "Seamless API integrations and database management",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "User Experience",
      description: "Focus on creating intuitive and engaging user interfaces",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="text-lg text-gray-600 mb-12 leading-relaxed space-y-4">
            <p>
              I'm a passionate Full Stack Software Developer Engineer based in Mumbai, with a strong focus on mobile
              application development. Currently working as a Mobile Application Developer at PAR Marketing Agency, I
              specialize in creating robust, scalable applications using React Native and modern web technologies.
            </p>
            <p>
              My journey in software development has been marked by significant achievements, including reducing support
              tickets by 20%, boosting user retention by 25%, and improving submission rates by 60% through innovative
              solutions and user-centric design.
            </p>
            <p>
              I thrive on solving complex problems and am constantly learning new technologies to stay at the forefront
              of software development. My experience spans from fintech applications to real estate platforms, always
              with a focus on delivering exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="font-semibold mb-2 text-gray-800">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
