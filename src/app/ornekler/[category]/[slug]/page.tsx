import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ExamplePageProps {
  params: {
    category: string
    slug: string
  }
}

const exampleCategories = {
  numbers: {
    lottery: {
      title: 'Rastgele Sayı Kullanımı - Lotarya ve Şans Oyunları',
      description: 'Lotarya, sayısal loto ve şans oyunlarında rastgele sayıların kullanımı ve örnekleri.',
      examples: [
        'Sayısal Loto: 1-49 arası 6 sayı seçimi',
        'Milli Piyango: Bilet numarası oluşturma',
        'Şans Topu: 1-14 arası 5 sayı + 1 şans sayısı',
        'On Numara: 1-80 arası 10 sayı seçimi',
        'Super Lotto: Farklı aralıklarda sayı kombinasyonları'
      ],
      useCase: 'Adil şans oyunları, çekiliş organizasyonları, istatistiksel analiz'
    },
    dice: {
      title: 'Rastgele Sayı Kullanımı - Zar ve Oyunlar',
      description: 'Zar oyunları, board games ve şans oyunlarında rastgele sayı kullanım örnekleri.',
      examples: [
        '6 Yüzlü Zar: 1-6 arası sayılar',
        '20 Yüzlü Zar (D20): RPG oyunları için',
        'İki Zar: Monopoly gibi oyunlar',
        'Çoklu Zar: Risk, Strategia gibi strateji oyunları',
        'Özel Zar: Oyun geliştirme için özel aralıklar'
      ],
      useCase: 'Oyun geliştirme, board games, RPG karakterleri'
    },
    statistics: {
      title: 'Rastgele Sayı Kullanımı - İstatistik ve Veri Analizi',
      description: 'İstatistiksel örneklem, veri analizi ve bilimsel çalışmalarda rastgele sayı kullanımı.',
      examples: [
        'Örneklem Seçimi: Anketler için rastgele katılımcılar',
        'Monte Carlo Simülasyonu: Finansal modelleme',
        'Hypothesis Testing: Rastgele gruplar oluşturma',
        'Quality Control: Ürün test örnekleri',
        'Data Science: Train/test veri ayırma'
      ],
      useCase: 'Akademik araştırmalar, veri bilimi, kalite kontrol'
    }
  },
  names: {
    baby: {
      title: 'Rastgele İsim Kullanımı - Bebek İsimleri Seçimi',
      description: 'Yeni doğan bebekler için isim seçimi, anlamı ve kültürel önem.',
      examples: [
        'Erkek Bebek: Ahmet, Mehmet, Mustafa gibi geleneksel isimler',
        'Kız Bebek: Fatma, Ayşe, Zeynep gibi popüler isimler',
        'Modern İsimler: Arda, Defne, Kerem gibi çağdaş seçimler',
        'İkiz İsimleri: Umut-Barış, Elif-Zeynep gibi uyumlu çiftler',
        'Unisex İsimler: Can, Deniz, Naz gibi her cinsiyete uygun'
      ],
      useCase: 'Bebek ismi seçimi, aile danışmanlığı, kültürel araştırma'
    },
    character: {
      title: 'Rastgele İsim Kullanımı - Karakter ve Marka İsimleri',
      description: 'Roman, oyun, film karakterleri ve marka isimleri için rastgele isim seçimi.',
      examples: [
        'Roman Karakterleri: Epik hikayeler için unutulmaz isimler',
        'Oyun Karakterleri: RPG ve video oyun karakterleri',
        'Film Karakterleri: Senaryo geliştirme için isimler',
        'Marka İsimleri: Şirket ve ürün isimlendirme',
        'Proje Kodları: Geliştirme projeleri için takma isimler'
      ],
      useCase: 'Yazarlık, oyun geliştirme, markalaşma'
    },
    cultural: {
      title: 'Rastgele İsim Kullanımı - Kültürel ve Tarihi İsimler',
      description: 'Türk kültürü, tarihi ve mitolojisinden esinlenen isim seçimleri.',
      examples: [
        'Osmanlı Dönemi: Fatih, Kanuni, Yavuz gibi padişah isimleri',
        'Türk Mitolojisi: Oğuz, Bozkurt, Ergenekon gibi mitik isimler',
        'Coğrafi İsimler: Toros, Fırat, Tuna gibi doğadan esinlenen',
        'Sanatçılar: Yunus, Mevlana, Fuzuli gibi sanat isimleri',
        'Kahramanlar: Alparslan, Köroğlu, Kara Murat gibi'
      ],
      useCase: 'Kültürel projeler, tarihi romanlar, eğitim materyalleri'
    }
  },
  passwords: {
    security: {
      title: 'Şifre Kullanımı - Güvenlik ve Koruma',
      description: 'Güvenli şifre oluşturma, dijital güvenlik ve kimlik koruması.',
      examples: [
        'Banka Hesapları: 16+ karakter karmaşık şifreler',
        'E-posta Hesapları: 12 karakter özel karakterli',
        'Sosyal Medya: 8-10 karakter unutulmayan şifreler',
        'Şifre Yöneticileri: Ana şifre için maksimum güvenlik',
        'İki Faktörlü Kimlik: Backup kodları oluşturma'
      ],
      useCase: 'Dijital güvenlik, siber güvenlik, kimlik koruması'
    },
    development: {
      title: 'Şifre Kullanımı - Geliştirme ve Teknik',
      description: 'Yazılım geliştirme, API anahtarları ve teknik şifre kullanımı.',
      examples: [
        'API Anahtarları: 32 karakter rastgele stringler',
        'Veritabanı Şifreleri: Yüksek güvenlikli veri erişimi',
        'SSH Keys: Sunucu bağlantı güvenliği',
        'Environment Variables: Geliştirme ortamı şifreleri',
        'JWT Tokens: Kısa ömürlü güvenlik tokenları'
      ],
      useCase: 'Yazılım geliştirme, sistem yönetimi, DevOps'
    }
  }
}

export async function generateMetadata({ params }: ExamplePageProps): Promise<Metadata> {
  const category = exampleCategories[params.category as keyof typeof exampleCategories]
  const example = category?.[params.slug as keyof typeof category] as any
  
  if (!example) {
    return {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı.'
    }
  }

  return {
    title: example.title,
    description: example.description,
    openGraph: {
      title: example.title,
      description: example.description,
      type: 'website',
      url: `https://rastgeleolusturucu.com.tr/ornekler/${params.category}/${params.slug}`,
      siteName: 'Rastgele Oluşturucu',
      locale: 'tr_TR'
    },
    alternates: {
      canonical: `https://rastgeleolusturucu.com.tr/ornekler/${params.category}/${params.slug}`
    }
  }
}

export default function ExamplePage({ params }: ExamplePageProps) {
  const category = exampleCategories[params.category as keyof typeof exampleCategories]
  const example = category?.[params.slug as keyof typeof category] as any
  
  if (!example) {
    notFound()
  }

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'numbers': return 'Sayılar'
      case 'names': return 'İsimler'
      case 'passwords': return 'Şifreler'
      default: return cat
    }
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'numbers': return 'text-blue-600 bg-blue-100'
      case 'names': return 'text-purple-600 bg-purple-100'
      case 'passwords': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {example.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {example.description}
            </p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className={`px-4 py-2 rounded-full ${getCategoryColor(params.category)}`}>
                <span className="font-semibold">{getCategoryLabel(params.category)}</span>
              </div>
              <div className="bg-blue-100 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold">Kullanım Örneği</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Gerçek Dünya Kullanım Örnekleri
            </h2>
            
            <div className="space-y-6">
              {example.examples.map((item: string, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.split(':')[0]}
                  </h3>
                  <p className="text-gray-600">
                    {item.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              En İyi Kullanım Alanı
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Bu tür rastgele {getCategoryLabel(params.category).toLowerCase()} kullanımı, 
                özellikle <strong>{example.useCase}</strong> için idealdir. 
                Gerçek dünya senaryolarında bu örnekler, adil ve güvenilir sonuçlar sağlar.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Avantajları:</h3>
              <ul>
                <li><strong>Adil Dağılım:</strong> Her sonuç eşit olasılıkta</li>
                <li><strong>Tekrarlanabilir:</strong> Aynı koşullarda benzer sonuçlar</li>
                <li><strong>Ölçeklenebilir:</strong> Küçük ve büyük projeler için uygun</li>
                <li><strong>Güvenilir:</strong> İstatistiksel olarak doğrulanmış</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              İlgili Araçlar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href={`/${params.category === 'numbers' ? 'rastgele-sayi' : params.category === 'names' ? 'rastgele-isim' : 'sifre-olusturucu'}`}
                className="block bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {params.category === 'numbers' ? 'Rastgele Sayı Üretici' : 
                   params.category === 'names' ? 'Rastgele İsim Üretici' : 
                   'Şifre Oluşturucu'}
                </h3>
                <p className="text-sm text-gray-600">
                  Ana araç sayfası
                </p>
              </Link>
              
              {params.category === 'numbers' && (
                <>
                  <Link href="/rastgele-sayi/1-100" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">1-100 Arası</h3>
                    <p className="text-sm text-gray-600">Küçük aralık</p>
                  </Link>
                  <Link href="/rastgele-sayi/1-6" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">Zar (1-6)</h3>
                    <p className="text-sm text-gray-600">Oyun zarı</p>
                  </Link>
                </>
              )}
              
              {params.category === 'names' && (
                <>
                  <Link href="/rastgele-isim/erkek" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">Erkek İsimleri</h3>
                    <p className="text-sm text-gray-600">Geleneksel seçim</p>
                  </Link>
                  <Link href="/rastgele-isim/unisex" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">Unisex İsimler</h3>
                    <p className="text-sm text-gray-600">Modern seçenek</p>
                  </Link>
                </>
              )}
              
              {params.category === 'passwords' && (
                <>
                  <Link href="/sifre-olusturucu/12-karakter" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">12 Karakter</h3>
                    <p className="text-sm text-gray-600">Yüksek güvenlik</p>
                  </Link>
                  <Link href="/sifre-olusturucu/guclu-16-karakter" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">16 Karakter</h3>
                    <p className="text-sm text-gray-600">Maksimum güvenlik</p>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Diğer Örnekler
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(category)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, data]) => (
                  <Link 
                    key={slug}
                    href={`/ornekler/${params.category}/${slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {data.description.substring(0, 80)}...
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Uzman İpuçları
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Nasıl daha iyi sonuçlar alabilirim?
                </h4>
                <p className="text-gray-600">
                  Öncelikle kullanım amacınızı belirleyin, sonra uygun aralığı ve 
                  parametreleri seçin. Daha fazla deneme yapmak en iyi sonucu verir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Sonuçları nasıl doğrulayabilirim?
                </h4>
                <p className="text-gray-600">
                  İstatistiksel testler kullanarak rastgeleliğin kalitesini 
                  ölçebilirsiniz. Büyük örnekler daha güvenilir sonuçlar verir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Hangi aracı seçmeliyim?
                </h4>
                <p className="text-gray-600">
                  İhtiyacınıza uygun olanı seçin: sayılar için matematiksel, 
                  isimler için kültürel, şifreler için güvenlik odaklı araçlar.
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
