'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

// Only register plugins that are safe on all devices at module level.
// ScrollSmoother is registered inside the desktop matchMedia block only.
gsap.registerPlugin(ScrollTrigger, SplitText)

export default function SmoothWrapper({ children }) {
  useEffect(() => {
    const mm = gsap.matchMedia()

    // ── DESKTOP (991px+) — full experience with ScrollSmoother ───────────────
    mm.add('(min-width: 991px)', () => {
      // Register ScrollSmoother only when it will actually be used
      gsap.registerPlugin(ScrollSmoother)
      let smoother

      // ── 1. ScrollSmoother ─────────────────────────────────────────────────
      smoother = ScrollSmoother.create({
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
      if (document.querySelector('.hero-eyebrow')) {
        gsap.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, delay: 1.6, ease: 'power3.out' })
      }
      if (document.querySelector('.hero-ctas')) {
        gsap.to('.hero-ctas', { opacity: 1, y: 0, duration: 0.6, delay: 2.0, ease: 'power2.out' })
      }
      if (document.querySelector('.scroll-hint')) {
        gsap.to('.scroll-hint', { opacity: 1, duration: 0.6, delay: 2.2 })
      }

      // ── 4. Car: drives in from right on load ──────────────────────────────
      gsap.fromTo('#car',
        { x: '30vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, delay: 0.6, ease: 'power2.out' }
      )

      // ── 5. Car waypoints + content animations ─────────────────────────────
      gsap.fromTo('#car',
        { x: 0, y: 0, width: '32vw', rotate: 0, immediateRender: false },
        {
          scrollTrigger: {
            trigger: '#about-who',
            start:   'top bottom',
            end:     'center center',
            scrub:   1.5,
          },
          x:     '44vw',
          y:     '105vh',
          width: '28vw',
          rotate: 0,
          ease:  'none',
        }
      )

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

      // ── 6. About MV ───────────────────────────────────────────────────────
      gsap.from('#about-mv .about-mv-header', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#about-mv .about-mv-card', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 70%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      })

      // ── 7. Objectives ─────────────────────────────────────────────────────
      gsap.from('#objectives .objectives-header', {
        scrollTrigger: { trigger: '#objectives', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#objectives .objectives-card', {
        scrollTrigger: { trigger: '#objectives', start: 'top 70%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      })

      // ── 8. WhyItWorks ─────────────────────────────────────────────────────
      gsap.from('#why-it-works .why-header', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#why-it-works .why-row', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 70%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      })

      // ── 9. Services ───────────────────────────────────────────────────────
      gsap.from('#services .services-header', {
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#services .service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 70%' },
        y: 70, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      })

      // ── 10. Industries ────────────────────────────────────────────────────
      gsap.from('#industries .industries-header', {
        scrollTrigger: { trigger: '#industries', start: 'top 80%' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#industries .industry-card', {
        scrollTrigger: { trigger: '#industries', start: 'top 65%' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
      })

      // ── 11. Contact ───────────────────────────────────────────────────────
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

      // ── 12. Outro ─────────────────────────────────────────────────────────
      gsap.from('.outro-inner > *', {
        scrollTrigger: { trigger: '#outro', start: 'top 70%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })

      ScrollTrigger.refresh()

      return () => { smoother?.kill() }
    })

    // ── MOBILE (≤990px) — native scroll, no ScrollSmoother ───────────────────
    mm.add('(max-width: 990px)', () => {

      // ── Hero text fade in (no SplitText) ─────────────────────────────────
      gsap.to('.hero-title', { opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' })
      gsap.to('.hero-ctas', { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power2.out' })

      // ── Car: drives in from right, parks permanently ──────────────────────
      gsap.set('#car', { x: '110vw', opacity: 1 })
      gsap.to('#car', { x: '0vw', duration: 1.4, delay: 0.8, ease: 'power3.out' })

      // ── Section animations — start:'top 90%' for tall mobile viewports ───
      gsap.from('#about-mv .about-mv-header', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#about-mv .about-mv-card', {
        scrollTrigger: { trigger: '#about-mv', start: 'top 90%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      })

      gsap.from('#objectives .objectives-header', {
        scrollTrigger: { trigger: '#objectives', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#objectives .objectives-card', {
        scrollTrigger: { trigger: '#objectives', start: 'top 90%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })

      gsap.from('#why-it-works .why-header', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#why-it-works .why-row', {
        scrollTrigger: { trigger: '#why-it-works', start: 'top 90%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })

      gsap.from('#services .services-header', {
        scrollTrigger: { trigger: '#services', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#services .service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 90%' },
        y: 70, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      })

      gsap.from('#industries .industries-header', {
        scrollTrigger: { trigger: '#industries', start: 'top 90%' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#industries .industry-card', {
        scrollTrigger: { trigger: '#industries', start: 'top 90%' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out',
      })

      gsap.from('#contact .contact-header', {
        scrollTrigger: { trigger: '#contact', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('#contact .contact-left', {
        scrollTrigger: { trigger: '#contact', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('#contact .contact-right', {
        scrollTrigger: { trigger: '#contact', start: 'top 90%' },
        y: 40, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out',
      })

      gsap.from('.outro-inner > *', {
        scrollTrigger: { trigger: '#outro', start: 'top 90%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })

      ScrollTrigger.refresh()

      return () => {}
    })

    return () => mm.revert()
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}
