import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MediaGallery } from "@/components/media-gallery"
import { Resume } from "@/components/resume"
import { AudioVideo } from "@/components/audio-video"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 pt-24">
        <About />
        <MediaGallery />
        <AudioVideo />
        <Resume />
        <Contact />
      </div>
    </main>
  )
}
