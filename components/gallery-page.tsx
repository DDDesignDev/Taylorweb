"use client"

import { useEffect, useMemo, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type MediaCategory = "Headshots" | "Theatre" | "Singing" | "Showreels"
type MediaItem =
  | { id: number; category: MediaCategory; type: "image"; src: string; alt: string }
  | { id: number; category: MediaCategory; type: "video"; src: string; alt: string; thumb?: string } 

const CATEGORIES: MediaCategory[] = ["Headshots", "Theatre", "Singing", "Showreels"]

const RESUME_URL = "/Frisina Taylor Resume.pdf" 

const galleryItems: MediaItem[] = [
  // Headshots
  { id: 1, category: "Headshots", type: "image", src: "/headshots/head10.jpg", alt: "head1" },
  { id: 2, category: "Headshots", type: "image", src: "/headshots/head2.jpg", alt: "head2" },
  { id: 3, category: "Headshots", type: "image", src: "/headshots/head11.jpg", alt: "head2" },

  { id: 4, category: "Headshots", type: "image", src: "/headshots/head3.jpg", alt: "head2" },
  { id: 5, category: "Headshots", type: "image", src: "/headshots/head5.jpg", alt: "head2" },
  { id: 6, category: "Headshots", type: "image", src: "/headshots/head14.jpg", alt: "head2" },

  { id: 7, category: "Headshots", type: "image", src: "/headshots/head13.jpg", alt: "head2" },
  { id: 8, category: "Headshots", type: "image", src: "/headshots/head15.jpg", alt: "head2" },
  { id: 9, category: "Headshots", type: "image", src: "/headshots/head9.jpg", alt: "head2" },

  { id: 10, category: "Headshots", type: "image", src: "/headshots/head1.jpg", alt: "head2" },
  { id: 11, category: "Headshots", type: "image", src: "/headshots/head6.jpg", alt: "head2" },
  { id: 12, category: "Headshots", type: "image", src: "/headshots/head12.jpg", alt: "head2" },

  { id: 13, category: "Headshots", type: "image", src: "/headshots/head8.jpg", alt: "head2" },
  { id: 14, category: "Headshots", type: "image", src: "/headshots/head7.jpg", alt: "head2" },
  { id: 15, category: "Headshots", type: "image", src: "/headshots/head4.JPEG", alt: "head2" },

  { id: 12, category: "Theatre", type: "image", src: "/theatre/the1.jpg", alt: "head3" },
  { id: 13, category: "Theatre", type: "image", src: "/theatre/the2.JPG", alt: "head3" },
  { id: 14, category: "Theatre", type: "image", src: "/theatre/the3.JPG", alt: "head3" },

  { id: 15, category: "Singing", type: "image", src: "/singing/Candid Cabaret 1.JPG", alt: "head4" },
  { id: 16, category: "Singing", type: "image", src: "/singing/Candid Cabaret 2.JPG", alt: "head4" },
  { id: 17, category: "Singing", type: "image", src: "/singing/Candid Cabaret 3.JPG", alt: "head4" },
  { id: 18, category: "Singing", type: "image", src: "/singing/Candid Cabaret 4.JPG", alt: "head4" },
  { id: 19, category: "Singing", type: "image", src: "/singing/Candid Cabaret 5.JPG", alt: "head4" },
  { id: 20, category: "Singing", type: "image", src: "/singing/Candid Cabaret 6.JPG", alt: "head4" },
  { id: 21, category: "Singing", type: "image", src: "/singing/Candid Cabaret 7.JPG", alt: "head4" },
  { id: 22, category: "Singing", type: "image", src: "/singing/Candid Cabaret 8.JPG", alt: "head4" },
  { id: 23, category: "Singing", type: "image", src: "/singing/Candid Cabaret 9.JPG", alt: "head4" },
  { id: 24, category: "Singing", type: "image", src: "/singing/Candid Cabaret 10.JPG", alt: "head4" },
  { id: 25, category: "Singing", type: "image", src: "/singing/Candid Cabaret 11.JPG", alt: "head4" },
  { id: 26, category: "Singing", type: "image", src: "/singing/Candid Cabaret 12.JPG", alt: "head4" },
  { id: 27, category: "Singing", type: "image", src: "/singing/Candid Cabaret 13.JPG", alt: "head4" },
  { id: 28, category: "Singing", type: "image", src: "/singing/Candid Cabaret 14.JPG", alt: "head4" },

  { id: 29, category: "Theatre", type: "image", src: "/theatre/Edges 2.JPG", alt: "head4" },
  { id: 30, category: "Theatre", type: "image", src: "/theatre/Edges 3.JPG", alt: "head4" },
  { id: 31, category: "Theatre", type: "image", src: "/theatre/Edges 4.JPG", alt: "head4" },
  { id: 32, category: "Theatre", type: "image", src: "/theatre/Edges 6.JPG", alt: "head4" },
  { id: 33, category: "Theatre", type: "image", src: "/theatre/Edges 7.JPG", alt: "head4" },
  { id: 34, category: "Theatre", type: "image", src: "/theatre/Edges 15.JPG", alt: "head4" },
  { id: 35, category: "Theatre", type: "image", src: "/theatre/Pippin 4.jpg", alt: "head4" },

  { id: 13, category: "Showreels", type: "video", src: "https://www.youtube.com/embed/LGwIA9g910Y", alt: "Acting Reel" },
  { id: 14, category: "Showreels", type: "video", src: "https://youtube.com/embed/Xk8VB32uNgw", alt: "Vocal Reel" },

]

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url)
}
function isVimeo(url: string) {
  return /vimeo\.com/.test(url)
}

function getYouTubeId(url: string) {
  try {
    // supports: https://www.youtube.com/embed/ID
    if (url.includes("/embed/")) return url.split("/embed/")[1]?.split(/[?&]/)[0]

    // supports: https://youtu.be/ID
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1]?.split(/[?&]/)[0]

    // supports: https://www.youtube.com/watch?v=ID
    const u = new URL(url)
    const v = u.searchParams.get("v")
    if (v) return v

    return null
  } catch {
    return null
  }
}

function getVideoThumb(item: MediaItem) {
  if (item.type !== "video") return null

  // If you manually provided a thumb, use it
  if (item.thumb) return item.thumb

  // Auto YouTube thumbnails
  const id = getYouTubeId(item.src)
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`

  // Vimeo thumbnails require an API call; easiest is to provide thumb manually
  return null
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

export default function UseGalleryPage() {
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
  <main className="min-h-screen bg-background text-foreground">
    {/* Gallery Grid */}
    <section id="gallery" className="py-24 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl header-font">Media Gallery</h2>
          <p className="mt-3 text-muted-foreground">
            Take a look at some of my headshots, theatre performances, singing engagements, and showreels.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          {/* subtle edge fades (optional but nice) */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent md:hidden" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent md:hidden" />

          {/* scroll container */}
          <div className="-mx-4 px-4 overflow-x-auto md:overflow-visible">
            <div className="flex w-max md:w-full md:justify-center items-center gap-6 md:gap-10 whitespace-nowrap">
              {CATEGORIES.map((cat) => {
                const active = cat === activeCategory
                return (
                  <Button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    variant="ghost"
                    className={[
                      "relative px-1 pb-2 text-sm md:text-base transition-colors",
                      "text-muted-foreground hover:text-foreground hover:bg-0",
                      "shrink-0", // 👈 important so buttons don’t compress on mobile
                      active ? "text-foreground" : "",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{cat}</span>
                    <span
                      aria-hidden
                      className={[
                        "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity",
                        active ? "opacity-100 bg-foreground" : "opacity-0 bg-foreground",
                      ].join(" ")}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
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
                <div className="relative w-full h-full">
                  {getVideoThumb(item) ? (
                    <img
                      src={getVideoThumb(item) || "/placeholder.svg"}
                      alt={`${item.alt} thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/10">
                      <span className="text-sm text-muted-foreground">Video</span>
                    </div>
                  )}

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-white/20 bg-black/40 backdrop-blur px-5 py-4">
                      <span className="text-white/90 text-sm tracking-wide">Play</span>
                    </div>
                  </div>
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
            <div className="relative mb-10">
              {/* subtle edge fades (optional but nice) */}
              <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent md:hidden" />
              <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent md:hidden" />

              {/* scroll container */}
              <div className="-mx-4 px-4 overflow-x-auto md:overflow-visible">
                <div className="flex w-max md:w-full md:justify-center items-center gap-6 md:gap-10 whitespace-nowrap">
                  {CATEGORIES.map((cat) => {
                    const active = cat === activeCategory
                    return (
                      <Button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        variant="ghost"
                        className={[
                          "relative px-1 pb-2 text-sm md:text-base transition-colors",
                          "text-muted-foreground hover:text-foreground hover:bg-0",
                          "shrink-0", // 👈 important so buttons don’t compress on mobile
                          active ? "text-foreground" : "",
                        ].join(" ")}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{cat}</span>
                        <span
                          aria-hidden
                          className={[
                            "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full transition-opacity",
                            active ? "opacity-100 bg-foreground" : "opacity-0 bg-foreground",
                          ].join(" ")}
                        />
                      </Button>
                    )
                  })}
                </div>
              </div>
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
                href="/gallery"
                rel="noreferrer"
                className="hover:text-white transition-colors uppercase duration-300"
              >
                View Gallery
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
  </main>
)
}
