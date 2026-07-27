"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"

export type GalleryItem = {
  id: string
  type: "photo" | "video"
  image: string
  videoUrl?: string
  title: string
  location?: string
  date: string
  aspectRatio: "square" | "portrait" | "landscape" | "wide"
}

function formatDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

function getGridClass(aspectRatio: string) {
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

function getAspectClass(aspectRatio: string) {
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

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all")

  const filteredItems = items.filter((item) => {
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

  return (
    <>
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
                className={`cursor-pointer text-sm font-medium uppercase tracking-widest transition-colors ${
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
          {filteredItems.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">No items yet — check back soon.</p>
          ) : (
            <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4 md:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative cursor-pointer overflow-hidden rounded-sm ${getGridClass(item.aspectRatio)}`}
                  onClick={() => openLightbox(item)}
                >
                  <div className={`h-full w-full ${getAspectClass(item.aspectRatio)}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
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
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("prev")
            }}
            className="absolute left-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("next")
            }}
            className="absolute right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label="Next item"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "photo" ? (
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="max-h-[85vh] w-auto rounded-sm object-contain"
              />
            ) : (
              <div className="aspect-video w-[85vw] max-w-4xl overflow-hidden rounded-sm">
                <iframe
                  src={`${selectedItem.videoUrl}?autoplay=1`}
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
                {selectedItem.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedItem.location}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(selectedItem.date)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
