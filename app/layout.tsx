import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammad Zaheer - Full Stack Software Developer Engineer",
  description:
    "Professional portfolio of Mohammad Zaheer, a Full Stack Software Developer Engineer specializing in React Native and mobile application development based in Mumbai.",
  keywords: "Mohammad Zaheer, Full Stack Developer, React Native, Mobile App Developer, Software Engineer, Mumbai",
  authors: [{ name: "Mohammad Zaheer" }],
  openGraph: {
    title: "Mohammad Zaheer - Full Stack Software Developer Engineer",
    description:
      "Professional portfolio showcasing expertise in React Native, Full Stack Development, and mobile applications.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
