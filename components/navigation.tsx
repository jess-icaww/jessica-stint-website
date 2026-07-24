"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { SubscribeDialog } from "@/components/subscribe-dialog"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Updates", href: "/updates" },
  { label: "Gallery", href: "/gallery" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-medium text-foreground [text-shadow:0_1px_1px_rgba(0,0,0,0.08)]"
        >
          Jessica Wong
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-transparent text-sm font-medium text-foreground [text-shadow:0_1px_1px_rgba(0,0,0,0.08)] transition-colors hover:border-current"
            >
              {link.label}
            </Link>
          ))}
          <SubscribeDialog
            trigger={
              <Button
                size="sm"
                variant="outline"
                className="ml-2 cursor-pointer border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Subscribe
              </Button>
            }
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground drop-shadow-sm" />
          ) : (
            <Menu className="h-6 w-6 text-foreground drop-shadow-sm" />
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
                className="w-fit border-b border-transparent text-base font-medium text-foreground transition-colors hover:border-current"
              >
                {link.label}
              </Link>
            ))}
            <SubscribeDialog
              trigger={
                <Button
                  variant="outline"
                  className="mt-2 w-full cursor-pointer border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Subscribe
                </Button>
              }
            />
          </div>
        </div>
      )}
    </nav>
  )
}
