import { NewsletterForm } from "@/components/newsletter-form"

export function StayConnected() {
  return (
    <section id="connect" className="scroll-mt-16 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[620px] px-6 text-center">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[oklch(0.5_0.07_150)]">
          Walk With Me
        </span>
        <h2 className="font-serif text-4xl font-normal leading-tight text-foreground text-balance">
          Follow the journey
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] font-light leading-[1.8] text-muted-foreground">
          The best way to stay close is through my letters. Every month I&apos;ll share stories, prayer
          requests, and honest updates from the field. I&apos;d love for you to walk this year alongside me.
        </p>

        <div className="mt-10">
          <NewsletterForm variant="minimal" />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          If you&apos;d also like to support the mission financially, you can{" "}
          <a
            href="https://app.aplos.com/aws/give/SoonMovementGlobal/JessicaWong"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[oklch(0.5_0.07_55)] underline underline-offset-[3px] transition-colors hover:text-[oklch(0.3_0.1_55)]"
          >
            give here
          </a>
          . Every partnership, in prayer or giving, means the world.
        </p>
      </div>
    </section>
  )
}
