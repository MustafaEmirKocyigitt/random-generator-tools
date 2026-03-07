export default function BreadcrumbSchema() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://rastgeleolusturucu.com.tr'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Rastgele Araçlar',
        item: 'https://rastgeleolusturucu.com.tr'
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
