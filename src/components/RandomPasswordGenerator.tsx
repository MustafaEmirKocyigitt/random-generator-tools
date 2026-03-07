'use client'

import { useState } from 'react'
import { generateRandomPassword } from '@/lib/utils'
import Breadcrumbs from './Breadcrumbs'
import RelatedContent from './RelatedContent'

export default function RandomPasswordGenerator() {
  const [length, setLength] = useState<number>(12)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
  const [result, setResult] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState<boolean>(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const config = {
        length,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
      }
      
      const password = generateRandomPassword(config)
      setResult(password)
      setIsGenerating(false)
      setCopied(false)
    }, 600)
  }

  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        <Breadcrumbs 
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Rastgele Şifre Üreteci', href: '/random-password-generator' }
          ]}
        />
        
        {/* AI-Optimized Content Block */}
        <div className="mb-8 text-center backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-purple-500/20">
          <h1 className="text-3xl font-bold text-white mb-4">Rastgele Şifre Üreteci</h1>
          <p className="text-purple-300 mb-4">
            Kuantum şifreleme teknolojisiyle anında güvenli şifreler oluşturun. Özelleştirilebilir uzunluk, karakter seçenekleri ve kriptografik algoritmalarla banka düzeyinde güvenlik sağlayan benzersiz şifreler üretin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-1">Özelleştirilebilir Güç</h3>
              <p className="text-gray-400">4-32 karakter arası uzunluk ve karakter tipi seçenekleri</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-1">Kuantum Şifreleme</h3>
              <p className="text-gray-400">Kriptografik olarak güvenli rastgelelik algoritması</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-green-400 font-bold mb-1">Anlık Kopyalama</h3>
              <p className="text-gray-400">Tek tıkla kopyalama ve güvenli şifre yönetimi</p>
            </div>
          </div>
        </div>
        {/* Main glass card */}
        <div className="backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-3xl shadow-2xl p-8 slide-up border-glow">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 font-jetbrains-mono neon-glow">
              SIFRE_URET
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
            <p className="text-purple-300 text-sm font-mono tracking-wider">
              [KUANTUM SIFRE ÜRETECI v2.0]
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Length slider */}
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2 font-mono tracking-wider">
                &gt; ENCRYPTION_LENGTH: {length}
              </label>
              <input
                type="range"
                min="4"
                max="32"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-purple-400 font-mono mt-1">
                <span>4</span>
                <span>32</span>
              </div>
            </div>
            
            {/* Character options */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-purple-400 mb-3 font-mono tracking-wider">
                &gt; ENCRYPTION_PROTOCOL:
              </label>
              <div className="space-y-2">
                <label className="flex items-center p-3 bg-white/5 border border-purple-500/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="w-4 h-4 text-purple-500 bg-white/5 border-purple-500/30 rounded focus:ring-purple-500/20"
                  />
                  <span className="ml-3 text-purple-300 font-mono text-sm">UPPERCASE (A-Z)</span>
                </label>
                
                <label className="flex items-center p-3 bg-white/5 border border-purple-500/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="w-4 h-4 text-purple-500 bg-white/5 border-purple-500/30 rounded focus:ring-purple-500/20"
                  />
                  <span className="ml-3 text-purple-300 font-mono text-sm">LOWERCASE (a-z)</span>
                </label>
                
                <label className="flex items-center p-3 bg-white/5 border border-purple-500/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-4 h-4 text-purple-500 bg-white/5 border-purple-500/30 rounded focus:ring-purple-500/20"
                  />
                  <span className="ml-3 text-purple-300 font-mono text-sm">NUMERIC (0-9)</span>
                </label>
                
                <label className="flex items-center p-3 bg-white/5 border border-purple-500/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-4 h-4 text-purple-500 bg-white/5 border-purple-500/30 rounded focus:ring-purple-500/20"
                  />
                  <span className="ml-3 text-purple-300 font-mono text-sm">SYMBOLS (!@#$%^&*)</span>
                </label>
              </div>
            </div>
            
            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 font-mono tracking-wider relative overflow-hidden group ${
                isGenerating
                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700'
                  : 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-400 hover:to-cyan-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border border-purple-400/50'
              }`}
            >
              <span className="relative z-10">
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    [SIFRELENIYOR...]
                  </span>
                ) : (
                  '[SIFRE_URET]'
                )}
              </span>
              {!isGenerating && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              )}
            </button>
            
            {/* Result display */}
            {result && (
              <div className="mt-8 p-6 backdrop-blur-lg bg-white/5 rounded-2xl border border-purple-500/30 slide-up">
                <div className="text-center">
                  <div className="text-xs text-purple-400 mb-2 font-mono tracking-wider">
                    &gt; KUANTUM_SIFRELEME:
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 p-3 bg-black/30 border border-purple-500/30 rounded-xl font-jetbrains-mono text-sm text-purple-300 break-all neon-glow">
                      {result}
                    </div>
                    <button
                      onClick={handleCopy}
                      className={`px-4 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                        copied
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30'
                      }`}
                    >
                      {copied ? '[KOPYALANDI]' : '[KOPYALA]'}
                    </button>
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">SIFRELENDI</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer decoration */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <div className="flex justify-between items-center">
              <span className="text-xs text-purple-400 font-mono">KUANTUM_AKTIF</span>
              <span className="text-xs text-cyan-400 font-mono">v2.0.1</span>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - AI Optimized */}
        <div className="mt-8 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-2">Rastgele şifre üreteci nedir?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele şifre üreteci, kriptografik olarak güvenli algoritmalar kullanarak anında güçlü şifreler oluşturan AI destekli bir araçtır. 4-32 karakter arası özelleştirilebilir seçeneklerle banka düzeyinde güvenlik sağlar.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-2">Bu üreteci ne kadar güvenli?</h3>
              <p className="text-gray-300 text-sm">
                Şifre üretecimiz JavaScript'in kriptografik olarak güvenli rastgele sayı üreticisini (Crypto API) kullanır. Her şifre tamamen benzersiz ve öngörülemez, bu da en yüksek güvenlik standardını sağlar.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-2">Hangi karakterleri içerebilir?</h3>
              <p className="text-gray-300 text-sm">
                Üç kategori sunuyoruz: Büyük harfler (A-Z), Küçük harfler (a-z), Sayılar (0-9) ve Semboller (!@#$%^&*). İstediğiniz kombinasyonu seçerek özel şifreler oluşturabilirsiniz.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-2">Bu şifre üreteci ücretsiz mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, rastgele şifre üretecimiz tamamen ücretsizdir ve kayıt gerektirmez. Herhangi bir ücret veya kısıtlama olmadan sınırsız güvenli şifre anında üretin.
              </p>
            </div>
          </div>
        </div>
        
        <RelatedContent 
          title="İlgili Araçlar"
          currentPath="/random-password-generator"
          items={[
            {
              title: "Rastgele İsim Üreteci",
              description: "Erkek, kadın ve karma isimler üretin",
              href: "/random-name-generator",
              icon: "👤"
            },
            {
              title: "Rastgele Sayı Üreteci", 
              description: "Özelleştirilebilir aralıkta sayılar üretin",
              href: "/random-number-generator",
              icon: "🔢"
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
