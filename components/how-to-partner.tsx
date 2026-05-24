import { Button } from "@/components/ui/button"
import { HandHeart, Mail, Users2, CircleDollarSign } from "lucide-react"

const partnerWays = [
    {
        icon: HandHeart,
        title: "Pray",
        description:
            "Commit to praying regularly for Japan, for students to encounter Jesus, and for my team and I.",
        cta: "View Prayer Requests",
        href: "#prayer",
        newTab: false
    },
    {
        icon: CircleDollarSign,
        title: "Give",
        description:
            "Partner financially to cover living expenses, ministry costs, and support local outreach events.",
        cta: "Give Monthly/One-Time",
        primary: true,
        href: "#donate",
        newTab: false
    },
    {
        icon: Mail,
        title: "Stay Connected",
        description:
            "Receive monthly updates, prayer requests, and stories from the field straight to your inbox.",
        cta: "Subscribe",
        href: "https://forms.gle/Uy4F8NMQYSr3Djgu8",
        newTab: true
    }
]

export function HowToPartner() {
    return (
        <section className="bg-secondary/50 py-24 md:py-32" id="partner">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Get Involved
                    </span>
                    <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                        How to Partner
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Your partnership matters. Here are some ways you can join me in reaching Japanese students for the name of Christ!
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {partnerWays.map((way, index) => (
                        <div
                            key={index}
                            className={`flex flex-col rounded-lg p-8 text-center transition-all ${way.primary
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "bg-card hover:shadow-md"
                                }`}
                        >
                            <div
                                className={`mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full ${way.primary ? "bg-white/20" : "bg-primary/10"
                                    }`}
                            >
                                <way.icon
                                    className={`h-7 w-7 ${way.primary ? "text-primary-foreground" : "text-primary"
                                        }`}
                                />
                            </div>
                            <h3
                                className={`mb-3 font-serif text-xl font-medium ${way.primary ? "text-primary-foreground" : "text-foreground"
                                    }`}
                            >
                                {way.title}
                            </h3>
                            <p
                                className={`mb-6 flex-1 text-sm leading-relaxed ${way.primary
                                    ? "text-primary-foreground/80"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {way.description}
                            </p>
                            <Button
                                variant={way.primary ? "secondary" : "outline"}
                                className={`w-full cursor-pointer transition-colors duration-200 ${way.primary
                                    ? "hover:bg-white/90 hover:text-primary"
                                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/40"
                                    }`}
                                asChild={!!way.href}
                            >
                                {way.href ? (
                                    <a href={way.href}
                                        target={way.newTab ? "_blank" : "_self"}
                                        rel={way.newTab ? "noopener noreferrer" : undefined}
                                    >
                                        {way.cta}
                                    </a>
                                ) : (
                                    way.cta
                                )}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
