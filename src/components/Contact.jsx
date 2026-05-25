"use client";
import { useState } from "react";

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 9.77 19.79 19.79 0 0 1 1.08 1.18 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const INPUT_CLASS =
  "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,208,0,0.15)] rounded-sm px-4 py-3 font-condensed text-[0.9rem] text-white tracking-[0.5px] placeholder-[rgba(255,255,255,0.15)] focus:outline-none focus:border-[rgba(255,208,0,0.5)] focus:bg-[rgba(255,208,0,0.04)] transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xeedlwly", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || (data && data.ok === false)) {
        setError(
          (data && data.error) || "Something went wrong. Please try again."
        );
        return;
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", business: "", message: "" });
      e.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(255,208,0,0.3)] to-transparent" />

      <section
        id="contact"
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 61px)
          `,
        }}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="contact-header mb-4">
          <div className="font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase text-brand-yellow mb-4 flex items-center gap-3">
            <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
            Get In Touch
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[.95] mb-4">
            LET YOUR BRAND
            <br />
            MOVE ACROSS
            <br />
            THE <span className="text-brand-yellow">CITY</span>
          </h2>
          <p className="text-[clamp(.85rem,1.3vw,.95rem)] text-brand-gray leading-[1.8]">
            Ready to increase your business visibility? Connect with Adsonify
            today.
          </p>
        </div>

        {/* ── Two-column layout ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* ── Left: Contact details ────────────────────────────────────── */}
          <div className="contact-left">
            <div className="font-condensed text-[0.7rem] tracking-[4px] uppercase text-brand-yellow mb-8 flex items-center gap-3">
              <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
              Contact Details
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 flex-shrink-0 border border-[rgba(255,208,0,0.2)] rounded-sm bg-[rgba(255,208,0,0.04)] flex items-center justify-center text-brand-yellow">
                <PhoneIcon />
              </div>
              <div>
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-1">
                  Call Us
                </p>
                <p className="font-condensed text-[0.95rem] font-bold text-white tracking-[1px]">
                  +91 79945 02959
                </p>
                <p className="text-[0.8rem] text-brand-gray mt-1">
                  Mon – Sat, 9am – 6pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 flex-shrink-0 border border-[rgba(255,208,0,0.2)] rounded-sm bg-[rgba(255,208,0,0.04)] flex items-center justify-center text-brand-yellow">
                <MailIcon />
              </div>
              <div>
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-1">
                  Email Us
                </p>
                <p className="font-condensed text-[0.95rem] font-bold text-white tracking-[1px]">
                  thameem@adsonify.com
                </p>
                <p className="text-[0.8rem] text-brand-gray mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 flex-shrink-0 border border-[rgba(255,208,0,0.2)] rounded-sm bg-[rgba(255,208,0,0.04)] flex items-center justify-center text-brand-yellow">
                <ChatIcon />
              </div>
              <div>
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/917994502959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-condensed text-[0.95rem] font-bold text-white tracking-[1px] hover:text-brand-yellow transition-colors duration-200"
                >
                  Chat With Our Team
                </a>
                <p className="text-[0.8rem] text-brand-gray mt-1">
                  Instant campaign support
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 flex-shrink-0 border border-[rgba(255,208,0,0.2)] rounded-sm bg-[rgba(255,208,0,0.04)] flex items-center justify-center text-brand-yellow">
                <MapPinIcon />
              </div>
              <div>
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-1">
                  Our Office
                </p>
                <p className="font-condensed text-[0.95rem] font-bold text-white tracking-[1px]">
                  Kerala, India
                </p>
                <p className="text-[0.8rem] text-brand-gray mt-1">
                  Serving cities across Kerala
                </p>
              </div>
            </div>

            {/* Social row */}
            <div className="h-px bg-[rgba(255,208,0,0.1)] mb-6" />
            <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.4)] mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
                { Icon: FacebookIcon, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-[rgba(255,208,0,0.2)] rounded-sm flex items-center justify-center text-[rgba(255,208,0,0.5)] hover:border-[rgba(255,208,0,0.5)] hover:text-brand-yellow transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Contact form ──────────────────────────────────────── */}
          <div className="contact-right">
            <div className="border border-[rgba(255,208,0,0.12)] bg-[rgba(255,208,0,0.02)] rounded-sm p-8">
              <div className="font-condensed text-[0.7rem] tracking-[4px] uppercase text-brand-yellow mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-brand-yellow shrink-0" />
                Send Us A Message
              </div>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center text-center py-10">
                  <div className="text-brand-yellow">
                    <CheckIcon />
                  </div>
                  <p className="font-display text-[1.8rem] text-white mt-4">
                    Message Sent!
                  </p>
                  <p className="text-brand-gray text-[0.9rem] mt-2">
                    Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 font-condensed text-[0.7rem] tracking-[2px] uppercase text-brand-yellow hover:text-white transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form fields */
                <form action="https://formspree.io/f/xeedlwly" method="POST" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Adsonify Lead" />
                  <input type="hidden" name="_replyto" value={form.email} readOnly />
                  {/* Row 1 — Name + Phone */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className="block font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Email + Business */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={INPUT_CLASS}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Your business or brand"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  {/* Row 3 — Message full width */}
                  <div className="mb-5">
                    <label className="block font-condensed text-[0.65rem] tracking-[3px] uppercase text-[rgba(255,208,0,0.5)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your campaign..."
                      rows={4}
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  {error ? (
                    <p className="text-red-300 text-[0.85rem] mt-2">{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-6 bg-brand-yellow text-brand-black font-condensed text-[0.95rem] font-bold tracking-[2px] uppercase py-4 px-8 rounded-sm hover:bg-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
