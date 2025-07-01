"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      label: "Email",
      value: "zk6394973@gmail.com",
      href: "mailto:zk6394973@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />,
      label: "Phone",
      value: "+91 7081984525",
      href: "tel:+917081984525",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />,
      label: "Location",
      value: "Mumbai, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/mohammadzaheer-cyber",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-zaheer-4b348618a/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h1>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-200 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-800 dark:text-gray-200">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => window.open("mailto:zk6394973@gmail.com", "_blank")}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => window.open("tel:+917081984525", "_blank")}
                        variant="outline"
                        className="w-full border-green-200 hover:bg-green-50 dark:border-green-700 dark:hover:bg-green-900/20"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => window.open("https://drive.google.com/file/d/1VL3_sLleLKKZmwcg4ulZECDQZW_WE8N4/view?usp=drive_link", "_blank")}
                        variant="outline"
                        className="w-full border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/50 dark:bg-gray-700/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/50 dark:bg-gray-700/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-white/50 dark:bg-gray-700/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/50 dark:bg-gray-700/50"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-300 hover:shadow-lg text-gray-600 dark:text-gray-400 ${social.color}`}
                title={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
