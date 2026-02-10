"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/headshots/head6.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          Singer &bull; Performer &bull; Musical Theatre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className=" text-5xl leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl hero-font"
        >
          <span className="block">Taylor</span>
          <span className="mt-2 block">Frisina</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="relative top-[25vh] group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="block h-8 w-px bg-muted-foreground/50"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
