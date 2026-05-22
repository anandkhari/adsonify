// Server component — no animations here, SmoothWrapper targets .objectives-header
// and .objectives-card via ScrollTrigger on #objectives.

function CrosshairIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="8" />
      <line x1="24" y1="2"  x2="24" y2="14" />
      <line x1="24" y1="34" x2="24" y2="46" />
      <line x1="2"  y1="24" x2="14" y2="24" />
      <line x1="34" y1="24" x2="46" y2="24" />
    </svg>
  )
}

function RecallIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 24 C40 33 33 40 24 40 C15 40 8 33 8 24 C8 15 15 8 24 8 C29 8 34 10 37 14" />
      <polyline points="30 8 38 14 32 20" />
    </svg>
  )
}

function PriceTagIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8 L28 8 L42 22 L26 42 L8 26 Z" />
      <circle cx="32" cy="16" r="3" fill="currentColor" stroke="none" />
      <line x1="14" y1="20" x2="24" y2="20" />
      <line x1="14" y1="27" x2="21" y2="27" />
    </svg>
  )
}

function BarChartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4"  y="28" width="10" height="16" rx="1" />
      <rect x="19" y="18" width="10" height="26" rx="1" />
      <rect x="34" y="8"  width="10" height="36" rx="1" />
      <line x1="2" y1="44" x2="46" y2="44" />
    </svg>
  )
}

function SteeringWheelIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="5" />
      <line x1="24"  y1="4"    x2="24"  y2="19" />
      <line x1="6.8" y1="34"   x2="19.6" y2="26.5" />
      <line x1="41.2" y1="34"  x2="28.4" y2="26.5" />
    </svg>
  )
}

function LineChartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6"  x2="4"  y2="44" />
      <line x1="4" y1="44" x2="44" y2="44" />
      <polyline points="4 38 14 26 22 32 34 12 44 18" />
      <circle cx="34" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const OBJECTIVES = [
  {
    num: '01',
    tag: 'Objective 01',
    line1: 'INCREASE BRAND',
    line2: 'VISIBILITY',
    desc: 'Ensure businesses gain repeated exposure across multiple public locations every single day.',
    Icon: CrosshairIcon,
  },
  {
    num: '02',
    tag: 'Objective 02',
    line1: 'BUILD STRONG',
    line2: 'BRAND RECALL',
    desc: 'Help people remember brands through continuous visual exposure and repetition across the city.',
    Icon: RecallIcon,
  },
  {
    num: '03',
    tag: 'Objective 03',
    line1: 'DELIVER AFFORDABLE',
    line2: 'ADVERTISING',
    desc: 'Provide cost-effective alternatives to expensive traditional billboards and hoardings.',
    Icon: PriceTagIcon,
  },
  {
    num: '04',
    tag: 'Objective 04',
    line1: 'SUPPORT ALL',
    line2: 'BUSINESS SIZES',
    desc: 'Help startups, local shops, tourism brands, IT companies, and enterprises gain wider city-level visibility.',
    Icon: BarChartIcon,
  },
  {
    num: '05',
    tag: 'Objective 05',
    line1: 'EMPOWER AUTO',
    line2: 'DRIVERS',
    desc: 'Create sustainable additional income opportunities for drivers and local advertising agents.',
    Icon: SteeringWheelIcon,
  },
  {
    num: '06',
    tag: 'Objective 06',
    line1: 'MODERNIZE OUTDOOR',
    line2: 'ADVERTISING',
    desc: 'Bring technology, tracking, and measurable reporting into mobile advertising campaigns.',
    Icon: LineChartIcon,
  },
]

export default function Objectives() {
  return (
    <section
      id="objectives"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
        `,
      }}
    >
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="objectives-header text-center mb-16 max-w-6xl mx-auto">
        <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center justify-center gap-3">
          <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
          Our Objectives
          <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
        </div>
        <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[.95]">
          WHAT WE
          <br />
          AIM TO
          <br />
          <span className="text-brand-yellow">ACHIEVE</span>
        </h2>
      </div>

      {/* ── Cards grid ───────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {OBJECTIVES.map((obj) => (
          <div
            key={obj.num}
            className="objectives-card relative overflow-hidden border border-[rgba(255,208,0,0.15)] rounded-sm p-8 bg-[rgba(255,208,0,0.03)]"
          >
            {/* Ghost number */}
            <div className="absolute top-4 right-4 font-display text-[6rem] text-[rgba(255,208,0,0.04)] leading-none pointer-events-none select-none">
              {obj.num}
            </div>

            {/* Icon */}
            <div className="text-brand-yellow mb-6">
              <obj.Icon />
            </div>

            {/* Tag */}
            <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-3 flex items-center gap-[0.6rem]">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              {obj.tag}
            </div>

            {/* Title */}
            <h3 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[.95] mb-4">
              {obj.line1}
              <br />
              <span className="text-brand-yellow">{obj.line2}</span>
            </h3>

            {/* Description */}
            <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8]">
              {obj.desc}
            </p>

            <div className="w-12 h-0.5 bg-brand-yellow mt-6 opacity-60" />
          </div>
        ))}
      </div>
    </section>
  )
}
