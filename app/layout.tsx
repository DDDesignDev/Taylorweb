import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"


export const metadata: Metadata = {
  metadataBase: new URL("https://taylorportfolio-five.vercel.app"), // ← update to real domain
  title: {
    default: "Taylor Frisina | Musical Theatre Performer & Educator",
    template: "%s | Taylor Frisina",
  },
  description:
    "Taylor Frisina is a Hamilton- and Toronto-based musical theatre performer, mezzo-soprano, and educator with international training and professional experience.",
  keywords: [
    "Taylor Frisina",
    "musical theatre performer",
    "mezzo soprano",
    "theatre performer Canada",
    "Toronto musical theatre",
    "Hamilton musical theatre",
    "vocal coach",
    "choreographer",
  ],
  authors: [{ name: "Taylor Frisina" }],
  creator: "Taylor Frisina",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Taylor Frisina",
    images: [
      {
        url: "/og/head1.jpg",
        width: 1200,
        height: 630,
        alt: "Taylor Frisina – Musical Theatre Performer & Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/head1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <Navigation />
        {children}
        <Contact />
        <Analytics />
      </body>
    </html>
  )
}
