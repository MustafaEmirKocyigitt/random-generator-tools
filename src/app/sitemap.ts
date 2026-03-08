import { NextResponse } from 'next/server'

export default function GET() {
  const baseUrl = 'https://rastgeleolusturucu.com.tr'
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  
  // Core pages - Only include pages that should appear in search results
  const corePages = [
    baseUrl,
    `${baseUrl}/rastgele-sayi`,
    `${baseUrl}/sifre-olusturucu`,
    `${baseUrl}/rastgele-isim`,
    `${baseUrl}/rastgele-renk`,
    `${baseUrl}/rastgele-secici`,
    `${baseUrl}/alternatifler`,
    `${baseUrl}/alternatif/random-org-alternatif`,
    `${baseUrl}/alternatif/hesapmakinesi-com-tr-alternatif`,
    `${baseUrl}/alternatif/randompassword-com-tr-alternatif`,
    `${baseUrl}/hakkimizda`,
  ]

  // Programmatic SEO - Number Templates (high-value pages)
  const numberTemplates = [
    '1-100', '1-1000', '1-10000', '1-6', '1-49', '1-1000000'
  ]
  
  const numberTemplatePages = numberTemplates.map(template => 
    `${baseUrl}/rastgele-sayi/${template}`
  )

  // Programmatic SEO - Password Templates (high-value pages)
  const passwordTemplates = [
    '8-karakter', '12-karakter', '16-karakter', 'guclu-16-karakter', 'ozel-karakterli'
  ]
  
  const passwordTemplatePages = passwordTemplates.map(template => 
    `${baseUrl}/sifre-olusturucu/${template}`
  )

  // Programmatic SEO - Name Templates (high-value pages)
  const nameTemplates = [
    'erkek', 'kadin', 'unisex', 'turkce', 'modern'
  ]
  
  const nameTemplatePages = nameTemplates.map(template => 
    `${baseUrl}/rastgele-isim/${template}`
  )

  // Programmatic SEO - Examples Pages (lower priority, but still useful)
  const exampleCategories = ['numbers', 'names', 'passwords']
  const exampleSlugs = {
    numbers: ['lottery', 'dice', 'statistics'],
    names: ['baby', 'character', 'cultural'],
    passwords: ['security', 'development']
  }
  
  const examplePages = exampleCategories.flatMap(category =>
    exampleSlugs[category as keyof typeof exampleSlugs].map(slug => 
      `${baseUrl}/ornekler/${category}/${slug}`
    )
  )

  const allUrls = [
    ...corePages,
    ...numberTemplatePages,
    ...passwordTemplatePages,
    ...nameTemplatePages,
    ...examplePages
  ]

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xmlString, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
