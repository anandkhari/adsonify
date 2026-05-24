// Server component — outro entrance animation driven by SmoothWrapper.

function IconWhatsApp() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function Outro() {
  return (
    <section
      id="outro"
      className=" flex flex-col items-center justify-center text-center py-28 px-8 relative overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────────────────────────
          Add your image to /public/images/ and set the src below.
          Best: a wide night-time street, city road, or lit-up auto-rickshaw. */}
      <img
        src="https://images.pexels.com/photos/10921168/pexels-photo-10921168.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />

      {/* Layered overlays: base dark → subtle yellow centre glow */}
      <div className="absolute inset-0 bg-[rgba(5,5,5,0.78)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_55%,rgba(255,208,0,0.07)_0%,transparent_70%)]" />

      {/* Top & bottom vignettes */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-brand-black2 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-brand-black2 to-transparent" />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="outro-inner relative z-[1] flex flex-col items-center max-w-3xl w-full">
        {/* Eyebrow */}
        <div className="font-condensed text-[0.68rem] font-bold tracking-[5px] uppercase text-brand-yellow mb-7 flex items-center gap-4">
          <span className="block w-10 h-px bg-brand-yellow shrink-0" />
          Get Your Brand on the Move
          <span className="block w-10 h-px bg-brand-yellow shrink-0" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide mb-7 drop-shadow-2xl">
          LET&apos;S HIT
          <br />
          THE <span className="text-brand-yellow">ROAD</span>
        </h2>

        {/* Yellow rule */}
        <div className="w-12 h-0.5 bg-brand-yellow mb-8" />

        {/* CTA buttons */}
        <div className="flex gap-5 justify-center flex-wrap mb-16">
          <a
            href="https://wa.me/919876543210"
            className="group bg-brand-yellow text-brand-black font-condensed text-[0.9rem] font-bold tracking-[2px] uppercase py-4 px-9 rounded-xs no-underline inline-flex items-center gap-3 transition-all duration-200 hover:bg-white shadow-[0_6px_28px_rgba(255,208,0,0.3)]"
          >
            <span className="shrink-0">
              <IconWhatsApp />
            </span>
            WhatsApp Us
          </a>
          <a
            href="tel:+919876543210"
            className="group bg-transparent text-brand-yellow font-condensed text-[0.9rem] font-bold tracking-[2px] uppercase py-4 px-9 border border-[rgba(255,208,0,0.6)] rounded-xs no-underline inline-flex items-center gap-3 transition-all duration-200 hover:border-brand-yellow hover:bg-[rgba(255,208,0,0.08)]"
          >
            <span className="shrink-0">
              <IconPhone />
            </span>
            Call Now
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-[rgba(255,208,0,0.12)] mb-8" />
      </div>
    </section>
  );
}
