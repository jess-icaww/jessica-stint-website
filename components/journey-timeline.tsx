const milestones = [
  {
    period: "Now — Preparation",
    title: "Getting ready to go",
    text: "Raising up prayer and ministry partners, training, and preparing my heart for the year ahead.",
    current: true,
  },
  {
    period: "Departure",
    title: "Wheels up for Tokyo",
    text: "Saying goodbye to the familiar and stepping onto the plane, trusting the Lord with what's next.",
  },
  {
    period: "Arrival",
    title: "First days in Tokyo",
    text: "Settling into a new city, language, and rhythm — and meeting the team I'll serve alongside.",
  },
  {
    period: "The year",
    title: "Life among students",
    text: "Building friendships on campus, discipling, and sharing Christ in everyday moments.",
  },
  {
    period: "Looking ahead",
    title: "Where God leads next",
    text: "Trusting that this one year is part of a lifetime of following and worshipping Him.",
  },
]

export function JourneyTimeline() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
            The Journey
          </span>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">A year, step by step</h2>
        </div>

        <ol className="relative border-l border-border pl-8 md:pl-10">
          {milestones.map((m, i) => (
            <li key={i} className="relative pb-12 last:pb-0">
              {/* Marker */}
              <span
                className={`absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border md:-left-[49px] ${
                  m.current ? "border-primary bg-primary" : "border-border bg-background"
                }`}
              >
                {m.current && <span className="h-2 w-2 rounded-full bg-background" />}
              </span>

              <p className="text-xs font-medium uppercase tracking-widest text-primary">{m.period}</p>
              <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
