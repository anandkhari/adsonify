import Link from 'next/link'
import HowItWorks from '@/components/how-it-works/HowItWorks'
import Gallery from '@/components/how-it-works/Gallery'
import WhyAdsonify from '@/components/how-it-works/WhyAdsonify'
import FAQ from '@/components/how-it-works/FAQ'
import ClientAnimations from '@/components/how-it-works/ClientAnimations'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How It Works',
  description:
    'Everything you need to know about launching your Adsonify mobile advertising campaign.',
}

const Divider = () => (
  <div className="h-px bg-linear-to-r from-transparent via-[rgba(255,208,0,0.3)] to-transparent" />
)

const PageNav = () => (
  <nav
    className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-4 flex items-center justify-between"
    style={{
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,208,0,0.08)',
    }}
  >
    <Link
      href="/"
      className="font-display text-white text-xl tracking-widest flex items-center"
    >
      ADSONIFY
      <span className="text-brand-yellow ml-0.5">.</span>
    </Link>

    <div className="hidden md:flex items-center gap-6">
      {[
        { label: 'Home', href: '/' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '/#contact' },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="font-condensed text-[0.7rem] tracking-[2px] uppercase text-brand-gray hover:text-brand-yellow transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>
)

export default function HowItWorksPage() {
  return (
    <div className="bg-brand-black text-white min-h-screen">
      <PageNav />

      {/* Hero */}
      <section
  id="hw-hero"
  className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden"
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/auto-video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Existing Grid/Gradient Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, rgba(255,208,0,0.08) 0%, transparent 70%), repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)",
    }}
  />

  {/* Content */}
  <div className="relative z-10 hw-hero-content text-center px-8 max-w-4xl mx-auto py-16">
    <p className="font-condensed text-[0.7rem] tracking-[4px] uppercase text-brand-yellow mb-6">
      Page 02
    </p>

    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-[1.5px] mb-6">
      HOW IT
      <br />
      <span className="text-brand-yellow">WORKS</span>
    </h1>

    <p className="text-brand-gray text-[clamp(0.9rem,1.5vw,1.1rem)] leading-[1.8] max-w-xl mx-auto mb-10">
      Everything you need to know about launching your Adsonify mobile
      advertising campaign.
    </p>

    <div className="flex items-center justify-center gap-4 flex-wrap">
      <a
        href="#how-it-works"
        className="font-condensed text-[0.85rem] tracking-[2px] uppercase bg-brand-yellow text-brand-black px-8 py-3 font-bold hover:opacity-90 transition-opacity duration-200"
      >
        Start Your Campaign
      </a>

      <Link
        href="/contact"
        className="font-condensed text-[0.85rem] tracking-[2px] uppercase border border-brand-yellow text-brand-yellow px-8 py-3 hover:bg-[rgba(255,208,0,0.06)] transition-colors duration-200"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>

      <Divider />
      <HowItWorks />
      <Divider />
      <Gallery />
      <Divider />
      <WhyAdsonify />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />

      <ClientAnimations />
    </div>
  )
}
