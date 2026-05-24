import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-12 py-5 bg-[rgba(8,8,8,0.85)] backdrop-blur-md border-b border-[rgba(255,208,0,0.12)]">
      <Link
        href="#"
        className="font-display text-[2rem] text-brand-yellow tracking-[2px] no-underline"
      >
        Ads<span className="text-white">onify</span>
      </Link>
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        <li>
          <a
            href="#features"
            className="font-condensed text-[0.9rem] font-semibold tracking-[2px] uppercase text-brand-gray no-underline hover:text-brand-yellow transition-colors duration-200"
          >
            Features
          </a>
        </li>
        <li>
          <Link
            href="/how-it-works"
            className="font-condensed text-[0.9rem] font-semibold tracking-[2px] uppercase text-brand-gray no-underline hover:text-brand-yellow transition-colors duration-200"
          >
            How It Works
          </Link>
        </li>
        <li>
          <a
            href="#outro"
            className="font-condensed text-[0.9rem] font-semibold tracking-[2px] uppercase text-brand-gray no-underline hover:text-brand-yellow transition-colors duration-200"
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
