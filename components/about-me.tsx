export function AboutMe() {
  return (
    <section id="about" className="bg-card py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">

        {/* Label — centered */}
        <div className="text-center">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </span>

          {/* Scripture — centered, large */}
          <blockquote className="mb-10">
            <p className="font-serif text-3xl font-light italic leading-snug text-foreground text-balance md:text-4xl lg:text-5xl">
              &ldquo;Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord.&rdquo;
            </p>
          </blockquote>

          {/* Ornamental divider */}
          <div className="mx-auto mb-12 flex items-center gap-4 max-w-xs">
            <div className="h-px flex-1 bg-border" />
            <div className="h-1 w-1 rounded-full bg-primary/40" />
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        {/* Body — left-aligned for readability */}
        <div className="mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground text-left">
          <p>
            Hi, I&apos;m Jess &mdash; a 22-year-old recent Computer Science graduate. With many of my peers
            stepping into full-time jobs, it&apos;s easy to compare myself and feel &ldquo;behind.&rdquo;
          </p>

          {/* Emphasized paragraph — visually distinct, no underline */}
          <p className="border-l-2 border-primary pl-4 text-foreground font-medium">
            Yet, the Lord reminds me that my ultimate goal is not to pursue money or climb the career
            ladder &mdash; it is to glorify and enjoy Him forever.
          </p>

          <p>
            As I commit this next year to seek and serve Him in Japan, my prayer is that it wouldn&apos;t
            just be this one year I dedicate to Him &mdash; but that I would be a true worshipper, lover,
            and follower of Christ all the days of my life, until I see Him face to face.
          </p>
        </div>

      </div>
    </section>
  )
}