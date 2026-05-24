"use client"

import {
  Package,
  UploadCloud,
  CheckCircle,
  Printer,
  Rocket,
  BarChart2,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    tag: 'Choose',
    badge: 'Your Choice',
    icon: Package,
    title: 'PICK YOUR\nPACKAGE',
    desc: 'Select duration, coverage area, and target locations. Our team guides you through every option.',
  },
  {
    num: '02',
    tag: 'Submit',
    badge: 'Submit Assets',
    icon: UploadCloud,
    title: 'SEND YOUR\nASSETS',
    desc: 'Share your logo, design files, or slogan. We accept all formats and advise on specs.',
  },
  {
    num: '03',
    tag: 'Review',
    badge: 'Quality Check',
    icon: CheckCircle,
    title: 'REVIEW &\nAPPROVAL',
    desc: 'Our team checks quality, branding, and print readiness before production begins.',
  },
  {
    num: '04',
    tag: 'Production',
    badge: 'Production',
    icon: Printer,
    title: 'PRINT &\nINSTALL',
    desc: 'Professionally printed and securely fitted to selected auto-rickshaws. Every unit inspected.',
  },
  {
    num: '05',
    tag: 'Launch',
    badge: 'Live Campaign',
    icon: Rocket,
    title: 'CAMPAIGN\nLIVE',
    desc: 'Your brand travels through high-traffic routes across the city from day one.',
    highlight: true,
  },
  {
    num: '06',
    tag: 'Track',
    badge: 'Ongoing',
    icon: BarChart2,
    title: 'TRACK &\nREPORTS',
    desc: 'Receive route coverage data, visibility updates, and deployment reports throughout.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-8 md:px-16 lg:px-24">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-brand-yellow opacity-60" />
          <span className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow">
            The Process
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[.9]">
            SIX STEPS TO{' '}
            <span className="text-brand-yellow">LAUNCH</span>
          </h2>
          <p className="text-brand-gray text-[clamp(0.85rem,1.2vw,0.92rem)] leading-[1.8] max-w-xs md:text-right">
            From choosing your package to seeing your brand on the streets.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Top border */}
        <div className="h-px bg-[rgba(255,208,0,0.15)]" />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          style={{
            background: 'rgba(255,208,0,0.08)',
            gap: '1px',
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="group relative overflow-hidden p-7 flex flex-col gap-5 transition-colors duration-300"
                style={{
                  backgroundColor: step.highlight ? '#FFD000' : '#0f0f0f',
                }}
              >
                {/* Ghost number */}
                <div
                  className="absolute top-3 right-4 font-display leading-none select-none pointer-events-none"
                  style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    color: step.highlight
                      ? 'rgba(0,0,0,0.08)'
                      : 'rgba(255,208,0,0.06)',
                    letterSpacing: '-3px',
                  }}
                >
                  {step.num}
                </div>

                {/* Icon + badge row */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-sm"
                    style={{
                      backgroundColor: step.highlight
                        ? 'rgba(0,0,0,0.1)'
                        : 'rgba(255,208,0,0.08)',
                      border: step.highlight
                        ? '1px solid rgba(0,0,0,0.12)'
                        : '1px solid rgba(255,208,0,0.15)',
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: step.highlight ? '#000' : '#FFD000' }}
                    />
                  </div>

           
                </div>

                {/* Step tag */}
                <div
                  className="font-condensed text-[0.6rem] tracking-[3px] uppercase flex items-center gap-2"
                  style={{ color: step.highlight ? 'rgba(0,0,0,0.4)' : 'rgba(255,208,0,0.5)' }}
                >
                  <span
                    className="block h-px w-3"
                    style={{ backgroundColor: step.highlight ? 'rgba(0,0,0,0.3)' : 'rgba(255,208,0,0.4)' }}
                  />
                  {step.tag}
                </div>

                {/* Title */}
                <h3
                  className="font-display leading-[.95] whitespace-pre-line"
                  style={{
                    fontSize: 'clamp(1.4rem,2.2vw,1.9rem)',
                    color: step.highlight ? '#000' : '#fff',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[0.82rem] leading-[1.8] mt-auto"
                  style={{
                    color: step.highlight
                      ? 'rgba(0,0,0,0.55)'
                      : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {step.desc}
                </p>

                {/* Bottom rule */}
                <div
                  className="w-6 h-[2px]"
                  style={{
                    backgroundColor: step.highlight
                      ? 'rgba(0,0,0,0.2)'
                      : 'rgba(255,208,0,0.3)',
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom border */}
        <div className="h-px bg-[rgba(255,208,0,0.15)]" />
      </div>

    </section>
  )
}