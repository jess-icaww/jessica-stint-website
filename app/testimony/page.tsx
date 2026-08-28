import { Download } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PdfViewer } from "@/components/pdf-viewer-loader"

const TESTIMONY_URL = "/documents/testimony.pdf"

export const metadata = {
  title: "My Testimony | Jessica Wong",
}

export default function TestimonyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <article className="container mx-auto max-w-3xl px-4 pt-28 pb-20 md:pt-36">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
          My Testimony
        </span>
        <h1 className="mb-8 font-serif text-4xl font-light text-foreground md:text-5xl">
          How God Has Worked in My Life
        </h1>

        <div className="mb-8">
          <PdfViewer url={TESTIMONY_URL} />
          <a
            href={TESTIMONY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center border-b border-transparent text-sm font-medium text-muted-foreground transition-colors hover:border-current hover:text-primary"
          >
            <Download className="mr-2 h-4 w-4" />
            Download the PDF
          </a>
        </div>
      </article>
      <Footer />
    </main>
  )
}
