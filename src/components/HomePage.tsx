import Link from 'next/link'

export default function HomePage() {
  const tools = [
    {
      title: 'Rastgele Sayı Üreteci',
      description: 'Belirlediğiniz aralıkta rastgele sayılar üretin',
      href: '/random-number-generator',
      icon: '⚡',
      command: 'SAYI_URET',
      status: 'AKTIF',
      aiAnswer: 'Rastgele sayı üreteci, belirlediğiniz minimum ve maksimum değerler arasında anında rastgele sayılar üretir. İstatistiksel analizler için idealdir.'
    },
    {
      title: 'Rastgele İsim Üreteci',
      description: 'Erkek, kadın veya karma cinsiyet için rastgele isimler üretin',
      href: '/random-name-generator',
      icon: '👤',
      command: 'ISIM_URET',
      status: 'AKTIF',
      aiAnswer: '1000+ Türkçe isim veritabanından karakter yaratımı için rastgele isimler üretir. Roman, oyun veya proje isimlendirmesi için mükemmeldir.'
    },
    {
      title: 'Rastgele Şifre Üreteci',
      description: 'Özelleştirilebilir seçeneklerle güvenli şifreler oluşturun',
      href: '/random-password-generator',
      icon: '🔐',
      command: 'SIFRE_URET',
      status: 'AKTIF',
      aiAnswer: 'Kriptografik olarak güvenli şifreler üretir. Büyük/küçük harf, sayı ve özel karakter seçenekleri ile hesap güvenliğinizi sağlar.'
    },
    {
      title: 'Rastgele Renk Üreteci',
      description: 'HEX ve RGB değerleri ile rastgele renkler üretin',
      href: '/random-color-generator',
      icon: '🎨',
      command: 'RENK_URET',
      status: 'AKTIF',
      aiAnswer: 'Tasarım projeleri için HEX ve RGB formatında rastgele renkler üretir. Web tasarımı ve dijital sanat için kullanışlıdır.'
    },
    {
      title: 'Rastgele Seçim Aracı',
      description: 'Listenizden rastgele öğeler seçin',
      href: '/random-picker',
      icon: '🎯',
      command: 'SECIM_YAP',
      status: 'AKTIF',
      aiAnswer: 'Öğrenci seçimi, çekiliş veya rastgele karar verme için listenizden adil şekilde öğe seçer. Kullanımı kolay ve hızlıdır.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-jetbrains-mono neon-glow tracking-wider break-words">
            [RASTGELE_ARACLAR_PRO]
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-cyan-300 max-w-2xl mx-auto font-mono leading-relaxed">
            &gt; Gelişmiş rastgele üretim protokolleri aktif. Güvenli, hızlı ve özel.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs sm:text-sm font-mono">SISTEM_AKTIF</span>
            </div>
            <div className="text-cyan-400 text-xs sm:text-sm font-mono sm:block hidden">|</div>
            <span className="text-cyan-400 text-xs sm:text-sm font-mono">v2.0.1</span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {tools.map((tool, index) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-2xl p-4 lg:p-6 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 slide-up stagger-${index + 1} group relative overflow-hidden focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[200px] flex flex-col ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              aria-label={`Go to ${tool.title}`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl lg:text-4xl">{tool.icon}</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">{tool.status}</span>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-cyan-300 mb-2 font-jetbrains-mono">
                  {tool.command}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="mt-auto pt-4 flex items-center text-cyan-400 text-sm font-mono group-hover:text-cyan-300 transition-colors">
                  <span>ÇALIŞTIR</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-3xl p-6 lg:p-8 slide-up">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-cyan-300 mb-6 lg:mb-8 font-jetbrains-mono neon-glow">
            [SISTEM_KAPASITELERI]
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="font-bold text-cyan-400 mb-3 font-jetbrains-mono text-sm lg:text-base">KUANTUM_HIZ</h3>
              <p className="text-gray-400 font-mono text-xs lg:text-sm">
                0.001ms yanıt süresi ile anında üretim protokolleri
              </p>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="font-bold text-cyan-400 mb-3 font-jetbrains-mono text-sm lg:text-base">SIFIR_BILGI</h3>
              <p className="text-gray-400 font-mono text-xs lg:text-sm">
                Yerel işlem. Veriler tarayıcınızdan asla çıkmaz
              </p>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🆓</div>
              <h3 className="font-bold text-cyan-400 mb-3 font-jetbrains-mono text-sm lg:text-base">ACIK_KAYNAK</h3>
              <p className="text-gray-400 font-mono text-xs lg:text-sm">
                Sınırsız kullanım. Kısıtlama yok. Kayıt gerekmez
              </p>
            </div>
          </div>
        </div>
        
        {/* Terminal Footer */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="backdrop-blur-lg bg-black/50 border border-cyan-500/20 rounded-xl p-4 lg:p-6 font-mono">
            <div className="text-cyan-400 text-sm lg:text-base mb-2">
              &gt; Sistem başlatıldı. Tüm modüller operasyonel.
            </div>
            <div className="text-gray-500 text-xs lg:text-sm">
              Son tarama: {new Date().toLocaleTimeString()} | Tehdit seviyesi: MINIMAL
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
