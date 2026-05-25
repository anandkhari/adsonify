import { getSiteUrl } from './lib/site'

export default function sitemap() {
  const baseUrl = getSiteUrl()
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

