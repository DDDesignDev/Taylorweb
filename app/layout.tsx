import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   display: "swap",
// })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "Taylor Frisina — Musical Theatre Performer & Singer",
  description:
    "Professional musical theatre performer and singer. View performance reels, resume, and booking information.",
  keywords: ["musical theatre", "performer", "singer", "mezzo soprano", "Taylor Frisina"],
  openGraph: {
    title: "Taylor Frisina — Musical Theatre Performer & Singer",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
