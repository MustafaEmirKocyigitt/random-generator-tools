import { Metadata } from 'next'
import RandomPasswordGenerator from '@/components/RandomPasswordGenerator'

export const metadata: Metadata = {
  title: 'Rastgele Şifre Üreteci - Ücretsiz AI Destekli Araç | Askeri Düzeyde Güvenlik',
  description: 'Askeri düzeyde şifreleme ile güvenli rastgele şifreler üretin. Özelleştirilebilir uzunluk, büyük/küçük harf, sayılar ve semboller. 256-bit şifreleme gücü. Son güncelleme 2024.',
  keywords: ['rastgele şifre üreteci', 'şifre üreteci', 'güvenli şifre', 'güçlü şifre', 'askeri düzey şifre', '256-bit şifreleme', 'şifre güvenliği'],
  authors: [{ name: 'Rastgele Oluşturucu', url: 'https://rastgeleolusturucu.com.tr' }],
  openGraph: {
    title: 'Rastgele Şifre Üreteci - Askeri Düzeyde Güvenlik',
    description: '256-bit şifreleme ile AI destekli güvenli şifre üreteci. Maksimum güvenlik için özelleştirilebilir seçenekler.',
    type: 'website',
    url: 'https://rastgeleolusturucu.com.tr/random-password-generator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rastgele Şifre Üreteci',
  description: 'Askeri düzeyde şifreleme ile güvenli rastgele şifreler üretin. Özelleştirilebilir uzunluk, karakter türleri ve 256-bit şifreleme gücü özellikleri.',
  url: 'https://rastgeleolusturucu.com.tr/random-password-generator',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Askeri düzeyde şifreleme',
    '256-bit güvenlik gücü',
    'Özelleştirilebilir şifre uzunluğu',
    'Karakter türü seçimi',
    'Anında üretim',
    'Veri depolama yok'
  ],
  securityAspect: [
    'Sadece istemci tarafı üretimi',
    'Şifre depolama yok',
    'Kriptografik olarak güvenli',
    '256-bit şifreleme'
  ],
  dateModified: '2024-03-07'
}

export default function RandomPasswordGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <RandomPasswordGenerator />
      </div>
    </>
  )
}
