import { Metadata } from 'next'
import RandomPicker from '@/components/RandomPicker'

export const metadata: Metadata = {
  title: 'Rastgele Seçim Aracı - Ücretsiz AI Destekli Araç | Anında Karar Verme',
  description: 'Listenizden anında rastgele öğeler seçin. Çekilişler, yarışmalar, karar verme ve rastgele seçim için mükemmel. AI destekli adil seçim algoritması. Son güncelleme 2024.',
  keywords: ['rastgele seçim aracı', 'rastgele seçici', 'isim çarkı', 'rastgele seçim', 'karar verici', 'çekiliş seçici', 'yarışma kazananı seçici'],
  authors: [{ name: 'Rastgele Oluşturucu', url: 'https://rastgeleolusturucu.com.tr' }],
  openGraph: {
    title: 'Rastgele Seçim Aracı - Anında Karar Verme',
    description: 'Çekilişler, yarışmalar ve karar verme için AI destekli rastgele seçici. Adil ve anında sonuçlar.',
    type: 'website',
    url: 'https://rastgeleolusturucu.com.tr/random-picker',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rastgele Seçim Aracı',
  description: 'AI destekli adil seçim algoritması ile listenizden anında rastgele öğeler seçin. Çekilişler, yarışmalar, karar verme ve rastgele seçim için mükemmel.',
  url: 'https://rastgeleolusturucu.com.tr/random-picker',
  applicationCategory: 'Utility',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Özel liste girişi',
    'Adil seçim algoritması',
    'Anında rastgele seçim',
    'Sınırsız liste öğeleri',
    'Görsel seçim süreci',
    'Tarafsızlık garantisi'
  ],
  useCase: [
    'Çekiliş kazananı seçimi',
    'Yarışma ödül dağıtımı',
    'Karar verme yardımı',
    'Ekip üyesi seçimi',
    'Rastgele atama',
    'Seçim oyunları'
  ],
  dateModified: '2024-03-07'
}

export default function RandomPickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <RandomPicker />
      </div>
    </>
  )
}
