import UseGalleryPage from "@/components/gallery-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View headshots, theatre productions, singing performances, and showreels from musical theatre performer Taylor Frisina.",
  openGraph: {
    title: "Media Gallery | Taylor Frisina",
    description:
      "Headshots, theatre photos, singing performances, and showreels featuring Taylor Frisina.",
    url: "/gallery",
  },
  alternates: {
    canonical: "/gallery",
  },
}

export default function GalleryPage() {
  return (
    <UseGalleryPage/>
  )
}