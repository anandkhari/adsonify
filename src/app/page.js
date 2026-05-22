import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Objectives from '@/components/Objectives'
import WhyItWorks from '@/components/WhyItWorks'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import FeatureSections from '@/components/FeatureSections'
import Outro from '@/components/Outro'
import Footer from '@/components/Footer'
import SmoothWrapper from '@/components/SmoothWrapper'

export default function Page() {
  return (
    <>
      {/* Nav is OUTSIDE smooth-wrapper so ScrollSmoother doesn't affect it */}
      <Nav />

      <SmoothWrapper>
        {/*
          #main is position:relative so #car's position:absolute is anchored here.
          All sections (section1–section6) live inside #main alongside the car.
        */}
        <div id="main" className="relative w-full">

          {/*
            ── The auto rickshaw car image ────────────────────────────────────
            id="car"  — GSAP targets this for all scroll-driven waypoints.
            Absolutely positioned above all sections; z-10 keeps it floating
            over section content. Initial position: top-left of the page.
            SmoothWrapper drives all movement from here.
          */}
          <div
            id="car"
            className="absolute top-[30vh] left-[10%] w-[32vw] z-10 hidden md:block"
            style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.7))' }}
          >
            <Image
              src="/auto-bg.png"
              alt="Adsonify LED Auto Rickshaw"
              width={600}
              height={400}
              className="w-full object-contain"
              style={{
                height: 'auto',
                filter: 'brightness(1.0) contrast(1.05) saturate(1.15)',
              }}
              priority
            />
          </div>

          {/* ── Sections ────────────────────────────────────────────────── */}
          <Hero />
          <div className="h-0.75 bg-linear-to-r from-transparent via-brand-yellow to-transparent" />
          <About />
          <div className="h-0.75 bg-linear-to-r from-transparent via-brand-yellow to-transparent" />
          <Objectives />
          <div className="h-0.75 bg-linear-to-r from-transparent via-brand-yellow to-transparent" />
          <WhyItWorks />
          <Services />
          <Industries />
          <Contact />
          {/* <FeatureSections /> */}
        </div>

        {/* Outro and Footer are outside #main but still inside smooth-content */}
        <div className="h-0.75 bg-linear-to-r from-transparent via-brand-yellow to-transparent" />
        <Outro />
        <Footer />
      </SmoothWrapper>
    </>
  )
}
