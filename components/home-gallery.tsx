import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const photos = [
  { src: "/images/gallery-lights.png", alt: "A quiet Tokyo street glowing at dusk", caption: "evenings" },
  { src: "/images/gallery-train.png", alt: "Looking out from a Tokyo train", caption: "getting around" },
  { src: "/images/gallery-park.png", alt: "A peaceful park pathway in Tokyo", caption: "quiet mornings" },
  { src: "/images/gallery-coffee.png", alt: "Coffee shared over a wooden table", caption: "coffee & conversations" },
]

export function HomeGallery() {
  return (
    <section className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-background/60">
              Glimpses
            </span>
            <h2 className="font-serif text-3xl font-light text-balance md:text-4xl">
              Everyday life in Tokyo
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-background"
          >
            View the full gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {/* Tall feature */}
          <Link
            href="/gallery"
            className="group relative col-span-1 aspect-[3/4] overflow-hidden rounded-sm md:row-span-2 md:aspect-auto"
          >
            <Image
              src={photos[0].src || "/placeholder.svg"}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 font-serif text-sm italic text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {photos[0].caption}
            </span>
          </Link>

          {photos.slice(1).map((photo, i) => (
            <Link
              key={i}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 font-serif text-sm italic text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.caption}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
