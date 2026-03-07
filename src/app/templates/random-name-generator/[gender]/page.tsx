import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: {
    gender: string
  }
}

const genderData = {
  'male': {
    title: 'Male Name Generator',
    description: 'Generate random male names instantly. Perfect for characters, stories, games, and baby names.',
    examples: ['Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Ömer', 'Yusuf', 'Emir', 'Arda', 'Kerem', 'Çınar'],
    useCases: [
      'Baby boy names',
      'Character naming for stories',
      'Gaming character names',
      'Username ideas',
      'Pen names and aliases'
    ]
  },
  'female': {
    title: 'Female Name Generator',
    description: 'Generate random female names instantly. Perfect for characters, stories, games, and baby names.',
    examples: ['Zeynep', 'Elif', 'Ayşe', 'Fatma', 'Meryem', 'Hafsa', 'Sude', 'Lina', 'Ecrin', 'Azra'],
    useCases: [
      'Baby girl names',
      'Character naming for stories',
      'Gaming character names',
      'Username ideas',
      'Pen names and aliases'
    ]
  },
  'mixed': {
    title: 'Mixed Gender Name Generator',
    description: 'Generate random names for any gender. Perfect when you need diverse name options.',
    examples: ['Alex', 'Jordan', 'Taylor', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sage', 'River', 'Sky'],
    useCases: [
      'Gender-neutral names',
      'Diverse character naming',
      'Modern name options',
      'Inclusive naming',
      'Creative project names'
    ]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gender = params.gender
  const data = genderData[gender as keyof typeof genderData]
  
  if (!data) {
    return {
      title: 'Invalid Gender - Name Generator',
      description: 'Please specify a valid gender option.'
    }
  }

  return {
    title: `${data.title} - Free Online Tool`,
    description: data.description,
    keywords: [`${gender} names`, `${gender} name generator`, 'random names', 'name generator', 'baby names'],
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
    },
  }
}

export default function RandomNameTemplate({ params }: Props) {
  const gender = params.gender
  const data = genderData[gender as keyof typeof genderData]
  
  if (!data) {
    notFound()
  }

  const generateName = () => {
    const names = data.examples
    return names[Math.floor(Math.random() * names.length)]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/" className="text-blue-600 hover:underline">Templates</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/random-name-generator/" className="text-blue-600 hover:underline">Random Name Generator</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 capitalize">{gender}</span>
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

        {/* Main Generator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-purple-600 mb-4" id="result">?</div>
              <button 
                onClick={() => {
                  document.getElementById('result')!.textContent = generateName()
                }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Generate {gender === 'mixed' ? 'Random' : gender === 'male' ? 'Male' : 'Female'} Name
              </button>
            </div>
          </div>
        </div>

        {/* Popular Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular {gender === 'mixed' ? 'Gender-Neutral' : gender === 'male' ? 'Male' : 'Female'} Names</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {data.examples.map((name, index) => (
              <div key={index} className="bg-purple-50 text-purple-800 px-4 py-2 rounded-lg text-center font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Creative Projects</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Novel character names</li>
                <li>• Screenplay characters</li>
                <li>• Game development</li>
                <li>• Role-playing games</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Use</h3>
              <ul className="space-y-2 text-gray-600">
                {data.useCases.map((useCase, index) => (
                  <li key={index}>• {useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Generators */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Name Generators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(genderData).map(([key, itemData]) => {
              if (key === gender) return null
              return (
                <Link key={key} href={`/templates/random-name-generator/${key}/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-800">{itemData.title}</h3>
                  <p className="text-sm text-gray-600">{itemData.description}</p>
                </Link>
              )
            })}
            <Link href="/random-name-generator/" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200">
              <h3 className="font-semibold text-purple-800">Advanced Name Generator</h3>
              <p className="text-sm text-purple-600">Full-featured generator with more options</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
