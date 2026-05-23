import { Button } from "@/components/ui/button"
import { HandHeart, Mail, Users2, CircleDollarSign } from "lucide-react"

const partnerWays = [
  {
    icon: HandHeart,
    title: "Pray",
    description:
      "Commit to praying regularly for the ministry, for students to encounter Jesus, and for my spiritual health.",
    cta: "Join Prayer Team",
  },
  {
    icon: CircleDollarSign,
    title: "Give",
    description:
      "Partner financially to cover living expenses, ministry costs, and support local outreach events.",
    cta: "Give Monthly",
    primary: true,
  },
  {
    icon: Mail,
    title: "Stay Connected",
    description:
      "Receive monthly updates, prayer requests, and stories from the field straight to your inbox.",
    cta: "Subscribe",
  },
  {
    icon: Users2,
    title: "Spread the Word",
    description:
      "Share my story with your church, small group, or friends who might want to partner in this mission.",
    cta: "Share",
  },
]

export function HowToPartner() {
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Get Involved
          </span>
          <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            How to Partner
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Every partnership matters. Here&apos;s how you can join me in reaching Japanese students with the gospel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerWays.map((way, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg p-8 text-center transition-all ${
                way.primary
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card hover:shadow-md"
              }`}
            >
              <div
                className={`mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full ${
                  way.primary ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                <way.icon
                  className={`h-7 w-7 ${
                    way.primary ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>
              <h3
                className={`mb-3 font-serif text-xl font-medium ${
                  way.primary ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {way.title}
              </h3>
              <p
                className={`mb-6 flex-1 text-sm leading-relaxed ${
                  way.primary
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {way.description}
              </p>
              <Button
                variant={way.primary ? "secondary" : "outline"}
                className="w-full"
              >
                {way.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
