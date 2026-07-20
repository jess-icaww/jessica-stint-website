import { NewsletterForm } from "@/components/newsletter-form"

export function StayConnected() {
  return (
    <section id="connect" className="scroll-mt-16 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Walk With Me
        </span>
        <h2 className="font-serif text-4xl font-light leading-tight text-foreground text-balance md:text-5xl">
          Follow the journey
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The best way to stay close is through my letters. Every month I&apos;ll share stories, prayer
          requests, and honest updates from the field. I&apos;d love for you to walk this year alongside me.
        </p>

        <div className="mt-10">
          <NewsletterForm />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          If you&apos;d also like to support the mission financially, you can{" "}
          <a
            href="https://app.aplos.com/aws/give/SoonMovementGlobal/JessicaWong"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            give here
          </a>
          . Every partnership, in prayer or giving, means the world.
        </p>
      </div>
    </section>
  )
}
