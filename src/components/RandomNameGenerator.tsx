'use client'

import { useState } from 'react'
import { generateRandomName } from '@/lib/utils'
import Breadcrumbs from './Breadcrumbs'
import RelatedContent from './RelatedContent'

export default function RandomNameGenerator() {
  const [gender, setGender] = useState<'male' | 'female' | 'mixed'>('mixed')
  const [result, setResult] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setResult(generateRandomName(gender))
      setIsGenerating(false)
    }, 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        <Breadcrumbs 
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Rastgele İsim Üreteci', href: '/random-name-generator' }
          ]}
        />
        
        {/* AI-Optimized Content Block */}
        <div className="mb-8 text-center backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-cyan-500/20">
          <h1 className="text-3xl font-bold text-white mb-4">Rastgele İsim Üreteci</h1>
          <p className="text-cyan-300 mb-4">
            AI destekli araçlarımızla anında rastgele isimler üretin. Karakterler, kullanıcı adları, hikayeler ve oyunlar için erkek, kadın veya karma cinsiyet seçenekleriyle benzersiz isimler oluşturun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-1">Erkek İsimler</h3>
              <p className="text-gray-400">Çeşitli kültürlerden geleneksel ve modern erkek isimleri</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-1">Kadın İsimler</h3>
              <p className="text-gray-400">Klasik ve çağdaş seçenekler dahil çeşitli kadın isimleri</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-green-400 font-bold mb-1">Karma İsimler</h3>
              <p className="text-gray-400">Hem erkek hem de kadın isim veritabanından rastgele seçim</p>
            </div>
          </div>
        </div>

        {/* Main glass card */}
        <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/30 rounded-3xl shadow-2xl p-8 slide-up border-glow">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 font-jetbrains-mono neon-glow">
              RANDOM_NAME
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-cyan-300 text-sm font-mono tracking-wider">
              [CYBERPUNK NAME GENERATOR v2.0]
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Gender selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-cyan-400 mb-4 font-mono tracking-wider">
                &gt; CINSIYET_PROTOKOLU:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setGender('mixed')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 font-mono ${
                    gender === 'mixed'
                      ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 transform scale-105'
                      : 'bg-white/5 text-gray-400 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  {gender === 'mixed' ? '> KARMA' : 'KARMA'}
                </button>
                <button
                  onClick={() => setGender('male')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 font-mono ${
                    gender === 'male'
                      ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 transform scale-105'
                      : 'bg-white/5 text-gray-400 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  {gender === 'male' ? '> ERKEK' : 'ERKEK'}
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 font-mono ${
                    gender === 'female'
                      ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 transform scale-105'
                      : 'bg-white/5 text-gray-400 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  {gender === 'female' ? '> KADIN' : 'KADIN'}
                </button>
              </div>
            </div>
            
            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 font-mono tracking-wider relative overflow-hidden group ${
                isGenerating
                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border border-cyan-400/50'
              }`}
            >
              <span className="relative z-10">
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    [URETIYOR...]
                  </span>
                ) : (
                  '[ISIM_URET]'
                )}
              </span>
              {!isGenerating && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              )}
            </button>
            
            {/* Result display */}
            {result && (
              <div className="mt-8 p-6 backdrop-blur-lg bg-white/5 rounded-2xl border border-cyan-500/30 slide-up">
                <div className="text-center">
                  <div className="text-xs text-cyan-400 mb-2 font-mono tracking-wider">
                    &gt; URETILEN_KIMLIK:
                  </div>
                  <div className="text-3xl font-bold text-cyan-300 font-jetbrains-mono tracking-widest neon-glow glitch">
                    {result}
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer decoration */}
          <div className="mt-8 pt-6 border-t border-cyan-500/20">
            <div className="flex justify-between items-center">
              <span className="text-xs text-cyan-400 font-mono">SISTEM_AKTIF</span>
              <span className="text-xs text-purple-400 font-mono">v2.0.1</span>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - AI Optimized */}
        <div className="mt-8 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-2">Rastgele isim üreteci nedir?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele isim üreteci, özenle seçilmiş veritabanlarından benzersiz isimler anında oluşturan AI destekli bir araçtır. Üretecimiz erkek, kadın ve karma kategorilerde 1000+ isim içerir ve yaratıcı projeler, karakter geliştirme ve kullanıcı adı oluşturma için mükemmeldir.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-2">Bu üreteci kaç isim oluşturabilir?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele isim üretecimiz 1000+ özenle seçilmiş isimden sınırsız benzersiz kombinasyon üretebilir. Her üretim, yaratıcı ihtiyaçlarınız için çeşitlilik sağlayan yeni rastgele bir seçim oluşturur.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-2">Hangi tür isimler mevcut?</h3>
              <p className="text-gray-300 text-sm">
                Üç kategori sunuyoruz: Erkek isimleri (geleneksel ve modern), Kadın isimleri (klasik ve çağdaş) ve Karma isimler (her iki veritabanından rastgele seçim). Tüm isimler özgünlük ve çeşitlilik için özenle seçilmiştir.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-2">Bu isim üreteci ücretsiz mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, rastgele isim üretecimiz tamamen ücretsizdir ve kayıt gerektirmez. Herhangi bir ücret veya kısıtlama olmadan sınırsız isim anında üretin.
              </p>
            </div>
          </div>
        </div>
        
        <RelatedContent 
          title="İlgili Araçlar"
          currentPath="/random-name-generator"
          items={[
            {
              title: "Rastgele Sayı Üreteci",
              description: "Belirlediğiniz aralıkta rastgele sayılar üretin",
              href: "/random-number-generator",
              icon: "⚡"
            },
            {
              title: "Rastgele Şifre Üreteci", 
              description: "Güvenli şifreler oluşturun",
              href: "/random-password-generator",
              icon: "🔐"
            },
            {
              title: "Rastgele Renk Üreteci",
              description: "HEX ve RGB renkleri üretin",
              href: "/random-color-generator", 
              icon: "🎨"
            },
            {
              title: "Rastgele Seçim Aracı",
              description: "Listenizden rastgele öğe seçin",
              href: "/random-picker",
              icon: "🎯"
            }
          ]}
        />
        
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  )
}
