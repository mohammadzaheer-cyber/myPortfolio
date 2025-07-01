"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar, TrendingUp } from "lucide-react"

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const projects = [
    {
      title: "SingleDebt",
      framework: "React Native Framework",
      duration: "Feb 2025 - Present",
      description:
        "Led React Native development for SingleDebt, enhancing performance, security, and user experience. Implemented secure login and document upload, boosting user trust and submissions by 60%.",
      achievements: [
        "Enhanced app performance and security",
        "Implemented secure authentication system",
        "Boosted user submissions by 60%",
        "Improved user trust through secure document handling",
      ],
      technologies: ["React Native", "Authentication", "Security", "Document Upload"],
      status: "Current",
      featured: true,
    },
    {
      title: "MyMagnet Real Estate App",
      framework: "React Native Framework",
      duration: "Nov 2023 - Feb 2025",
      description:
        "Deployed a React Native app with Redux, improving performance by 10% and boosting user engagement by 25%. Built interactive features and enhanced navigation, reducing user errors by 50%.",
      achievements: [
        "Improved app performance by 10%",
        "Boosted user engagement by 25%",
        "Reduced user errors by 50%",
        "Integrated 40+ frontend components",
      ],
      technologies: ["React Native", "Redux", "Navigation", "API Integration"],
      status: "Completed",
      featured: true,
    },
    {
      title: "MyMagnet Connect",
      framework: "Kotlin",
      duration: "March 2024 - Feb 2025",
      description:
        "Developed MyMagnet Connect, an in-house Android app using Kotlin for Relationship Managers to schedule and update meetings with clients. Enabled login functionality for RMs using phone and password.",
      achievements: [
        "Built native Android application",
        "Implemented secure login system",
        "Created meeting scheduling functionality",
        "Designed for internal business use",
      ],
      technologies: ["Kotlin", "Android", "Authentication", "Meeting Management"],
      status: "Completed",
      featured: false,
    },
    {
      title: "SettleMyLoan",
      framework: "React Native Framework",
      duration: "Feb 2025 - Present",
      description:
        "Contributing to SettleMyLoan application development, focusing on user experience improvements and secure financial transaction handling.",
      achievements: [
        "Enhanced user experience",
        "Implemented secure transactions",
        "Improved app stability",
        "Optimized performance",
      ],
      technologies: ["React Native", "Financial APIs", "Security", "UX/UI"],
      status: "Current",
      featured: false,
    },
    {
      title: "Taurus Collection App",
      framework: "React Native Framework",
      duration: "Feb 2025 - Present",
      description:
        "Developed collection management application with focus on efficient data handling and user-friendly interface for collection operations.",
      achievements: [
        "Streamlined collection processes",
        "Improved data management",
        "Enhanced user interface",
        "Optimized workflow efficiency",
      ],
      technologies: ["React Native", "Data Management", "UI/UX", "Workflow Optimization"],
      status: "Current",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h1>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Highlighted Work</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-800 dark:text-gray-200 mb-2">{project.title}</CardTitle>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.framework}</p>
                      </div>
                      <Badge
                        variant={project.status === "Current" ? "default" : "secondary"}
                        className={
                          project.status === "Current"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-xs flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-200 mb-2">{project.title}</CardTitle>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{project.framework}</p>
                      </div>
                      <Badge
                        variant={project.status === "Current" ? "default" : "secondary"}
                        className={
                          project.status === "Current"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">More projects coming soon...</p>
          <Button
            onClick={() => window.open("https://github.com/mohammadzaheer-cyber", "_blank")}
            variant="outline"
            className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
