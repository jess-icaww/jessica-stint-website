import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { CalendarDays, Download } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PdfViewer } from "@/components/pdf-viewer-loader"

async function getUpdate(slug: string) {
  return client.fetch(
    `*[_type == "update" && slug.current == $slug][0]{
      title, date, tag, body, "fileUrl": newsletterFile.asset->url
    }`,
    { slug }
  )
}

export default async function UpdatePage({ params }: { params: Promise<{ slug: string }> }) {
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

        {update.fileUrl && (
          <div className="mb-8">
            <PdfViewer url={update.fileUrl} />
            <a
              href={update.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center border-b border-transparent text-sm font-medium text-muted-foreground transition-colors hover:border-current hover:text-primary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download the PDF
            </a>
          </div>
        )}

        {update.body && (
          <div className="prose prose-neutral max-w-none">
            <PortableText value={update.body} />
          </div>
        )}
      </article>
      <Footer />
    </main>
  )
}