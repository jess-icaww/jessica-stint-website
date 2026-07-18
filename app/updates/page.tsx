import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { client } from "@/lib/sanity"

async function getUpdates() {
  return client.fetch(`
    *[_type == "update"] | order(date desc) {
      "id": _id,
      "date": coalesce(dateTime(date), date),
      title,
      excerpt,
      "image": image.asset->url,
      tag,
      featured,
      prayerSnippet,
      "slug": slug.current
    }
  `)
}

export default async function UpdatesPage() {
  const updates = await getUpdates()
  const featuredUpdate = updates.find((u) => u.featured)
  const regularUpdates = updates.filter((u) => !u.featured)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header */}
      <section className="bg-secondary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Journey Updates
          </span>
          <h1 className="mb-4 font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl text-balance">
            Monthly Updates
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Follow along as I prepare for and embark on this mission to share hope
            with university students in Japan.
          </p>
        </div>
      </section>

      {/* Featured Update */}
      {featuredUpdate && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={featuredUpdate.image}
                    alt={featuredUpdate.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                    Latest Update
                  </Badge>
                </div>
                <CardContent className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <time>{featuredUpdate.date}</time>
                    </div>
                    <Badge variant="secondary">{featuredUpdate.tag}</Badge>
                  </div>
                  <h2 className="mb-4 font-serif text-2xl font-medium text-foreground md:text-3xl">
                    {featuredUpdate.title}
                  </h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {featuredUpdate.excerpt}
                  </p>

                  {/* Prayer Snippet */}
                  <div className="mb-6 rounded-lg bg-primary/5 border border-primary/10 p-4">
                    <p className="text-sm font-medium text-primary flex items-start gap-2">
                      <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{featuredUpdate.prayerSnippet}</span>
                    </p>
                  </div>

                  <Link href={`/updates/${featuredUpdate.slug}`}>
                    <Button className="w-fit group">
                      Read Full Update
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Updates Grid */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-10 font-serif text-2xl font-light text-foreground md:text-3xl">
            Previous Updates
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularUpdates.map((update) => (
              <Card
                key={update.id}
                className="group overflow-hidden border border-border transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge
                    variant="secondary"
                    className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm"
                  >
                    {update.tag}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <time>{new Date(update.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {update.excerpt}
                  </p>

                  {/* Prayer Snippet */}
                  <div className="mb-4 rounded-md bg-secondary/50 p-3">
                    <p className="text-xs text-muted-foreground flex items-start gap-2">
                      <BookOpen className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="line-clamp-2">{update.prayerSnippet}</span>
                    </p>
                  </div>

                  <Link
                    href={`/updates/${update.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Stay Connected
          </span>
          <h2 className="mb-4 font-serif text-2xl font-light text-foreground md:text-3xl">
            Get Updates in Your Inbox
          </h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to receive monthly updates, prayer requests, and stories
            from my journey in Japan.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
