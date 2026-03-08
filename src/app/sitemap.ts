import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rastgeleolusturucu.com.tr'
  const currentDate = new Date()
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rastgele-sayi`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sifre-olusturucu`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-isim`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-renk`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-secici`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/alternatifler`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatif/random-org-alternatif`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatif/hesapmakinesi-com-tr-alternatif`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatif/randompassword-com-tr-alternatif`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Programmatic SEO - Number Templates
  const numberTemplates = [
    '1-100', '1-1000', '1-10000', '1-6', '1-49', '1-1000000'
  ]
  
  const numberTemplatePages = numberTemplates.map(template => ({
    url: `${baseUrl}/rastgele-sayi/${template}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Programmatic SEO - Password Templates  
  const passwordTemplates = [
    '8-karakter', '12-karakter', '16-karakter', 'guclu-16-karakter', 'ozel-karakterli'
  ]
  
  const passwordTemplatePages = passwordTemplates.map(template => ({
    url: `${baseUrl}/sifre-olusturucu/${template}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Programmatic SEO - Name Templates
  const nameTemplates = [
    'erkek', 'kadin', 'unisex', 'turkce', 'modern'
  ]
  
  const nameTemplatePages = nameTemplates.map(template => ({
    url: `${baseUrl}/rastgele-isim/${template}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Programmatic SEO - Examples Pages
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
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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
