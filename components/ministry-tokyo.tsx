import Image from "next/image"
import { Reveal } from "@/components/reveal"

const moments = [
  {
    image: "/images/ministry-cafe.png",
    alt: "Students talking over coffee in a Tokyo cafe",
    label: "Coffee after class",
    text: "I hope many of my afternoons are spent sitting across from a friend over coffee, listening to their story, answering their questions about Jesus, and slowly building the kind of trust where faith can be talked about honestly.",
  },
  {
    image: "/images/gallery-train.png",
    alt: "View from inside a Tokyo commuter train",
    label: "Riding the trains",
    text: "So much of life in Tokyo happens on the move. I'll spend hours on trains crisscrossing the city to meet students where they are — because showing up, again and again, is its own quiet way of loving people.",
  },
  {
    image: "/images/moment-bible.png",
    alt: "A small group reading the Bible together",
    label: "Opening the Bible together",
    text: "Some evenings will be spent gathered around a low table with a few friends and open Bibles, reading slowly, asking hard questions, and discovering who God is together for the very first time.",
  },
  {
    image: "/images/moment-meal.png",
    alt: "Friends sharing a home-cooked meal",
    label: "Sharing meals",
    text: "I want my table to always have room for one more. There's something about a shared meal — the laughter, the leftovers, the lingering — that turns strangers into friends and friends into family.",
  },
  {
    image: "/images/moment-church.png",
    alt: "A small Japanese church during worship",
    label: "Worshipping with local believers",
    text: "I'm excited to learn from faithful Japanese pastors and missionaries who have served their communities for years, and to worship alongside the small, steadfast churches God is building here.",
  },
  {
    image: "/images/moment-campus.png",
    alt: "Walking through a university campus",
    label: "Walking and praying on campus",
    text: "Often the ministry is simply walking through campus, praying quietly for the students hurrying past — asking God to open doors, soften hearts, and let me be present when someone is ready to talk.",
  },
]

const week = [
  { day: "Monday", note: "Meeting students after class over coffee" },
  { day: "Tuesday", note: "Bible study with university friends" },
  { day: "Wednesday", note: "Language learning and time in the community" },
  { day: "Thursday", note: "On campus for conversations and outreach" },
  { day: "Friday", note: "Dinner and long talks with students" },
  { day: "Weekend", note: "Church, discipleship, and serving with local believers" },
]

export function MinistryTokyo() {
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Intro */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
              A day in the life
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground text-balance md:text-5xl">
              Come walk through Tokyo with me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Ministry here is slow and relational — less about programs and more about presence. Here are a
              few of the ordinary, faithful moments I hope will fill my days.
            </p>
          </div>
        </Reveal>

        {/* Alternating photo moments */}
        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {moments.map((moment, i) => (
            <Reveal key={moment.label}>
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                {/* Photo */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                    <Image
                      src={moment.image || "/placeholder.svg"}
                      alt={moment.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Reflection */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-light leading-snug text-foreground text-balance md:text-3xl">
                    {moment.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                    {moment.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* A week in Tokyo */}
        <Reveal>
          <div className="mt-24 border-t border-border pt-16 md:mt-32">
            <div className="max-w-2xl">
              <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
                A week in Tokyo
              </span>
              <h3 className="font-serif text-3xl font-light leading-tight text-foreground text-balance md:text-4xl">
                What a rhythm of faithfulness might look like
              </h3>
            </div>

            <ul className="mt-10 flex flex-col">
              {week.map((entry) => (
                <li
                  key={entry.day}
                  className="flex flex-col gap-1 border-b border-border py-5 first:border-t sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="w-32 flex-shrink-0 font-serif text-lg font-light text-foreground">
                    {entry.day}
                  </span>
                  <span className="leading-relaxed text-muted-foreground">{entry.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
