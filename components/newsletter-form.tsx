"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()

    if (!res.ok) {
      setStatus("error")
      setMessage(data.error ?? "Something went wrong. Please try again.")
      return
    }

    setStatus("done")
    setMessage(data.message)
    setEmail("")
  }

  if (status === "done") {
    return <p className="text-sm font-medium text-primary">{message}</p>
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-11 rounded-md border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:w-72"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {status === "error" && <p className="text-sm text-destructive">{message}</p>}
    </div>
  )
}
