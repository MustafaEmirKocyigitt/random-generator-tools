import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Rastgele Üreteç Araçları | SEO İpuçları ve Kullanım Rehberleri',
  description: 'Rastgele üreteç araçları hakkında SEO ipuçları, kullanım rehberleri ve teknik blog yazıları. Türkçe içerikler ile rastgele sayı, isim, şifre üretimi hakkında detaylı bilgiler.',
  keywords: ['rastgele üreteç blog', 'seo ipuçları', 'rastgele sayı üretimi', 'şifre güvenliği', 'isim üreteci kullanımı'],
}

const blogPosts = [
  {
    title: 'Rastgele Sayı Üreteci Kullanarak İstatistiksel Analiz Yapma',
    excerpt: 'Rastgele sayı üretecinin istatistiksel analizlerde nasıl kullanılacağını öğrenin. Monte Carlo simülasyonlarından veri örneklemeye kadar pratik uygulamalar.',
    date: '2024-03-07',
    category: 'İstatistik',
    readTime: '5 dk',
    href: '/blog/rastgele-sayi-istatistiksel-analiz',
    featured: true
  },
  {
    title: 'Güvenli Şifre Oluşturma: Kriptografi Temelleri',
    excerpt: 'Kriptografik olarak güvenli şifreler nasıl oluşturulur? Entropi, rastgelelik ve modern şifreleme teknikleri hakkında detaylı rehber.',
    date: '2024-03-06',
    category: 'Güvenlik',
    readTime: '7 dk',
    href: '/blog/guvenli-sifre-kriptografi',
    featured: true
  },
  {
    title: 'Yazarlar İçin Rastgele İsim Üretme Teknikleri',
    excerpt: 'Roman karakterleri için rastgele isim üretirken kültürel uygunluk ve telaffuz kolaylığı nasıl sağlanır? İsimlendirme stratejileri ve ipuçları.',
    date: '2024-03-05',
    category: 'Yazarlık',
    readTime: '4 dk',
    href: '/blog/yazarlar-icin-isim-uretme',
    featured: false
  },
  {
    title: 'Web Tasarımında Rastgele Renk Kullanımı',
    excerpt: 'Renk teorisi ve rastgele renk üretecinin web tasarımında nasıl kullanılır. Harmonik paletler oluşturma ve kullanıcı deneyimi optimizasyonu.',
    date: '2024-03-04',
    category: 'Tasarım',
    readTime: '6 dk',
    href: '/blog/web-tasariminda-renk-kullanimi',
    featured: false
  },
  {
    title: 'Eğitimde Rastgele Seçim Araçları Nasıl Kullanılır?',
    excerpt: 'Öğrenci seçimi, grup oluşturma ve adaletli değerlendirme için rastgele seçim araçlarının eğitim alanındaki faydaları ve uygulama örnekleri.',
    date: '2024-03-03',
    category: 'Eğitim',
    readTime: '5 dk',
    href: '/blog/egitimde-rastgele-secim',
    featured: false
  },
  {
    title: 'Oyun Geliştirmede Rastgelelik ve Procedural Generation',
    excerpt: 'Oyun geliştirmede rastgelelik nasıl kullanılır? procedural generation teknikleri ve oyun deneyimini zenginleştirme stratejileri.',
    date: '2024-03-02',
    category: 'Oyun Geliştirme',
    readTime: '8 dk',
    href: '/blog/oyun-gelistirme-rastgelelik',
    featured: false
  },
  {
    title: 'SEO Optimizasyonunda Rastgele Veri Kullanımı',
    excerpt: 'SEO testlerinde ve A/B testlerinde rastgele veri kullanmanın önemi. Veri çeşitliliği ve test güvenilirliği nasıl artırılır?',
    date: '2024-03-01',
    category: 'SEO',
    readTime: '6 dk',
    href: '/blog/seo-rastgele-veri',
    featured: false
  },
  {
    title: 'Mobil Uygulamalarda Rastgele Sayı Üretimi',
    excerpt: 'iOS ve Android uygulamalarında rastgele sayı üretiminin en iyi pratikleri. Performans optimizasyonu ve batarya ömrü考量.',
    date: '2024-02-29',
    category: 'Mobil Geliştirme',
    readTime: '5 dk',
    href: '/blog/mobil-rastgele-sayi',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rastgele üreteç araçları hakkında detaylı bilgiler, SEO ipuçları ve pratik kullanım rehberleri
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Öne Çıkan Yazılar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.href}
                className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-mono">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white hover:text-cyan-300 transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-gray-400 text-sm">{post.date}</time>
                  <Link 
                    href={post.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Tüm Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article 
                key={post.href}
                className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 text-xs font-mono">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white hover:text-cyan-300 transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-gray-400 text-xs">{post.date}</time>
                  <Link 
                    href={post.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-xs"
                  >
                    Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Bültenimize Abone Olun</h2>
            <p className="text-gray-300 mb-6">
              Yeni blog yazıları, SEO ipuçları ve araç güncellemeleri için haftalık bülten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
                Abone Ol
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
