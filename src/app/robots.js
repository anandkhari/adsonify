import { getSiteUrl } from './lib/site'

export default function robots() {
  const baseUrl = getSiteUrl()
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, '')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${normalizedBaseUrl}/sitemap.xml`,
  }
}
