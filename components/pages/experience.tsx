"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Building } from "lucide-react"

export function Experience() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const experiences = [
    {
      company: "PAR Marketing Agency",
      position: "Mobile Application Developer",
      duration: "Feb 2025 – Current",
      location: "Mumbai, India",
      current: true,
      achievements: [
        "Contributed to SingleDebt, SettleMyLoan, and Taurus Collection apps",
        "Developed force update mechanism and secure authentication system in React Native, reducing support tickets by 20% and unauthorized access by 75%",
        "Implemented multi-document upload and preview features using React Native, increasing user submission rates by 60%",
      ],
      technologies: ["React Native", "JavaScript", "Authentication", "Security"],
    },
    {
      company: "Homesfy Realty Ltd.",
      position: "Software Developer Engineer",
      duration: "Mar 2023 – Feb 2025",
      location: "Mumbai, India",
      current: false,
      achievements: [
        "Engineered React Native lead listing module with API integrations, boosting user retention by 25%",
        "Developed comprehensive React Native project dashboards for the MyMagnet App, improving user understanding by 70–90% and app performance by 25%",
        "Implemented Captcha technology and strategic features, enhancing lead quality and website production by 30%",
      ],
      technologies: ["React Native", "API Integration", "Redux", "Performance Optimization"],
    },
    {
      company: "Global Infotech",
      position: "Desktop Support Engineer",
      duration: "Dec 2020 – Nov 2022",
      location: "Mumbai, India",
      current: false,
      achievements: [
        "Performed system maintenance, including Outlook O365 configuration, ensuring optimal performance and service",
        "Resolved 60% of hardware issues through expert troubleshooting",
        "Reduced tickets by 20% using efficient ManageEngine management",
      ],
      technologies: ["System Administration", "Outlook O365", "Hardware Troubleshooting", "ManageEngine"],
    },
  ]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: 100 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="md:ml-16"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <CardTitle className="text-xl text-gray-800 dark:text-gray-200">{exp.position}</CardTitle>
                            {exp.current && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                Current
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + achIndex * 0.1 }}
                                className="text-gray-600 dark:text-gray-300 flex items-start"
                              >
                                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + techIndex * 0.05 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
