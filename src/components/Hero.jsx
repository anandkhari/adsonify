// Server component — all animations driven by SmoothWrapper (GSAP + SplitText).
// Two-column layout: left 55% = visual space for the floating #car (page.js),
// right 45% = hero copy. On mobile the car is hidden so copy goes full-width.

export default function Hero() {
  return (
    <section
      id="section1"
      className="relative h-screen grid grid-cols-1 md:grid-cols-[55%_45%] items-center pt-20"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 30% 60%, rgba(255,208,0,0.06) 0%, transparent 70%),
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.025) 60px, rgba(255,208,0,0.025) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.025) 60px, rgba(255,208,0,0.025) 61px)
        `,
      }}
    >
      {/* ── Left column ── floating #car lives here on desktop ──────────── */}
      <div className="hidden md:flex items-center justify-center relative h-full">
        {/* Ambient glow behind car */}
        <div className="absolute w-[70%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        {/* Road line at bottom of left col */}
        <div className="absolute bottom-[14vh] left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[rgba(255,208,0,0.2)] to-transparent" />
        <div
          className="road-dashes-anim absolute left-0 right-0"
          style={{ bottom: 'calc(14vh - 14px)' }}
        />
      </div>

      {/* ── Right column ── hero copy ─────────────────────────────────── */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left px-8 md:pr-16 md:pl-4 py-8">
        <p className="hero-eyebrow font-condensed text-[0.75rem] font-bold tracking-[5px] uppercase text-brand-yellow mb-6 opacity-0 translate-y-5">
          Kerala&apos;s boldest mobile LED advertising
        </p>

        {/* No opacity-0 — SmoothWrapper sets opacity:1 then SplitText splits chars */}
     <h1 className="hero-title font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-[1.5px] mb-6">
  WHAT IF
  <br />
  <span className="text-brand-yellow">YOUR ADS COULD</span>
  <br />
  TRAVEL
</h1>

        <div className="hero-ctas flex gap-4 flex-wrap justify-center md:justify-start opacity-0 translate-y-5">
          <a
            href="#services"
            className="bg-brand-yellow text-brand-black font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] rounded-xs no-underline inline-block transition-all duration-200 hover:bg-white"
          >
            Explore Features
          </a>
          <a
            href="#outro"
            className="bg-transparent text-brand-yellow font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] border-[1.5px] border-brand-yellow rounded-xs no-underline inline-block transition-all duration-200 hover:bg-[rgba(255,208,0,0.1)]"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* ── Scroll hint — pinned to bottom-centre of the full section ── */}
      <div className="scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 pointer-events-none">
        <span className="font-condensed text-[0.68rem] tracking-[4px] uppercase text-brand-gray2">
          Scroll
        </span>
        <div className="w-px h-[50px] bg-linear-to-b from-brand-yellow to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
