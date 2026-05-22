'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LED_DATA = [
  { icon: '📺', label: 'FULL HD LED', color: '#FFD000', bg: '#000' },
  { icon: '📍', label: 'GPS LIVE', color: '#00ff88', bg: '#001a0d' },
  { icon: '🔊', label: '800W AUDIO', color: '#ff6b35', bg: '#1a0d00' },
  { icon: '🌙', label: '24/7 ON', color: '#a0c4ff', bg: '#00061a' },
  { icon: '🚀', label: 'BOOK NOW', color: '#FFD000', bg: '#0a0800' },
]

const FEATURES = [
  {
    num: '01',
    tag: 'The Screen',
    pre: 'Full HD ',
    hi: 'LED',
    post: 'Display',
    desc: 'A high-brightness P4 LED panel delivering vivid, eye-catching visuals visible from 50+ metres — even in harsh Kerala sunlight.',
    specs: ['5000 nits brightness', 'P4 pixel pitch', '160° view angle', 'Full HD resolution'],
  },
  {
    num: '02',
    tag: 'Navigation',
    pre: 'GPS ',
    hi: 'Route',
    post: 'Tracking',
    desc: 'Real-time GPS tracking lets you monitor exactly where your brand is at every moment. Transparent reporting, every kilometre covered.',
    specs: ['Live tracking', 'Custom routes', 'Campaign report', 'Geo-targeting'],
  },
  {
    num: '03',
    tag: 'Audio',
    pre: 'Surround ',
    hi: 'Sound',
    post: 'System',
    desc: "A built-in professional speaker system amplifies your audio message alongside the stunning visuals. You won't just be seen — you'll be heard.",
    specs: ['800W output', 'Crystal clear audio', 'Multi-directional', 'Custom jingles'],
  },
  {
    num: '04',
    tag: 'All-Weather',
    pre: 'Day ',
    hi: '&',
    post: 'Night Ready',
    desc: 'Auto-brightness adjustment and weatherproofing ensures maximum visibility in all conditions — blazing noon sun or late-night campaigns.',
    specs: ['Auto brightness', 'IP65 rated', 'Rain resistant', '24/7 operation'],
  },
  {
    num: '05',
    tag: 'Ready to Go',
    pre: 'Book Your ',
    hi: 'Campaign',
    post: 'Today',
    desc: 'Starting from ₹4,999 for a half-day campaign. Flexible packages, transparent pricing, and a dedicated campaign manager for every booking.',
    specs: ['From ₹4,999', 'Half & full day', 'Multi-day packages', 'Pan-Kerala'],
    cta: true,
  },
]

export default function PinSection() {
  const [activeDot, setActiveDot] = useState(0)
  const [ledState, setLedState] = useState(LED_DATA[0])

  const autoImgRef = useRef(null)
  const ledOverlayRef = useRef(null)
  const ledContentRef = useRef(null)
  const panelRefs = useRef([])
  const dividerRefs = useRef([])

  function updateLED(idx) {
    const d = LED_DATA[idx]
    if (!ledContentRef.current) return
    gsap.to(ledContentRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setLedState(d)
        if (ledOverlayRef.current) {
          ledOverlayRef.current.style.borderColor = d.color
          ledOverlayRef.current.style.boxShadow = `0 0 12px ${d.color}99, 0 0 30px ${d.color}33`
        }
        gsap.to(ledContentRef.current, { opacity: 1, duration: 0.3 })
      },
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const triggers = []

    // Auto drives in from left on first enter
    gsap.fromTo(
      autoImgRef.current,
      { x: '-100vw', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: { trigger: '#pin-wrapper', start: 'top 80%', once: true },
      }
    )

    // Pin auto-side while content scrolls
    triggers.push(
      ScrollTrigger.create({
        trigger: '#pin-wrapper',
        start: 'top top',
        end: () => '+=' + FEATURES.length * window.innerHeight * 0.85,
        pin: '#auto-side',
        pinSpacing: false,
        anticipatePin: 1,
      })
    )

    // Animate each feature panel
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return
      triggers.push(
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 65%',
          end: 'bottom 40%',
          onEnter: () => {
            gsap.to(panel, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
            if (dividerRefs.current[i]) {
              gsap.to(dividerRefs.current[i], {
                scaleX: 1,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.3,
              })
            }
            updateLED(i)
            setActiveDot(i)
            gsap.to(autoImgRef.current, {
              y: -10,
              duration: 0.3,
              ease: 'power2.out',
              onComplete: () =>
                gsap.to(autoImgRef.current, { y: 0, duration: 0.5, ease: 'bounce.out' }),
            })
          },
          onEnterBack: () => {
            updateLED(i)
            setActiveDot(i)
          },
        })
      )
    })

    // Auto drives off when outro appears
    triggers.push(
      ScrollTrigger.create({
        trigger: '#outro',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(autoImgRef.current, { x: '120%', opacity: 0, duration: 1.2, ease: 'power3.in' })
        },
      })
    )

    return () => triggers.forEach((t) => t.kill())
  }, [])

  function scrollToPanel(idx) {
    const panel = panelRefs.current[idx]
    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      {/* Fixed progress dots */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-3 z-[100] hidden md:flex">
        {FEATURES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPanel(i)}
            title={FEATURES[i].tag}
            className={`w-2 h-2 rounded-full border-[1.5px] cursor-pointer transition-all duration-300 ${
              activeDot === i
                ? 'bg-brand-yellow border-brand-yellow scale-[1.3]'
                : 'bg-[rgba(255,208,0,0.2)] border-[rgba(255,208,0,0.4)]'
            }`}
          />
        ))}
      </div>

      {/* Section anchor for nav */}
      <div id="features" />

      <div id="pin-wrapper" className="relative bg-brand-black">
        <div id="pin-scene" className="flex items-start">

          {/* LEFT — auto side (gets pinned) */}
          <div
            id="auto-side"
            className="relative w-[55%] min-h-screen flex items-center justify-center flex-shrink-0 top-0"
          >
            <span className="absolute top-[8vh] left-[3vw] font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-[rgba(255,208,0,0.5)] [writing-mode:vertical-rl] [text-orientation:mixed]">
              Adsonify Rickshaw
            </span>

            {/* Ambient glow */}
            <div className="absolute w-[70%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.04)_0%,transparent_70%)] pointer-events-none" />

            {/* Road */}
            <div className="absolute bottom-[14vh] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,208,0,0.25)] to-transparent" />
            <div
              className="road-dashes-anim absolute left-0 right-0"
              style={{ bottom: 'calc(14vh - 14px)' }}
            />

            {/* Auto image wrapper */}
            <div
              ref={autoImgRef}
              className="relative w-[min(580px,90%)] [filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.8))]"
            >
              {/* LED overlay — position calibrated to image */}
              <div
                ref={ledOverlayRef}
                className="led-scanlines absolute z-10 border-2 rounded-[3px] overflow-hidden"
                style={{
                  top: '31%',
                  right: '16.5%',
                  width: '13.5%',
                  aspectRatio: '4/3',
                  borderColor: ledState.color,
                  boxShadow: `0 0 12px ${ledState.color}99, 0 0 30px ${ledState.color}33`,
                  background: '#000',
                }}
              >
                <div className="absolute left-0 right-0 h-[2px] bg-[rgba(255,208,0,0.4)] animate-scan" />
                <div
                  ref={ledContentRef}
                  className="relative z-[2] w-full h-full flex flex-col items-center justify-center gap-[2px] p-[3px] transition-all duration-300"
                  style={{ background: ledState.bg }}
                >
                  <span className="text-[clamp(10px,1.8vw,22px)] leading-none">
                    {ledState.icon}
                  </span>
                  <span
                    className="font-condensed text-[clamp(5px,0.75vw,9px)] font-bold tracking-[1px] uppercase text-center leading-[1.2]"
                    style={{ color: ledState.color }}
                  >
                    {ledState.label}
                  </span>
                </div>
              </div>

              <Image
                src="/auto-bg.png"
                alt="Adsonify LED Auto Rickshaw"
                width={600}
                height={500}
                className="w-full h-auto object-contain rounded-xl"
                style={{
                  filter:
                    'brightness(1.0) contrast(1.05) saturate(1.15) drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                }}
                priority
              />
            </div>
          </div>

          {/* RIGHT — feature panels (scrolls) */}
          <div
            id="content-side"
            className="w-[45%] flex flex-col justify-center py-[10vh] pl-[2vw] pr-[4vw] flex-shrink-0"
          >
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                ref={(el) => { panelRefs.current[i] = el }}
                className="min-h-screen flex flex-col justify-center py-16 opacity-0 translate-y-[60px]"
              >
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
                      className="font-condensed text-[0.78rem] font-semibold tracking-[1.5px] uppercase py-[0.4rem] px-4 border border-[rgba(255,208,0,0.25)] rounded-[2px] text-[rgba(255,208,0,0.7)] bg-[rgba(255,208,0,0.05)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {feat.cta && (
                  <a
                    href="#outro"
                    className="mt-4 inline-block w-fit bg-brand-yellow text-brand-black font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] rounded-[2px] no-underline transition-all duration-200 hover:bg-white"
                  >
                    Book Now →
                  </a>
                )}

                <div
                  ref={(el) => { dividerRefs.current[i] = el }}
                  className="w-[60px] h-[2px] bg-brand-yellow mt-4 scale-x-0 origin-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
