'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ClientAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Page hero
      gsap.from('#hw-hero .hw-hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      })

      // How It Works steps
      gsap.from('#how-it-works .hw-step', {
        scrollTrigger: { trigger: '#how-it-works', start: 'top 70%' },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Gallery cards
      gsap.from('#gallery .gallery-card', {
        scrollTrigger: { trigger: '#gallery', start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      // Why Adsonify cards
      gsap.from('#why-adsonify .why-card', {
        scrollTrigger: { trigger: '#why-adsonify', start: 'top 70%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })

      // FAQ items
      gsap.from('#faq .faq-item', {
        scrollTrigger: { trigger: '#faq', start: 'top 70%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
