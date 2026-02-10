"use client"

import Link from "next/link"
import { Instagram, Youtube, Linkedin, Music, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="header-font text-xl">Taylor Frisina</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Musical theatre performer and educator based in Hamilton and Toronto.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Hamilton & Toronto, ON
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:taylorfrisina@gmail.com"
                className="hover:underline text-muted-foreground"
              >
                taylorfrisina@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/resume" className="hover:underline">Resume</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Connect
            </h4>

            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                  <Music className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <Button asChild className="mt-2">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Taylor Frisina. All rights reserved.
          </p>
          <p>
            Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
