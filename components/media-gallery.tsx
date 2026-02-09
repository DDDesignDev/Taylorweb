"use client"

import { useEffect, useMemo, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type MediaCategory = "Headshots" | "Theatre" | "Singing" | "Showreels"
type MediaItem =
  | { id: number; category: MediaCategory; type: "image"; src: string; alt: string }
  | { id: number; category: MediaCategory; type: "video"; src: string; alt: string } // src can be mp4 OR a YouTube/Vimeo URL

const CATEGORIES: MediaCategory[] = ["Headshots", "Theatre", "Singing", "Showreels"]

const RESUME_URL = "/Frisina Taylor Resume.pdf" // <- change to your real resume path

const galleryItems: MediaItem[] = [
  // Headshots
  { id: 1, category: "Headshots", type: "image", src: "/Headshot 3.jpg", alt: "Headshot 1" },
  { id: 2, category: "Headshots", type: "image", src: "/Headshot 2.jpg", alt: "Headshot 2" },
  { id: 3, category: "Headshots", type: "image", src: "/Headshot 2.jpg", alt: "Headshot 2" },

  { id: 4, category: "Theatre", type: "image", src: "/Headshot 1.jpg", alt: "Headshot 3" },
  { id: 5, category: "Theatre", type: "image", src: "/Headshot 1.jpg", alt: "Headshot 3" },
  { id: 6, category: "Theatre", type: "image", src: "/Headshot 1.jpg", alt: "Headshot 3" },

  { id: 7, category: "Showreels", type: "image", src: "/Headshot 4.jpg", alt: "Headshot 4" },
  { id: 8, category: "Showreels", type: "image", src: "/Headshot 4.jpg", alt: "Headshot 4" },
  { id: 9, category: "Showreels", type: "image", src: "/Headshot 4.jpg", alt: "Headshot 4" },
  
  { id: 10, category: "Singing", type: "image", src: "/Headshot 5.jpg", alt: "Headshot 5" },
  { id: 11, category: "Singing", type: "image", src: "/Headshot 6.jpg", alt: "Headshot 6" },
  { id: 12, category: "Singing", type: "image", src: "/Headshot 7.jpg", alt: "Headshot 7" },

  // Examples (add your real media)
  // { id: 20, category: "Musical Theatre", type: "image", src: "/pippin-1.jpg", alt: "Pippin production still" },
  // { id: 30, category: "Singing", type: "image", src: "/concert-1.jpg", alt: "Concert performance still" },
  // { id: 40, category: "Showreels", type: "video", src: "https://www.youtube.com/watch?v=XXXX", alt: "Showreel" },
]

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url)
}
function isVimeo(url: string) {
  return /vimeo\.com/.test(url)
}

function toEmbedUrl(url: string) {
  // Very small helper for common providers
  if (isYouTube(url)) {
    const id =
      url.includes("youtu.be/")
        ? url.split("youtu.be/")[1]?.split(/[?&]/)[0]
        : new URL(url).searchParams.get("v")
    return id ? `https://www.youtube.com/embed/${id}` : url
  }
  if (isVimeo(url)) {
    const id = url.split("vimeo.com/")[1]?.split(/[?&/]/)[0]
    return id ? `https://player.vimeo.com/video/${id}` : url
  }
  return url
}

export function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("Headshots")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems = useMemo(
    () => galleryItems.filter((i) => i.category === activeCategory),
    [activeCategory]
  )

  // Close on Escape + lock body scroll + arrow navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null)
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i === null ? i : (i - 1 + filteredItems.length) % filteredItems.length))
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i === null ? i : (i + 1) % filteredItems.length))
    }

    document.addEventListener("keydown", onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [selectedIndex, filteredItems.length])

  // If you switch tabs while modal is open, reset to first item to avoid out-of-range
  useEffect(() => {
    if (selectedIndex === null) return
    setSelectedIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  const close = () => setSelectedIndex(null)

  const prev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const next = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % filteredItems.length)
  }

  const current = selectedIndex !== null ? filteredItems[selectedIndex] : null

  return (
    <>
      {/* Gallery Grid */}
      <section id="gallery" className="py-10 md:py-12 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl mb-4 header-font">Media Gallery</h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "relative px-1 pb-2 text-sm md:text-base tracking-wide transition-colors",
                    "text-muted-foreground hover:text-foreground",
                    active ? "text-foreground" : "",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="font-medium">{cat}</span>
                  <span
                    aria-hidden
                    className={[
                      "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity",
                      active ? "opacity-100 bg-foreground" : "opacity-0 bg-foreground",
                    ].join(" ")}
                  />
                </button>
              )
            })}
          </div>
            <div className="mb-10 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-white/70">
              <button
                type="button"
                onClick={prev}
                className="hover:text-white transition-colors uppercase duration-300"
                aria-label="Previous"
              >
                Prev
              </button>
              <span className="mx-4 text-white/35">|</span>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors uppercase duration-300"
              >
                View Resume
              </a>
              <span className="mx-4 text-white/35">|</span>
              <button
                type="button"
                onClick={next}
                className="hover:text-white transition-colors uppercase duration-300"
                aria-label="Next"
              >
                Next
              </button>
            </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-[4/5] overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-500"
                aria-label={`Open: ${item.alt}`}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/10">
                    <span className="text-sm text-muted-foreground">Video</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && current && (
        <div className="fixed inset-0 z-[9999] bg-black/95" role="dialog" aria-modal="true" aria-label="Media viewer">
          {/* Backdrop layer (click to close) */}
          <button
            type="button"
            aria-label="Close (backdrop)"
            className="absolute inset-0 cursor-zoom-out"
            onClick={close}
          />

          {/* Header: Tabs + Prev | View Resume | Next */}
          <div className="relative top-15 left-0 right-0 z-[10000] pointer-events-auto">
            <div className="mx-auto max-w-6xl px-4 pt-6">
              {/* Tabs row */}
              <div className="flex items-center justify-center gap-6 md:gap-10">
                {CATEGORIES.map((cat) => {
                  const active = cat === activeCategory
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={[
                        "relative px-1 pb-2 text-xs md:text-sm tracking-wide transition-colors",
                        "text-white/55 hover:text-white",
                        active ? "text-white" : "",
                      ].join(" ")}
                    >
                      <span className="font-medium">{cat}</span>
                      <span
                        aria-hidden
                        className={[
                          "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity",
                          active ? "opacity-100 bg-white" : "opacity-0 bg-white",
                        ].join(" ")}
                      />
                    </button>
                  )
                })}
              </div>

              {/* Prev | View Resume | Next row */}
              <div className="mt-4 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-white/70">
                <button
                  type="button"
                  onClick={prev}
                  className="hover:text-white transition-colors uppercase duration-300"
                  aria-label="Previous"
                >
                  Prev
                </button>
                <span className="mx-4 text-white/35">|</span>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors uppercase duration-300"
                >
                  View Resume
                </a>
                <span className="mx-4 text-white/35">|</span>
                <button
                  type="button"
                  onClick={next}
                  className="hover:text-white transition-colors uppercase duration-300"
                  aria-label="Next"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Close button (top-right) */}
          <div className="absolute top-4 right-4 z-[10000] pointer-events-auto">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={close} aria-label="Close">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Side chevrons (optional; keep if you like) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] pointer-events-auto">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={prev} aria-label="Previous">
              <ChevronLeft className="h-7 w-7" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] pointer-events-auto">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={next} aria-label="Next">
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>

          {/* Content */}
          <div className="relative z-[9999] h-full w-full flex items-center justify-center pt-22 p-4 pointer-events-none">
            {current.type === "image" ? (
              <img
                src={current.src || "/placeholder.svg"}
                alt={current.alt}
                className="max-w-full max-h-full object-contain select-none pointer-events-auto"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="w-full max-w-5xl aspect-video pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                {current.src.endsWith(".mp4") ? (
                  <video className="w-full h-full" controls playsInline>
                    <source src={current.src} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={toEmbedUrl(current.src)}
                    title={current.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
