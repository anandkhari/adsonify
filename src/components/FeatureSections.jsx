// Static server component — no GSAP here, SmoothWrapper drives all animations.
// Each section gets its id (section2–section6) so GSAP can use them as triggers.

const FEATURES = [
  {
    id: 'section2',
    num: '01',
    tag: 'The Screen',
    pre: 'Full HD ', hi: 'LED', post: 'Display',
    desc: 'A high-brightness P4 LED panel delivering vivid, eye-catching visuals visible from 50+ metres — even in harsh Kerala sunlight.',
    specs: ['5000 nits brightness', 'P4 pixel pitch', '160° view angle', 'Full HD resolution'],
  },
  {
    id: 'section3',
    num: '02',
    tag: 'Navigation',
    pre: 'GPS ', hi: 'Route', post: 'Tracking',
    desc: 'Real-time GPS tracking lets you monitor exactly where your brand is at every moment. Transparent reporting, every kilometre covered.',
    specs: ['Live tracking', 'Custom routes', 'Campaign report', 'Geo-targeting'],
  },
  {
    id: 'section4',
    num: '03',
    tag: 'Audio',
    pre: 'Surround ', hi: 'Sound', post: 'System',
    desc: "A built-in professional speaker system amplifies your audio message alongside the stunning visuals. You won't just be seen — you'll be heard.",
    specs: ['800W output', 'Crystal clear audio', 'Multi-directional', 'Custom jingles'],
  },
  {
    id: 'section5',
    num: '04',
    tag: 'All-Weather',
    pre: 'Day ', hi: '&', post: 'Night Ready',
    desc: 'Auto-brightness adjustment and weatherproofing ensures maximum visibility in all conditions — blazing noon sun or late-night campaigns.',
    specs: ['Auto brightness', 'IP65 rated', 'Rain resistant', '24/7 operation'],
  },
  {
    id: 'section6',
    num: '05',
    tag: 'Ready to Go',
    pre: 'Book Your ', hi: 'Campaign', post: 'Today',
    desc: 'Starting from ₹4,999 for a half-day campaign. Flexible packages, transparent pricing, and a dedicated campaign manager for every booking.',
    specs: ['From ₹4,999', 'Half & full day', 'Multi-day packages', 'Pan-Kerala'],
    cta: true,
  },
]

export default function FeatureSections() {
  return (
    <>
      {FEATURES.map((feat) => (
        <section
          key={feat.id}
          id={feat.id}
          // Two-column grid mirrors the Hero layout.
          // Left 55%: space for the floating #car. Right 45%: feature copy.
          // On mobile: single column, content centred.
          className="min-h-screen grid grid-cols-1 md:grid-cols-[55%_45%] items-center"
        >
          {/* Left column — #car floats absolutely over this area */}
          <div className="hidden md:block" />

          {/* Right column — feature-content — GSAP scrubs this up on enter */}
          <div className="feature-content w-full px-8 md:pr-16 md:pl-4 py-16">

            <div className="font-display text-[5rem] text-[rgba(255,208,0,0.06)] leading-none mb-[-0.5rem]">
              {feat.num}
            </div>

            <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-3 flex items-center gap-[0.6rem]">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              {feat.tag}
            </div>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[.95] tracking-wide mb-5">
              {feat.pre}
              <span className="text-brand-yellow">{feat.hi}</span>
              <br />
              {feat.post}
            </h2>

            <p className="text-[clamp(.9rem,1.4vw,1rem)] text-brand-gray leading-[1.8] max-w-[420px] mb-7">
              {feat.desc}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {feat.specs.map((spec) => (
                <span
                  key={spec}
                  className="font-condensed text-[0.78rem] font-semibold tracking-[1.5px] uppercase py-[0.4rem] px-4 border border-[rgba(255,208,0,0.25)] rounded-xs text-[rgba(255,208,0,0.7)] bg-[rgba(255,208,0,0.05)]"
                >
                  {spec}
                </span>
              ))}
            </div>

            {feat.cta && (
              <a
                href="#outro"
                className="inline-block bg-brand-yellow text-brand-black font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] rounded-xs no-underline transition-all duration-200 hover:bg-white"
              >
                Book Now →
              </a>
            )}

            <div className="w-15 h-0.5 bg-brand-yellow mt-6 opacity-60" />
          </div>
        </section>
      ))}
    </>
  )
}
