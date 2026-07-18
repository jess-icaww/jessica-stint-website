import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "rugef4s4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

export function urlFor(source: any) {
  return `https://cdn.sanity.io/images/rugef4s4/production/${source.asset._ref
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-png", ".png")
    .replace("-webp", ".webp")}`
}