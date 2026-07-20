import Image from "next/image"
import { GraduationCap, Users, Church, Heart, Coffee } from "lucide-react"

const work = [
  {
    icon: GraduationCap,
    title: "Campus ministry",
    text: "Meeting university students where they are — in classrooms, clubs, and coffee shops across Tokyo.",
  },
  {
    icon: Users,
    title: "Discipleship",
    text: "Walking closely with a few, helping young believers grow deep roots and learn to follow Jesus.",
  },
  {
    icon: Church,
    title: "Church partnership",
    text: "Serving alongside local churches and missionaries who have faithfully labored here for years.",
  },
  {
    icon: Heart,
    title: "Evangelism",
    text: "Sharing the hope of the gospel gently and honestly with friends who have never heard it.",
  },
  {
    icon: Coffee,
    title: "Everyday presence",
    text: "Simply being present — sharing meals, listening to stories, and loving people over time.",
  },
]

export function MinistryTokyo() {
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Intro + photo */}
          <div className="md:sticky md:top-24 md:self-start">
            <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Ministry in Tokyo
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground text-balance md:text-5xl">
              What my days will hold
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ministry here is slow and relational. Much of it looks like ordinary life — friendship,
              faithfulness, and being present with people day after day.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/images/ministry-cafe.png"
                alt="Students talking over coffee in a Tokyo cafe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quiet list */}
          <ul className="flex flex-col">
            {work.map((item, i) => (
              <li
                key={i}
                className="flex gap-5 border-b border-border py-7 first:pt-0 last:border-b-0"
              >
                <span className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-accent/50 text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
