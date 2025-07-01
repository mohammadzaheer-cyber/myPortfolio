"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      label: "Email",
      value: "zk6394973@gmail.com",
      href: "mailto:zk6394973@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      label: "Phone",
      value: "+91 7081984525",
      href: "tel:+917081984525",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      label: "Location",
      value: "Mumbai, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/mohammadzaheer",
      color: "hover:text-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammadzaheer",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <p className="text-gray-600">Whether you have a question or just want to say hi, feel free to reach out!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center">
                      {contact.icon}
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">{contact.label}</p>
                        {contact.href ? (
                          <a href={contact.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open("mailto:zk6394973@gmail.com", "_blank")}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>

                  <Button
                    onClick={() => window.open("tel:+917081984525", "_blank")}
                    variant="outline"
                    className="w-full border-green-200 hover:bg-green-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>

                  <Button
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    variant="outline"
                    className="w-full border-blue-200 hover:bg-blue-50"
                  >
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 text-gray-600 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
