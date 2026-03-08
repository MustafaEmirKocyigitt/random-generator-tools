import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PasswordTemplatePageProps {
  params: {
    slug: string
  }
}

const passwordTemplates = {
  '8-karakter': {
    title: '8 Karakter Şifre Oluşturucu - Güvenli Parola',
    description: '8 karakter uzunluğunda güvenli ve rastgele şifreler oluşturun. Hızlı ve ücretsiz.',
    length: 8,
    strength: 'Orta',
    useCase: 'Hesap şifreleri, uygulama parolaları, genel kullanım için ideal'
  },
  '12-karakter': {
    title: '12 Karakter Şifre Oluşturucu - Güçlü Parola',
    description: '12 karakter uzunluğunda güçlü ve rastgele şifreler oluşturun. Yüksek güvenlik.',
    length: 12,
    strength: 'Yüksek',
    useCase: 'E-posta hesapları, sosyal medya, önemli hesaplar için'
  },
  '16-karakter': {
    title: '16 Karakter Şifre Oluşturucu - Çok Güçlü Parola',
    description: '16 karakter uzunluğunda çok güçlü şifreler oluşturun. Maksimum güvenlik.',
    length: 16,
    strength: 'Çok Yüksek',
    useCase: 'Banka hesapları, kripto cüzdanlar, yönetici hesapları için'
  },
  'guclu-16-karakter': {
    title: 'Güçlü 16 Karakter Şifre - Özel Karakterli',
    description: 'Özel karakterler içeren 16 karakter güçlü şifre. En üst düzey güvenlik.',
    length: 16,
    strength: 'Maksimum',
    useCase: 'Sunucu erişimi, veritabanı, kritik sistemler için'
  },
  'ozel-karakterli': {
    title: 'Özel Karakterli Şifre Oluşturucu - Sembollü',
    description: 'Harf, rakam ve özel karakterler içeren güvenli şifreler. Karmaşık yapı.',
    length: 14,
    strength: 'Yüksek',
    useCase: 'Geliştirici hesapları, API anahtarları, sistem parolaları için'
  }
}

export async function generateMetadata({ params }: PasswordTemplatePageProps): Promise<Metadata> {
  const template = passwordTemplates[params.slug as keyof typeof passwordTemplates]
  
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
      url: `https://rastgeleolusturucu.com.tr/sifre-olusturucu/${params.slug}`,
      siteName: 'Rastgele Oluşturucu',
      locale: 'tr_TR'
    },
    alternates: {
      canonical: `https://rastgeleolusturucu.com.tr/sifre-olusturucu/${params.slug}`
    }
  }
}

export default function PasswordTemplatePage({ params }: PasswordTemplatePageProps) {
  const template = passwordTemplates[params.slug as keyof typeof passwordTemplates]
  
  if (!template) {
    notFound()
  }

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Orta': return 'text-yellow-600 bg-yellow-100'
      case 'Yüksek': return 'text-green-600 bg-green-100'
      case 'Çok Yüksek': return 'text-blue-600 bg-blue-100'
      case 'Maksimum': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
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
              <div className={`px-4 py-2 rounded-full ${getStrengthColor(template.strength)}`}>
                <span className="font-semibold">Güvenlik Seviyesi: {template.strength}</span>
              </div>
              <div className="bg-blue-100 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold">{template.length} Karakter</span>
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
              Hızlı Şifre Oluşturucu
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şifre Uzunluğu
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">{template.length}</span>
                  <span className="text-gray-500">karakter</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şifre Özellikleri
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm">Büyük harfler (A-Z)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm">Küçük harfler (a-z)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm">Rakamlar (0-9)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked={params.slug.includes('ozel')} className="mr-2" />
                    <span className="text-sm">Özel karakterler (!@#$%^&*)</span>
                  </label>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
              Güvenli Şifre Oluştur
            </button>

            <div id="passwordResult" className="bg-gray-50 rounded-lg p-6 min-h-[100px] hidden">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Oluşturulan Şifre:</h3>
              <div className="flex items-center space-x-4">
                <div id="generatedPassword" className="text-2xl font-mono text-blue-600 flex-1"></div>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Kopyala
                </button>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Şifre Gücü:</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div id="strengthBar" className="bg-green-600 h-2 rounded-full strength-bar-80"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Neden {template.length} Karakter?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                {template.length} karakter uzunluğundaki şifreler, modern brute force saldırılarına 
                karşı etkili bir koruma sağlar. Bu uzunluk, {template.useCase.toLowerCase()} 
                için önerilen minimum güvenlik standardını karşılar.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Güvenlik Avantajları:</h3>
              <ul>
                <li><strong>Brute Force Koruma:</strong> Milyarlarca kombinasyon</li>
                <li><strong>Kriptografik Güvenlik:</strong> Rastgele algoritma</li>
                <li><strong>Karakter Çeşitliliği:</strong> Büyük, küçük, rakam, özel karakter</li>
                <li><strong>Hafıza Kolaylığı:</strong> {template.length <= 12 ? 'Optimal uzunluk' : 'Maksimum güvenlik'}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Diğer Şifre Uzunlukları
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(passwordTemplates)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, data]) => (
                  <Link 
                    key={slug}
                    href={`/sifre-olusturucu/${slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {data.length} karakter
                    </p>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStrengthColor(data.strength)}`}>
                      {data.strength}
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Şifre Güvenliği İpuçları
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Şifrelerimi nasıl saklamalıyım?
                </h4>
                <p className="text-gray-600">
                  Oluşturduğunuz şifreleri güvenli bir şifre yöneticisinde saklayın. 
                  Not defteri gibi güvensiz yerlere yazmayın.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Her hesap için aynı şifreyi kullanabilir miyim?
                </h4>
                <p className="text-gray-600">
                  Hayır. Her hesap için benzersiz şifreler oluşturun. 
                  Bu, bir hesabınız hacklendiğinde diğerlerinin güvende kalmasını sağlar.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Şifreler ne sıklıkla değiştirilmeli?
                </h4>
                <p className="text-gray-600">
                  Önemli hesaplar için 3-6 ayda bir, hassas hesaplar için daha sık değiştirin.
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
