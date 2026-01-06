import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="fixed inset-0 z-0">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/vocalreel.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/vocalreel.jpg"
            alt="Performance shot"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content - only visible in initial viewport */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 text-balance">Taylor Frisina</h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4">
          Musical Theatre Performer & Singer
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
          Bringing stories to life through song and performance
        </p>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
