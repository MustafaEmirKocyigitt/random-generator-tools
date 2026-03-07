import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rastgeleolusturucu.com.tr'
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rastgele-sayi`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sifre-olusturucu`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-isim`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-renk`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rastgele-secici`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/alternatifler`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatif/random-org-alternatif`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatif/hesapmakinesi-com-tr-alternatif`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatif/randompassword-com-tr-alternatif`,
      lastModified: new Date('2024-03-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date('2024-03-07'),
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
    lastModified: new Date('2024-03-07'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Programmatic SEO - Password Templates  
  const passwordTemplates = [
    '8-karakter', '12-karakter', '16-karakter', 'guclu-16-karakter', 'ozel-karakterli'
  ]
  
  const passwordTemplatePages = passwordTemplates.map(template => ({
    url: `${baseUrl}/sifre-olusturucu/${template}`,
    lastModified: new Date('2024-03-07'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Programmatic SEO - Name Templates
  const nameTemplates = [
    'erkek', 'kadin', 'unisex', 'turkce', 'modern'
  ]
  
  const nameTemplatePages = nameTemplates.map(template => ({
    url: `${baseUrl}/rastgele-isim/${template}`,
    lastModified: new Date('2024-03-07'),
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
      lastModified: new Date('2024-03-07'),
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
