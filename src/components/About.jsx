// Server component — car (from page.js) floats over the RIGHT col of #about-who.
// Left col = text content. Right col = empty space for the car to park in.

function MissionIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="12" />
      <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function VisionIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 24 C10 8 38 8 46 24 C38 40 10 40 2 24Z" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      {/* ── Section A: Who We Are — left text, right empty (car parks here) ── */}
      <section
        id="about-who"
        className="min-h-screen grid grid-cols-1 md:grid-cols-[45%_55%]  items-center"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 75% 55%, rgba(255,208,0,0.05) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
          `,
        }}
      >
        {/* Left col — text content */}
        <div className="about-who-content w-full flex flex-col items-center md:items-start text-center md:text-left px-8 md:pl-20 md:pr-4 py-8">

          <div className="font-display text-[5rem] text-[rgba(255,208,0,0.06)] leading-none mb-[-0.5rem]">
            01
          </div>

          <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-3 flex items-center gap-[0.6rem]">
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
            About Adsonify
          </div>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[.95] tracking-wide mb-5">
            WHO <span className="text-brand-yellow">WE</span>
            <br />
            ARE
          </h2>

          <p className="text-[clamp(.9rem,1.4vw,1rem)] text-brand-gray leading-[1.8] max-w-[480px] mb-7">
            Adsonify is an innovative mobile advertising platform specialising in
            high-visibility outdoor promotions through branded auto-rickshaw advertising
            networks. We help businesses create stronger public presence by transforming
            daily city transportation into moving advertisement spaces. We also create
            additional earning opportunities for auto drivers and advertising agents
            through our partnership programs.
          </p>

          <div className="w-15 h-0.5 bg-brand-yellow opacity-60" />
        </div>

        {/* Right col — empty, #car from page.js parks here */}
        <div className="hidden md:flex items-center justify-center relative h-full">
          {/* Ambient glow behind car */}
          <div className="absolute w-[70%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.05)_0%,transparent_70%)] pointer-events-none" />
          {/* Road line at bottom of right col */}
          <div className="absolute bottom-[14vh] left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[rgba(255,208,0,0.2)] to-transparent" />
          <div
            className="road-dashes-anim absolute left-0 right-0"
            style={{ bottom: 'calc(14vh - 14px)' }}
          />
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────────────── */}
      <div className="h-px bg-linear-to-r from-transparent via-brand-yellow to-transparent opacity-30" />

      {/* ── Section B: Mission + Vision — full-width, no car ────────────────── */}
      <section
        id="about-mv"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24"
        style={{
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
          `,
        }}
      >
        {/* Header */}
        <div className="about-mv-header text-center mb-16">
          <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center justify-center gap-3">
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
            Our Purpose
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
          </div>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[.95]">
            MISSION <span className="text-brand-yellow">&amp;</span> VISION
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">

          {/* Mission */}
          <div className="about-mv-card relative overflow-hidden border border-[rgba(255,208,0,0.15)] rounded-sm p-8 bg-[rgba(255,208,0,0.03)]">
            <div className="absolute top-4 right-4 font-display text-[6rem] text-[rgba(255,208,0,0.04)] leading-none pointer-events-none select-none">
              02
            </div>

            <div className="text-brand-yellow mb-6">
              <MissionIcon />
            </div>

            <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-3 flex items-center gap-[0.6rem]">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              Our Mission
            </div>

            <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[.95] mb-5">
              REVOLUTIONIZE
              <br />
              <span className="text-brand-yellow">ADVERTISING</span>
            </h3>

            <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8]">
              To revolutionize outdoor advertising through smart mobile campaigns that
              deliver continuous visibility, stronger customer recall, and affordable
              local marketing solutions.
            </p>

            <div className="w-12 h-0.5 bg-brand-yellow mt-7 opacity-60" />
          </div>

          {/* Vision */}
          <div className="about-mv-card relative overflow-hidden border border-[rgba(255,208,0,0.15)] rounded-sm p-8 bg-[rgba(255,208,0,0.03)]">
            <div className="absolute top-4 right-4 font-display text-[6rem] text-[rgba(255,208,0,0.04)] leading-none pointer-events-none select-none">
              03
            </div>

            <div className="text-brand-yellow mb-6">
              <VisionIcon />
            </div>

            <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-3 flex items-center gap-[0.6rem]">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              Our Vision
            </div>

            <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[.95] mb-5">
              INDIA&apos;S
              <br />
              <span className="text-brand-yellow">LEADING</span> NETWORK
            </h3>

            <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8]">
              To become India&apos;s leading mobile advertising network by connecting
              businesses, communities, and mobility through innovative moving
              advertisements.
            </p>

            <div className="w-12 h-0.5 bg-brand-yellow mt-7 opacity-60" />
          </div>

        </div>
      </section>
    </>
  )
}