"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, PersonStanding, Star } from "lucide-react"

const productions = [
  {
    id: "1",
    show: "Spamalot",
    role: "Guinevere / Lady of the Lake",
    venue: "Theatre Ancaster Main Stage",
    director: "S. Frisk",
    category: "Theatre",
    roleType: "Lead",
  },
  {
    id: "2",
    show: "BIS! Concert",
    role: "Soloist",
    venue: "Festitalia Hamilton",
    category: "Concert",
    roleType: "Soloist",
  },
  {
    id: "3",
    show: "Movie Magic",
    role: "Soloist",
    venue: "Cambridge Symphony Orchestra",
    category: "Symphony",
    roleType: "Soloist",
  },
  {
    id: "4",
    show: "Into The Woods",
    role: "Witch",
    venue: "Connect Theatre Project",
    director: "P. Penton",
    category: "Theatre",
    roleType: "Lead",
  },
  {
    id: "5",
    show: "Cinematic Symphony",
    role: "Soloist",
    venue: "UofT Hart House Symphonic Band",
    category: "Symphony",
    roleType: "Soloist",
  },
  {
    id: "6",
    show: "Edges",
    role: "Charli (Character 1) / Dance Captain",
    venue: "RCS, Edinburgh Fringe",
    director: "M. Bell",
    category: "Fringe",
    roleType: "Lead",
  },
  {
    id: "7",
    show: "Big Fish",
    role: "Girl with Orange Cat / Ensemble (Understudy Witch / Alabama Lamb)",
    venue: "RCS, Edinburgh Fringe",
    director: "T. Cooper",
    category: "Fringe",
    roleType: "Ensemble",
  },
  {
    id: "8",
    show: "Candid Cabaret",
    role: "Writer / Performer",
    venue: "RCS",
    director: "Self-Directed",
    category: "Cabaret",
    roleType: "Lead",
  },
  {
    id: "9",
    show: "Book of Names",
    role: "Guard / Immigrant / Official",
    venue: "RCS",
    director: "L. Stiff",
    category: "Training",
    roleType: "Ensemble",
  },
  {
    id: "10",
    show: "Christmas at the Conservatoire",
    role: "Soloist",
    venue: "RCS",
    director: "A. Spencer-Jones",
    category: "Concert",
    roleType: "Soloist",
  },
  {
    id: "11",
    show: "Guys and Dolls",
    role: "Hot Box Dancer / Ensemble",
    venue: "RCPA",
    director: "D. Ball",
    category: "Training",
    roleType: "Ensemble",
  },
  {
    id: "12",
    show: "Peter and the Starcatcher",
    role: "Bill Slank",
    venue: "RCPA",
    director: "D. Katz",
    category: "Training",
    roleType: "Supporting",
  },
  {
    id: "13",
    show: "Beauty and the Beast",
    role: "Belle",
    venue: "ArtSmart",
    director: "S. Frisk",
    category: "Theatre",
    roleType: "Lead",
  },
  {
    id: "14",
    show: "Shrek the Musical",
    role: "Fiona",
    venue: "Connect Theatre",
    director: "P. Penton",
    category: "Theatre",
    roleType: "Lead",
  },
  {
    id: "15",
    show: "Pippin",
    role: "Leading Player",
    venue: "Theatre Ancaster",
    director: "S. Frisk",
    category: "Theatre",
    roleType: "Lead",
  },
  {
    id: "16",
    show: "Matilda",
    role: "Ms. Trunchbull",
    venue: "Innovative Arts",
    director: "S. Hime",
    category: "Theatre",
    roleType: "Lead",
  },
]

const awards = [
  "Vocal Coach - Avalon Music Academy",
  "Piano Teacher - Avalon Music Academy",
  "Choreographer - School of Rock/Connect Theatre Project",
  "Choreographer - Stage 2 Junior Broadway Program, Theatre Ancaster",
]

const training = [
  "MFA in Musical Theatre - Royal Conservatoire of Scotland",
  "Diploma - Randolph College of the Performing Arts",
  "Vocal Coaching - Rebecca Poff, Voice",
]

const skills = [
  "Singing: Musical Theatre, Pop/Country, Mezzo-Soprano, Belt to G5",
  "Dance: Musical Theatre, Jazz, Ballet, Tap, Hip-Hop, Lyrical, Gymnastics",
  "Special Skills: Piano, Former Small Business Owner, Singer-Songwriter, G-Class License",
  "Other Skills: Basketball, Volleyball, Soccer, Golf, Sewing"
]

const blockVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

export function Resume() {
  return (
    <section id="credits" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header can animate lightly (optional) */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Resume & Credits</h2>
          <p className="text-muted-foreground">Professional experience and training</p>
        </motion.div>

        <div className="space-y-16 relative left-0 right-0 mx-auto max-w-6xl px-4">
          {/* Productions (block animates in; rows stagger in) */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6" />
              Productions
            </h3>

            <motion.div
              className="space-y-6"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {productions.map((prod) => (
                <motion.div
                  key={prod.id}
                  variants={itemVariants}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="border-l-2 border-accent pl-6 py-2"
                >
                  <h4 className="text-xl font-semibold mb-2">{prod.show}</h4>
                  <p className="text-lg text-muted-foreground mb-1">{prod.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {prod.venue} {prod.director ? ` - ${prod.director}` : ""}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Awards */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-6">Teaching & Coaching</h3>
            <motion.ul variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="space-y-3">
              {awards.map((award, index) => (
                <motion.li key={index} variants={itemVariants} transition={{ duration: 0.45, ease: "easeOut" }} className="flex items-start gap-2">
                  <span className="text-accent-foreground">•</span>
                  <span>{award}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Training */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-6">Training & Education</h3>
            <motion.ul variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="space-y-3">
              {training.map((item, index) => (
                <motion.li key={index} variants={itemVariants} transition={{ duration: 0.45, ease: "easeOut" }} className="flex items-start gap-2">
                  <span className="text-accent-foreground">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-6">Special Skills</h3>
            <motion.ul variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="space-y-3">
              {skills.map((skill, index) => (
                <motion.li key={index} variants={itemVariants} transition={{ duration: 0.45, ease: "easeOut" }} className="flex items-start gap-2">
                  <span className="text-accent-foreground">•</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
