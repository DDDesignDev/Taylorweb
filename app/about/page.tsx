export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[700px] md:min-h-screen overflow-hidden">
        <div className="absolute inset-y-0 left-0 hidden md:block md:w-1/2">
          <img
            src="/Headshot 7.jpg"
            alt="Taylor Frisina portrait"
            className="h-full w-full object-cover"
          />
          {/* subtle dark gradient into text side */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <img
            src="/Headshot 7.jpg"
            alt="Taylor Frisina portrait"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 md:min-h-screen flex items-center">
            <div className="md:ml-auto md:w-1/2 py-20 md:py-0">
              {/* Overlay card on mobile */}
              <div className=" ml-4 md:rounded-none p-6 md:p-0 absolute top-100">
                <p className="text-sm tracking-[0.28em] uppercase text-white/70 md:text-muted-foreground">
                  About
                </p>

                <h1 className="mt-4 text-4xl md:text-6xl header-font leading-tight text-white md:text-foreground">
                  Taylor Frisina
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/80 md:text-muted-foreground leading-relaxed">
                  Taylor Frisina is a Hamilton- and Toronto-based musical theatre performer and
                  educator. She holds a Master’s Degree in Musical Theatre from the Royal
                  Conservatoire of Scotland (2023) and brings international training and
                  professional experience to every project.
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

              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Guinevere / Lady of the Lake — Spamalot",
                  "The Witch — Into the Woods",
                  "Belle — Beauty and the Beast",
                  "Leading Player — Pippin",
                  "Fiona — Shrek the Musical",
                  "Ms. Trunchbull — Matilda",
                ].map((credit) => (
                  <div
                    key={credit}
                    className=" px-4 py-3 text-white/85"
                  >
                    {credit}
                  </div>
                ))}
              </div>
            </div>

            <div className=" p-8 md:p-10">
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
                <a
                  href="/#gallery"
                  className="border border-primary px-5 py-3 text-center text-sm font-medium text-primary hover:text-white hover:bg-black/40 transition"
                >
                  View Media
                </a>
                <a
                  href="/Frisina Taylor Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-primary px-5 py-3 text-center text-sm font-medium text-primary hover:text-white hover:bg-black/40 transition"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="border border-primary bg-primary px-5 py-3 text-center text-sm font-medium text-background hover:bg-foreground transition"
                >
                  Contact
                </a>
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
