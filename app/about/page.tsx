import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const performancesLeft = [
  {
    show: "Spamalot",
    role: "Lady of the Lake",
    theatre: "Theatre Ancaster Main Stage",
    director: "S. Frisk",
    category: "Theatre",
  },
  {
    show: "Into the Woods",
    role: "The Witch",
    theatre: "Connect Theatre Project",
    director: "P. Penton",
    category: "Theatre",
  },
  {
    show: "Beauty and the Beast",
    role: "Belle",
    theatre: "ArtSmart",
    director: "S. Frisk",
    category: "Theatre",
  },
]

const performancesRight = [
  {
    show: "Pippin",
    role: "Leading Player",
    theatre: "Theatre Ancaster",
    director: "S. Frisk",
    category: "Theatre",
  },
  {
    show: "Shrek the Musical",
    role: "Fiona",
    theatre: "Connect Theatre",
    director: "P. Penton",
    category: "Theatre",
  },
  {
    show: "Matilda",
    role: "Ms. Trunchbull",
    theatre: "Innovative Arts",
    director: "S. Hime",
    category: "Theatre",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[700px] md:min-h-screen overflow-hidden">
        <div className="absolute inset-y-0 left-0 hidden md:block md:w-1/2">
          <img
            src="/headshots/head5.jpg"
            alt="Taylor Frisina portrait"
            className="h-full w-full object-cover"
          />
          {/* subtle dark gradient into text side */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <img
            src="/headshots/head5.jpg"
            alt="Taylor Frisina portrait"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 md:min-h-screen flex items-center">
            <div className="md:ml-auto md:w-1/2 py-20 md:py-0">
              {/* Overlay card on mobile */}
              <div className=" mx-4 md:rounded-none p-6 md:p-0 md:absolute top-100 md:top-30 lg:top-70">
                <p className="text-sm tracking-[0.28em] uppercase text-white/70 md:text-muted-foreground">
                  About
                </p>

                <h1 className="mt-4 text-4xl md:text-6xl header-font leading-tight text-white md:text-foreground">
                  Taylor Frisina
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  Taylor Frisina is a Hamilton and Toronto based musical theatre performer and educator with extensive training and performance experience across Canada and the United Kingdom. She holds a Master’s Degree in Musical Theatre from the Royal Conservatoire of Scotland (2023) and is a graduate of the Randolph College of the Performing Arts (2022), bringing a strong foundation in acting, voice, and movement to her work.
                </p>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  A mezzo-soprano with a belt to G5, Taylor is known for her versatility, vocal strength, and dynamic storytelling. Her performance credits include leading and featured roles such as Guinevere/Lady of the Lake (Spamalot), the Witch (Into the Woods), Belle (Beauty and the Beast), the Leading Player (Pippin), and many more. She has also performed as a soloist with orchestral and symphonic ensembles, including the Cambridge Symphony Orchestra and the University of Toronto Hart House Symphonic Band, as well as in concert and cabaret settings.
                </p>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  In addition to her work on stage, Taylor is an experienced educator and creative collaborator working with both youth and adult performers. She currently works as a choreographer, vocal coach, and piano teacher, contributing to creative teams on productions such as School of Rock, Mary Poppins JR., Alice in Wonderland JR., and more.
                </p>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  Passionate about performer development, Taylor focuses on building confident, expressive artists through technically grounded, supportive, and artist-centered training.
                </p>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  Taylor continues to refine her craft through ongoing professional training and is always excited to collaborate on projects that challenge, inspire, and connect with audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main content */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl header-font">The Performer</h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                A mezzo-soprano with a belt to G5, Taylor is known for versatility, vocal
                strength, and grounded storytelling. Her work spans theatre, concert, and
                symphonic performances across Canada and the United Kingdom.
              </p>

              <div className="grid grid-cols-2">
                <Accordion
                  type="single"
                  collapsible
                  className="mt-8 space-y-2"
                >
                  {performancesLeft.map((p) => (
                    <AccordionItem
                      key={`${p.show}-${p.role}`}
                      value={`${p.show}-${p.role}`}
                      className=""
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-col text-left">
                          <span className="text-base font-semibold text-white">
                            {p.role}
                          </span>
                          <span className="text-sm text-white/60">
                            {p.show}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-5 pt-1">
                        <div className="grid sm:grid-cols-3 gap-4 text-sm text-white/80">
                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Theatre
                            </p>
                            <p>{p.theatre}</p>
                          </div>

                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Director
                            </p>
                            <p>{p.director}</p>
                          </div>

                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Category
                            </p>
                            <p>{p.category}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  className="mt-8 space-y-2"
                >
                  {performancesRight.map((p) => (
                    <AccordionItem
                      key={`${p.show}-${p.role}`}
                      value={`${p.show}-${p.role}`}
                      className=""
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-col text-left">
                          <span className="text-base font-semibold text-white">
                            {p.role}
                          </span>
                          <span className="text-sm text-white/60">
                            {p.show}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-5 pt-1">
                        <div className="grid sm:grid-cols-3 gap-4 text-sm text-white/80">
                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Theatre
                            </p>
                            <p>{p.theatre}</p>
                          </div>

                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Director
                            </p>
                            <p>{p.director}</p>
                          </div>

                          <div>
                            <p className="text-white/50 uppercase tracking-wide text-xs mb-1">
                              Category
                            </p>
                            <p>{p.category}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>


            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl header-font">The Educator</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In addition to her work on stage, Taylor is an experienced educator and
                creative collaborator for both youth and adults. She works as a
                choreographer, vocal coach, and piano teacher—supporting performers through
                technically grounded, supportive, and artist-centered training.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                She has contributed to creative teams on projects such as <span className="text-white/85">School of Rock</span>,{" "}
                <span className="text-white/85">Mary Poppins JR.</span>,{" "}
                <span className="text-white/85">Alice in Wonderland JR.</span>, and more,
                helping artists build confidence, expression, and consistency.
              </p>
            </div>
          </div>

          {/* Right column */}
          <aside className="lg:col-span-5 space-y-6 ">
            <div className="p-8">
              <h3 className="text-xl font-semibold">At a Glance</h3>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-muted-foreground">Base</dt>
                  <dd className="text-white/85 text-right">Hamilton + Toronto, ON</dd>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-muted-foreground">Training</dt>
                  <dd className="text-white/85 text-right">
                    MMus Musical Theatre (RCS, 2023)
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-muted-foreground">Voice</dt>
                  <dd className="text-white/85 text-right">
                    Mezzo-Soprano • Belt to G5
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-muted-foreground">Work</dt>
                  <dd className="text-white/85 text-right">
                    Theatre • Concert • Symphony
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <a
                    href="/#gallery"
                    className="border border-primary px-5 py-3 text-center text-sm font-medium text-primary hover:text-foreground hover:bg-black/40 transition"
                  >
                    View Media
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="/Frisina Taylor Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-primary px-5 py-3 text-center text-sm font-medium text-primary hover:text-foreground hover:bg-black/40 transition"
                  >
                    View Resume
                  </a>
                </Button>
                <Button variant="outline" className="hover" asChild>
                  <a
                    href="#contact"
                    className="border border-primary bg-primary px-5 py-3 text-center text-sm font-medium text-background hover:text-foreground transition"
                  >
                    Contact
                  </a>
                </Button>

              </div>
            </div>

            <div className=" p-8">
              <h3 className="text-xl font-semibold">Statement</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Taylor continues to refine her craft through ongoing training and is excited
                to collaborate on projects that challenge, inspire, and connect with
                audiences.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
