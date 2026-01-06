"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { id: 1, type: "image", src: "/Headshot 1.jpg", alt: "Performance in Hamilton" },
  { id: 2, type: "image", src: "/Headshot 2.jpg", alt: "Opera performance" },
  { id: 3, type: "image", src: "/Headshot 3.jpg", alt: "Dance number" },
  { id: 4, type: "image", src: "/Headshot 4.jpg", alt: "Rehearsal" },
  { id: 5, type: "image", src: "/Headshot 5.jpg", alt: "Dramatic scene" },
  { id: 6, type: "image", src: "/Headshot 6.jpg", alt: "Solo performance" },
  { id: 7, type: "image", src: "/Headshot 7.jpg", alt: "Solo performance" },
]

export function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Close on Escape + lock body scroll
  useEffect(() => {
    if (selectedImage === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
      if (e.key === "ArrowLeft") setSelectedImage((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length))
      if (e.key === "ArrowRight") setSelectedImage((i) => (i === null ? i : (i + 1) % galleryItems.length))
    }

    document.addEventListener("keydown", onKeyDown)

    // prevent background scroll while modal open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [selectedImage])

  const close = () => setSelectedImage(null)

  const prev = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length)
  }

  const next = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % galleryItems.length)
  }

  return (
    <>
      {/* Gallery Grid */}
      <section id="media" className="py-24 md:py-32 bg-background relative shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Media Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey through performances, productions, and behind-the-scenes moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-500"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
  <div
    className="fixed inset-0 z-[9999] bg-black/95"
    role="dialog"
    aria-modal="true"
    aria-label="Image viewer"
  >
    {/* Backdrop layer (click to close) */}
    <button
      type="button"
      aria-label="Close image (backdrop)"
      className="absolute inset-0 cursor-zoom-out"
      onClick={close}
    />

    {/* Top controls (always clickable) */}
    <div className="absolute top-4 right-4 z-[10000] pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={close}
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </Button>
    </div>

    {/* Prev / Next controls */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={prev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>
    </div>

    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={next}
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>
    </div>

    {/* Content (stops backdrop click) */}
    <div
      className="relative z-[9999] h-full w-full flex items-center justify-center p-4 pointer-events-none"
    >
      <img
        src={galleryItems[selectedImage].src || "/placeholder.svg"}
        alt={galleryItems[selectedImage].alt}
        className="max-w-full max-h-full object-contain select-none pointer-events-auto"
        draggable={false}
        onClick={(e) => e.stopPropagation()} // prevents accidental close when clicking image
      />
    </div>
  </div>
)}

    </>
  )
}
