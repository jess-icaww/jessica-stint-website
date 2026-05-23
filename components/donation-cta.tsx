import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function DonationCTA() {
  return (
    <section id="donate" className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <Heart className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="mb-6 font-serif text-3xl font-light text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Will You Join This Mission?
        </h2>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="min-w-48 text-base font-medium"
          >
            Give Monthly
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-48 border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 text-base font-medium"
          >
            One-Time Gift
          </Button>
        </div>

        {/* Support Goals */}
        <div className="mx-auto max-w-lg space-y-6">
          <div>
            <div className="mb-2 flex justify-between text-sm text-primary-foreground/80">
              <span>Monthly Support Goal</span>
              <span>$2,450/month</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-1000"
                style={{ width: "45%" }}
              />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              Living and ministry expenses
            </p>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-primary-foreground/80">
              <span>One-Time Goal</span>
              <span>$14,650</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-1000"
                style={{ width: "30%" }}
              />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              Flights, lodging, visa, and conferences
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
