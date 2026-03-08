import { Metadata } from 'next'
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Rastgele Üretim Araçları - 5 Ücretsiz AI Destekli Araç | Sayılar, İsimler, Şifreler',
  description: 'Rastgele sayılar, isimler, şifreler, renkler ve liste seçimleri anında üretin. 1000+ isim veritabanı, güvenli şifre üretimi ve 0.001ms hız ile 5 ücretsiz AI destekli araç. Kayıt gerekmez.',
  keywords: ['rastgele üretim araçları', 'rastgele sayı üreteci', 'rastgele isim üreteci', 'rastgele şifre üreteci', 'rastgele renk üreteci', 'rastgele seçim aracı', 'ai araçları', 'ücretsiz online araçlar', 'güvenli şifre üreteci', 'karakter isimleri'],
  authors: [{ name: 'Rastgele Oluşturucu', url: 'https://rastgeleolusturucu.com.tr' }],
  openGraph: {
    title: 'Rastgele Üretim Araçları - 5 Ücretsiz AI Destekli Araç',
    description: 'Rastgele sayılar, isimler, şifreler, renkler ve seçimler için 5 ücretsiz AI destekli araç. Anında sonuçlar ve askeri düzeyde güvenlik.',
    type: 'website',
    url: 'https://rastgeleolusturucu.com.tr',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rastgele Üretim Araçları',
  description: 'Sayılar, isimler, şifreler, renkler ve rastgele seçici dahil 5 ücretsiz AI destekli rastgele üretim aracı seti. 1000+ isim veritabanı, askeri düzeyde güvenlik ve 0.001ms üretim hızı özellikleri.',
  url: 'https://rastgeleolusturucu.com.tr',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Rastgele Üretim Araçları Seti',
    applicationCategory: 'Utility',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: [
      'Rastgele Sayı Üreteci (1-1.000.000 aralığı)',
      'Rastgele İsim Üreteci (1000+ isim)',
      'Rastgele Şifre Üreteci (256-bit şifreleme)',
      'Rastgele Renk Üreteci (HEX ve RGB)',
      'Rastgele Seçim Aracı (sınırsız listeler)'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '10000',
      bestRating: '5',
      worstRating: '1'
    }
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rastgeleolusturucu.com.tr/{search_term}',
    'query-input': 'required name="search_term"'
  },
  dateModified: '2024-03-07'
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <HomePage />
      </div>
    </>
  )
}
