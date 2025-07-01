"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Database, Users, Award, Target } from "lucide-react"

export function About() {
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

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Full Stack Development",
      description: "Expert in React Native, React, and modern web technologies",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Mobile Applications",
      description: "Specialized in cross-platform mobile app development",
    },
    {
      icon: <Database className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Backend Integration",
      description: "Seamless API integrations and database management",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      title: "User Experience",
      description: "Focus on creating intuitive and engaging user interfaces",
    },
  ]

  const achievements = [
    { icon: <Target className="w-6 h-6 text-red-500" />, text: "Reduced support tickets by 20%" },
    { icon: <Award className="w-6 h-6 text-blue-500" />, text: "Boosted user retention by 25%" },
    { icon: <Target className="w-6 h-6 text-green-500" />, text: "Improved submission rates by 60%" },
    { icon: <Award className="w-6 h-6 text-purple-500" />, text: "Enhanced app performance by 25%" },
  ]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate Full Stack Software Developer Engineer based in Mumbai, with a strong focus on mobile
                application development. Currently working as a Mobile Application Developer at PAR Marketing Agency, I
                specialize in creating robust, scalable applications using React Native and modern web technologies.
              </p>
              <p>
                My journey in software development has been marked by significant achievements, including reducing
                support tickets by 20%, boosting user retention by 25%, and improving submission rates by 60% through
                innovative solutions and user-centric design.
              </p>
              <p>
                I thrive on solving complex problems and am constantly learning new technologies to stay at the
                forefront of software development. My experience spans from fintech applications to real estate
                platforms, always with a focus on delivering exceptional user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      {achievement.icon}
                      <span className="text-gray-700 dark:text-gray-300">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">What I Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{highlight.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">My Mission</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To create innovative, user-centric applications that solve real-world problems while continuously learning
            and adapting to new technologies. I believe in writing clean, maintainable code and delivering solutions
            that make a meaningful impact on users' lives.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
