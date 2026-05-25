import { getSiteUrl } from './lib/site'

export default function sitemap() {
  const baseUrl = getSiteUrl()
  const lastModified = new Date()

  const normalizedBaseUrl = baseUrl.replace(/\/+$/, '')

  return [
    {
      url: `${normalizedBaseUrl}/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${normalizedBaseUrl}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
