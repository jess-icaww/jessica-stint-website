import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid"
import { client } from "@/sanity/lib/client"

async function getGalleryItems(): Promise<GalleryItem[]> {
  return client.fetch<GalleryItem[]>(`
    *[_type == "galleryItem"] | order(date desc) {
      "id": _id,
      type,
      title,
      "image": image.asset->url,
      videoUrl,
      location,
      date,
      aspectRatio
    }
  `)
}

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Photo header */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery.jpg"
            alt="Field in Tokyo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/55 to-foreground/90" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 md:pb-20">
          <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.35em] text-background/70 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            Moments from the mission field
          </span>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.05] text-balance text-background drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] md:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <GalleryGrid items={galleryItems} />

      {/* Call to Action */}
      <section className="border-t border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Keep following along
          </span>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl text-balance">
            Want to see more?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Follow along on Instagram for daily glimpses into life and ministry in Japan.
          </p>
          <Button className="mt-8 rounded-full" size="lg" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
