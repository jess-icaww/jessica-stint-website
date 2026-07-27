import Image from "next/image"

export function OpeningLetter() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[760px] px-6">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-center gap-8">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/headshot.jpeg"
              alt="Headshot!"
              fill
              className="object-cover"
              style={{ transform: "scale(3.7)", transformOrigin: "49% 55%" }}
            />
          </div>
          <div>
            <p className="font-playfair text-[26px] italic text-[oklch(0.27_0.015_60)]">Jessica Wong</p>
            <p className="mt-1 text-[14px] text-[oklch(0.5_0.02_65)]">Tokyo, Japan &middot; 2026-2027</p>
          </div>
        </div>

        {/* Letter */}
        <p className="font-playfair text-[28px] leading-[1.55] text-[oklch(0.4_0.02_60)]">
          <span className="float-left mr-2 pr-1 font-playfair text-[76px] italic leading-[0.8] text-[oklch(0.27_0.015_60)]">
            I
          </span>
          f you told me a few years ago that God would call me to Japan after graduating, I wouldn&apos;t have believed you.
          Instead, I thought this year would be spent trying to build my career and exploring my early 20s doing something completely different.
        </p>

        <p className="clear-both mt-8 text-[18px] font-light leading-[1.85] text-[oklch(0.4_0.02_60)]">
          The Lord met me during college and radifically transformed me after showing me the true weight of Christ's sacrifice, though I don't deserve it.
          God has been continuing to shape what it means for me to live life not for myself, but for Him and His namesake.
        </p>

                <p className="clear-both mt-8 text-[18px] font-light leading-[1.85] text-[oklch(0.4_0.02_60)]">
                  As I commit this next year to seeking and serving the Lord in Japan, my prayer is that this would not JUST be a one-year commitment, but
                  the start of a lifetime spent devoted to Christ until I see Him face to face.
        </p>
      </div>
    </section>
  )
}
