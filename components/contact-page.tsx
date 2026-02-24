"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContact } from "@/lib/sendContact"

type FormState = "idle" | "sending" | "success" | "error"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function UseContactPage() {
  const [state, setState] = useState<FormState>("idle")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    if (state === "sending") return false
    if (!name.trim()) return false
    if (!isEmail(email)) return false
    if (!message.trim() || message.trim().length < 10) return false
    return true
  }, [name, email, message, state])

  const ts = useMemo(() => Date.now(), []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setState("sending");

    try {
      await sendContact({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        ts,
        company_website: "", // honeypot (optional)
      });

      setState("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setState("error");
      setError(err?.message ?? "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl header-font">Contact</h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              For booking inquiries, collaborations, coaching, or general questions, send a message below.
              I’ll get back to you as soon as I can.
            </p>
          </div>

          {/* Content */}
          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold">Send a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Please include as much detail as possible (dates, location, project type, etc.).
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        autoComplete="email"
                        inputMode="email"
                        required
                      />
                      {email.length > 0 && !isEmail(email) && (
                        <p className="mt-2 text-xs text-destructive">Please enter a valid email.</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="subject">
                      Subject (optional)
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Booking inquiry / coaching / collaboration…"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a bit about what you’re looking for…"
                      rows={7}
                      required
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Minimum 10 characters.
                    </p>
                  </div>

                  {/* Status */}
                  {state === "success" && (
                    <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm">
                      Thanks — your message has been sent!
                    </div>
                  )}
                  {state === "error" && (
                    <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm">
                      {error ?? "Something went wrong. Please try again."}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled={!canSubmit} className="min-w-[160px]">
                      {state === "sending" ? "Sending…" : "Send Message"}
                    </Button>
                    {status === "sent" && (
                      <p className="mt-3 text-sm text-green-600">Thanks — your message was sent!</p>
                    )}
                    {status === "error" && (
                      <p className="mt-3 text-sm text-red-600">{error ?? "Failed to send."}</p>
                    )}
                    <a
                      href="mailto:taylorfrisina@gmail.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Or email directly
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold">Direct contact</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer email? You can reach me here:
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Email</span>
                    <a
                      href="mailto:taylorfrisinaa@gmail.com"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      taylorfrisinaa@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Based in</span>
                    <span>Hamilton & Toronto, ON</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold">What to include</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Date(s) and location (if booking)</li>
                  <li>Type of project (performance, coaching, collaboration)</li>
                  <li>Your timeline and any relevant links</li>
                </ul>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold">Socials</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check out my social media for the latest updates, behind-the-scenes content, and more!
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <a href="https://instagram.com/taylorfrisinaaa" target="_blank" rel="noreferrer">Instagram</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://www.youtube.com/channel/UCEFvtilqtOi8TSWPBRvqVmA" target="_blank" rel="noreferrer">YouTube</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://www.facebook.com/taylor.frisina.7/" target="_blank" rel="noopener noreferrer">Facbook</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://music.apple.com/profile/taylorfrisina" target="_blank" rel="noreferrer">Apple Music</a>
                  </Button>
                  
                  
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
