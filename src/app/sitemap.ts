import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rastgeleolusturucu.com.tr'
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  
  // Core pages - Only include pages that should appear in search results
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/rastgele-sayi`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sifre-olusturucu`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/rastgele-isim`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/rastgele-renk`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/rastgele-secici`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/alternatifler`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/alternatif/random-org-alternatif`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/alternatif/hesapmakinesi-com-tr-alternatif`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/alternatif/randompassword-com-tr-alternatif`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
    },
  ]

  // Programmatic SEO - Number Templates (high-value pages)
  const numberTemplates = [
    '1-100', '1-1000', '1-10000', '1-6', '1-49', '1-1000000'
  ]
  
  const numberTemplatePages = numberTemplates.map(template => ({
    url: `${baseUrl}/rastgele-sayi/${template}`,
    lastModified: currentDate,
  }))

  // Programmatic SEO - Password Templates (high-value pages)
  const passwordTemplates = [
    '8-karakter', '12-karakter', '16-karakter', 'guclu-16-karakter', 'ozel-karakterli'
  ]
  
  const passwordTemplatePages = passwordTemplates.map(template => ({
    url: `${baseUrl}/sifre-olusturucu/${template}`,
    lastModified: currentDate,
  }))

  // Programmatic SEO - Name Templates (high-value pages)
  const nameTemplates = [
    'erkek', 'kadin', 'unisex', 'turkce', 'modern'
  ]
  
  const nameTemplatePages = nameTemplates.map(template => ({
    url: `${baseUrl}/rastgele-isim/${template}`,
    lastModified: currentDate,
  }))

  // Programmatic SEO - Examples Pages (lower priority, but still useful)
  const exampleCategories = ['numbers', 'names', 'passwords']
  const exampleSlugs = {
    numbers: ['lottery', 'dice', 'statistics'],
    names: ['baby', 'character', 'cultural'],
    passwords: ['security', 'development']
  }
  
  const examplePages = exampleCategories.flatMap(category =>
    exampleSlugs[category as keyof typeof exampleSlugs].map(slug => ({
      url: `${baseUrl}/ornekler/${category}/${slug}`,
      lastModified: currentDate,
    }))
  )

  return [
    ...corePages,
    ...numberTemplatePages,
    ...passwordTemplatePages,
    ...nameTemplatePages,
    ...examplePages
  ]
}
