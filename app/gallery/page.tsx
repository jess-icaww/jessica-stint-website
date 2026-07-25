"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Play, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

type GalleryItem = {
  id: number
  type: "photo" | "video"
  src: string
  thumbnail?: string
  title: string
  location: string
  date: string
  aspectRatio: "square" | "portrait" | "landscape" | "wide"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "photo",
    src: "/images/hero-tokyo.png",
    title: "First Morning in Tokyo",
    location: "Shibuya, Tokyo",
    date: "January 2026",
    aspectRatio: "landscape",
  },
  {
    id: 2,
    type: "photo",
    src: "/images/jessica-portrait.png",
    title: "A Quiet Coffee Before the Day Begins",
    location: "Cafe, Shinjuku",
    date: "January 2026",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/ministry-cafe.png",
    title: "A Day in Campus Ministry",
    location: "Waseda University",
    date: "February 2026",
    aspectRatio: "wide",
  },
  {
    id: 4,
    type: "photo",
    src: "/images/gallery-coffee.png",
    title: "Student Coffee Conversations",
    location: "Local Cafe, Shinjuku",
    date: "February 2026",
    aspectRatio: "square",
  },
  {
    id: 5,
    type: "photo",
    src: "/images/gallery-park.png",
    title: "Evening Prayer Walk",
    location: "Meguro River",
    date: "March 2026",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    type: "photo",
    src: "/images/gallery-train.png",
    title: "The Long Way Home",
    location: "Chuo Line, Tokyo",
    date: "March 2026",
    aspectRatio: "wide",
  },
  {
    id: 7,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/why-japan.png",
    title: "Student Testimony: Yuki's Story",
    location: "Tokyo",
    date: "April 2026",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    type: "photo",
    src: "/images/ministry-cafe.png",
    title: "Small Group Bible Study",
    location: "Apartment, Nakano",
    date: "April 2026",
    aspectRatio: "square",
  },
  {
    id: 9,
    type: "photo",
    src: "/images/gallery-lights.png",
    title: "Lanterns After Dark",
    location: "Yanaka, Tokyo",
    date: "May 2026",
    aspectRatio: "portrait",
  },
  {
    id: 10,
    type: "photo",
    src: "/images/why-japan.png",
    title: "Neighborhood Walks",
    location: "Setagaya, Tokyo",
    date: "May 2026",
    aspectRatio: "landscape",
  },
  {
    id: 11,
    type: "photo",
    src: "/images/gallery-park.png",
    title: "Golden Week Outreach",
    location: "Ueno Park",
    date: "June 2026",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/gallery-train.png",
    title: "Summer Camp Highlights",
    location: "Nagano Prefecture",
    date: "July 2026",
    aspectRatio: "wide",
  },
]

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all")

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true
    if (filter === "photos") return item.type === "photo"
    if (filter === "videos") return item.type === "video"
    return true
  })

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[newIndex])
  }

  const getGridClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "wide":
        return "col-span-2 row-span-1"
      case "portrait":
        return "col-span-1 row-span-2"
      case "landscape":
        return "col-span-2 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  const getAspectClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "wide":
        return "aspect-[21/9]"
      case "portrait":
        return "aspect-[3/4]"
      case "landscape":
        return "aspect-[16/9]"
      default:
        return "aspect-square"
    }
  }

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

      {/* Filter Tabs */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-10 py-6">
            {[
              { value: "all", label: "All" },
              { value: "photos", label: "Photos" },
              { value: "videos", label: "Videos" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as typeof filter)}
                className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                  filter === tab.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {filter === tab.value && <span className="mt-2 block h-0.5 bg-primary" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4 md:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative cursor-pointer overflow-hidden rounded-sm ${getGridClass(item.aspectRatio)}`}
                onClick={() => openLightbox(item)}
              >
                <div className={`h-full w-full ${getAspectClass(item.aspectRatio)}`}>
                  <Image
                    src={(item.type === "video" ? item.thumbnail : item.src) || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/85 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-6 w-6 text-foreground" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:p-6">
                  <h3 className="font-serif text-lg font-light text-background md:text-xl">{item.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-background/70 md:text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("prev")
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("next")
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Next item"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "photo" ? (
              <img
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.title}
                className="max-h-[85vh] w-auto rounded-sm object-contain"
              />
            ) : (
              <div className="aspect-video w-[85vw] max-w-4xl overflow-hidden rounded-sm">
                <iframe
                  src={`${selectedItem.src}?autoplay=1`}
                  title={selectedItem.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl font-light text-background">{selectedItem.title}</h3>
              <div className="mt-2 flex items-center justify-center gap-4 text-sm text-background/60">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedItem.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedItem.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
