"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Updates", href: "/updates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Prayer", href: "/#prayer" },
  { label: "Give", href: "/#donate" },
]

export function GalleryNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-medium text-foreground">
          Sarah Mitchell
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.href === "/gallery"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="ml-2" asChild>
            <Link href="/#donate">Partner</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full" asChild>
              <Link href="/#donate">Partner</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
