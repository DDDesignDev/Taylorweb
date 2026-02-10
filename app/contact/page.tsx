import { UseContactPage } from "@/components/contact-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Taylor Frisina for bookings, collaborations, coaching, and general inquiries.",
  openGraph: {
    title: "Contact | Taylor Frisina",
    description:
      "Get in touch with Taylor Frisina for bookings, collaborations, coaching, and general inquiries.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <UseContactPage />
}
