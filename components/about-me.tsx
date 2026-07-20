export function AboutMe() {
  return (
    <section id="story" className="scroll-mt-16 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <span className="mb-8 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
          My Story
        </span>

        {/* Opening scripture, set like a journal epigraph */}
        <blockquote className="mb-14 border-l border-accent pl-6">
          <p className="font-serif text-2xl font-light italic leading-snug text-foreground text-balance md:text-3xl">
            &ldquo;I count everything as loss because of the surpassing worth of knowing Christ Jesus my
            Lord.&rdquo;
          </p>
          <cite className="mt-4 block text-xs font-medium uppercase not-italic tracking-widest text-muted-foreground">
            Philippians 3:8
          </cite>
        </blockquote>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Hi, I&apos;m Jess &mdash; a 22-year-old recent Computer Science graduate. With many of my peers
            stepping into full-time jobs, it&apos;s easy to compare myself and feel &ldquo;behind.&rdquo;
          </p>
          <p className="font-serif text-xl font-light italic leading-relaxed text-foreground">
            Yet the Lord reminds me that my ultimate goal is not to pursue money or climb the career ladder
            &mdash; it is to glorify and enjoy Him forever.
          </p>
          <p>
            As I commit this next year to seek and serve Him in Japan, my prayer is that it wouldn&apos;t
            just be this one year I dedicate to Him &mdash; but that I would be a true worshipper, lover, and
            follower of Christ all the days of my life, until I see Him face to face.
          </p>
        </div>

        <p className="mt-14 font-serif text-2xl font-light italic text-foreground">— Jessica</p>
      </div>
    </section>
  )
}
