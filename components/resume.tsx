"use client"

import { motion } from "framer-motion"
import { MapPin, Sparkles, Tag } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const productions = [
  { id: "1", show: "Spamalot", role: "Guinevere / Lady of the Lake", venue: "Theatre Ancaster Main Stage", director: "S. Frisk", category: "Theatre", roleType: "Lead" },
  { id: "2", show: "BIS! Concert", role: "Soloist", venue: "Festitalia Hamilton", category: "Concert", roleType: "Soloist" },
  { id: "3", show: "Movie Magic", role: "Soloist", venue: "Cambridge Symphony Orchestra", category: "Symphony", roleType: "Soloist" },
  { id: "4", show: "Into The Woods", role: "Witch", venue: "Connect Theatre Project", director: "P. Penton", category: "Theatre", roleType: "Lead" },
  { id: "5", show: "Cinematic Symphony", role: "Soloist", venue: "UofT Hart House Symphonic Band", category: "Symphony", roleType: "Soloist" },
  { id: "6", show: "Edges", role: "Charli (Character 1) / Dance Captain", venue: "RCS, Edinburgh Fringe", director: "M. Bell", category: "Fringe", roleType: "Lead" },
  { id: "7", show: "Big Fish", role: "Girl with Orange Cat / Ensemble (Understudy Witch / Alabama Lamb)", venue: "RCS, Edinburgh Fringe", director: "T. Cooper", category: "Fringe", roleType: "Ensemble" },
  { id: "8", show: "Candid Cabaret", role: "Writer / Performer", venue: "RCS", director: "Self-Directed", category: "Cabaret", roleType: "Lead" },
  { id: "9", show: "Book of Names", role: "Guard / Immigrant / Official", venue: "RCS", director: "L. Stiff", category: "Training", roleType: "Ensemble" },
  { id: "10", show: "Christmas at the Conservatoire", role: "Soloist", venue: "RCS", director: "A. Spencer-Jones", category: "Concert", roleType: "Soloist" },
  { id: "11", show: "Guys and Dolls", role: "Hot Box Dancer / Ensemble", venue: "RCPA", director: "D. Ball", category: "Training", roleType: "Ensemble" },
  { id: "12", show: "Peter and the Starcatcher", role: "Bill Slank", venue: "RCPA", director: "D. Katz", category: "Training", roleType: "Supporting" },
  { id: "13", show: "Beauty and the Beast", role: "Belle", venue: "ArtSmart", director: "S. Frisk", category: "Theatre", roleType: "Lead" },
  { id: "14", show: "Shrek the Musical", role: "Fiona", venue: "Connect Theatre", director: "P. Penton", category: "Theatre", roleType: "Lead" },
  { id: "15", show: "Pippin", role: "Leading Player", venue: "Theatre Ancaster", director: "S. Frisk", category: "Theatre", roleType: "Lead" },
  { id: "16", show: "Matilda", role: "Ms. Trunchbull", venue: "Innovative Arts", director: "S. Hime", category: "Theatre", roleType: "Lead" },
]

const teaching = [
  "Vocal Coach — Avalon Music Academy",
  "Piano Teacher — Avalon Music Academy",
  "Choreographer — School of Rock / Connect Theatre Project",
  "Choreographer — Stage 2 Junior Broadway Program, Theatre Ancaster",
]

const training = [
  "Master’s Degree in Musical Theatre — Royal Conservatoire of Scotland (2023)",
  "Diploma — Randolph College of the Performing Arts",
  "Vocal Coaching — Rebecca Poff (Current)",
]

const skills = [
  "Singing: Musical Theatre, Pop/Country, Mezzo-Soprano, Belt to G5",
  "Dance: Musical Theatre, Jazz, Ballet, Tap, Hip-Hop, Lyrical, Gymnastics",
  "Special Skills: Piano, Former Small Business Owner, Singer-Songwriter, G-Class License",
  "Other: Basketball, Volleyball, Soccer, Golf, Sewing",
]

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const ease = [0.22, 1, 0.36, 1] as const

const rightColumn = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0 },
}

export default function Resume() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl header-font">Resume & Credits</h1>
            <p className="mt-3 text-muted-foreground">
              Selected performance credits, teaching, training, and special skills.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3">
              <Button variant="outline" asChild>
                  <a
                    href="/Frisina Taylor Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    
                  >
                    View Resume
                  </a>
                </Button>
                <Button variant="default" className="hover" asChild>
                  <a
                    href="#contact"
                  >
                    Contact
                  </a>
                </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT: Productions Accordion */}
            <motion.div
              className="lg:col-span-7"
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl header-font mb-6">Productions</h2>

              <Accordion type="single" collapsible className="space-y-2">
                {productions.map((p) => (
                  <AccordionItem
                    key={p.id}
                    value={p.id}
                    className=""
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex w-full items-start justify-between gap-4 text-left">
                        <div className="min-w-0">
                          <div className="text-base font-semibold text-foreground">
                            {p.role}
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {p.show}
                          </div>
                        </div>

                        <span
                          className="shrink-0 rounded-full px-3 py-1 text-xs tracking-wide"
                        >
                          {p.roleType}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-5 pt-1">
                      <div className="grid sm:grid-cols-3 gap-4 text-sm text-white/80">
                        <div>
                          <p className="text-white/50 uppercase tracking-wide text-xs mb-1 flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Venue
                          </p>
                          <p>{p.venue}</p>
                        </div>

                        <div>
                          <p className="text-white/50 uppercase tracking-wide text-xs mb-1 flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            Director
                          </p>
                          <p>{p.director ?? "—"}</p>
                        </div>

                        <div>
                          <p className="text-white/50 uppercase tracking-wide text-xs mb-1 flex items-center gap-2">
                            <Tag className="h-4 w-4" />
                            Category
                          </p>
                          <p>{p.category}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* RIGHT: Teaching / Training / Skills */}
            <motion.aside
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 h-fit"
              variants={rightColumn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={slideInRight}
                className="p-7"
                transition={{ duration: 0.7, ease }}
              >
                <h3 className="text-lg font-semibold">Teaching & Coaching</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {teaching.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={slideInRight}
                className="p-7"
                transition={{ duration: 0.7, ease }}
              >
                <h3 className="text-lg font-semibold">Training & Education</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {training.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={slideInRight}
                transition={{ duration: 0.7, ease }}
                className="p-7"
              >
                <h3 className="text-lg font-semibold">Special Skills</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {skills.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.aside>

          </div>
        </div>
      </section>
    </main>
  )
}
