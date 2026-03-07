export default function ProgrammaticSchema({ type, data }: { type: string; data: any }) {
  const generateSchema = () => {
    switch (type) {
      case 'number-template':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.title,
          description: data.description,
          applicationCategory: 'Utility',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'TRY'
          },
          featureList: [
            'Rastgele Sayı Üretimi',
            `Aralık: ${data.min}-${data.max}`,
            'Anlık Sonuçlar',
            'Ücretsiz Kullanım',
            'Tarayıcı Tabanlı'
          ],
          inLanguage: 'tr',
          author: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          dateModified: '2024-03-07',
          url: `https://rastgeleolusturucu.com.tr/rastgele-sayi/${data.slug}`
        }

      case 'password-template':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.title,
          description: data.description,
          applicationCategory: 'SecurityApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'TRY'
          },
          featureList: [
            'Güvenli Şifre Oluşturma',
            `${data.length} Karakter Uzunluğu`,
            'Özel Karakter Desteği',
            'Kriptografik Güvenlik',
            'Anlık Üretim'
          ],
          inLanguage: 'tr',
          author: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          dateModified: '2024-03-07',
          url: `https://rastgeleolusturucu.com.tr/sifre-olusturucu/${data.slug}`
        }

      case 'name-template':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.title,
          description: data.description,
          applicationCategory: 'Utility',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'TRY'
          },
          featureList: [
            'Türkçe İsim Seçimi',
            `${data.gender === 'male' ? 'Erkek' : data.gender === 'female' ? 'Kadın' : 'Unisex'} İsimler`,
            'Kültürel Uygunluk',
            'Anlamlı İsimler',
            'Çoklu Seçenek'
          ],
          inLanguage: 'tr',
          author: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          dateModified: '2024-03-07',
          url: `https://rastgeleolusturucu.com.tr/rastgele-isim/${data.slug}`
        }

      case 'example-page':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          datePublished: '2024-03-07',
          dateModified: '2024-03-07',
          inLanguage: 'tr',
          articleSection: 'Kullanım Örnekleri',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://rastgeleolusturucu.com.tr/ornekler/${data.category}/${data.slug}`
          },
          about: {
            '@type': 'Thing',
            name: data.title,
            description: data.description
          }
        }

      case 'competitor-page':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rastgele Oluşturucu',
            url: 'https://rastgeleolusturucu.com.tr'
          },
          datePublished: '2024-03-07',
          dateModified: '2024-03-07',
          inLanguage: 'tr',
          articleSection: 'Karşılaştırma',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://rastgeleolusturucu.com.tr/alternatif/${data.slug}`
          },
          about: {
            '@type': 'Thing',
            name: `${data.competitor} Alternatifi`,
            description: `${data.competitor} yerine Rastgele Oluşturucu kullanımı`
          }
        }

      default:
        return null
    }
  }

  const schema = generateSchema()

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
