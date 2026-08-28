import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { sql } from "@/lib/db"
import { DeleteSubscriberButton } from "@/components/delete-subscriber-button"
import { SyncSubscribersButton } from "@/components/sync-subscribers-button"

async function getSubscribers() {
  return sql`
    SELECT id, email, subscribed_at
    FROM subscribers
    ORDER BY subscribed_at DESC
  `
}

export default async function SubscribersPage() {
  const subscribers = await getSubscribers()

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-1 font-serif text-2xl font-medium text-foreground">
          Subscribers
        </h1>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{subscribers.length} total</p>
          <SyncSubscribersButton />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Subscribed</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.map((subscriber) => (
              <TableRow key={subscriber.id}>
                <TableCell>{subscriber.email}</TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(subscriber.subscribed_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <DeleteSubscriberButton id={subscriber.id} email={subscriber.email} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
