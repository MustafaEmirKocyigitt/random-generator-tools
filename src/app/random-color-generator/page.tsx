import { Metadata } from 'next'
import RandomColorGenerator from '@/components/RandomColorGenerator'

export const metadata: Metadata = {
  title: 'Rastgele Renk Üreteci - Ücretsiz AI Destekli Araç | HEX ve RGB Değerleri',
  description: 'HEX ve RGB değerleri ile anında rastgele renkler üretin. Tasarımcılar, geliştiriciler ve sanatçılar için mükemmel. AI destekli renk paletleri ve anında önizleme. Son güncelleme 2024.',
  keywords: ['rastgele renk üreteci', 'renk üreteci', 'hex renk', 'rgb renk', 'rastgele renkler', 'renk paleti üreteci', 'tasarım araçları'],
  authors: [{ name: 'Random Generator Tools', url: 'https://random-generator-tools.vercel.app' }],
  openGraph: {
    title: 'Rastgele Renk Üreteci - HEX ve RGB Değerleri',
    description: 'HEX ve RGB değerleri ile AI destekli rastgele renk üreteci. Tasarımcılar ve geliştiriciler için mükemmel.',
    type: 'website',
    url: 'https://random-generator-tools.vercel.app/random-color-generator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rastgele Renk Üreteci',
  description: 'HEX ve RGB değerleri ile anında rastgele renkler üretin. Tasarımcılar ve geliştiriciler için AI destekli renk önerileri ve anında görsel önizleme özellikleri.',
  url: 'https://random-generator-tools.vercel.app/random-color-generator',
  applicationCategory: 'DesignApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'HEX renk üretimi',
    'RGB renk değerleri',
    'Anında renk önizlemesi',
    'Renk kopyalama özelliği',
    'AI renk önerileri',
    'Palet oluşturma'
  ],
  useCase: [
    'Web tasarım projeleri',
    'Grafik tasarım çalışmaları',
    'UI/UX geliştirme',
    'Renk şeması oluşturma',
    'Sanatsal ilham',
    'Marka renk seçimi'
  ],
  dateModified: '2024-03-07'
}

export default function RandomColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <RandomColorGenerator />
      </div>
    </>
  )
}
