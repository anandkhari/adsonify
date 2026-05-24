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
import FloatingButtons from '@/components/FloatingButtons'

export default function Page() {
  return (
    <>
      {/* Nav is OUTSIDE smooth-wrapper so ScrollSmoother doesn't affect it */}
      <Nav />
      <FloatingButtons />

      <SmoothWrapper>
        {/*
          #main is position:relative so #car's position:absolute is anchored here.
          All sections (section1–section6) live inside #main alongside the car.
        */}
        <div id="main" className="relative w-full">

          {/* ── Sections — #car now lives inside <Hero /> (#section1) ─────── */}
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
