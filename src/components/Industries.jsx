// Server component — two-column split layout.
// Left: large heading + subline. Right: 17 industry pills in a flowing wrap grid.

const INDUSTRIES = [
  'IT & Technology',
  'Tourism & Travel',
  'Hotels & Resorts',
  'Restaurants & Cafes',
  'Retail Stores',
  'Educational Institutions',
  'Healthcare & Clinics',
  'Real Estate',
  'Events & Exhibitions',
  'Startups & Brands',
  'Financial Services',
  'E-commerce & Delivery',
  'Fashion & Lifestyle',
  'Automobile Showrooms',
  'Entertainment & Media',
  'Government Campaigns',
  'Corporate Brands',
]

export default function Industries() {
  return (
    <>
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(255,208,0,0.3)] to-transparent" />

      <section
        id="industries"
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
          `,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-16 items-center max-w-7xl mx-auto">

          {/* ── Left col — heading ──────────────────────────────────────────── */}
          <div className="industries-header">

            <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center gap-3">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              Who We Serve
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5vw,5rem)] leading-[.92] mb-6">
              WE SERVE
              <br />
              EVERY
              <br />
              <span className="text-brand-yellow">INDUSTRY</span>
            </h2>

            <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8] max-w-[340px] mb-8">
              From local shops to large enterprises — if your audience moves through the city, Adsonify gets your message in front of them.
            </p>

            {/* Stat callout */}
            <div className="border-l-2 border-brand-yellow pl-5">
              <p className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-brand-yellow">
                17+
              </p>
              <p className="font-condensed text-[0.7rem] tracking-[3px] uppercase text-brand-gray mt-1">
                Industries Served
              </p>
            </div>

          </div>

          {/* ── Right col — pill grid ───────────────────────────────────────── */}
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((name, i) => (
              <span
                key={name}
                className="industry-card font-condensed text-[0.75rem] tracking-[1.5px] uppercase px-5 py-3 border border-[rgba(255,208,0,0.18)] rounded-sm text-[rgba(255,255,255,0.6)] bg-[rgba(255,208,0,0.02)] hover:border-[rgba(255,208,0,0.5)] hover:text-brand-yellow hover:bg-[rgba(255,208,0,0.06)] transition-all duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}