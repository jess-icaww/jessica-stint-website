"use server"

import { revalidatePath } from "next/cache"
import { sql } from "@/lib/db"
import { addSubscriberToMailchimp, removeSubscriberFromMailchimp } from "@/lib/mailchimp"

export async function deleteSubscriber(id: number) {
  const [subscriber] = await sql`
    SELECT email FROM subscribers WHERE id = ${id}
  `
  if (!subscriber) return

  await sql`DELETE FROM subscribers WHERE id = ${id}`

  const result = await removeSubscriberFromMailchimp(subscriber.email)
  if (!result.ok) {
    // Postgres delete already succeeded — surface this in logs so it can be
    // cleaned up manually in Mailchimp's dashboard rather than failing the
    // whole action (mirrors the subscribe route's error handling).
    console.error(`Deleted ${subscriber.email} from Postgres but failed to remove from Mailchimp`)
  }

  revalidatePath("/admin/subscribers")
}

// Re-adds every Postgres subscriber to Mailchimp. Safe to run anytime —
// adding an existing member is a no-op on Mailchimp's end (addSubscriberToMailchimp
// treats "Member Exists" as success) — so this just catches anyone whose
// original sync silently failed (see the subscribe route's error handling).
export async function syncAllToMailchimp() {
  const subscribers = await sql`SELECT email FROM subscribers`

  let added = 0
  let alreadySynced = 0
  let failed = 0

  for (const { email } of subscribers) {
    const result = await addSubscriberToMailchimp(email)
    if (!result.ok) failed++
    else if (result.alreadyMember) alreadySynced++
    else added++
  }

  return { total: subscribers.length, added, alreadySynced, failed }
}
