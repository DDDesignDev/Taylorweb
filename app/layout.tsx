import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taylorportfolio-five.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taylor Frisina",
    template: "%s | Taylor Frisina",
  },
  description:
    "Official website of Taylor Frisina, a musical theatre performer and educator based in Hamilton and Toronto. Explore performance reels, gallery, and resume.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Taylor Frisina",
    url: siteUrl,
    title: "Taylor Frisina | Musical Theatre Performer & Educator",
    description:
      "Explore performance reels, gallery, and professional credits for musical theatre performer Taylor Frisina.",
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
