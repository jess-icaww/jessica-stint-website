import { createHash } from "crypto"

const apiKey = process.env.MAILCHIMP_API_KEY!
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!
const datacenter = apiKey.split("-").pop()

function subscriberHash(email: string) {
  return createHash("md5").update(email.toLowerCase()).digest("hex")
}

export async function addSubscriberToMailchimp(email: string) {
  const res = await fetch(
    `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    }
  )

  if (res.ok) return { ok: true as const }

  const data = await res.json().catch(() => null)
  if (data?.title === "Member Exists") return { ok: true as const, alreadyMember: true }

  console.error("Mailchimp subscribe failed:", data)
  return { ok: false as const }
}

// Archives (soft-deletes) the member rather than permanently erasing them —
// this is Mailchimp's standard, reversible way to remove someone and keeps
// their compliance/suppression history intact.
export async function removeSubscriberFromMailchimp(email: string) {
  const res = await fetch(
    `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash(email)}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      },
    }
  )

  if (res.ok || res.status === 404) return { ok: true as const }

  const data = await res.json().catch(() => null)
  console.error("Mailchimp remove failed:", data)
  return { ok: false as const }
}
