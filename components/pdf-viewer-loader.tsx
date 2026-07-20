"use client"

import dynamic from "next/dynamic"

export const PdfViewer = dynamic(
  () => import("@/components/pdf-viewer").then((mod) => mod.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-sm text-muted-foreground">
        Loading newsletter...
      </div>
    ),
  }
)
