import Link from 'next/link'

export default function InternalLinks() {
  const toolCategories = [
    {
      title: 'Rastgele Sayı Araçları',
      tools: [
        { name: 'Ana Sayfa', href: '/rastgele-sayi', description: 'Genel rastgele sayı üretici' },
        { name: '1-100 Arası', href: '/rastgele-sayi/1-100', description: 'Yüzde hesaplamaları için' },
        { name: '1-6 Zar', href: '/rastgele-sayi/1-6', description: 'Zar oyunları için' },
        { name: '1-49 Loto', href: '/rastgele-sayi/1-49', description: 'Sayısal loto için' },
        { name: '1-1000', href: '/rastgele-sayi/1-1000', description: 'ID numaraları için' }
      ]
    },
    {
      title: 'Şifre Oluşturma Araçları',
      tools: [
        { name: 'Ana Sayfa', href: '/sifre-olusturucu', description: 'Genel şifre oluşturucu' },
        { name: '8 Karakter', href: '/sifre-olusturucu/8-karakter', description: 'Hesap şifreleri için' },
        { name: '12 Karakter', href: '/sifre-olusturucu/12-karakter', description: 'E-posta hesapları için' },
        { name: '16 Karakter', href: '/sifre-olusturucu/16-karakter', description: 'Yüksek güvenlik için' },
        { name: 'Güçlü 16', href: '/sifre-olusturucu/guclu-16-karakter', description: 'Maksimum güvenlik için' }
      ]
    },
    {
      title: 'İsim Seçme Araçları',
      tools: [
        { name: 'Ana Sayfa', href: '/rastgele-isim', description: 'Genel isim seçici' },
        { name: 'Erkek İsimler', href: '/rastgele-isim/erkek', description: 'Erkek bebek isimleri' },
        { name: 'Kadın İsimler', href: '/rastgele-isim/kadin', description: 'Kız bebek isimleri' },
        { name: 'Unisex', href: '/rastgele-isim/unisex', description: 'Cinsiyet tarafsız' },
        { name: 'Türkçe', href: '/rastgele-isim/turkce', description: 'Geleneksel Türk isimleri' }
      ]
    }
  ]

  const exampleCategories = [
    {
      title: 'Sayı Kullanım Örnekleri',
      examples: [
        { name: 'Lotarya ve Şans Oyunları', href: '/ornekler/numbers/lottery', description: 'Çekiliş ve lotarya sistemleri' },
        { name: 'Zar ve Oyunlar', href: '/ornekler/numbers/dice', description: 'Board games ve RPG' },
        { name: 'İstatistik ve Veri', href: '/ornekler/numbers/statistics', description: 'Bilimsel araştırmalar' }
      ]
    },
    {
      title: 'İsim Kullanım Örnekleri',
      examples: [
        { name: 'Bebek İsimleri', href: '/ornekler/names/baby', description: 'Yeni doğan için isim seçimi' },
        { name: 'Karakter İsimleri', href: '/ornekler/names/character', description: 'Roman ve oyun karakterleri' },
        { name: 'Kültürel İsimler', href: '/ornekler/names/cultural', description: 'Tarihi ve kültürel isimler' }
      ]
    },
    {
      title: 'Şifre Kullanım Örnekleri',
      examples: [
        { name: 'Güvenlik ve Koruma', href: '/ornekler/passwords/security', description: 'Dijital güvenlik uygulamaları' },
        { name: 'Geliştirme ve Teknik', href: '/ornekler/passwords/development', description: 'Yazılım geliştirme şifreleri' }
      ]
    }
  ]

  const competitorPages = [
    { name: 'Random.org Alternatifi', href: '/alternatif/random-org-alternatif', description: 'Global rakip karşılaştırma' },
    { name: 'HesapMakinesi.com.tr', href: '/alternatif/hesapmakinesi-com-tr-alternatif', description: 'Türkçe rakip analizi' },
    { name: 'RandomPassword.com.tr', href: '/alternatif/randompassword-com-tr-alternatif', description: 'Şifre sitesi karşılaştırma' }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">İlgili Araçlar ve Sayfalar</h3>
      
      <div className="space-y-6">
        {/* Tool Categories */}
        <div>
          <h4 className="text-md font-semibold text-blue-600 mb-3">🔧 Ana Araçlar</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {toolCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-3">{category.title}</h5>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Link 
                      key={toolIndex}
                      href={tool.href}
                      className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-gray-500 text-xs ml-1">- {tool.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Categories */}
        <div>
          <h4 className="text-md font-semibold text-green-600 mb-3">📚 Kullanım Örnekleri</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {exampleCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-3">{category.title}</h5>
                <div className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <Link 
                      key={exampleIndex}
                      href={example.href}
                      className="block text-sm text-green-600 hover:text-green-800 hover:underline"
                    >
                      <span className="font-medium">{example.name}</span>
                      <span className="text-gray-500 text-xs ml-1">- {example.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Pages */}
        <div>
          <h4 className="text-md font-semibold text-red-600 mb-3">⚔️ Rakip Karşılaştırmaları</h4>
          <div className="bg-white rounded-lg p-4">
            <div className="grid md:grid-cols-3 gap-4">
              {competitorPages.map((page, index) => (
                <Link 
                  key={index}
                  href={page.href}
                  className="block text-sm text-red-600 hover:text-red-800 hover:underline p-2 rounded hover:bg-red-50"
                >
                  <span className="font-medium">{page.name}</span>
                  <span className="text-gray-500 text-xs block mt-1">{page.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-purple-600 mb-3">🚀 Hızlı Linkler</h4>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              Ana Sayfa
            </Link>
            <Link href="/alternatifler" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              Tüm Alternatifler
            </Link>
            <Link href="/hakkimizda" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              Hakkımızda
            </Link>
            <Link href="/rastgele-renk" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              Renk Üretici
            </Link>
            <Link href="/rastgele-secici" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              Rastgele Seçici
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
