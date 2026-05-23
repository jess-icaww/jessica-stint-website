const impactStories = [
  {
    quote:
      "For the first time in my life, someone asked me about my dreams and listened. I never knew love like this existed.",
    name: "Yuki",
    role: "Tokyo University Student",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    quote:
      "The Christian community welcomed me when I felt completely alone. They showed me what family really means.",
    name: "Kenji",
    role: "Waseda University Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    quote:
      "I never thought faith could be so real and personal. Meeting missionaries changed everything for me.",
    name: "Haruka",
    role: "Sophia University Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
]

export function StudentImpact() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lives Changed
          </span>
          <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            Student Impact
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stories from students whose lives have been transformed through campus ministry in Japan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-border bg-background p-8"
            >
              <blockquote className="mb-6 flex-1 font-serif text-lg italic leading-relaxed text-foreground">
                &quot;{story.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
