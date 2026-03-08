'use client'

import { useState } from 'react'
import { generateColorPalette } from '@/lib/utils'
import Breadcrumbs from './Breadcrumbs'
import RelatedContent from './RelatedContent'

export default function RandomColorGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [palette, setPalette] = useState<{ hex: string; rgb: string }[]>([])
  const [paletteSize, setPaletteSize] = useState(5)

  const handleGeneratePalette = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setPalette(generateColorPalette(paletteSize))
      setIsGenerating(false)
    }, 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2s"></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        <Breadcrumbs 
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Rastgele Renk Üreteci', href: '/random-color-generator' }
          ]}
        />
        
        {/* AI-Optimized Content Block */}
        <div className="mb-8 text-center backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-pink-500/20">
          <h1 className="text-3xl font-bold text-white mb-4">Rastgele Renk Üreteci</h1>
          <p className="text-pink-300 mb-4">
            AI destekli renk paleti oluşturma ile anında rastgele renkler üretilin. Web tasarım, dijital sanat ve branding projeleri için HEX ve RGB formatında 16.7 milyon renk seçeneğiyle profesyonel renk kombinasyonları oluşturun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-pink-400 font-bold mb-1">HEX & RGB Format</h3>
              <p className="text-gray-400">Her iki formatta da renk kodları ve anında kopyalama</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-1">16.7M Renk</h3>
              <p className="text-gray-400">Tam RGB spektrumunda sınırsız renk üretimi</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-green-400 font-bold mb-1">Canlı Önizleme</h3>
              <p className="text-gray-400">Gerçek zamanlı renk görselleştirme ve analiz</p>
            </div>
          </div>
        </div>
        {/* Main glass card */}
        <div className="backdrop-blur-xl bg-white/5 border border-pink-500/30 rounded-3xl shadow-2xl p-8 slide-up border-glow">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 font-jetbrains-mono neon-glow">
              RENK_URET
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
            <p className="text-pink-300 text-sm font-mono tracking-wider">
              [TERMINAL RENK ÜRETECI v2.0]
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Palette controls */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-pink-400 font-mono tracking-wider">
                &gt; PALET_BOYUTU: {paletteSize}
              </label>
              <div className="flex space-x-2">
                {[3, 5, 8].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPaletteSize(n)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono border transition-all duration-200 ${
                      paletteSize === n
                        ? 'bg-pink-500/20 text-pink-200 border-pink-400'
                        : 'bg-white/5 text-gray-400 border-pink-500/30 hover:border-pink-400/60 hover:text-pink-200'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <button
                onClick={handleGeneratePalette}
                disabled={isGenerating}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 font-mono tracking-wider relative overflow-hidden group ${
                  isGenerating
                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700'
                    : 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:from-pink-400 hover:to-cyan-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border border-pink-400/50'
                }`}
              >
                <span className="relative z-10">
                  {isGenerating ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      [PALET_URETILIYOR...]
                    </span>
                  ) : (
                    '[PALET_URET]'
                  )}
                </span>
                {!isGenerating && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                )}
              </button>
            </div>

            {/* Palette display */}
            {palette.length > 0 && (
              <div className="mt-8 space-y-4 slide-up">
                <div className="text-sm text-pink-300 font-mono">&gt; URETILEN_PALET ({palette.length})</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {palette.map((c, idx) => (
                    <div key={idx} className="p-3 bg-white/5 border border-pink-500/20 rounded-xl space-y-2">
                      <div className="h-16 rounded-lg border border-pink-500/30" style={{ backgroundColor: c.hex }}></div>
                      <div className="flex items-center justify-between text-xs text-pink-200 font-mono">
                        <span>{c.hex}</span>
                        <button
                          onClick={async () => {
                            await navigator.clipboard.writeText(c.hex)
                          }}
                          className="px-2 py-1 bg-pink-500/20 border border-pink-500/40 rounded-md hover:bg-pink-500/30 transition-colors"
                        >
                          Kopyala
                        </button>
                      </div>
                      <div className="text-xs text-pink-200 font-mono">{c.rgb}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Footer decoration */}
          <div className="mt-8 pt-6 border-t border-pink-500/20">
            <div className="flex justify-between items-center">
              <span className="text-xs text-pink-400 font-mono">TERMINAL_AKTIF</span>
              <span className="text-xs text-cyan-400 font-mono">v2.0.1</span>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - AI Optimized */}
        <div className="mt-8 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-pink-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-pink-400 font-bold mb-2">Rastgele renk üreteci nedir?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele renk üreteci, 16.7 milyon renk seçeneğinden anında benzersiz renkler oluşturan AI destekli bir araçtır. HEX ve RGB formatlarında renk kodları sağlayarak web tasarım ve dijital sanat projeleri için mükemmeldir.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-pink-400 font-bold mb-2">Bu üreteci kaç renk oluşturabilir?</h3>
              <p className="text-gray-300 text-sm">
                Renk üretecimiz tam RGB spektrumunda 16.777.216 farklı renk tonu üretebilir. Her üretim tamamen benzersiz bir renk oluşturur ve sınırsız kombinasyon sağlar.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-pink-400 font-bold mb-2">Hangi formatları sağlıyor?</h3>
              <p className="text-gray-300 text-sm">
                İki format sunuyoruz: HEX kodu (#RRGGBB formatında web için) ve RGB değerleri (rgb(r, g, b) formatında). Her iki format da tek tıkla kopyalanabilir ve tüm tasarımcı araçlarıyla uyumludur.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-pink-400 font-bold mb-2">Bu renk üreteci ücretsiz mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, rastgele renk üretecimiz tamamen ücretsizdir ve kayıt gerektirmez. Herhangi bir ücret veya kısıtlama olmadan sınırsız renk anında üretin.
              </p>
            </div>
          </div>
        </div>
        
        <RelatedContent 
          title="İlgili Araçlar"
          currentPath="/random-color-generator"
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
              title: "Rastgele Şifre Üreteci",
              description: "Güvenli şifreler oluşturun",
              href: "/random-password-generator", 
              icon: "🔐"
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
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse animation-delay-1s"></div>
      </div>
    </div>
  )
}
