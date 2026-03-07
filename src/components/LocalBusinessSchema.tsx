export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Rastgele Oluşturucu',
    description: 'Türkiye\'nin en iyi rastgele araçları platformu. Rastgele sayı, şifre, isim, renk ve seçim için 5 ücretsiz Türkçe araç.',
    url: 'https://rastgeleolusturucu.com.tr',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock'
    },
    provider: {
      '@type': 'Organization',
      name: 'Rastgele Oluşturucu',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'TR',
        addressRegion: 'TR'
      }
    },
    inLanguage: 'tr',
    featureList: [
      'Rastgele Sayı Üretici',
      'Rastgele Şifre Oluşturucu',
      'Rastgele İsim Üretici',
      'Rastgele Renk Üretici',
      'Rastgele Seçici Araç'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
