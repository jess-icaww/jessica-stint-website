import { Card, CardContent } from "@/components/ui/card"

const prayerRequests = [
    {
        title: "Support Raising",
        description:
            "That God would provide the remaining 35% of monthly support needed before departure in August.",
        urgent: true,
    },
    {
        title: "Language Acquisition",
        description:
            "For rapid Japanese language learning and confidence to communicate the gospel clearly.",
    },
    {
        title: "Spiritual Preparation",
        description:
            "That God would prepare my heart and deepen my dependence on Him for the ministry ahead.",
    },
    {
        title: "Future Students",
        description:
            "For the students I&apos;ll meet—that God would be softening their hearts even now.",
    },
    {
        title: "Health & Wellness",
        description:
            "For physical and mental health during this intense season of preparation and transition.",
    },
    {
        title: "Team Unity",
        description:
            "For strong relationships with my future ministry team and local church partners in Tokyo.",
    },
]

export function PrayerRequests() {
    return (
        <section className="bg-secondary/50 py-24 md:py-32" id="prayer">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Intercede
                    </span>
                    <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                        Prayer Requests
                    </h2>
                    <p className="mx-auto max-w-2xl font-serif italic text-foreground mt-2">
                        &ldquo;Brothers and sisters, pray for us.&rdquo; &mdash; 1 Thessalonians 5:25
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {prayerRequests.map((request, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden transition-all hover:shadow-md ${request.urgent ? "border-accent" : ""
                                }`}
                        >
                            {request.urgent && (
                                <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                                    Urgent
                                </div>
                            )}
                            <CardContent className="p-6">
                                <h3 className="mb-2 font-serif text-lg font-medium text-foreground">
                                    {request.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {request.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
