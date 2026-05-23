export function WhyJapan() {
  return (
    <section id="why-japan" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">

        {/* Label + Title */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Mission Field
          </span>
          <h2 className="font-serif text-4xl font-light text-foreground text-balance md:text-5xl">
            Why Japan?
          </h2>
        </div>

        {/* Stats row */}
        <div className="mb-16 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {[
            { value: "0.5%",       label: "Evangelical Christians",  sub: "in a nation of 125 million" },
            { value: "2nd",        label: "Largest Unreached Nation", sub: "in the world" },
            { value: "2.6 Million",   label: "University Students",      sub: "in Tokyo alone" },
          ].map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center px-6 text-center">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-border sm:block" />
              )}
              <p className="font-serif text-4xl font-light text-primary md:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* The Need */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-light text-foreground">
              A Nation That Has Yet to Hear
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Japan is one of the most spiritually unreached nations on earth. With <span className="font-medium text-foreground italic">less than 1%</span> of
                the population identifying as Christian and only 0.5% as evangelical, <span className="font-medium text-foreground italic">the vast majority
                of Japanese people have never heard the gospel.</span> This means that many Japenese people haven't rejected the gospel, they simply haven't encountered it.
              </p>
              <p>
                Japan is is the second largest unreached people group in the world, a nation of 125 million
                with extraordinary depth of culture, intellect, and longing — and yet such few workers
                in the harvest field.
              </p>
            </div>
          </div>

          {/* The Hope */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-light text-foreground">
              But... There Is So Much Hope
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A friend of mine who has been serving in Japan for two years recently told me, <span className="font-medium text-foreground italic">"Jess, you're coming 
                at a really ripe time </span>where our students recently caught the vision of evanglizing and sharing the Gospel to their
                friends, but they don't know how to. A lot of them are looking to be discipled and most importantly,
                to co-labor with missionaries to share Christ with their friends."
              </p>
              <p>
                The harvest is real. The laborers are few. I praise God for 1) giving me the desire for the nations and
                2) that He is the one who goes before me and is with me always, to the end of the age.
              </p>
            </div>
          </div>

        </div>

        {/* Closing pull quote */}
        <div className="mt-16 border-l-2 border-primary pl-6">
          <p className="font-serif text-xl font-light italic text-foreground md:text-2xl">
            &ldquo;The harvest is plentiful, but the laborers are few. Therefore pray earnestly
            to the Lord of the harvest to send out laborers into his harvest.&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Matthew 9:37–38
          </p>
        </div>

      </div>
    </section>
  )
}