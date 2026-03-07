import { Metadata } from 'next'
import RandomNameGenerator from '@/components/RandomNameGenerator'

export const metadata: Metadata = {
  title: 'Rastgele İsim Üreteci - Ücretsiz AI Destekli Araç | 1000+ İsim Üret',
  description: 'AI destekli araçla anında rastgele isimler üretin. Erkek, kadın veya karma cinsiyet seçenekleri. Karakterler, kullanıcı adları, hikayeler ve oyunlar için mükemmel. Son güncelleme 2024.',
  keywords: ['rastgele isim üreteci', 'isim üreteci', 'rastgele isimler', 'karakter isimleri', 'kullanıcı adı üreteci', 'bebek isim üreteci', 'fantazi isimleri'],
  authors: [{ name: 'Random Generator Tools', url: 'https://random-generator-tools.com' }],
  openGraph: {
    title: 'Rastgele İsim Üreteci - 1000+ Benzersiz İsim Üret',
    description: 'Erkek, kadın ve karma seçenekleri olan AI destekli rastgele isim üreteci. Yazarlar, oyuncular ve yaratıcılar için mükemmel.',
    type: 'website',
    url: 'https://random-generator-tools.com/random-name-generator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rastgele İsim Üreteci',
  description: 'Erkek, kadın veya karma cinsiyet için rastgele isimler üretin. Karakter yaratımı, kullanıcı adları ve yaratıcı projeler için mükemmel.',
  url: 'https://random-generator-tools.com/random-name-generator',
  applicationCategory: 'Utility',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Erkek isim üretimi',
    'Kadın isim üretimi', 
    'Karma cinsiyet isimleri',
    'Anında sonuçlar',
    'Kayıt gerekmez'
  ],
  dateModified: '2024-03-07'
}

export default function RandomNameGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <RandomNameGenerator />
      </div>
    </>
  )
}
