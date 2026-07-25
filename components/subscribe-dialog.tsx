"use client"

import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"

export function SubscribeDialog({ trigger }: { trigger?: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? <Button size="sm">Subscribe</Button>}
      </DialogTrigger>
      <DialogContent className="rounded-2xl border-foreground/10 shadow-none">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl italic">
            Get Updates in Your Inbox
          </DialogTitle>
          <DialogDescription>
            Subscribe to receive monthly updates, prayer requests, and stories from my journey in Japan.
          </DialogDescription>
        </DialogHeader>
        <NewsletterForm variant="minimal" />
      </DialogContent>
    </Dialog>
  )
}
