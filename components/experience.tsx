import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "PAR Marketing Agency",
      position: "Mobile Application Developer",
      duration: "Feb 2025 – Current",
      location: "Mumbai, India",
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
      achievements: [
        "Performed system maintenance, including Outlook O365 configuration, ensuring optimal performance and service",
        "Resolved 60% of hardware issues through expert troubleshooting",
        "Reduced tickets by 20% using efficient ManageEngine management",
      ],
      technologies: ["System Administration", "Outlook O365", "Hardware Troubleshooting", "ManageEngine"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{exp.position}</CardTitle>
                      <h3 className="text-lg font-semibold text-blue-600">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
