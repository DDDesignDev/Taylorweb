import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MediaGallery } from "@/components/media-gallery"
import { AudioVideo } from "@/components/audio-video"
import Resume from "@/components/resume"
import type { Metadata } from "next"

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
