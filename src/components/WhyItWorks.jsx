// Server component — SmoothWrapper targets .why-header and .why-row via #why-it-works.

function EyeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 24 C10 8 38 8 46 24 C38 40 10 40 2 24Z" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function RepeatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 20 C8 13 14 8 22 8 L38 8" />
      <polyline points="34 4 38 8 34 12" />
      <path d="M40 28 C40 35 34 40 26 40 L10 40" />
      <polyline points="14 36 10 40 14 44" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4 C15 4 8 11 8 20 C8 32 24 46 24 46 C24 46 40 32 40 20 C40 11 33 4 24 4Z" />
      <circle cx="24" cy="20" r="6" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="28 4 12 26 24 26 20 44 36 22 24 22 28 4" />
    </svg>
  )
}

function CoinArrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="32" r="12" />
      <line x1="22" y1="25" x2="22" y2="39" />
      <path d="M17 29 C17 29 27 26 27 32 C27 38 17 35 17 38" />
      <line x1="36" y1="6" x2="36" y2="18" />
      <polyline points="32 10 36 6 40 10" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="6" />
      <path d="M2 40 C2 28 26 28 26 40" />
      <circle cx="34" cy="14" r="6" />
      <path d="M22 40 C22 28 46 28 46 40" />
    </svg>
  )
}

const POINTS = [
  {
    num: '01',
    tag: 'Natural Attention',
    line1: 'MOVING ADS',
    line2: 'STAND OUT',
    desc: 'People naturally notice moving objects more than static visuals. Mobile advertisements attract attention automatically while traveling through public spaces.',
    Icon: EyeIcon,
  },
  {
    num: '02',
    tag: 'Memory Effect',
    line1: 'REPEATED EXPOSURE',
    line2: 'IMPROVES MEMORY',
    desc: 'Seeing the same brand repeatedly across different locations increases familiarity and customer recall naturally over time.',
    Icon: RepeatIcon,
  },
  {
    num: '03',
    tag: 'City-Wide Reach',
    line1: 'DAILY CITY-WIDE',
    line2: 'COVERAGE',
    desc: 'Our autos travel through main roads, traffic junctions, commercial areas, residential zones, schools, markets, railway stations, and business districts every single day.',
    Icon: MapPinIcon,
  },
  {
    num: '04',
    tag: 'Superior Impact',
    line1: 'MORE EFFECTIVE THAN',
    line2: 'STATIC ADVERTISING',
    desc: 'Unlike fixed billboards that stay in one place, mobile advertisements continuously move through different audiences and locations throughout the day.',
    Icon: LightningIcon,
  },
  {
    num: '05',
    tag: 'Smart Budget',
    line1: 'COST-EFFECTIVE',
    line2: 'MARKETING',
    desc: 'Reach thousands of people daily without the extremely high costs of traditional outdoor advertising hoardings and fixed billboards.',
    Icon: CoinArrowIcon,
  },
  {
    num: '06',
    tag: 'Real World',
    line1: 'REAL PUBLIC',
    line2: 'VISIBILITY',
    desc: "Your brand becomes part of people's everyday environment instead of being limited to screens or a single fixed location.",
    Icon: PeopleIcon,
  },
]

export default function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
        `,
      }}
    >
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="why-header text-center mb-16 max-w-6xl mx-auto">
        <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center justify-center gap-3">
          <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
          Why It Works
          <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
        </div>
        <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[.95]">
          VISIBILITY THAT
          <br />
          CAPTURES
          <br />
          <span className="text-brand-yellow">ATTENTION</span>
        </h2>
      </div>

      {/* ── Editorial rows ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto w-full">
        {POINTS.map((point, i) => (
          <div
            key={point.num}
            className={`why-row grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-10 py-10${
              i > 0 ? ' border-t border-[rgba(255,208,0,0.1)]' : ''
            }`}
          >
            {/* Col 1 — Ghost number */}
            <div className="self-center">
              <span className="font-display text-[clamp(4rem,8vw,7rem)] text-[rgba(255,208,0,0.15)] font-bold leading-none">
                {point.num}
              </span>
            </div>

            {/* Col 2 — Title block */}
            <div className="self-center">
              <div className="text-brand-yellow mb-3">
                <point.Icon />
              </div>
              <div className="font-condensed text-[0.7rem] font-bold tracking-[3px] uppercase text-brand-yellow mb-2 flex items-center gap-[0.6rem]">
                <span className="block w-4 h-[2px] bg-brand-yellow shrink-0" />
                {point.tag}
              </div>
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[.95]">
                {point.line1}
                <br />
                <span className="text-brand-yellow">{point.line2}</span>
              </h3>
            </div>

            {/* Col 3 — Description */}
            <div className="self-center md:pl-8">
              <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8]">
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
