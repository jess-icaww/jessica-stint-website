"use client"

import { useState } from "react"
import Link from "next/link"
import { SubscribeDialog } from "@/components/subscribe-dialog"

const navLinks = [
  { label: "Story", href: "/#story" },
  { label: "Updates", href: "/updates" },
  { label: "Gallery", href: "/gallery" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <div className="flex w-full max-w-2xl items-center justify-between gap-6 rounded-2xl border border-foreground/10 bg-background/55 px-5 py-2.5 backdrop-blur-md md:px-7 md:py-3">
          {/* Signature */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-playfair text-lg italic text-foreground [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
              Jessica Wong
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
              日本への旅
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-transparent text-sm text-foreground [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] transition-colors hover:border-current"
              >
                {link.label}
              </Link>
            ))}
            <SubscribeDialog
              trigger={
                <button className="cursor-pointer border-b border-transparent font-playfair text-sm italic text-[oklch(0.5_0.07_55)] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] transition-colors hover:border-current">
                  Join the Journey
                </button>
              }
            />
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-xs font-medium uppercase tracking-[0.2em] text-foreground [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-background md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 cursor-pointer text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Close
          </button>

          <Link href="/" onClick={() => setIsOpen(false)} className="mb-4 flex flex-col items-center leading-none">
            <span className="font-playfair text-2xl italic text-foreground">Jessica Wong</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              日本への旅
            </span>
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-playfair text-3xl italic text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <SubscribeDialog
            trigger={
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer font-playfair text-2xl italic text-[oklch(0.5_0.07_55)]"
              >
                Join the Journey
              </button>
            }
          />
        </div>
      )}
    </>
  )
}
