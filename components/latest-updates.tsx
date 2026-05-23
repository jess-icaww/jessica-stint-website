import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import Link from "next/link"

const updates = [
  {
    date: "May 15, 2026",
    title: "Support Raising Update",
    excerpt:
      "Praise God! We&apos;ve reached 65% of our monthly support goal. Thank you to everyone who has partnered with this mission so far.",
    tag: "Fundraising",
  },
  {
    date: "May 8, 2026",
    title: "Visa Application Submitted",
    excerpt:
      "After months of paperwork, my visa application is finally submitted! Please pray it gets approved quickly.",
    tag: "Logistics",
  },
  {
    date: "April 28, 2026",
    title: "Japanese Language Progress",
    excerpt:
      "Finished my first semester of intensive Japanese study! I can now hold basic conversations and read hiragana and katakana.",
    tag: "Training",
  },
]

export function LatestUpdates() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            News
          </span>
          <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            Latest Updates
          </h2>
          <p className="text-muted-foreground">
            Follow along on my journey to Japan.
          </p>
        </div>

        <div className="space-y-6">
          {updates.map((update, index) => (
            <article
              key={index}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/30 md:flex-row md:items-start md:gap-8"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:w-36 md:flex-shrink-0">
                <CalendarDays className="h-4 w-4" />
                <time>{update.date}</time>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {update.tag}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{update.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/updates"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All Updates →
          </Link>
        </div>
      </div>
    </section>
  )
}
