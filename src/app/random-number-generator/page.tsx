import { Metadata } from 'next'
import RandomNumberGenerator from '@/components/RandomNumberGenerator'

export const metadata: Metadata = {
  title: 'Rastgele Sayı Üreteci - Ücretsiz AI Destekli Araç | 1-1.000.000 Aralık',
  description: 'AI destekli araçla anında rastgele sayılar üretin. 1-1.000.000 özel aralık ve 0.001ms hız. Piyango, istatistik, oyun ve testler için mükemmel. Son güncelleme 2024.',
  keywords: ['rastgele sayı üreteci', 'rastgele sayı', 'sayı üreteci', 'online rastgele sayılar', 'piyango sayı üreteci', 'zar atma', 'istatistiksel rastgele sayılar'],
  authors: [{ name: 'Rastgele Oluşturucu', url: 'https://rastgeleolusturucu.com.tr' }],
  openGraph: {
    title: 'Rastgele Sayı Üreteci - Özel Aralık 1-1.000.000',
    description: 'Özel aralıklarla AI destekli rastgele sayı üreteci. Oyun, istatistik ve testler için anında sonuçlar.',
    type: 'website',
    url: 'https://rastgeleolusturucu.com.tr/random-number-generator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rastgele Sayı Üreteci',
  description: '1-1.000.000 aralığında özel aralıklarla anında rastgele sayılar üretin. 0.001ms üretim hızı ve kriptografik olarak güvenli rastgelelik özellikleri.',
  url: 'https://rastgeleolusturucu.com.tr/random-number-generator',
  applicationCategory: 'Utility',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Özel aralık seçimi',
    '1-1.000.000 sayı aralığı',
    '0.001ms üretim hızı',
    'Kriptografik olarak güvenli',
    'Çoklu sayı üretimi',
    'İstatistiksel doğruluk'
  ],
  useCase: [
    'Piyango sayı üretimi',
    'İstatistiksel örnekleme',
    'Oyun uygulamaları',
    'Test ve simülasyon',
    'Rastgele seçim',
    'Matematiksel araştırma'
  ],
  dateModified: '2024-03-07'
}

export default function RandomNumberGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <RandomNumberGenerator />
      </div>
    </>
  )
}
