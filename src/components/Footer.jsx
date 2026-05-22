// Server component — full-featured stunning footer

export default function Footer() {
  const quickLinks = [
    { label: 'Home',       href: '#' },
    { label: 'About',      href: '#about-who' },
    { label: 'Services',   href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact',    href: '#contact' },
  ]

  const services = [
    { label: 'Mobile Ad Campaigns',    href: '#services' },
    { label: 'Enterprise Promotions',  href: '#services' },
    { label: 'Campaign Management',    href: '#services' },
    { label: 'Creative Design',        href: '#services' },
    { label: 'Tracking & Reports',     href: '#services' },
    { label: 'Driver Partnership',     href: '#services' },
  ]

  return (
    <footer
      className="relative overflow-hidden border-t border-[rgba(255,208,0,0.12)]"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,208,0,0.04) 0%, transparent 70%),
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.015) 60px, rgba(255,208,0,0.015) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.015) 60px, rgba(255,208,0,0.015) 61px),
          #000
        `,
      }}
    >

   

      

      {/* ── Main footer grid ──────────────────────────────────────────────── */}
      <div className="relative px-8 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-[2rem] font-bold tracking-[2px] text-white mb-1">
              ADSONIFY
            </div>
            <div className="font-condensed text-[0.6rem] tracking-[4px] uppercase text-brand-yellow mb-5">
              Kerala&apos;s Boldest Mobile LED Advertising
            </div>
            <p className="text-[0.82rem] text-brand-gray leading-[1.8] mb-6 max-w-[260px]">
              Transforming daily city transportation into powerful moving advertisement spaces across Kerala.
            </p>

            {/* Contact quick-hits */}
            <div className="space-y-2">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 text-[0.78rem] text-brand-gray hover:text-brand-yellow transition-colors duration-200"
              >
                <span className="w-1 h-1 rounded-full bg-brand-yellow flex-shrink-0" />
                +91 XXXXX XXXXX
              </a>
              <a
                href="mailto:hello@adsonify.com"
                className="flex items-center gap-2 text-[0.78rem] text-brand-gray hover:text-brand-yellow transition-colors duration-200"
              >
                <span className="w-1 h-1 rounded-full bg-brand-yellow flex-shrink-0" />
                hello@adsonify.com
              </a>
              <p className="flex items-center gap-2 text-[0.78rem] text-brand-gray">
                <span className="w-1 h-1 rounded-full bg-brand-yellow flex-shrink-0" />
                Kerala, India
              </p>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow mb-6 flex items-center gap-3">
              <span className="w-4 h-[1.5px] bg-brand-yellow shrink-0" />
              Quick Links
            </div>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-condensed text-[0.82rem] tracking-[1px] text-brand-gray hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-brand-yellow transition-all duration-200 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow mb-6 flex items-center gap-3">
              <span className="w-4 h-[1.5px] bg-brand-yellow shrink-0" />
              Our Services
            </div>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-condensed text-[0.82rem] tracking-[1px] text-brand-gray hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-brand-yellow transition-all duration-200 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Social + tagline */}
          <div>
            <div className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow mb-6 flex items-center gap-3">
              <span className="w-4 h-[1.5px] bg-brand-yellow shrink-0" />
              Follow Us
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  label: 'Instagram',
                  handle: '@adsonify',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  handle: 'Adsonify',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  handle: 'Adsonify',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
              ].map(({ label, handle, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 border border-[rgba(255,208,0,0.2)] rounded-sm flex items-center justify-center text-[rgba(255,208,0,0.5)] group-hover:border-[rgba(255,208,0,0.5)] group-hover:text-brand-yellow transition-all duration-300 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-condensed text-[0.75rem] font-bold tracking-[1px] text-white group-hover:text-brand-yellow transition-colors duration-200">
                      {label}
                    </p>
                    <p className="font-condensed text-[0.65rem] text-brand-gray">
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Tagline card */}
            <div className="border border-[rgba(255,208,0,0.12)] rounded-sm p-4 bg-[rgba(255,208,0,0.02)]">
              <p className="font-display text-[0.95rem] text-white leading-[1.3] mb-1">
                &ldquo;Advertising That
                <br />
                <span className="text-brand-yellow">Never Stops Moving.</span>&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div className="relative border-t border-[rgba(255,208,0,0.08)] px-8 md:px-16 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-condensed text-[0.7rem] tracking-[1.5px] text-[rgba(255,255,255,0.25)]">
            © 2026 <span className="text-[rgba(255,208,0,0.5)]">Adsonify</span>. All Rights Reserved. · Made with ♥ in Kerala
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-condensed text-[0.68rem] tracking-[1.5px] uppercase text-[rgba(255,255,255,0.25)] hover:text-brand-yellow transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}