"use client"

import { useEffect, useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

export function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState(0)
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="py-20 text-center text-sm text-muted-foreground">
            Loading newsletter...
          </div>
        }
        error={
          <div className="py-20 text-center text-sm text-destructive">
            Couldn&apos;t load the newsletter PDF.
          </div>
        }
        className="flex flex-col items-center gap-6"
      >
        {width > 0 &&
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={width}
              className="overflow-hidden rounded-lg border border-border shadow-md"
            />
          ))}
      </Document>
    </div>
  )
}
