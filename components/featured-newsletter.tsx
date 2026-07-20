import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { client } from "@/lib/sanity"

type LatestUpdate = {
  title?: string
  excerpt?: string
  image?: string
  date?: string
  tag?: string
}

async function getLatestUpdate(): Promise<LatestUpdate | null> {
  try {
    const result = await client.fetch(`
      *[_type == "update"] | order(featured desc, date desc)[0]{
        title,
        excerpt,
        "image": image.asset->url,
        date,
        tag
      }
    `)
    return result ?? null
  } catch {
    return null
  }
}

function formatDate(date?: string) {
  if (!date) return null
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return null
  return parsed.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export async function FeaturedNewsletter() {
  const update = await getLatestUpdate()

  const title = update?.title ?? "The journey begins"
  const excerpt =
    update?.excerpt ??
    "Follow along through monthly letters from the field — stories of the students I'm meeting, answered prayers, honest struggles, and small everyday glimpses of life in Tokyo."
  const image = update?.image ?? "/images/gallery-coffee.png"
  const dateLabel = formatDate(update?.date)

  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
              From the Latest Letter
            </span>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
              Read where I am right now
            </h2>
          </div>
          <Link
            href="/updates"
            className="group hidden items-center gap-2 text-sm font-medium text-primary md:inline-flex"
          >
            All updates
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Whole teaser links to the updates archive */}
        <Link
          href="/updates"
          className="group grid overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[26rem]">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-14">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {dateLabel && <span>{dateLabel}</span>}
              {dateLabel && update?.tag && <span className="h-1 w-1 rounded-full bg-accent" />}
              {update?.tag && <span>{update.tag}</span>}
            </div>
            <h3 className="font-serif text-3xl font-light leading-tight text-foreground text-balance md:text-4xl">
              {title}
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground line-clamp-4">{excerpt}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Continue reading
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
