import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight, BookOpen, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { Reveal } from "@/components/reveal"
import { client } from "@/lib/sanity"

async function getUpdates() {
  return client.fetch(`
    *[_type == "update"] | order(date desc) {
      "id": _id,
      "date": coalesce(dateTime(date), date),
      title,
      excerpt,
      "image": image.asset->url,
      "fileUrl": newsletterFile.asset->url,
      tag,
      featured,
      prayerSnippet,
      "slug": slug.current
    }
  `)
}

function formatDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export default async function UpdatesPage() {
  const updates = await getUpdates()
  const featuredUpdate = updates.find((u) => u.featured) ?? updates[0]
  const regularUpdates = updates.filter((u) => u.id !== featuredUpdate?.id)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Photo header */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/why-japan.png"
            alt="A quiet Tokyo neighborhood street"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 md:pb-20">
          <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.35em] text-background/70">
            Letters from the field
          </span>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.05] text-balance text-background drop-shadow-sm md:text-6xl">
            Updates from Tokyo
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-background/85">
            {
              "Monthly letters from the journey — the students I'm meeting, answered prayers, honest struggles, and the small everyday moments in between."
            }
          </p>
        </div>
      </section>

      {/* Featured letter */}
      {featuredUpdate && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <Link
                href={`/updates/${featuredUpdate.slug}`}
                className="group grid overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[28rem]">
                  {featuredUpdate.image ? (
                    <Image
                      src={featuredUpdate.image || "/placeholder.svg"}
                      alt={featuredUpdate.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src="/images/gallery-coffee.png"
                      alt={featuredUpdate.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm">
                    Latest letter
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 md:p-14">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(featuredUpdate.date)}
                    </span>
                    {featuredUpdate.tag && <span className="h-1 w-1 rounded-full bg-accent" />}
                    {featuredUpdate.tag && <span>{featuredUpdate.tag}</span>}
                  </div>
                  <h2 className="font-serif text-3xl font-light leading-tight text-balance text-foreground md:text-4xl">
                    {featuredUpdate.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground line-clamp-4">
                    {featuredUpdate.excerpt}
                  </p>

                  {featuredUpdate.prayerSnippet && (
                    <p className="flex items-start gap-2 border-l-2 border-primary/30 pl-4 font-serif text-base italic text-muted-foreground">
                      <BookOpen className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{featuredUpdate.prayerSnippet}</span>
                    </p>
                  )}

                  <div className="mt-2 flex flex-wrap items-center gap-5">
                    <span className="inline-flex w-fit items-center gap-2 border-b border-transparent text-sm font-medium text-primary transition-colors group-hover:border-current">
                      Read full letter
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    {featuredUpdate.fileUrl && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Download className="h-3.5 w-3.5" />
                        PDF available
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Archive */}
      {regularUpdates.length > 0 && (
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
                The archive
              </span>
              <h2 className="mb-12 font-serif text-3xl font-light text-foreground md:text-4xl">
                Earlier letters
              </h2>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {regularUpdates.map((update, i) => (
                <Reveal key={update.id} className={i % 3 === 1 ? "sm:mt-8" : ""}>
                  <Link
                    href={`/updates/${update.slug}`}
                    className="group block overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={update.image || "/images/gallery-park.png"}
                        alt={update.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <time>{formatDate(update.date)}</time>
                        {update.tag && <span className="h-1 w-1 rounded-full bg-accent" />}
                        {update.tag && <span>{update.tag}</span>}
                      </div>
                      <h3 className="font-serif text-xl font-light leading-snug text-foreground transition-colors group-hover:text-primary">
                        {update.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {update.excerpt}
                      </p>
                      <span className="mt-1 inline-flex w-fit items-center gap-1.5 border-b border-transparent text-sm font-medium text-primary transition-colors group-hover:border-current">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter invite */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[oklch(0.5_0.07_150)]">
              Stay close
            </span>
            <h2 className="mb-5 font-serif text-3xl font-light text-foreground md:text-4xl text-balance">
              Have the letters land in your inbox
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              {
                "Every month I'll send a new letter — stories, prayer requests, and glimpses of life in Tokyo. I'd love to have you walking alongside me."
              }
            </p>
            <NewsletterForm variant="minimal" />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
