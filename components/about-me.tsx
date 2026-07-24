import { Reveal } from "@/components/reveal"

type Milestone = {
  year: string
  place: string
  lesson: string
  body: string
  image: string
  alt: string
  imagePosition?: string
  imageZoom?: number
  imageZoomOrigin?: string
}

const milestones: Milestone[] = [
  {
    year: "2023",
    place: "Southeast Asia",
    lesson: "God showed me He is at work among the nations.",
    body: "One of my first times serving cross-culturally. I arrived unsure of what I had to offer, and left having watched God move in places and people I never expected. My eyes were opened to a world far bigger than my own.",
    image: "/images/sea.jpg",
    alt: "Southeast Asia Missions Trip 2023",
    imageZoom: 1.2,
    imageZoomOrigin: "60% 100%",
  },
  {
    year: "2024",
    place: "Japan",
    lesson: "God showed me the joy of sharing the gospel across cultures.",
    body: "This is where my heart broke open. Sharing the gospel, serving students, sitting in long conversations over coffee — I saw God soften hearts and I felt more alive in His work than I ever had. Japan didn't leave me after I flew home.",
    image: "/images/japan.jpg",
    alt: "Japan Missions Trip 2024",
    imagePosition: "0% 50%",
    imageZoom: 1.1,
    imageZoomOrigin: "30% 100%",
  },
]

export function AboutMe() {
  return (
    <section id="story" className="scroll-mt-16 overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
              My Story
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground text-balance md:text-5xl">
              How God Led Me Here
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              This was never about choosing a country. Looking back over three summers, I can see how God
              patiently expanded my heart for His mission — one step at a time.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-20 md:mt-28">
          {/* Route line */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-2 bottom-2 w-px border-l border-dashed border-border md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-20 md:space-y-32">
            {milestones.map((m, i) => (
              <Reveal key={m.year}>
                <div className="relative md:grid md:grid-cols-2 md:items-center md:gap-14">
                  {/* Stamp marker */}
                  <div className="absolute left-0 top-0 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <StampBadge year={m.year} />
                  </div>

                  {/* Image */}
                  <div className={i % 2 === 1 ? "md:order-2 md:col-start-2" : ""}>
                    <div className="ml-20 overflow-hidden rounded-sm shadow-sm md:ml-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.image || "/placeholder.svg"}
                        alt={m.alt}
                        className="aspect-[4/3] w-full object-cover"
                        style={{
                          objectPosition: m.imagePosition,
                          transform: m.imageZoom ? `scale(${m.imageZoom})` : undefined,
                          transformOrigin: m.imageZoomOrigin ?? m.imagePosition,
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`ml-20 mt-6 md:ml-0 md:mt-0 ${i % 2 === 1 ? "md:order-1 md:col-start-1 md:text-right" : ""}`}>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground">
                      {m.place}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-light italic leading-snug text-foreground text-balance md:text-3xl">
                      {m.lesson}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Asia Minor — the turning point */}
            <Reveal>
              <div className="relative md:grid md:grid-cols-2 md:items-center md:gap-14">
                {/* Stamp marker */}
                <div className="absolute left-0 top-0 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <StampBadge year="2025" featured />
                </div>

                {/* Image */}
                <div>
                  <div className="ml-20 overflow-hidden rounded-sm shadow-sm md:ml-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/am.jpg"
                      alt="Asia Minor Missions Trip 2025"
                      className="aspect-[4/3] w-full object-cover"
                      style={{
                        transform: "scale(1.15)",
                        transformOrigin: "50% 100%",
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="ml-20 mt-6 md:ml-0 md:mt-0">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground">
                    Asia Minor · The Turning Point
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light italic leading-snug text-foreground text-balance md:text-3xl">
                    God showed me His call reaches every nation — and invited me into it.
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                    Sitting in a land where the early church once carried the gospel, I was convicted in a
                    fresh way. I became increasingly certain that God&apos;s heart is for every nation to hear
                    of Him.
                  </p>

                  {/* Scripture callouts */}
                  <div className="mt-6 space-y-5">
                    <blockquote className="border-l border-accent pl-5">
                      <p className="font-serif text-lg font-light italic leading-snug text-foreground text-pretty">
                        &ldquo;You will be my witnesses... to the ends of the earth.&rdquo;
                      </p>
                      <cite className="mt-2 block text-xs font-medium uppercase not-italic tracking-widest text-muted-foreground">
                        Acts 1:8
                      </cite>
                    </blockquote>
                    <blockquote className="border-l border-accent pl-5">
                      <p className="font-serif text-lg font-light italic leading-snug text-foreground text-pretty">
                        &ldquo;Go therefore and make disciples of all nations...&rdquo;
                      </p>
                      <cite className="mt-2 block text-xs font-medium uppercase not-italic tracking-widest text-muted-foreground">
                        Matthew 28:19
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* My Response — the climax */}
        <Reveal>
          <div className="mx-auto mt-24 max-w-2xl text-center md:mt-32">
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
              My Response
            </span>
            <p className="font-serif text-2xl font-light leading-relaxed text-foreground text-balance md:text-3xl">
              As I reflected on these three summers, I realized God wasn&apos;t simply inviting me on another
              trip — He was inviting me to surrender my plans to His mission.
            </p>
            <p className="mt-12 font-serif text-4xl font-light italic text-primary text-balance md:text-5xl">
              &ldquo;Here I am. Send me.&rdquo;
            </p>
            <cite className="mt-4 block text-xs font-medium uppercase not-italic tracking-widest text-muted-foreground">
              Isaiah 6:8
            </cite>
          </div>
        </Reveal>

        {/* Today */}
        <Reveal>
          <div className="mx-auto mt-24 max-w-2xl border-t border-border pt-16 text-center md:mt-28">
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground">
              Today
            </span>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              And so this next chapter begins — a full year in Tokyo, serving university students and sharing
              the hope I&apos;ve found in Christ. Japan isn&apos;t where the story starts. It&apos;s simply
              where God is leading me next.
            </p>
            <p className="mt-10 font-serif text-2xl font-light italic text-foreground">— Jessica</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StampBadge({ year, featured = false }: { year: string; featured?: boolean }) {
  return (
    <div
      className={`flex h-14 w-14 -rotate-6 items-center justify-center rounded-full border-2 border-dashed text-xs font-semibold uppercase tracking-wider shadow-sm md:h-16 md:w-16 ${
        featured
          ? "border-primary bg-primary text-primary-foreground"
          : "border-accent bg-card text-accent-foreground"
      }`}
    >
      {year}
    </div>
  )
}
