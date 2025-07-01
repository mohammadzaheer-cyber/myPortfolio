import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Settings, Star } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: "JavaScript", level: "Proficient" },
        { name: "Java", level: "Familiar" },
        { name: "Kotlin", level: "Familiar" },
        { name: "HTML", level: "Proficient" },
        { name: "CSS", level: "Proficient" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: "React Native", level: "Proficient" },
        { name: "React", level: "Proficient" },
        { name: "Node.js", level: "Experienced" },
        { name: "Express.js", level: "Experienced" },
        { name: "Redux", level: "Proficient" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6 text-green-600" />,
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
        return "bg-green-100 text-green-800 border-green-200"
      case "Experienced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Familiar":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
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

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-800">
                    {category.icon}
                    <span className="ml-3">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-800">{skill.name}</span>
                            <Badge variant="outline" className={`text-xs ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`w-3 h-3 ${
                                  starIndex < getLevelStars(skill.level)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                <div className="text-gray-600">Reduction in Support Tickets</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                <div className="text-gray-600">Boost in User Retention</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">Improvement in Submission Rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
