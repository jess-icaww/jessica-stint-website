import { NextResponse } from "next/server"
import { z } from "zod"
import { sql } from "@/lib/db"

const subscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = subscribeSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  const { email } = parsed.data

  try {
    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email})
    `
  } catch (error: any) {
    if (error.code === "23505") {
      return NextResponse.json({ message: "You're already subscribed!" })
    }
    console.error("Failed to insert subscriber:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: "You're subscribed!" })
}
