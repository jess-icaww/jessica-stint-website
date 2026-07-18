import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { CalendarDays } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

async function getUpdate(slug: string) {
  return client.fetch(
    `*[_type == "update" && slug.current == $slug][0]{
      title, date, tag, body, "image": image.asset->url
    }`,
    { slug }
  )
}

export default async function UpdatePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const update = await getUpdate(slug)

  if (!update) {
    return <div className="py-40 text-center">Update not found.</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <article className="container mx-auto max-w-3xl px-4 pt-28 pb-20 md:pt-36">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <time>
            {new Date(update.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </div>
        <h1 className="mb-8 font-serif text-4xl font-light text-foreground md:text-5xl">
          {update.title}
        </h1>
        <div className="prose prose-neutral max-w-none">
          <PortableText value={update.body} />
        </div>
      </article>
      <Footer />
    </main>
  )
}