"use client"

import { useEffect, useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

export function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState(0)
  const [width, setWidth] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const pageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (numPages === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          const pageNum = Number(mostVisible.target.getAttribute("data-page-number"))
          setCurrentPage(pageNum)
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    )

    pageRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [numPages])

  function goToPage(pageNum: number) {
    const clamped = Math.min(Math.max(pageNum, 1), numPages)
    pageRefs.current[clamped - 1]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div ref={containerRef} className="relative w-full">
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
            <div key={i} ref={(el) => { pageRefs.current[i] = el }} data-page-number={i + 1}>
              <Page
                pageNumber={i + 1}
                width={width}
                className="overflow-hidden rounded-lg border border-border shadow-md"
              />
            </div>
          ))}
      </Document>

      {numPages > 1 && (
        <div className="sticky bottom-4 z-10 mt-6 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full"
              disabled={currentPage <= 1}
              onClick={() => goToPage(currentPage - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[80px] text-center text-xs font-medium text-muted-foreground tabular-nums">
              Page {currentPage} of {numPages}
            </span>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full"
              disabled={currentPage >= numPages}
              onClick={() => goToPage(currentPage + 1)}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
