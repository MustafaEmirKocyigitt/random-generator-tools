import { Metadata } from 'next'
import Link from 'next/link'
import NumberDemo from '@/components/NumberDemo'

export const metadata: Metadata = {
  title: 'Number Generation Examples - Real-World Use Cases',
  description: 'Explore real-world examples of random number generation for gaming, statistics, lottery, and more. Learn practical applications and patterns.',
  keywords: ['number generation examples', 'random number use cases', 'gaming numbers', 'statistical sampling', 'lottery numbers'],
  openGraph: {
    title: 'Number Generation Examples - Real-World Use Cases',
    description: 'Explore real-world examples of random number generation for various applications.',
    type: 'website',
  },
}

const exampleCategories = [
  {
    title: 'Lottery Numbers',
    description: 'Common lottery number patterns and combinations for prize draws and gaming',
    url: '/examples/numbers/lottery',
    icon: '🎰',
    examples: [
      { pattern: 'Classic 6/49', description: 'Six numbers from 1-49' },
      { pattern: 'Powerball style', description: 'Main numbers + power number' },
      { pattern: 'EuroMillions', description: 'Two sets of numbers' }
    ],
    useCases: ['Lottery simulations', 'Prize draws', 'Gaming applications', 'Random contests']
  },
  {
    title: 'Dice Rolls',
    description: 'Dice roll combinations and probabilities for board games and RPGs',
    url: '/examples/numbers/dice',
    icon: '🎲',
    examples: [
      { pattern: 'D6 (Six-sided)', description: 'Standard 1-6 dice' },
      { pattern: '2D6 Sum', description: 'Two six-sided dice sum (2-12)' },
      { pattern: 'D20 (Twenty-sided)', description: 'RPG gaming dice (1-20)' }
    ],
    useCases: ['Board games', 'RPG dice rolling', 'Probability teaching', 'Game development']
  },
  {
    title: 'Statistical Sampling',
    description: 'Random sampling methods for research, quality control, and data analysis',
    url: '/examples/numbers/statistics',
    icon: '📊',
    examples: [
      { pattern: 'Quality Control', description: 'Random product inspection' },
      { pattern: 'Survey Sampling', description: 'Random respondent selection' },
      { pattern: 'Research Data', description: 'Scientific data sampling' }
    ],
    useCases: ['Research applications', 'Quality control', 'Survey sampling', 'Data analysis']
  }
]

export default function NumbersExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/examples/" className="text-blue-600 hover:underline">Examples</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Numbers</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Number Generation Examples
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Explore real-world examples of random number generation across different applications. Learn from practical use cases in gaming, statistics, and more.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                      <div className="font-medium text-gray-700">{example.pattern}</div>
                      <div className="text-sm text-gray-500">{example.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.useCases.map((useCase, useIndex) => (
                    <span key={useIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                href={category.url}
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Examples
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Number Generator Demo</h2>
          <NumberDemo />
        </div>

        {/* Related Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/examples/names/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">Name Examples</h3>
              <p className="text-sm text-gray-600">Real-world name generation examples and cultural insights</p>
            </Link>
            <Link href="/templates/random-number-generator/" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-800">Number Templates</h3>
              <p className="text-sm text-blue-600">Pre-configured number generator templates</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
