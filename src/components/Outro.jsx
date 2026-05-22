// Server component — outro entrance animation driven by SmoothWrapper.

export default function Outro() {
  return (
    <section
      id="outro"
      className="min-h-screen flex items-center justify-center bg-brand-black2 text-center py-16 px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,208,0,0.05)_0%,transparent_70%)]" />

      <div className="outro-inner relative z-[1] max-w-[700px]">
        <p className="font-condensed text-[0.75rem] font-bold tracking-[5px] uppercase text-brand-yellow mb-6">
          Ready to roll?
        </p>
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[.95] tracking-wide mb-6">
          Let&apos;s Hit
          <br />
          The <span className="text-brand-yellow">Road</span>
        </h2>
        <p className="text-[1rem] text-brand-gray leading-[1.8] mb-12 max-w-[480px] mx-auto">
          Take your brand to every street, market, and event across Kerala. Book your Adsonify LED
          rickshaw campaign today.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/919876543210"
            className="bg-brand-yellow text-brand-black font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] rounded-[2px] no-underline inline-block transition-all duration-200 hover:bg-white"
          >
            💬 WhatsApp Us
          </a>
          <a
            href="tel:+919876543210"
            className="bg-transparent text-brand-yellow font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-[0.9rem] px-[2.2rem] border-[1.5px] border-brand-yellow rounded-[2px] no-underline inline-block transition-all duration-200 hover:bg-[rgba(255,208,0,0.1)]"
          >
            📞 Call Now
          </a>
        </div>
        <p className="mt-10 text-[0.85rem] text-brand-gray2 font-condensed tracking-[1px]">
          hello@adsonify.in &nbsp;·&nbsp; Ernakulam, Kerala
        </p>
      </div>
    </section>
  )
}
