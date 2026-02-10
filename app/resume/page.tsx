import Resume from "@/components/resume"
import UseResumePage from "@/components/resume-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume & Credits",
  description:
    "Professional resume and selected performance credits for musical theatre performer and educator Taylor Frisina.",
  openGraph: {
    title: "Resume & Credits | Taylor Frisina",
    description:
      "Selected theatre, concert, and training credits for musical theatre performer Taylor Frisina.",
    url: "/resume",
    type: "website",
  },
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumePage() {
  return (
    <UseResumePage />
  )
}