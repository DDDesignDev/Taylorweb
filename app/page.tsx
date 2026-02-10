import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MediaGallery } from "@/components/media-gallery"
import { AudioVideo } from "@/components/audio-video"
import Resume from "@/components/resume"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Taylor Frisina",
  description:
    "Official website of Taylor Frisina, a musical theatre performer and educator based in Hamilton and Toronto. Explore performance reels, gallery, and resume.",
  openGraph: {
    title: "Taylor Frisina | Musical Theatre Performer & Educator",
    description:
      "Explore performance reels, gallery, and professional credits for musical theatre performer Taylor Frisina.",
    url: "/",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="relative z-10 pt-24">
        <MediaGallery />
        <About />
        <AudioVideo />
        <Resume />
      </div>
    </main>
  )
}
