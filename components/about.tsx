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
    <section id="about" className=" bg-background relative shadow-2xl pt-5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden shadow-xl"
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
              className="text-4xl md:text-5xl mb-6 header-font"
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
                Taylor Frisina is a Hamilton and Toronto based musical theatre performer and educator with extensive training and performance experience across Canada and the United Kingdom. She holds a Master’s Degree in Musical Theatre from the Royal Conservatoire of Scotland (2023) and is a graduate of the Randolph College of the Performing Arts (2022), bringing a strong foundation in acting, voice, and movement to her work.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                A mezzo-soprano with a belt to G5, Taylor is known for her versatility, vocal strength, and dynamic storytelling. Her performance credits include leading and featured roles such as Guinevere/Lady of the Lake (Spamalot), the Witch (Into the Woods), Belle (Beauty and the Beast), the Leading Player (Pippin), and many more. She has also performed as a soloist with orchestral and symphonic ensembles, including the Cambridge Symphony Orchestra and the University of Toronto Hart House Symphonic Band, as well as in concert and cabaret settings.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                In addition to her work on stage, Taylor is an experienced educator and creative collaborator working with both youth and adult performers. She currently works as a choreographer, vocal coach, and piano teacher, contributing to creative teams on productions such as School of Rock, Mary Poppins JR., Alice in Wonderland JR., and more.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Passionate about performer development, Taylor focuses on building confident, expressive artists through technically grounded, supportive, and artist-centered training.
              </motion.p>

              <motion.p variants={itemVariants} transition={{ duration: 0.55, ease: "easeOut" }}>
                Taylor continues to refine her craft through ongoing professional training and is always excited to collaborate on projects that challenge, inspire, and connect with audiences.
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
