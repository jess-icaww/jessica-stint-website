"use client"

import { useState, useTransition } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { syncAllToMailchimp } from "@/app/admin/subscribers/actions"

export function SyncSubscribersButton() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<string | null>(null)

  function handleSync() {
    setResult(null)
    startTransition(async () => {
      const { total, added, alreadySynced, failed } = await syncAllToMailchimp()
      setResult(
        failed > 0
          ? `${added} newly synced, ${alreadySynced} already in Mailchimp, ${failed} failed — check server logs.`
          : `All ${total} confirmed in Mailchimp (${added} newly synced, ${alreadySynced} already were).`
      )
    })
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <Button variant="outline" size="sm" disabled={isPending} onClick={handleSync} className="gap-2">
        <RefreshCw className={`h-4 w-4 ${isPending ? "animate-spin" : ""}`} />
        {isPending ? "Syncing..." : "Sync all to Mailchimp"}
      </Button>
      {result && <p className="text-xs text-muted-foreground">{result}</p>}
    </div>
  )
}
