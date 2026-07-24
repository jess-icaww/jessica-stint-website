import Image from "next/image"

const stats = [
  { value: "<1%", label: "follow Jesus", sub: "in a nation of 125 million" },
  { value: "2nd", label: "largest unreached nation", sub: "in the world today" },
  { value: "2.6M", label: "university students", sub: "in Tokyo alone" },
]

export function WhyJapan() {
  return (
    <section id="why-japan" className="scroll-mt-16 bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intro with photo */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/japan_street.jpeg"
              alt="A quiet Tokyo back street"
              fill
              className="object-cover"
              style={{
                transform: "rotate(3deg) scale(1.1)",
                filter: "saturate(0.5) sepia(0.2) contrast(1.15) brightness(0.82)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15"
            />
          </div>

          <div>
            <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-background/60">
              Why Japan?
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight text-balance md:text-5xl">
              A nation that has yet to hear
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-background/70">
              <p>
                Japan is one of the most spiritually unreached nations on earth. Most Japanese people
                haven&apos;t rejected the gospel &mdash; they simply have never encountered it.
              </p>
              <p className="font-serif text-xl font-light italic text-background">
                So many haven&apos;t heard the name of Jesus even once.
              </p>
            </div>
          </div>
        </div>

        {/* Stats, quietly inline */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-y border-background/20 py-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-5xl font-light text-accent">{stat.value}</p>
              <p className="mt-3 text-sm font-medium text-background">{stat.label}</p>
              <p className="mt-1 text-sm text-background/60">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* The hope */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-serif text-2xl font-light text-background">But there is so much hope</h3>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-background/70">
            <p>
              A friend serving in Japan told me,{" "}
              <span className="italic text-background">
                &ldquo;Jess, you&apos;re coming at a really ripe time. Our students have caught the vision
                of sharing the gospel with their friends &mdash; they just don&apos;t know how yet. They&apos;re
                longing to be discipled.&rdquo;
              </span>
            </p>
            <p>
              The harvest is real. The laborers are few. I praise God for giving me a heart for the
              nations &mdash; and that He goes before me, and is with me always, to the very end of the age.
            </p>
          </div>

          <blockquote className="mt-12 border-l border-accent pl-6">
            <p className="font-serif text-xl font-light italic text-background md:text-2xl">
              &ldquo;The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the
              Lord of the harvest to send out laborers into his harvest.&rdquo;
            </p>
            <cite className="mt-4 block text-xs font-medium uppercase not-italic tracking-widest text-background/60">
              Matthew 9:37&ndash;38
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
