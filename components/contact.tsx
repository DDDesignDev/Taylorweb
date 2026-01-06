"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, Youtube, Linkedin, Music } from "lucide-react"
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
    <section id="contact" className="py-24 md:py-32 bg-muted relative shadow-2xl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">For booking inquiries, collaborations, or general questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Management</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Creative Artists Agency</p>
                <p>Email: management@example.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                    <Music className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to receive updates on upcoming performances
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 Jane Doe. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
