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
    <section id="how-it-works" className="py-32 px-8 md:px-16 lg:px-24 bg-[#0A0A0A]">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-brand-yellow opacity-60" />
          <span className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow">
            The Process
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[.95] tracking-tight text-white">
            SIX STEPS TO{' '}
            <span className="text-brand-yellow">LAUNCH</span>
          </h2>
          <p className="text-brand-gray text-[clamp(0.85rem,1.2vw,0.92rem)] leading-[1.8] max-w-xs md:text-right">
            From choosing your package to seeing your brand on the streets.
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className={`group relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[340px] transition-all duration-500 bg-[#121212] border rounded-sm ${
                  step.highlight 
                    ? 'border-brand-yellow shadow-[0_0_25px_rgba(255,208,0,0.05)]' 
                    : 'border-[rgba(255,208,0,0.12)] hover:border-[rgba(255,208,0,0.3)]'
                }`}
              >
                {/* Clean, Rich Cyber Gold Ghost Number */}
                <div
                  className="absolute top-4 right-6 font-display leading-none select-none pointer-events-none z-0 transition-opacity duration-500"
                  style={{
                    fontSize: '6.5rem',
                    fontWeight: 900,
                    color: 'rgba(204, 163, 0, 0.08)', // Premium Dark Muted Amber Gold
                    letterSpacing: '-3px',
                    WebkitTextStroke: '1px rgba(204, 163, 0, 0.15)',
                  }}
                >
                  {step.num}
                </div>

                {/* Upper Body Block */}
                <div className="relative z-10 flex flex-col gap-y-5">
                  {/* Icon Design */}
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-sm transition-colors duration-300"
                    style={{
                      backgroundColor: step.highlight ? 'rgba(255,208,0,0.1)' : 'rgba(255,208,0,0.04)',
                      border: '1px solid rgba(255,208,0,0.25)',
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-brand-yellow"
                    />
                  </div>

                  {/* Step Metadata Tag */}
                  <div className="font-condensed text-[0.65rem] tracking-[3px] uppercase flex items-center gap-2 text-brand-yellow/60">
                    <span className="block h-px w-3 bg-brand-yellow/40" />
                    {step.tag}
                  </div>

                  {/* Title */}
                  <h3 className="font-display leading-[1.05] tracking-wide text-white text-[clamp(1.35rem,1.8vw,1.65rem)] whitespace-pre-line">
                    {step.title}
                  </h3>

                  {/* Description Text */}
                  <p className="text-[0.85rem] leading-[1.75] text-brand-gray pr-4">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Interactive Accent Bar */}
                <div className="relative z-10 mt-8 pt-4">
                  <div className={`h-[2px] transition-all duration-500 ${
                    step.highlight ? 'w-12 bg-brand-yellow' : 'w-6 bg-brand-yellow/30 group-hover:w-12 group-hover:bg-brand-yellow'
                  }`} />
                </div>

              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}