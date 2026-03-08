'use client'

import { useState } from 'react'
import { pickRandomItem } from '@/lib/utils'
import Breadcrumbs from './Breadcrumbs'
import RelatedContent from './RelatedContent'

export default function RandomPicker() {
  const [items, setItems] = useState<string[]>(['Pizza', 'Burger', 'Sushi'])
  const [newItem, setNewItem] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [isPicking, setIsPicking] = useState(false)

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()])
      setNewItem('')
    }
  }

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const handlePick = () => {
    if (items.length > 0) {
      setIsPicking(true)
      setTimeout(() => {
        setResult(pickRandomItem(items))
        setIsPicking(false)
      }, 800)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem()
    }
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
            { name: 'Rastgele Seçim Aracı', href: '/random-picker' }
          ]}
        />
        
        {/* AI-Optimized Content Block */}
        <div className="mb-8 text-center backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-green-500/20">
          <h1 className="text-3xl font-bold text-white mb-4">Rastgele Seçim Aracı</h1>
          <p className="text-green-300 mb-4">
            Kuantum seçim algoritmasıyla listenizden adil rastgele öğeler seçin. Karar verme, çekilişler, oyunlar ve veri analizi için özelleştirilebilir listelerle sınırsız seçim kombinasyonları oluşturun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-green-400 font-bold mb-1">Özelleştirilebilir Listeler</h3>
              <p className="text-gray-400">İstediğiniz kadar öğe ekleyin ve yönetin</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-purple-400 font-bold mb-1">Kuantum Algoritma</h3>
              <p className="text-gray-400">Her öğe için eşit seçim şansı sağlar</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <h3 className="text-cyan-400 font-bold mb-1">Anlık Sonuç</h3>
              <p className="text-gray-400">800ms içinde adil ve güvenilir seçim</p>
            </div>
          </div>
        </div>
        {/* Main glass card */}
        <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl shadow-2xl p-8 slide-up border-glow">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 font-jetbrains-mono neon-glow">
              SECICI
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-green-300 text-sm font-mono tracking-wider">
              [KUANTUM ÖGE SECICI v2.0]
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Add item input */}
            <div>
              <label className="block text-sm font-medium text-green-400 mb-2 font-mono tracking-wider">
                &gt; VERI_KUMESINE_EKLE:
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Öge adını girin"
                  className="flex-1 px-4 py-3 bg-white/5 border border-green-500/30 rounded-xl text-green-300 font-mono placeholder-green-600 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                />
                <button
                  onClick={handleAddItem}
                  className="px-6 py-3 bg-green-500/20 text-green-300 border border-green-500/30 rounded-xl font-mono hover:bg-green-500/30 transition-all duration-300"
                >
                  [EKLE]
                </button>
              </div>
            </div>
            
            {/* Items list */}
            {items.length > 0 && (
              <div>
                <div className="text-sm font-medium text-green-400 mb-3 font-mono tracking-wider">
                  &gt; VERI_KUMESI_OGELERI ({items.length}):
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/5 border border-green-500/20 rounded-xl group hover:bg-white/10 hover:border-green-400/30 transition-all duration-300"
                    >
                      <span className="text-green-300 font-mono text-sm">{item}</span>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-400 hover:text-red-300 text-xs font-mono px-2 py-1 bg-red-500/20 border border-red-500/30 rounded hover:bg-red-500/30 transition-all duration-300"
                      >
                        [SIL]
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Pick button */}
            <button
              onClick={handlePick}
              disabled={items.length === 0 || isPicking}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 font-mono tracking-wider relative overflow-hidden group ${
                items.length === 0 || isPicking
                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700'
                  : 'bg-gradient-to-r from-green-500 to-purple-500 text-white hover:from-green-400 hover:to-purple-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border border-green-400/50'
              }`}
            >
              <span className="relative z-10">
                {isPicking ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    [ANALIZ_EDILIYOR...]
                  </span>
                ) : (
                  '[RASTGELE_OGE_SEC]'
                )}
              </span>
              {!isPicking && items.length > 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              )}
            </button>
            
            {/* Result display */}
            {result && (
              <div className="mt-8 p-6 backdrop-blur-lg bg-white/5 rounded-2xl border border-green-500/30 slide-up">
                <div className="text-center">
                  <div className="text-xs text-green-400 mb-2 font-mono tracking-wider">
                    &gt; KUANTUM_SECIMI:
                  </div>
                  <div className="text-3xl font-bold text-green-300 font-jetbrains-mono tracking-widest neon-glow glitch">
                    {result}
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">SECILDI</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer decoration */}
          <div className="mt-8 pt-6 border-t border-green-500/20">
            <div className="flex justify-between items-center">
              <span className="text-xs text-green-400 font-mono">KUANTUM_AKTIF</span>
              <span className="text-xs text-purple-400 font-mono">v2.0.1</span>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - AI Optimized */}
        <div className="mt-8 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-green-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-green-400 font-bold mb-2">Rastgele seçim aracı nedir?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele seçim aracı, özelleştirilebilir listelerden adil rastgele öğeler seçen AI destekli bir araçtır. Kuantum algoritması kullanarak karar verme, çekilişler ve oyunlar için tamamen objektif sonuçlar sağlar.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-green-400 font-bold mb-2">Bu araç ne kadar öğe destekliyor?</h3>
              <p className="text-gray-300 text-sm">
                Rastgele seçim aracımız sınırsız sayıda öğe destekler. İstediğiniz kadar öğe ekleyebilir, düzenleyebilir ve silebilirsiniz. Her liste için ayrı seçimler yapabilirsiniz.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-green-400 font-bold mb-2">Seçimler gerçekten adil mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, kuantum algoritmamız JavaScript'in kriptografik olarak güvenli rastgele sayı üreticisini kullanır. Her öğe için tam olarak eşit seçim şansı (%1/liste boyutu) sağlar.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-green-400 font-bold mb-2">Bu seçim aracı ücretsiz mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, rastgele seçim aracımız tamamen ücretsizdir ve kayıt gerektirmez. Herhangi bir ücret veya kısıtlama olmadan sınırsız seçim anında yapın.
              </p>
            </div>
          </div>
        </div>
        
        <RelatedContent 
          title="İlgili Araçlar"
          currentPath="/random-picker"
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
              title: "Rastgele Renk Üreteci",
              description: "HEX ve RGB renkleri üretin",
              href: "/random-color-generator",
              icon: "🎨"
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
