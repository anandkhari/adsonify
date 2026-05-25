import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { getSiteUrl } from './lib/site'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const TITLE = "Adsonify — Kerala's Boldest Mobile LED Advertising"
const DESCRIPTION =
  'A full-spec LED wall packed inside an auto rickshaw — turning every road into your stage. Maximum reach. Maximum impact.'

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: TITLE,
    template: '%s | Adsonify',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Adsonify',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

