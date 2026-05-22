'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

export default function SmoothWrapper({ children }) {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. ScrollSmoother ─────────────────────────────────────────────────
      ScrollSmoother.create({
        wrapper:  '#smooth-wrapper',
        content:  '#smooth-content',
        smooth:   3,
        effects:  true,
      })

      // ── 2. Hero: SplitText random-char entrance ───────────────────────────
      gsap.set('.hero-title', { opacity: 1 })
      const split = SplitText.create('.hero-title', { type: 'chars', mask: 'lines' })
      gsap.from(split.chars, {
        yPercent:  () => gsap.utils.random(-100, 100),
        rotation:  () => gsap.utils.random(-30, 30),
        autoAlpha: 0,
        ease:      'back.out(1.5)',
        stagger:   { amount: 0.5, from: 'random' },
        duration:  1.5,
        delay:     0.3,
      })

      // ── 3. Hero: remaining elements stagger in ────────────────────────────
      gsap.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, delay: 1.6, ease: 'power3.out' })
      gsap.to('.hero-sub',     { opacity: 1, y: 0, duration: 0.7, delay: 1.8, ease: 'power2.out' })
      gsap.to('.hero-ctas',    { opacity: 1, y: 0, duration: 0.6, delay: 2.0, ease: 'power2.out' })
      gsap.to('.scroll-hint',  { opacity: 1, duration: 0.6, delay: 2.2 })

      // ── 4. Car: drives in from right on load ──────────────────────────────
      gsap.from('#car', {
        x:        '30vw',
        opacity:  0,
        duration: 1.2,
        delay:    0.6,
        ease:     'power2.out',
      })

      // ── 5. Car waypoint + content animations — desktop only ───────────────
      ScrollTrigger.matchMedia({
        '(min-width: 991px)': function () {

          // ── About Who: car scrubs hero-left → about-right, fully bidirectional
          // fromTo with explicit from-state guarantees backward scroll always
          // returns to exactly {x:0,y:0} (hero position), not a lazily-captured
          // snapshot that could be mid-drive-in if the user scrolled too early.
          // immediateRender:false in fromVars keeps the drive-in animation intact.
          //
          // Car CSS: left:10vw. Right col starts at 45vw, centre at 72.5vw.
          // To centre 38vw car at 72.5vw → x = 72.5 − 19 − 10 = 43.5 ≈ 44vw
          // screen_Y = CSS_top(30vh) + 105vh − native_scroll(100vh) = 35vh ✓
          gsap.fromTo('#car',
            { x: 0, y: 0, width: '32vw', rotate: 0, immediateRender: false },
            {
              scrollTrigger: {
                trigger: '#about-who',
                start:   'top bottom',
                end:     'center center',
                scrub:   1.5,
              },
              x:    '44vw',
              y:    '105vh',
              width: '28vw',
              rotate: 0,
              ease: 'none',
            }
          )

          // ── About Who: right-col content slides up on enter ───────────────
          gsap.from('#about-who .about-who-content', {
            scrollTrigger: {
              trigger: '#about-who',
              start:   '-20% bottom',
              end:     'center center',
              scrub:   true,
            },
            y:       '80%',
            opacity: 0,
            ease:    'power1.inOut',
          })

          // ── Feature sections: content slides up on enter ──────────────────
          ;['section2', 'section3', 'section4', 'section5', 'section6'].forEach((id) => {
            gsap.from(`#${id} .feature-content`, {
              scrollTrigger: {
                trigger: `#${id}`,
                start:   '-20% bottom',
                end:     'center center',
                scrub:   true,
              },
              y:       '80%',
              opacity: 0,
              ease:    'power1.inOut',
            })
          })

        },
      })

      // ── 6. About MV: header + cards entrance ─────────────────────────────
      gsap.from('#about-mv .about-mv-header', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 80%' },
        y:        40,
        opacity:  0,
        duration: 0.7,
        ease:     'power3.out',
      })
      gsap.from('#about-mv .about-mv-card', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 70%' },
        y:        60,
        opacity:  0,
        duration: 0.8,
        stagger:  0.2,
        ease:     'power3.out',
      })

      // ── 7. Objectives: header + cards entrance ───────────────────────────
      gsap.from('#objectives .objectives-header', {
        scrollTrigger: { trigger: '#objectives', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#objectives .objectives-card', {
        scrollTrigger: { trigger: '#objectives', start: 'top 70%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      })

      // ── 8. WhyItWorks: header + rows entrance ────────────────────────────
      gsap.from('#why-it-works .why-header', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#why-it-works .why-row', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 70%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      })

      // ── 9. Services: header + cards entrance ─────────────────────────────
      gsap.from('#services .services-header', {
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#services .service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 70%' },
        y: 70, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      })

      // ── 10. Industries: header + cards entrance ──────────────────────────
      gsap.from('#industries .industries-header', {
        scrollTrigger: { trigger: '#industries', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#industries .industry-card', {
        scrollTrigger: { trigger: '#industries', start: 'top 65%' },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
      })

      // ── 11. Contact: header + columns entrance ───────────────────────────
      gsap.from('#contact .contact-header', {
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#contact .contact-left', {
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('#contact .contact-right', {
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
        x: 40, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out',
      })

      // ── 12. Outro entrance ────────────────────────────────────────────────
      gsap.from('.outro-inner > *', {
        scrollTrigger: { trigger: '#outro', start: 'top 70%' },
        y:        50,
        opacity:  0,
        duration: 0.7,
        stagger:  0.12,
        ease:     'power3.out',
      })



    })

    return () => ctx.revert()
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}