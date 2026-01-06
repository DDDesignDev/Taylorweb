import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MediaGallery } from "@/components/media-gallery"
import { Resume } from "@/components/resume"
import { AudioVideo } from "@/components/audio-video"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="relative z-10 pt-[100vh]">
        <About />
        <MediaGallery />
        <div className="h-screen" />f
        <Resume />
        <AudioVideo />
        <Testimonials />
        <Contact />
      </div>
    </main>
  )
}
