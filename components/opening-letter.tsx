import Image from "next/image"

export function OpeningLetter() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[760px] px-6">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-center gap-8">
          <Image
            src="/images/jessica-portrait.png"
            alt="Jessica Wong"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-playfair text-[26px] italic text-[oklch(0.27_0.015_60)]">Jessica Wong</p>
            <p className="mt-1 text-[14px] text-[oklch(0.5_0.02_65)]">Writing from Tokyo, Japan &middot; Year One</p>
          </div>
        </div>

        {/* Letter */}
        <p className="font-playfair text-[28px] leading-[1.55] text-[oklch(0.4_0.02_60)]">
          <span className="float-left mr-2 pr-1 font-playfair text-[76px] italic leading-[0.8] text-[oklch(0.27_0.015_60)]">
            I
          </span>
          f you&apos;d told me a few years ago that I&apos;d be writing to you from a small apartment in
          Tokyo, I&apos;m not sure I would have believed you. But here I am &mdash; kettle on, notebook open,
          trying to put words to a year that&apos;s already changing me.
        </p>

        <p className="clear-both mt-8 text-[18px] font-light leading-[1.85] text-[oklch(0.4_0.02_60)]">
          Some days it&apos;s a real conversation with a student who&apos;s finally asking the honest
          questions. Other days it&apos;s fumbling a word in Japanese badly enough to make a whole room
          laugh, or sitting with tea in the quiet before anyone else is awake, wondering if I&apos;m doing
          any of this right. I want to keep you close to all of it &mdash; the small wins, the language
          mistakes, the quiet mornings, and the harder days too, not just the highlight reel.
        </p>

        <p className="mt-8 font-playfair text-[19px] italic text-[oklch(0.27_0.015_60)]">With love, Jessica</p>
      </div>
    </section>
  )
}
