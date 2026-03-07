import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface NameTemplatePageProps {
  params: {
    slug: string
  }
}

const turkishNames = {
  male: ['Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Yusuf', 'Murat'],
  female: ['Fatma', 'Ayşe', 'Zeynep', 'Elif', 'Meryem', 'Hatice', 'Hacer', 'Sultan', 'Emine', 'Zehra'],
  unisex: ['Can', 'Deniz', 'Yıldız', 'Güneş', 'Barış', 'Umut', 'Naz', 'Duru', 'Lale', 'Rüzgar']
}

const nameTemplates = {
  'erkek': {
    title: 'Erkek İsim Üretici - Türkçe Erkek İsimleri',
    description: 'Rastgele Türkçe erkek isimleri seçin. Geleneksel ve modern erkek isimleri.',
    gender: 'male',
    useCase: 'Yeni doğan bebekler, karakter isimleri, proje kodları için ideal',
    details: 'Türk kültürüne özgü anlamlı erkek isimleri'
  },
  'kadin': {
    title: 'Kadın İsim Üretici - Türkçe Kadın İsimleri',
    description: 'Rastgele Türkçe kadın isimleri seçin. Geleneksel ve modern kadın isimleri.',
    gender: 'female',
    useCase: 'Kız bebek isimleri, karakter oluşturma, marka isimleri için',
    details: 'Türk kültüründe popüler ve anlamlı kadın isimleri'
  },
  'unisex': {
    title: 'Unisex İsim Üretici - Cinsiyet Tarafsız İsimler',
    description: 'Kadın ve erkek için kullanılabilecek unisex Türkçe isimler.',
    gender: 'unisex',
    useCase: 'Modern isim seçimi, markalaşma, karakter geliştirme için',
    details: 'Modern ve cinsiyet tarafsız Türkçe isimler'
  },
  'turkce': {
    title: 'Türkçe İsim Üretici - Geleneksel Türk İsimleri',
    description: 'Otantik Türkçe isimler. Tarihi ve kültürel öneme sahip isimler.',
    gender: 'mixed',
    useCase: 'Kültürel projeler, tarihi karakterler, geleneksel isim arayışı için',
    details: 'Türk tarihinde ve kültüründe köklü yeri olan isimler'
  },
  'modern': {
    title: 'Modern Türkçe İsimler - Çağdaş İsim Seçimi',
    description: 'Modern ve çağdaş Türkçe isimler. Günümüz trendlerine uygun.',
    gender: 'mixed',
    useCase: 'Yeni nesil isim tercihi, modern karakterler, çağdaş markalar için',
    details: 'Günümüzde popüler olan modern Türkçe isimler'
  }
}

export async function generateMetadata({ params }: NameTemplatePageProps): Promise<Metadata> {
  const template = nameTemplates[params.slug as keyof typeof nameTemplates]
  
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
      url: `https://rastgeleolusturucu.com.tr/rastgele-isim/${params.slug}`,
      siteName: 'Rastgele Oluşturucu',
      locale: 'tr_TR'
    },
    alternates: {
      canonical: `https://rastgeleolusturucu.com.tr/rastgele-isim/${params.slug}`
    }
  }
}

export default function NameTemplatePage({ params }: NameTemplatePageProps) {
  const template = nameTemplates[params.slug as keyof typeof nameTemplates]
  
  if (!template) {
    notFound()
  }

  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'male': return 'text-blue-600 bg-blue-100'
      case 'female': return 'text-pink-600 bg-pink-100'
      case 'unisex': return 'text-purple-600 bg-purple-100'
      case 'mixed': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case 'male': return 'Erkek'
      case 'female': return 'Kadın'
      case 'unisex': return 'Unisex'
      case 'mixed': return 'Karışık'
      default: return 'Belirsiz'
    }
  }

  const getRandomNames = (count: number = 5) => {
    let names: string[] = []
    let availableNames: string[] = []

    if (template.gender === 'mixed') {
      availableNames = [...turkishNames.male, ...turkishNames.female, ...turkishNames.unisex]
    } else if (template.gender === 'unisex') {
      availableNames = turkishNames.unisex
    } else if (template.gender === 'male') {
      availableNames = turkishNames.male
    } else if (template.gender === 'female') {
      availableNames = turkishNames.female
    }

    for (let i = 0; i < count && i < availableNames.length; i++) {
      const randomIndex = Math.floor(Math.random() * availableNames.length)
      const name = availableNames[randomIndex]
      if (!names.includes(name)) {
        names.push(name)
      } else {
        i-- // Tekrar dene
      }
    }

    return names
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
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className={`px-4 py-2 rounded-full ${getGenderColor(template.gender)}`}>
                <span className="font-semibold">{getGenderLabel(template.gender)}</span>
              </div>
              <div className="bg-blue-100 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold">Türkçe İsimler</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-blue-800">
                <strong>En iyi kullanım:</strong> {template.useCase}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Rastgele İsim Seçici
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İsim Türü
                </label>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getGenderColor(template.gender)}`}>
                    {getGenderLabel(template.gender)}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kaç İsim?
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="1">1 İsim</option>
                  <option value="3">3 İsim</option>
                  <option value="5" selected>5 İsim</option>
                  <option value="10">10 İsim</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
              Rastgele İsim(ler) Seç
            </button>

            <div id="nameResults" className="bg-gray-50 rounded-lg p-6 min-h-[100px] hidden">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Seçilen İsimler:</h3>
              <div id="nameList" className="text-2xl font-mono text-blue-600"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {template.details}
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Türkçe isimler, köklü bir tarihe ve kültüre sahiptir. {getGenderLabel(template.gender)} 
                isimleri, Türk toplumunda sıkça kullanılan ve anlamlarıyla öne çıkan isimlerdir.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Özellikler:</h3>
              <ul>
                <li><strong>Kültürel Değer:</strong> Türk kültürüne uygun isimler</li>
                <li><strong>Anlamlı İsimler:</strong> Her ismin derin bir anlamı var</li>
                <li><strong>Modern ve Geleneksel:</strong> Her zevke hitap eden seçenekler</li>
                <li><strong>Kolay Okunuş:</strong> Telaffuzu kolay ve akılda kalıcı</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Örnek İsimler
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {getRandomNames(9).map((name, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-semibold text-gray-800">{name}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Bu sadece örnek isimlerdir. Üretici butonuna basarak yeni isimler seçebilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Diğer İsim Türleri
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(nameTemplates)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, data]) => (
                  <Link 
                    key={slug}
                    href={`/rastgele-isim/${slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {getGenderLabel(data.gender)}
                    </p>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getGenderColor(data.gender)}`}>
                      {data.gender}
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              İsim Seçimi İpuçları
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  İsim seçerken nelere dikkat etmeliyim?
                </h4>
                <p className="text-gray-600">
                  İsim anlamı, telaffuz kolaylığı, aile gelenekleri ve modern trendleri 
                  göz önünde bulundurarak seçim yapın.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  İsimlerin anlamı önemli mi?
                </h4>
                <p className="text-gray-600">
                  Evet, Türk kültüründe isimlerin anlamı çok önemlidir. 
                  Olumlu anlamlı isimler tercih edilir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Modern isimler mi geleneksel mi?
                </h4>
                <p className="text-gray-600">
                  Bu tamamen kişisel tercihe bağlıdır. Geleneksel isimler köklü, 
                  modern isimler ise çağdaş bir görünüm sunar.
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
