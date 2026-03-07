import { Metadata } from 'next'
import Link from 'next/link'
import NameDemo from '@/components/NameDemo'

export const metadata: Metadata = {
  title: 'Name Generation Examples - Real-World Use Cases',
  description: 'Explore real-world examples of name generation for different cultures, genders, and purposes. Learn naming traditions and cultural insights.',
  keywords: ['name generation examples', 'random name use cases', 'cultural names', 'character names', 'baby names'],
  openGraph: {
    title: 'Name Generation Examples - Real-World Use Cases',
    description: 'Explore real-world examples of name generation for different cultures and purposes.',
    type: 'website',
  },
}

const exampleCategories = [
  {
    title: 'Turkish Names',
    description: 'Traditional and modern Turkish names with cultural significance and meaning',
    url: '/examples/names/turkish-traditional',
    icon: '🇹🇷',
    examples: [
      { type: 'Traditional', description: 'Classic Turkish names with historical significance' },
      { type: 'Modern', description: 'Contemporary Turkish names popular today' }
    ],
    useCases: ['Turkish characters', 'Cultural projects', 'Baby naming', 'Local content'],
    features: ['Cultural authenticity', 'Historical significance', 'Modern trends', 'Regional relevance']
  },
  {
    title: 'International Names',
    description: 'Popular and unique names from around the world for global applications',
    url: '/examples/names/international-popular',
    icon: '🌍',
    examples: [
      { type: 'Popular', description: 'Globally recognized and loved names' },
      { type: 'Unique', description: 'Distinctive and uncommon international names' }
    ],
    useCases: ['Global characters', 'International projects', 'Diverse casting', 'Multicultural content'],
    features: ['Global appeal', 'Cultural diversity', 'International recognition', 'Cross-cultural']
  }
]

export default function NamesExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/examples/" className="text-blue-600 hover:underline">Examples</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Name Generation Examples
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Explore real-world examples of name generation across different cultures and purposes. Learn naming traditions, cultural insights, and practical applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {exampleCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                <div className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-50 p-3 rounded">
                      <div className="font-medium text-gray-700">{example.type}</div>
                      <div className="text-sm text-gray-500">{example.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.useCases.map((useCase, useIndex) => (
                    <span key={useIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href={category.url}
                className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View Examples
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Name Generator Demo</h2>
          <NameDemo />
        </div>

        {/* Cultural Insights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Naming Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🇹🇷 Turkish Naming Traditions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Names often reflect Islamic heritage and Ottoman history</li>
                <li>• Family names patronymic (son of/daughter of)</li>
                <li>• Religious significance common (Muhammad, Ali, Fatima)</li>
                <li>• Modern trends blend traditional with international</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🌍 Global Naming Trends</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cross-cultural names gaining popularity</li>
                <li>• Gender-neutral names on the rise</li>
                <li>• Vintage names making comeback</li>
                <li>• Short, punchy names preferred</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/examples/numbers/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">Number Examples</h3>
              <p className="text-sm text-gray-600">Real-world number generation examples and patterns</p>
            </Link>
            <Link href="/templates/random-name-generator/" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <h3 className="font-semibold text-purple-800">Name Templates</h3>
              <p className="text-sm text-purple-600">Pre-configured name generator templates</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
