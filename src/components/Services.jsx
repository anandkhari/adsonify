// To replace placeholders with real images later:
// 1. Add your image to /public/images/services/
// 2. Import Image from 'next/image'
// 3. Replace the .service-card-img div contents with:
//    <Image src="/images/services/your-image.jpg"
//           alt="Service name" fill
//           className="object-cover" />
// 4. Add position="relative" to the .service-card-img div

// Server component — SmoothWrapper targets .services-header and .service-card.

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="10 4 14 8 10 12" />
    </svg>
  )
}

const SERVICES = [
  {
    num: '01',
    tag: 'Service 01',
    line1: 'MOBILE AUTO',
    line2: 'AD CAMPAIGNS',
    desc: 'High-visibility advertisements displayed on moving auto-rickshaws across targeted locations and busy public areas throughout the city.',
  },
  {
    num: '02',
    tag: 'Service 02',
    line1: 'BUSINESS &',
    line2: 'ENTERPRISE PROMOS',
    desc: 'Advertising solutions designed for every business size — from local shops to large enterprises, corporate brands, and everything in between.',
  },
  {
    num: '03',
    tag: 'Service 03',
    line1: 'CAMPAIGN PLANNING',
    line2: '& MANAGEMENT',
    desc: 'Complete campaign coordination from advertisement approval to execution, route planning, and final reporting.',
  },
  {
    num: '04',
    tag: 'Service 04',
    line1: 'CREATIVE DESIGN',
    line2: 'ASSISTANCE',
    desc: 'Professional support for advertisement design, branding layouts, and print-ready visuals that capture public attention.',
  },
  {
    num: '05',
    tag: 'Service 05',
    line1: 'CAMPAIGN TRACKING',
    line2: '& REPORTS',
    desc: 'Receive campaign monitoring updates, deployment information, visibility reports, and performance data throughout your campaign.',
  },
  {
    num: '06',
    tag: 'Service 06',
    line1: 'DRIVER & AGENT',
    line2: 'PARTNERSHIP',
    desc: 'Additional earning opportunities for auto drivers and local advertising agents through our structured partnership programs.',
  },
]

export default function Services() {
  return (
    <>
      {/* Section-level divider — stronger 30% yellow line before Services */}
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(255,208,0,0.3)] to-transparent" />

      <section
        id="services"
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
          `,
        }}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="services-header text-center mb-16 max-w-7xl mx-auto">
          <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center justify-center gap-3">
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
            What We Offer
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
          </div>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[.95]">
            OUR
            <br />
            <span className="text-brand-yellow">SERVICES</span>
          </h2>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="service-card overflow-hidden rounded-sm border border-[rgba(255,208,0,0.15)] bg-[rgba(255,208,0,0.02)] flex flex-col"
            >
              {/* ── Image placeholder ──────────────────────────────────── */}
              <div className="service-card-img aspect-[16/10] w-full bg-[rgba(255,208,0,0.06)] border-b border-[rgba(255,208,0,0.1)] relative overflow-hidden flex items-center justify-center">

                {/* Diagonal line texture */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id={`diag-${s.num}`}
                      patternUnits="userSpaceOnUse"
                      width="24"
                      height="24"
                    >
                      <line
                        x1="0" y1="24" x2="24" y2="0"
                        stroke="#FFD000" strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#diag-${s.num})`} opacity="0.03" />
                </svg>

                {/* Ghost number */}
                <span className="font-display text-[5rem] text-[rgba(255,208,0,0.08)] leading-none select-none pointer-events-none">
                  {s.num}
                </span>

                {/* Coming soon label */}
                <span className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.3)] absolute bottom-3 left-0 right-0 text-center">
                  Photo coming soon
                </span>
              </div>

              {/* ── Text content ───────────────────────────────────────── */}
              <div className="p-6 flex flex-col flex-1">

                {/* Tag */}
                <div className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-brand-yellow mb-2 flex items-center gap-2">
                  <span className="block w-4 h-[1.5px] bg-brand-yellow shrink-0" />
                  {s.tag}
                </div>

                {/* Title */}
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.1] mb-3 text-white">
                  {s.line1}
                  <br />
                  {s.line2}
                </h3>

                {/* Description */}
                <p className="text-[clamp(.8rem,1.2vw,.9rem)] text-brand-gray leading-[1.7] mb-4 flex-1">
                  {s.desc}
                </p>

                {/* Learn More */}
                <div className="font-condensed text-[0.7rem] tracking-[2px] uppercase text-brand-yellow flex items-center gap-2">
                  Learn More
                  <ArrowIcon />
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
