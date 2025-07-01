import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "IT Vedant",
      degree: "Master's in Full Stack Web Development",
      duration: "June 2022 - May 2024",
      location: "Mumbai, India",
      type: "Master's Degree",
      description:
        "Comprehensive program covering modern web development technologies, frameworks, and best practices.",
    },
    {
      institution: "Mumbai University",
      degree: "Bachelor of Science in Chemistry",
      duration: "Completed May 2022",
      location: "Mumbai, India",
      gpa: "7.9 / 10.0",
      type: "Bachelor's Degree",
      description: "Strong foundation in analytical thinking and problem-solving through scientific methodology.",
    },
  ]

  const certifications = [
    {
      title: "Diploma in Network Administration",
      issuer: "Jetking Thane Learning Centre",
      description: "Successfully completed comprehensive network administration course",
      icon: <Award className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Java Fundamentals",
      issuer: "IBM Developer Skills Network",
      credential: "CEJAVA1IN, provided by IBM CEP",
      description: "Certified in Java programming fundamentals and object-oriented programming concepts",
      icon: <Award className="w-5 h-5 text-orange-600" />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-800 mb-2">{edu.degree}</CardTitle>
                        <h3 className="text-lg font-semibold text-blue-600">{edu.institution}</h3>
                        {edu.gpa && (
                          <p className="text-sm text-green-600 font-medium mt-1">Cumulative GPA: {edu.gpa}</p>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 w-fit">
                          {edu.type}
                        </Badge>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-purple-600" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg text-gray-800">
                      {cert.icon}
                      <span className="ml-3">{cert.title}</span>
                    </CardTitle>
                    <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    {cert.credential && (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 w-fit">
                        {cert.credential}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
