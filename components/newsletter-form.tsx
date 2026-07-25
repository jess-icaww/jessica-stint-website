"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm({ variant = "default" }: { variant?: "default" | "minimal" }) {
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
    return (
      <p className="text-sm font-medium text-primary">
        {message}
      </p>
    )
  }

  if (variant === "minimal") {
    return (
      <div className="flex flex-col items-center gap-3">
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-end justify-center gap-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full min-w-0 flex-1 rounded-none border-0 border-b border-[oklch(0.27_0.015_60)] bg-transparent px-0 py-2 text-base text-[oklch(0.27_0.015_60)] placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 cursor-pointer whitespace-nowrap border-b border-[oklch(0.27_0.015_60)] pb-2 text-sm font-medium text-[oklch(0.27_0.015_60)] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe →"}
          </button>
        </form>
        {status === "error" && <p className="text-sm text-destructive">{message}</p>}
      </div>
    )
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
        <Button type="submit" disabled={status === "loading"} className="cursor-pointer disabled:cursor-not-allowed">
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {status === "error" && <p className="text-sm text-destructive">{message}</p>}
    </div>
  )
}
