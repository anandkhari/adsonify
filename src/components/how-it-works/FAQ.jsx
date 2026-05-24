'use client'

import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    q: 'What is the minimum campaign duration?',
    a: 'Our minimum advertising package starts from 1 month, giving your brand enough time to build meaningful public recall across targeted locations.',
  },
  {
    q: 'Can I choose specific locations or routes?',
    a: 'Yes. Campaigns can be fully customized based on your selected areas, target demographics, and preferred routes across the city.',
  },
  {
    q: 'Do you provide live tracking?',
    a: 'Yes. Selected packages include real-time GPS campaign tracking support so you can monitor exactly where your brand is at every moment.',
  },
  {
    q: 'Will I receive campaign reports?',
    a: 'Yes. Monthly campaign reports and updates are available for all active campaigns, covering route coverage, deployment data, and visibility metrics.',
  },
  {
    q: 'Can small businesses advertise with Adsonify?',
    a: 'Absolutely. Our packages are specifically designed to be accessible for businesses of all sizes — from local shops and startups to large enterprises.',
  },
  {
    q: 'Do you provide advertisement design support?',
    a: 'Yes. Our creative team provides professional advertisement design assistance, branding layout guidance, and print-ready visual preparation.',
  },
  {
    q: 'Can auto drivers join Adsonify?',
    a: 'Yes. Auto drivers and local advertising agents can partner with Adsonify to earn additional income through our structured driver partnership program.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)',
      }}
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-brand-yellow opacity-60" />
          <span className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow">
            Got Questions
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[.9]">
          FREQUENTLY ASKED{' '}
          <span className="text-brand-yellow">QUESTIONS</span>
        </h2>
      </div>

      {/* Two-column layout: image left 40%, faq right 60% */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 items-stretch max-w-6xl mx-auto">

        {/* Left — Image */}
        <div className="relative min-h-[500px] lg:min-h-0 overflow-hidden">
          {/* ↓ SWAP src with your real image path */}
          <Image
            src="https://images.pexels.com/photos/10412820/pexels-photo-10412820.jpeg"
            alt="Adsonify branded auto on city streets"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />

          {/* Dark gradient on right edge — blends into the FAQ column */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.7) 100%)',
            }}
          />

          {/* Bottom gradient for mobile */}
          <div
            className="absolute inset-0 block lg:hidden"
            style={{
              background:
                'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)',
            }}
          />

          {/* Floating stat badge */}
          <div
            className="absolute bottom-8 left-8 p-5"
            style={{
              background: '#FFD000',
              maxWidth: '180px',
            }}
          >
            <div className="font-display text-[2.2rem] leading-none font-black text-black">
              500+
            </div>
            <div className="font-condensed text-[0.6rem] tracking-[3px] uppercase text-black/60 mt-1">
              Campaigns Delivered
            </div>
          </div>
        </div>

        {/* Right — Accordion */}
        <div
          className="px-8 lg:px-12 py-8 lg:py-0 flex flex-col justify-center"
          style={{ borderLeft: '1px solid rgba(255,208,0,0.1)' }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: 'rgba(255,208,0,0.08)' }}
            >
              {/* Question row */}
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-display transition-colors duration-200"
                  style={{
                    fontSize: 'clamp(.95rem,1.4vw,1.15rem)',
                    color: open === i ? '#FFD000' : '#fff',
                  }}
                >
                  {faq.q}
                </span>

                {/* Toggle icon */}
                <span
                  className="w-7 h-7 rounded-sm flex items-center justify-center text-brand-yellow flex-shrink-0 transition-transform duration-300"
                  style={{
                    border: '1px solid rgba(255,208,0,0.2)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  opacity: open === i ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, opacity 0.3s ease',
                }}
              >
                <p
                  className="text-brand-gray leading-[1.8] pb-5"
                  style={{ fontSize: 'clamp(.85rem,1.2vw,.92rem)' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}

          {/* CTA at bottom */}
          <div className="mt-8 flex items-center gap-5">
            <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-brand-gray">
              Still have questions?
            </p>
            <a
              href="#contact"
              className="font-condensed text-[0.65rem] tracking-[2px] uppercase text-brand-yellow border border-brand-yellow px-5 py-2 hover:bg-[rgba(255,208,0,0.06)] transition-colors duration-200 whitespace-nowrap"
            >
              Contact Us &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}