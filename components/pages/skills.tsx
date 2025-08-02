"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Settings, Star, Award, Target, TrendingUp } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "JavaScript", level: "Experienced" },
        { name: "Java", level: "Familiar" },
        { name: "Kotlin", level: "Familiar" },
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: "React Native", level: "Experienced" },
        { name: "React", level: "Familiar" },
        { name: "Node.js", level: "Familiar" },
        { name: "Express.js", level: "Familiar" },
        { name: "Redux", level: "Experienced" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />,
      skills: [
        { name: "Git", level: "Proficient" },
        { name: "GitHub", level: "Proficient" },
        { name: "VS Code", level: "Proficient" },
        { name: "Vercel", level: "Experienced" },
        { name: "Android Studio", level: "Experienced" },
        { name: "Jira", level: "Familiar" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Proficient":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-700"
      case "Experienced":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-700"
      case "Familiar":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-700"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
    }
  }

  const getLevelStars = (level: string) => {
    switch (level) {
      case "Proficient":
        return 5
      case "Experienced":
        return 4
      case "Familiar":
        return 3
      default:
        return 3
    }
  }

  const achievements = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      value: "20%",
      label: "Reduction in Support Tickets",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      value: "25%",
      label: "Boost in User Retention",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      value: "60%",
      label: "Improvement in Submission Rates",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      value: "25%",
      label: "Enhanced App Performance",
      color: "text-purple-600 dark:text-purple-400",
    },
  ]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-800 dark:text-gray-200">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      {category.icon}
                    </motion.div>
                    <span className="ml-3">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + skillIndex * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                            <Badge variant="outline" className={`text-xs ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, starIndex) => (
                              <motion.div
                                key={starIndex}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + starIndex * 0.05 }}
                              >
                                <Star
                                  className={`w-3 h-3 ${
                                    starIndex < getLevelStars(skill.level)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <motion.div
                      className={`text-4xl font-bold mb-2 ${achievement.color}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
                    >
                      {achievement.value}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{achievement.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Continuous Learning</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies. Currently
            exploring advanced React patterns, cloud technologies, and AI integration in mobile applications.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
