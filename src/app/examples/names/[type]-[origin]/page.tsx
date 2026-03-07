import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: {
    type: string
    origin: string
  }
}

const nameData: Record<string, Record<string, {
  title: string
  description: string
  names: string[]
  meaning: string
}>> = {
  'turkish': {
    'traditional': {
      title: 'Traditional Turkish Names',
      description: 'Classic and traditional Turkish names with cultural significance',
      names: ['Ahmet', 'Mehmet', 'Mustafa', 'Ayşe', 'Fatma', 'Zeynep', 'Ali', 'Ömer', 'Elif', 'Meryem'],
      meaning: 'Names with deep Turkish cultural roots and historical significance'
    },
    'modern': {
      title: 'Modern Turkish Names',
      description: 'Contemporary Turkish names popular in recent years',
      names: ['Arda', 'Emir', 'Kerem', 'Ecrin', 'Sude', 'Azra', 'Çınar', 'Lina', 'Derin', 'Rüzgar'],
      meaning: 'Modern names reflecting current Turkish naming trends'
    }
  },
  'international': {
    'popular': {
      title: 'Popular International Names',
      description: 'Most popular names worldwide across different cultures',
      names: ['Oliver', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Elijah', 'Sophia', 'Lucas', 'Mia'],
      meaning: 'Globally recognized and loved names'
    },
    'unique': {
      title: 'Unique International Names',
      description: 'Distinctive and uncommon names from around the world',
      names: ['Zephyr', 'Aurelia', 'Caspian', 'Seraphina', 'Orion', 'Luna', 'Phoenix', 'Astrid', 'Atlas', 'Willow'],
      meaning: 'Rare and distinctive names with global appeal'
    }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, origin } = params
  const data = nameData[type as keyof typeof nameData]?.[origin as keyof typeof nameData[keyof typeof nameData]]
  
  if (!data) {
    return {
      title: 'Invalid Name Category',
      description: 'Please specify a valid name type and origin.'
    }
  }

  return {
    title: `${data.title} - Examples & Meanings`,
    description: data.description,
    keywords: [`${type} ${origin} names`, `${origin} name examples`, 'name meanings', 'baby names'],
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
    },
  }
}

export default function NameExamples({ params }: Props) {
  const { type, origin } = params
  const data = nameData[type as keyof typeof nameData]?.[origin as keyof typeof nameData[keyof typeof nameData]]
  
  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/examples/" className="text-blue-600 hover:underline">Examples</Link>
          <span className="mx-2">/</span>
          <Link href="/examples/names/" className="text-blue-600 hover:underline">Names</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 capitalize">{type} {origin}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {data.description}
          </p>
        </div>

        {/* Names Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Names</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.names.map((name: string, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-3 rounded-lg font-medium text-lg mb-2">
                  {name}
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(name)
                    const btn = event?.target as HTMLButtonElement
                    const originalText = btn.textContent
                    btn.textContent = 'Copied!'
                    btn.className = 'text-xs text-green-600 font-medium'
                    setTimeout(() => {
                      btn.textContent = originalText
                      btn.className = 'text-xs text-gray-500 hover:text-gray-700'
                    }, 2000)
                  }}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Copy name
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Context */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Context & Meaning</h2>
          <p className="text-gray-700 mb-4">{data.meaning}</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Naming Traditions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Names often reflect cultural values and heritage</li>
              <li>• Many names have religious or historical significance</li>
              <li>• Modern naming trends blend tradition with contemporary preferences</li>
              <li>• Name popularity varies by region and generation</li>
            </ul>
          </div>
        </div>

        {/* Generate Similar Names */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate Similar Names</h2>
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-purple-600 mb-4" id="result">?</div>
              <button 
                onClick={() => {
                  const names = data.names
                  const randomName = names[Math.floor(Math.random() * names.length)]
                  document.getElementById('result')!.textContent = randomName
                }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Generate Random {type} {origin} Name
              </button>
            </div>
          </div>
        </div>

        {/* Related Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Name Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(nameData).map(([typeKey, typeData]) => {
              return Object.entries(typeData).map(([originKey, originData]) => {
                if (typeKey === type && originKey === origin) return null
                return (
                  <Link key={`${typeKey}-${originKey}`} href={`/examples/names/${typeKey}-${originKey}/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800">{originData.title}</h3>
                    <p className="text-sm text-gray-600">{originData.description}</p>
                  </Link>
                )
              })
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
