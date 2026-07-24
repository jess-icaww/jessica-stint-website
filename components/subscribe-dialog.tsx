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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif text-xl font-semibold">
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
