"use client"

import { motion } from "framer-motion"
import { Music, Award, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"

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
    <section id="about" className="relative pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={listVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl mb-6 header-font"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              About
            </motion.h2>

            <motion.div
              className="space-y-6 text-muted-foreground leading-relaxed"
              variants={{ ...listVariants, ...leftIn }}
            >
              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Taylor Frisina is a Hamilton- and Toronto-based musical theatre performer with international training from the Royal Conservatoire of Scotland, 
                where she earned her Master’s Degree in Musical Theatre in 2023. Known for her versatility and strong storytelling, she is a mezzo-soprano with a belt to G5.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Her favourite roles include Guinevere (Spamalot), the Witch (Into the Woods), Belle (Beauty and the Beast), and the Leading Player (Pippin), 
                with performance credits spanning Canada and the United Kingdom. Alongside performing, Taylor is a passionate educator,
                 working as a vocal coach, piano teacher, and choreographer for theatre programs and music academies throughout the Greater Toronto Area.
              </motion.p>
            </motion.div>
            <Button variant={"ghost"} className="mx-0 px-0 mt-6 hover:bg-background hover:text-foreground underline underline-offset-10 cursor-pointer" size={"lg"}>
              <a href="/about">READ MORE</a>
            </Button> 
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ ...blockVariants, ...rightIn }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            
          >
            <img
              src="/headshots/head4.JPEG"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
