"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, Youtube, Linkedin, Music, Mail, Ruler, Pin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Get in Touch</h2>
          <p className="text-muted-foreground">For booking inquiries, collaborations, or general questions</p>
        </div>

        <div className="flex flex-col gap-12 px-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              <div className="w-full text-center">
                <Button type="submit" className="w-sm rounded-none" size="lg" variant={"outline"}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 flex flex-col items-center text-center">
            <h3 className="text-sm text-muted-foreground mb-4">taylorfrisina@gmail.com</h3>
            <div className="flex gap-4 text-muted-foreground">
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

            
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"><span className="text-primary-foreground">Copyright © 2026</span> Taylor Frisina</p>
        </footer>
      </div>
    </section>
  )
}
