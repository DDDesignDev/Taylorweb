"use client"

import { motion } from "framer-motion"
import { Music, Award, GraduationCap } from "lucide-react"

const blockVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

const leftIn = { hidden: { opacity: 0, x: -100 }, show: { opacity: 1, x: 0 } }
const rightIn = { hidden: { opacity: 0, x: 100 }, show: { opacity: 1, x: 0 } }

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ ...blockVariants, ...leftIn }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            
          >
            <img
              src="/Headshot 6.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={listVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              About
            </motion.h2>

            <motion.div
              className="space-y-6 text-muted-foreground leading-relaxed"
              variants={{ ...listVariants, ...rightIn }}
            >
              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Taylor Frisina is a versatile Musical Theatre performer based in Hamilton and Toronto, Ontario.
                With a
                <span className="font-semibold"> Masters Degree from the Royal Conservatoire of Scotland </span>,
                she brings international training and professional experience to every role.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                As a <span className="font-semibold">Mezzo-Soprano</span> with a belt to G5, Taylor has performed
                leading roles including Guinevere in <span className="italic">Spamalot</span>, the Witch in{" "}
                <span className="italic">Into The Woods</span>, Belle in{" "}
                <span className="italic">Beauty and the Beast</span>, and the Leading Player in{" "}
                <span className="italic">Pippin</span>. Her work spans theatre, concert, and symphony performances
                across Canada and the UK.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Beyond performing, Taylor is a passionate educator, serving as a vocal coach, piano teacher, and
                choreographer for numerous theatre programs and music academies in the Greater Toronto Area.
              </motion.p>
            </motion.div>

            {/* Key Info */}
            <motion.div className="mt-8 space-y-4" variants={listVariants}>
              <motion.div className="flex items-start gap-3" variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                <Music className="h-5 w-5 text-accent-foreground mt-1" />
                <div>
                  <p className="font-semibold">Voice Type</p>
                  <p className="text-sm text-muted-foreground">Mezzo Soprano, D3-E6 (Belt G5)</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-3" variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                <Award className="h-5 w-5 text-accent-foreground mt-1" />
                <div>
                  <p className="font-semibold">Specialties</p>
                  <p className="text-sm text-muted-foreground">Musical Theatre, Non-Union, Contemporary Dance</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-3" variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                <GraduationCap className="h-5 w-5 text-accent-foreground mt-1" />
                <div>
                  <p className="font-semibold">Training</p>
                  <p className="text-sm text-muted-foreground">Royal Conservatoire of Scotland, Randolph College</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
