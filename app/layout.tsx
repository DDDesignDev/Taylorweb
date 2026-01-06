import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jane Doe — Musical Theatre Performer & Singer",
  description:
    "Professional musical theatre performer and singer. Broadway credits include Hamilton, Wicked, and Les Misérables. View performance reels, resume, and booking information.",
  keywords: ["musical theatre", "performer", "singer", "Broadway", "soprano", "Jane Doe"],
  openGraph: {
    title: "Jane Doe — Musical Theatre Performer & Singer",
    description: "Professional musical theatre performer and singer with Broadway and national tour credits",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
