"use client"

import { useTransition } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { deleteSubscriber } from "@/app/admin/subscribers/actions"

export function DeleteSubscriberButton({ id, email }: { id: number; email: string }) {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm(`Remove ${email}? This also removes them from Mailchimp.`)) return
    startTransition(() => deleteSubscriber(id))
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="h-8 w-8 text-muted-foreground hover:text-destructive"
      disabled={isPending}
      onClick={handleDelete}
      aria-label={`Remove ${email}`}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
