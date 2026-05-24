const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const BoltIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const RepeatIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const CoinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const ClipboardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const reasons = [
  {
    ghost: '01',
    tag: 'Visibility',
    icon: <EyeIcon />,
    title: 'HIGH DAILY\nVISIBILITY',
    desc: 'Your advertisements travel across multiple locations every single day, ensuring maximum exposure throughout the city.',
  },
  {
    ghost: '02',
    tag: 'Attention',
    icon: <BoltIcon />,
    title: 'BETTER PUBLIC\nATTENTION',
    desc: 'Moving advertisements naturally attract significantly more attention compared to static boards and fixed billboards.',
  },
  {
    ghost: '03',
    tag: 'Memory',
    icon: <RepeatIcon />,
    title: 'STRONG BRAND\nRECALL',
    desc: 'Repeated exposure across different locations helps customers remember your brand more effectively over time.',
  },
  {
    ghost: '04',
    tag: 'Budget',
    icon: <CoinIcon />,
    title: 'AFFORDABLE\n& SCALABLE',
    desc: 'Run city-wide campaigns without the massive costs of traditional outdoor advertising. Scale up anytime.',
  },
  {
    ghost: '05',
    tag: 'Management',
    icon: <ClipboardIcon />,
    title: 'PROFESSIONAL\nCAMPAIGN TEAM',
    desc: 'Our team handles printing, installation, route coordination, and reporting professionally end to end.',
  },
  {
    ghost: '06',
    tag: 'Community',
    icon: <UsersIcon />,
    title: 'DRIVER\nPARTNERSHIP',
    desc: 'We support auto drivers and local agents with additional earning opportunities through our structured partnership programs.',
  },
]

export default function WhyAdsonify() {
  return (
    <section
      id="why-adsonify"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)',
      }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-brand-yellow opacity-60" />
          <span className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow">
            Our Advantage
          </span>
          <span className="h-px w-8 bg-brand-yellow opacity-60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none tracking-wider">
          WHY BUSINESSES
          <br />
          CHOOSE
          <br />
          <span className="text-brand-yellow">ADSONIFY</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {reasons.map((reason, i) => (
          <div
            key={reason.ghost}
            className="why-card relative overflow-hidden rounded-sm p-8"
            style={{
              border: '1px solid rgba(255,208,0,0.12)',
              backgroundColor: 'rgba(255,208,0,0.02)',
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute top-0 right-4 font-display leading-none pointer-events-none select-none"
              style={{
                fontSize: '6rem',
                color: 'rgba(255,208,0,0.04)',
              }}
            >
              {reason.ghost}
            </span>

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center text-brand-yellow mb-5"
              style={{
                border: '1px solid rgba(255,208,0,0.2)',
                backgroundColor: 'rgba(255,208,0,0.04)',
              }}
            >
              {reason.icon}
            </div>

            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-4 bg-brand-yellow opacity-60" />
              <span className="font-condensed tracking-[4px] uppercase text-brand-yellow text-[0.65rem]">
                {reason.tag}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display leading-[.95] mb-4 whitespace-pre-line"
              style={{ fontSize: 'clamp(1.4rem,2vw,1.9rem)' }}
            >
              {reason.title}
            </h3>

            {/* Description */}
            <p
              className="text-brand-gray leading-[1.8]"
              style={{ fontSize: 'clamp(.82rem,1.2vw,.9rem)' }}
            >
              {reason.desc}
            </p>

            {/* Bottom accent */}
            <div className="w-10 h-0.5 bg-brand-yellow mt-6 opacity-60" />
          </div>
        ))}
      </div>
    </section>
  )
}
