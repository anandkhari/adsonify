import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: "Adsonify — Kerala's Boldest Mobile LED Advertising",
  description:
    'A full-spec LED wall packed inside an auto rickshaw — turning every road into your stage. Maximum reach. Maximum impact.',
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
