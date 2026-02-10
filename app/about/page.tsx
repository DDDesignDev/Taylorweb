import type { Metadata } from "next"
import UseAboutPage from "@/components/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Taylor Frisina — a Hamilton- and Toronto-based musical theatre performer, mezzo-soprano, and educator with international training.",
  openGraph: {
    title: "About | Taylor Frisina",
    description:
      "Background, training, and artistic approach of musical theatre performer and educator Taylor Frisina.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <UseAboutPage />
  )
}
