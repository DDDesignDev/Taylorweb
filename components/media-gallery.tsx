"use client"

import { useState } from "react"
import { X } from "lucide-react"
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
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={galleryItems[selectedImage].src || "/placeholder.svg"}
            alt={galleryItems[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  )
}
