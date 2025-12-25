/**
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // TODO: Update this to your actual domain
    sitemap: 'https://hemanthkumarportfolio.vercel.app/sitemap.xml',
  }
}
