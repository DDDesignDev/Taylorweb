"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

const leftIn = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0 },
}

const rightIn = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0 },
}

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

export function AudioVideo() {
  return (
    <section id="showreel" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Reels and Demos</h2>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          className="grid md:grid-cols-2 md:gap-8 items-center"
          variants={row}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Mobile text */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease }} className="block md:hidden mb-4">
            <h4 className="font-semibold mb-2">Vocal Reel</h4>
            <p className="text-sm text-muted-foreground">
              A curated vocal reel showcasing a range of musical theatre styles, vocal colors,
              and storytelling through song. This compilation highlights both contemporary and
              classic repertoire, featuring live performance footage that reflects vocal
              versatility, emotional clarity, and strong technique.
            </p>
          </motion.div>

          {/* Video card */}
          <motion.div
            variants={leftIn}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -6 }}
            className="aspect-video bg-muted overflow-hidden shadow-lg will-change-transform"
          >
            <iframe
              className="w-full h-full"
              src="https://youtube.com/embed/Xk8VB32uNgw"
              title="Performance Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Desktop text */}
          <motion.div
            variants={rightIn}
            transition={{ duration: 0.75, ease }}
            className="hidden md:flex flex-col items-start justify-center"
          >
            <h4 className="font-semibold mb-2">Vocal Reel</h4>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A curated vocal reel showcasing a range of musical theatre styles, vocal colors,
              and storytelling through song. This compilation highlights both contemporary and
              classic repertoire, featuring live performance footage that reflects vocal
              versatility, emotional clarity, and strong technique.
            </p>
          </motion.div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="grid md:grid-cols-2 md:gap-8 pt-10 items-center"
          variants={row}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Desktop text (left) */}
          <motion.div
            variants={leftIn}
            transition={{ duration: 0.75, ease }}
            className="flex flex-col items-start md:items-end justify-center text-left md:text-right order-2 md:order-1 mt-4 md:mt-0"
          >
            <h4 className="font-semibold mb-2">Casting Workbook</h4>
            <p className="text-sm text-muted-foreground">
              A selection of additional performance clips, self-tapes, and materials available
              through Casting Workbook. This reel provides further insight into acting range,
              on-camera presence, and adaptability across styles and formats, supporting both
              theatrical and screen-based casting submissions.
            </p>
          </motion.div>

          {/* Video card (right) */}
          <motion.div
            variants={rightIn}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -6 }}
            className="aspect-video bg-muted overflow-hidden shadow-lg will-change-transform order-1 md:order-2"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LGwIA9g910Y"
              title="Casting Workbook"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
