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
  icons: {
    icon: "/og/head1.jpg",
    apple: "/og/head1.jpg",
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
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Taylor Frisina",
      description:
        "Official website of Taylor Frisina, musical theatre performer and educator based in Hamilton and Toronto.",
      inLanguage: "en-CA",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Taylor Frisina",
      url: siteUrl,
      jobTitle: ["Musical Theatre Performer", "Educator", "Vocal Coach", "Choreographer"],
      image: `${siteUrl}/og/head1.jpg`, // or a real headshot URL
      sameAs: [
        // put your real links (remove any you don't have)
        // "https://www.instagram.com/yourhandle",
        // "https://www.youtube.com/@yourchannel",
        // "https://www.linkedin.com/in/yourprofile",
      ],
      homeLocation: [
        { "@type": "City", name: "Hamilton, Ontario, Canada" },
        { "@type": "City", name: "Toronto, Ontario, Canada" },
      ],
    },
  ],
}
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Contact />
        <Analytics />
      </body>
    </html>
  )
}
