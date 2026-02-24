"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Instagram, Youtube, Music, Ruler, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContact } from "@/lib/sendContact"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const ts = useMemo(() => Date.now(), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    try {
      await sendContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        ts,
        company_website: "", // honeypot optional
      });

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Something went wrong.");
    }
  };

  return (
    <section id="contact" className=" md:py-2 relative pb-12">
      <div className="container mx-auto px-4 max-w-6xl border-t pt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Get in Touch</h2>
          <p className="text-muted-foreground">For booking inquiries, collaborations, or general questions</p>
        </div>

        <div className="flex flex-col items-center gap-12 px-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 w-sm md:w-xl">
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
                <Button
                  type="submit"
                  className="w-[200px] md:w-lg rounded-none"
                  variant={"outline"}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>

                {status === "sent" && (
                  <p className="mt-3 text-sm text-green-600">Thanks — your message was sent!</p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">{error ?? "Failed to send."}</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 flex flex-col items-center text-center">
            <h3 className="text-sm text-muted-foreground mb-4">taylorfrisinaa@gmail.com</h3>
            <div className="flex gap-4 text-muted-foreground">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com/taylorfrisinaaa" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.youtube.com/channel/UCEFvtilqtOi8TSWPBRvqVmA" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.facebook.com/taylor.frisina.7/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://music.apple.com/profile/taylorfrisina" target="_blank" rel="noopener noreferrer">
                  <Music className="h-5 w-5" />
                </a>
              </Button>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
