import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'En İyi Rastgele Araçları - Random.org Alternatifleri',
  description: 'Türkiye\'nin en iyi rastgele sayı, şifre, isim, renk üreticileri. Random.org alternatifi ve daha fazlası.',
  openGraph: {
    title: 'En İyi Rastgele Araçları - Random.org Alternatifleri',
    description: 'Türkiye\'nin en iyi rastgele sayı, şifre, isim, renk üreticileri. Random.org alternatifi ve daha fazlası.',
    type: 'website',
    url: 'https://rastgeleolusturucu.com.tr/alternatifler',
    siteName: 'Rastgele Oluşturucu',
    locale: 'tr_TR'
  },
  alternates: {
    canonical: 'https://rastgeleolusturucu.com.tr/alternatifler'
  }
}

const tools = [
  {
    name: 'Rastgele Sayı Üretici',
    description: 'Belirtilen aralıkta rastgele sayılar üretin',
    href: '/rastgele-sayi',
    features: ['Aralık belirleme', 'Birden fazla sayı', 'Hızlı üretim']
  },
  {
    name: 'Şifre Oluşturucu',
    description: 'Güvenli ve güçlü şifreler oluşturun',
    href: '/sifre-olusturucu',
    features: ['Özelleştirilebilir', 'Güvenli algoritma', 'Kopyala yapıştır']
  },
  {
    name: 'Rastgele İsim Üretici',
    description: 'Türkçe isimler rastgele seçin',
    href: '/rastgele-isim',
    features: ['Erkek/Kadın seçimi', 'Türkçe isimler', 'Birden fazla seçenek']
  },
  {
    name: 'Rastgele Renk Üretici',
    description: 'HEX ve RGB formatında renkler oluşturun',
    href: '/rastgele-renk',
    features: ['HEX formatı', 'RGB formatı', 'Renk önizlemesi']
  },
  {
    name: 'Rastgele Seçici',
    description: 'Listeden rastgele öğe seçin',
    href: '/rastgele-secici',
    features: ['Özel liste', 'Hızlı seçim', 'Sonuç geçmişi']
  }
]

const competitors = [
  {
    name: 'Random.org',
    description: 'Global rastgele sayı servisi',
    pros: ['Çok bilinen', 'Güvenilir'],
    cons: ['İngilizce', 'Sadece sayı', 'Yavaş'],
    alternative: '/alternatif/random-org-alternatif'
  },
  {
    name: 'HesapMakinesi.com.tr',
    description: 'Türkçe hesaplama araçları',
    pros: ['Türkçe', 'Yerel'],
    cons: ['Sadece sayı', 'Eski arayüz', 'Sınırlı'],
    alternative: '/alternatif/hesapmakinesi-com-tr-alternatif'
  },
  {
    name: 'RandomPassword.com.tr',
    description: 'Şifre oluşturma servisi',
    pros: ['Odaklanmış', 'Türkçe'],
    cons: ['Sadece şifre', 'Basit arayüz', 'Az özellik'],
    alternative: '/alternatif/randompassword-com-tr-alternatif'
  }
]

export default function AlternativesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            En İyi Rastgele Araçları ve Alternatifleri
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Rastgele Oluşturucu - 5 Araç Bir Arada
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Türkiye'nin en kapsamlı rastgele üretim platformu. Tek bir yerden 5 farklı 
              araçla ihtiyacınız olan tüm rastgele değerleri üretin.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-1 mb-4">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={tool.href}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Kullan
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-red-600">
              Popüler Alternatifler ve Karşılaştırmalar
            </h2>
            <p className="text-gray-600 mb-8">
              Mevcut rastgele araç servisleri ile Rastgele Oluşturucu arasındaki farkları keşfedin.
            </p>
            
            <div className="space-y-6">
              {competitors.map((competitor, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {competitor.name}
                      </h3>
                      <p className="text-gray-600">{competitor.description}</p>
                    </div>
                    <Link 
                      href={competitor.alternative}
                      className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Alternatifi
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Avantajları</h4>
                      <ul className="space-y-1">
                        {competitor.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-center">
                            <span className="text-green-500 mr-2">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Dezavantajları</h4>
                      <ul className="space-y-1">
                        {competitor.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-center">
                            <span className="text-red-500 mr-2">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Rastgele Oluşturucu</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-700 flex items-center">
                          <span className="text-blue-500 mr-2">✓</span>
                          5 araç bir arada
                        </li>
                        <li className="text-sm text-gray-700 flex items-center">
                          <span className="text-blue-500 mr-2">✓</span>
                          %100 Türkçe
                        </li>
                        <li className="text-sm text-gray-700 flex items-center">
                          <span className="text-blue-500 mr-2">✓</span>
                          Modern arayüz
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Neden Rastgele Oluşturucu'nu Seçmelisiniz?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Kapsamlı Çözüm
                </h3>
                <p className="text-gray-600 mb-4">
                  Tek bir platformda 5 farklı rastgele üretim aracı. Sayı, şifre, isim, 
                  renk ve liste seçimi için ayrı ayrı siteler aramayın.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Türkçe ve Modern
                </h3>
                <p className="text-gray-600 mb-4">
                  Tamamen Türkçe arayüz ve Next.js ile geliştirilmiş modern, hızlı, 
                  mobil uyumlu deneyim.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Güvenli ve Ücretsiz
                </h3>
                <p className="text-gray-600 mb-4">
                  Browser tarafında işlem, hiçbir veri sunucuya gitmez. 
                  Tamamen ücretsiz ve kullanım limiti yok.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Hızlı ve Verimli
                </h3>
                <p className="text-gray-600 mb-4">
                  Anlık sonuçlar, kopyala-yapıştır özellikleri ve 
                  kullanıcı dostu arayüz ile zaman kazandırın.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Araçları Hemen Kullan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
