'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LINKS = [
  { label: 'Features',     href: '#features',    tag: 'a' },
  { label: 'How It Works', href: '/how-it-works', tag: 'link' },
  { label: 'Book Now',     href: '#outro',        tag: 'a' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-12 py-4 md:py-5 bg-[rgba(8,8,8,0.90)] backdrop-blur-md border-b border-[rgba(255,208,0,0.12)]">

        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 no-underline" onClick={close}>
          <Image
            src="/logo.png"
            alt="Adsonify logo mark"
            width={48}
            height={48}
            className="object-contain"
            style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
          />
          <span className="font-display text-[1.8rem] md:text-[2rem] text-brand-yellow tracking-[2px]">
            Ads<span className="text-white">onify</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {LINKS.map(({ label, href, tag }) =>
            tag === 'link' ? (
              <li key={label}>
                <Link
                  href={href}
                  className="font-condensed text-[0.9rem] font-semibold tracking-[2px] uppercase text-brand-gray no-underline hover:text-brand-yellow transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ) : (
              <li key={label}>
                <a
                  href={href}
                  className="font-condensed text-[0.9rem] font-semibold tracking-[2px] uppercase text-brand-gray no-underline hover:text-brand-yellow transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 relative z-[210]"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block h-[2px] bg-brand-yellow rounded-full transition-all duration-300 origin-center"
            style={{
              width: open ? '22px' : '22px',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[2px] bg-brand-yellow rounded-full transition-all duration-300"
            style={{
              width: '16px',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block h-[2px] bg-brand-yellow rounded-full transition-all duration-300 origin-center"
            style={{
              width: open ? '22px' : '22px',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-[199] flex flex-col md:hidden transition-all duration-400"
        style={{
          background: 'rgba(5,5,5,0.97)',
          backdropFilter: 'blur(12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Yellow accent line at top */}
        <div className="h-px bg-linear-to-r from-transparent via-brand-yellow to-transparent mt-[72px]" />

        {/* Nav links */}
        <ul className="flex flex-col items-center justify-center flex-1 gap-2 list-none m-0 p-0">
          {LINKS.map(({ label, href, tag }, i) => (
            <li key={label} style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}>
              {tag === 'link' ? (
                <Link
                  href={href}
                  onClick={close}
                  className="font-display text-[2.8rem] text-white no-underline tracking-[2px] hover:text-brand-yellow transition-colors duration-200 block py-2"
                >
                  {label}
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={close}
                  className="font-display text-[2.8rem] text-white no-underline tracking-[2px] hover:text-brand-yellow transition-colors duration-200 block py-2"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Contact strip at bottom */}
        <div className="pb-12 flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-[rgba(255,208,0,0.2)] mb-4" />
          <a
            href="tel:+917994502959"
            onClick={close}
            className="font-condensed text-[0.8rem] tracking-[3px] uppercase text-brand-gray hover:text-brand-yellow transition-colors duration-200"
          >
            +91 79945 02959
          </a>
          <a
            href="mailto:thameem@adsonify.com"
            onClick={close}
            className="font-condensed text-[0.8rem] tracking-[3px] uppercase text-brand-gray hover:text-brand-yellow transition-colors duration-200"
          >
            thameem@adsonify.com
          </a>
        </div>
      </div>
    </>
  )
}
