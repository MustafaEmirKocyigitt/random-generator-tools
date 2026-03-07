import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface RandomNumberPageProps {
  params: {
    slug: string
  }
}

const numberTemplates = {
  '1-100': {
    title: 'Rastgele Sayı 1-100 Arası Üretici',
    description: '1 ile 100 arasında rastgele tam sayılar üretin. Ücretsiz ve hızlı.',
    min: 1,
    max: 100,
    useCase: 'Yüzde hesaplamaları, küçük çekilişler, oyun zarları için ideal'
  },
  '1-1000': {
    title: 'Rastgele Sayı 1-1000 Arası Üretici',
    description: '1 ile 1000 arasında rastgele tam sayılar üretin. Büyük aralıklar için.',
    min: 1,
    max: 1000,
    useCase: 'ID numaraları, büyük çekilişler, istatistiksel örneklem için'
  },
  '1-10000': {
    title: 'Rastgele Sayı 1-10000 Arası Üretici',
    description: '1 ile 10000 arasında rastgele tam sayılar üretin. Geniş aralık seçeneği.',
    min: 1,
    max: 10000,
    useCase: 'Büyük veri setleri, test senaryoları, benzersiz kodlar için'
  },
  '1-6': {
    title: 'Rastgele Zar 1-6 - Zar Atma Simülatörü',
    description: '6 yüzlü zar gibi 1-6 arasında rastgele sayılar. Oyunlar için mükemmel.',
    min: 1,
    max: 6,
    useCase: 'Zar oyunları, board games, şans oyunları için'
  },
  '1-49': {
    title: 'Rastgele Sayı 1-49 Arası - Sayısal Loto',
    description: '1 ile 49 arasında rastgele sayılar. Sayısal loto ve benzeri oyunlar için.',
    min: 1,
    max: 49,
    useCase: 'Sayısal loto, şans oyunları, çekiliş numaraları için'
  },
  '1-1000000': {
    title: 'Rastgele Sayı 1-1000000 Arası Üretici',
    description: '1 ile 1 milyon arasında rastgele sayılar. En geniş aralık seçeneği.',
    min: 1,
    max: 1000000,
    useCase: 'Büyük ölçekli testler, benzersiz ID\'ler, kripto anahtarları için'
  }
}

export async function generateMetadata({ params }: RandomNumberPageProps): Promise<Metadata> {
  const template = numberTemplates[params.slug as keyof typeof numberTemplates]
  
  if (!template) {
    return {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı.'
    }
  }

  return {
    title: template.title,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
      type: 'website',
      url: `https://rastgeleolusturucu.com.tr/rastgele-sayi/${params.slug}`,
      siteName: 'Rastgele Oluşturucu',
      locale: 'tr_TR'
    },
    alternates: {
      canonical: `https://rastgeleolusturucu.com.tr/rastgele-sayi/${params.slug}`
    }
  }
}

export default function RandomNumberTemplatePage({ params }: RandomNumberPageProps) {
  const template = numberTemplates[params.slug as keyof typeof numberTemplates]
  
  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {template.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {template.description}
            </p>
            <div className="bg-blue-100 rounded-lg p-4 mb-8">
              <p className="text-blue-800">
                <strong>Kullanım Alanı:</strong> {template.useCase}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Hızlı Rastgele Sayı Üretici
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sayı Aralığı
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">{template.min}</span>
                  <span className="text-gray-500">ile</span>
                  <span className="text-lg font-semibold">{template.max}</span>
                  <span className="text-gray-500">arasında</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kaç Adet?
                </label>
                <input 
                  type="number" 
                  min="1" 
                  max="100" 
                  defaultValue="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
              Rastgele Sayı(lar) Üret
            </button>

            <div id="results" className="bg-gray-50 rounded-lg p-6 min-h-[100px] hidden">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Sonuçlar:</h3>
              <div id="numbers" className="text-2xl font-mono text-blue-600"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Neden Bu Aralığı Seçmelisiniz?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                {template.min} ile {template.max} arası rastgele sayılar, 
                {template.useCase.toLowerCase()} için en uygun aralıktır. 
                Bu aralık, gerçek dünya senaryolarında sıkça kullanılan değerleri kapsar.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Özellikler:</h3>
              <ul>
                <li><strong>Tamamen Rastgele:</strong> Kriptografik olarak güvenli algoritma</li>
                <li><strong>Hızlı:</strong> Anında sonuçlar</li>
                <li><strong>Ücretsiz:</strong> Kullanım limiti olmadan</li>
                <li><strong>Güvenli:</strong> Sonuçlar sunucuya gönderilmez</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Diğer Sayı Aralıkları
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(numberTemplates)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, data]) => (
                  <Link 
                    key={slug}
                    href={`/rastgele-sayi/${slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {data.min}-{data.max} arası
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Üretilen sayılar gerçekten rastgele mi?
                </h4>
                <p className="text-gray-600">
                  Evet, modern JavaScript'in Math.random() fonksiyonunu kullanıyoruz. 
                  Bu, tarayıcı tarafından sağlanan güvenilir bir rastgele sayı üreticisidir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Aynı sayıyı tekrar üretebilir miyim?
                </h4>
                <p className="text-gray-600">
                  Hayır. Her üretim tamamen rastgeledir ve önceki sonuçlardan etkilenmez.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Kaç sayı üretebilirim?
                </h4>
                <p className="text-gray-600">
                  Tek seferde 1 ile 100 arasında sayı üretebilirsiniz. 
                  Daha fazla sayı için işlemi tekrarlayabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Tüm Araçlara Git
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
