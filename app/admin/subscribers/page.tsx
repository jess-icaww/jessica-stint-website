import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { sql } from "@/lib/db"

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
        <p className="mb-6 text-sm text-muted-foreground">
          {subscribers.length} total
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Subscribed</TableHead>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
