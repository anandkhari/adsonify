import Image from 'next/image'

const cards = [
  {
    span: '',
    aspect: 'aspect-square',
    src: '/auto-2.jpeg',
    alt: 'Branded auto campaign on city streets',
  },
  {
    span: '',
    aspect: 'aspect-square',
    src: '/auto-3.jpeg',
    alt: 'Auto-rickshaw advertisement installation',
  },
  {
    span: '',
    aspect: 'aspect-square',
    src: '/auto-service.jpeg',
    alt: 'Campaign visibility in high-traffic area',
  },
  /* {
    span: 'lg:col-span-2',
    aspect: 'aspect-video',
    src: 'https://images.pexels.com/photos/33461138/pexels-photo-33461138.jpeg',
    alt: 'Wide city route campaign coverage',
  },
  {
    span: '',
    aspect: 'aspect-square',
    src: 'https://images.pexels.com/photos/32248058/pexels-photo-32248058.jpeg',
    alt: 'Auto branding close-up',
  },
  {
    span: '',
    aspect: 'aspect-square',
    src: 'https://images.pexels.com/photos/36794737/pexels-photo-36794737.jpeg',
    alt: 'Fleet of branded auto-rickshaws',
  },
  {
    span: '',
    aspect: 'aspect-[4/3]',
    src: 'https://images.pexels.com/photos/31848512/pexels-photo-31848512.jpeg',
    alt: 'Local business campaign launch',
  },
  */
]

export default function Gallery() {
  return (
    <>
      <style>{`
        .gallery-card img {
          transition: transform 0.5s ease;
        }
        .gallery-card:hover img {
          transform: scale(1.04);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
      `}</style>

      <section
        id="gallery"
        className="py-24 px-8 md:px-16 lg:px-24"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 1px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,208,0,0.02) 60px, rgba(255,208,0,0.02) 1px)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-yellow opacity-60" />
            <span className="font-condensed text-[0.65rem] tracking-[4px] uppercase text-brand-yellow">
              Our Work
            </span>
            <span className="h-px w-8 bg-brand-yellow opacity-60" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none tracking-wider">
            CAMPAIGNS THAT
            <br />
            MOVE WITH
            <br />
            <span className="text-brand-yellow">THE CITY</span>
          </h2>
          <p className="text-brand-gray text-[clamp(0.85rem,1.3vw,0.95rem)] leading-[1.8] max-w-xl mx-auto mt-6">
            Explore our branded auto campaigns, installation works, and
            city-wide advertising executions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`gallery-card relative overflow-hidden rounded-sm ${card.span} ${card.aspect}`}
              style={{ border: '1px solid rgba(255,208,0,0.15)' }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Yellow hover overlay */}
              <div
                className="gallery-overlay absolute inset-0 opacity-0 transition-opacity duration-300 flex items-end p-5"
                style={{ background: 'rgba(0,0,0,0.55)' }}
              >
                <span
                  className="font-condensed text-[0.6rem] tracking-[3px] uppercase"
                  style={{ color: 'rgba(255,208,0,0.7)' }}
                >
                  {card.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}