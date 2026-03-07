import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface CompetitorPageProps {
  params: {
    slug: string
  }
}

const competitorPages = {
  'random-org-alternatif': {
    title: 'Random.org Alternatifi - Türkçe Rastgele Sayı Üretici',
    description: 'Random.org yerine Türkçe rastgele sayı üretici. Hızlı, ücretsiz ve 5 araç bir arada.',
    competitor: 'Random.org'
  },
  'hesapmakinesi-com-tr-alternatif': {
    title: 'HesapMakinesi.com.tr Alternatifi - Daha Fazla Araç',
    description: 'HesapMakinesi.com.tr yerine 5 araç bir arada. Rastgele sayı, isim, şifre, renk ve seçim.',
    competitor: 'HesapMakinesi.com.tr'
  },
  'randompassword-com-tr-alternatif': {
    title: 'RandomPassword.com.tr Alternatifi - Çoklu Araç',
    description: 'RandomPassword.com.tr yerine sadece şifre değil 5 farklı rastgele araç.',
    competitor: 'RandomPassword.com.tr'
  }
}

export async function generateMetadata({ params }: CompetitorPageProps): Promise<Metadata> {
  const page = competitorPages[params.slug as keyof typeof competitorPages]
  
  if (!page) {
    return {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı.'
    }
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      url: `https://rastgeleolusturucu.com.tr/alternatif/${params.slug}`,
      siteName: 'Rastgele Oluşturucu',
      locale: 'tr_TR'
    },
    alternates: {
      canonical: `https://rastgeleolusturucu.com.tr/alternatif/${params.slug}`
    }
  }
}

export default function CompetitorPage({ params }: CompetitorPageProps) {
  const page = competitorPages[params.slug as keyof typeof competitorPages]
  
  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            {page.title}
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              {page.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                  Rastgele Oluşturucu
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    5 farklı araç bir arada
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    %100 ücretsiz ve limitsiz
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Modern ve hızlı arayüz
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Tam mobil uyumlu
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Türkçe ve İngilizce dil desteği
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-red-600">
                  {page.competitor}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Sadece tek araç
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Eski arayüz tasarımı
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Mobil uyumsuzluk
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    İngilizce arayüz
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Yavaş yüklenme süreleri
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Neden Rastgele Oluşturucu'nu Tercih Etmelisiniz?
              </h3>
              <p className="text-gray-700 mb-4">
                {page.competitor} yerine Rastgele Oluşturucu'yu seçerek sadece bir araç değil, 
                ihtiyacınız olabilecek tüm rastgele üretim araçlarına tek bir yerden erişim sağlarsınız. 
                Modern teknoloji ile geliştirilmiş platformumuz sayesinde işlerinizi daha hızlı ve 
                verimli bir şekilde yapabilirsiniz.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Hızlı
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Güvenli
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Ücretsiz
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Türkçe
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Modern
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Araçları Hemen Kullan
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Rastgele Oluşturucu tamamen ücretsiz mi?
                </h4>
                <p className="text-gray-600">
                  Evet, tüm araçlarımız tamamen ücretsiz ve kullanım limiti olmadan hizmetinizdedir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  {page.competitor}'dan ne gibi farklar var?
                </h4>
                <p className="text-gray-600">
                  En büyük farkımız 5 farklı araç bir arada sunmamız, modern arayüzümüz ve 
                  tam Türkçe dil desteğimizdir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Üretilen veriler güvenli mi?
                </h4>
                <p className="text-gray-600">
                  Evet, tüm rastgelelemeler browser tarafında yapılır ve hiçbir veri sunucuya gönderilmez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
