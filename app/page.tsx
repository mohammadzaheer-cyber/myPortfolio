"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { Header } from "@/components/header"
import { Home } from "@/components/pages/home"
import { About } from "@/components/pages/about"
import { Experience } from "@/components/pages/experience"
import { Projects } from "@/components/pages/projects"
import { Skills } from "@/components/pages/skills"
import { Contact } from "@/components/pages/contact"
import { WelcomeAnimation } from "@/components/welcome-animation"
import { ThemeProvider } from "@/components/theme-provider"

// SEO Configuration based on resume
const seoConfig = {
  name: "Mohammad Zaheer",
  title: "Full Stack Software Developer Engineer",
  description: "Experienced Full Stack Developer specializing in React Native, React, and JavaScript. 2+ years building mobile applications at PAR Marketing Agency and Homesfy Realty Ltd in Mumbai, India.",
  keywords: [
    "Mohammad Zaheer",
    "Full Stack Developer",
    "React Native Developer",
    "Mobile Application Developer",
    "Software Developer Engineer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Mumbai Developer",
    "React Native Apps",
    "SingleDebt App",
    "MyMagnet App",
    "Mobile App Development",
    "Cross Platform Development",
    "Redux",
    "Node.js",
    "Express.js",
    "Kotlin",
    "Android Development",
    "Portfolio",
    "Hire Developer Mumbai"
  ],
  url: "https://mohammadzaheer.dev", // Replace with your actual domain
  image: "/og-image.jpg", // Add your profile image
  email: "zk6394973@gmail.com",
  phone: "+91 7081984525",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/mohammad-zaheer-4b348618a/",
  github: "https://github.com/mohammadzaheer-cyber",
  resumeUrl: "https://drive.google.com/file/d/1VL3_sLleLKKZmwcg4ulZECDQZW_WE8N4/view?usp=drive_link"
}

// Page-specific SEO data
const pageMetadata = {
  home: {
    title: `${seoConfig.name} - ${seoConfig.title}`,
    description: seoConfig.description,
    keywords: seoConfig.keywords.slice(0, 10).join(", ")
  },
  about: {
    title: `About ${seoConfig.name} - Full Stack Developer`,
    description: "Learn about Mohammad Zaheer's journey as a Full Stack Developer with expertise in React Native, React, and mobile application development. Based in Mumbai, India.",
    keywords: "about mohammad zaheer, full stack developer biography, react native expert, mobile developer mumbai"
  },
  experience: {
    title: `${seoConfig.name} - Work Experience & Career`,
    description: "Explore Mohammad Zaheer's professional experience at PAR Marketing Agency and Homesfy Realty Ltd. 2+ years developing React Native applications and mobile solutions.",
    keywords: "mohammad zaheer experience, PAR marketing agency, homesfy realty, react native developer experience, mobile app developer career"
  },
  projects: {
    title: `${seoConfig.name} - Projects & Portfolio`,
    description: "Discover Mohammad Zaheer's portfolio including SingleDebt, MyMagnet Real Estate App, and My Magnet Connect. React Native and Kotlin projects showcase.",
    keywords: "mohammad zaheer projects, singledebt app, mymagnet app, react native projects, kotlin android apps, mobile app portfolio"
  },
  skills: {
    title: `${seoConfig.name} - Technical Skills & Expertise`,
    description: "Mohammad Zaheer's technical skills: React Native, React, JavaScript, Redux, Node.js, Express.js, Kotlin, Android Development, and more.",
    keywords: "mohammad zaheer skills, react native skills, javascript expertise, mobile development skills, full stack developer skills"
  },
  contact: {
    title: `Contact ${seoConfig.name} - Hire Full Stack Developer`,
    description: "Get in touch with Mohammad Zaheer for React Native development, mobile app projects, and full stack solutions. Available for freelance and full-time opportunities.",
    keywords: "contact mohammad zaheer, hire react native developer, mobile app developer mumbai, full stack developer contact"
  }
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [showWelcome, setShowWelcome] = useState(true)

  // Update page metadata when currentPage changes
  useEffect(() => {
    const currentMeta = pageMetadata[currentPage as keyof typeof pageMetadata]
    if (currentMeta) {
      document.title = currentMeta.title
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', currentMeta.description)
      }
      
      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', currentMeta.keywords)
      }
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', currentMeta.title)
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', currentMeta.description)
      }
      
      // Update Twitter tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', currentMeta.title)
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', currentMeta.description)
      }
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home key="home" setCurrentPage={setCurrentPage} />
      case "about":
        return <About key="about" />
      case "experience":
        return <Experience key="experience" />
      case "projects":
        return <Projects key="projects" />
      case "skills":
        return <Skills key="skills" />
      case "contact":
        return <Contact key="contact" />
      default:
        return <Home key="home" setCurrentPage={setCurrentPage} />
    }
  }

  if (showWelcome) {
    return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
  }

  return (
    <ThemeProvider>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageMetadata[currentPage as keyof typeof pageMetadata]?.title || pageMetadata.home.title}</title>
        <meta name="title" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.title || pageMetadata.home.title} />
        <meta name="description" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.description || pageMetadata.home.description} />
        <meta name="keywords" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.keywords || pageMetadata.home.keywords} />
        <meta name="author" content={seoConfig.name} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${seoConfig.url}${currentPage !== 'home' ? `/${currentPage}` : ''}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${seoConfig.url}${currentPage !== 'home' ? `/${currentPage}` : ''}`} />
        <meta property="og:title" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.title || pageMetadata.home.title} />
        <meta property="og:description" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.description || pageMetadata.home.description} />
        <meta property="og:image" content={`${seoConfig.url}${seoConfig.image}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={`${seoConfig.name} - Portfolio`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${seoConfig.url}${currentPage !== 'home' ? `/${currentPage}` : ''}`} />
        <meta property="twitter:title" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.title || pageMetadata.home.title} />
        <meta property="twitter:description" content={pageMetadata[currentPage as keyof typeof pageMetadata]?.description || pageMetadata.home.description} />
        <meta property="twitter:image" content={`${seoConfig.url}${seoConfig.image}`} />
        
        {/* LinkedIn */}
        <meta property="linkedin:owner" content={seoConfig.linkedin} />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": seoConfig.name,
              "jobTitle": seoConfig.title,
              "description": seoConfig.description,
              "url": seoConfig.url,
              "image": `${seoConfig.url}${seoConfig.image}`,
              "email": seoConfig.email,
              "telephone": seoConfig.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "sameAs": [
                seoConfig.linkedin,
                seoConfig.github
              ],
              "knowsAbout": [
                "React Native Development",
                "React Development",
                "JavaScript Programming",
                "Mobile Application Development",
                "Full Stack Development",
                "Redux State Management",
                "Node.js",
                "Express.js",
                "Kotlin Android Development",
                "Frontend Development",
                "Backend Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "PAR Marketing Agency"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "IT Vedant",
                  "description": "Master's in Full Stack Web Development"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Mumbai University",
                  "description": "Bachelor of Science in Chemistry"
                }
              ]
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": `${seoConfig.name} - Full Stack Development Services`,
              "description": "Professional React Native and Full Stack Development services in Mumbai, India",
              "url": seoConfig.url,
              "telephone": seoConfig.phone,
              "email": seoConfig.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "serviceType": [
                "React Native Development",
                "Mobile App Development",
                "Full Stack Development",
                "Web Development",
                "JavaScript Development"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": `${seoConfig.name} - Portfolio`,
              "description": seoConfig.description,
              "url": seoConfig.url,
              "author": {
                "@type": "Person",
                "name": seoConfig.name
              },
              "inLanguage": "en-US",
              "copyrightYear": new Date().getFullYear(),
              "copyrightHolder": {
                "@type": "Person",
                "name": seoConfig.name
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="pt-20">
          <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
        </main>
        
        {/* Copyright Footer */}
        <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          <p>© {new Date().getFullYear()} {seoConfig.name}. All rights reserved.</p>
          <p className="mt-1">
            Designed and developed by {seoConfig.name} | 
            <a href={seoConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
              Download Resume
            </a>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}