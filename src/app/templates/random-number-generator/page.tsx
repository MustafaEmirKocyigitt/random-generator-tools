import { Metadata } from 'next'
import Link from 'next/link'
import QuickNumberGenerator from '@/components/QuickNumberGenerator'

export const metadata: Metadata = {
  title: 'Random Number Generator Templates - Free Online Tools',
  description: 'Browse our collection of random number generator templates with pre-configured ranges for games, statistics, and more.',
  keywords: ['random number templates', 'number generator templates', 'pre-configured ranges', 'gaming templates'],
  openGraph: {
    title: 'Random Number Generator Templates - Free Online Tools',
    description: 'Browse our collection of random number generator templates with pre-configured ranges.',
    type: 'website',
  },
}

const numberTemplates = [
  {
    title: '1-100 Range',
    description: 'Perfect for percentages, probabilities, and general random selection',
    url: '/templates/random-number-generator/1-100',
    useCases: ['Percentage calculations', 'Probability experiments', 'Random selection', 'Gaming mechanics'],
    features: ['100 possible outcomes', 'Common percentage range', 'Versatile applications']
  },
  {
    title: '1-1000 Range',
    description: 'Extended range for more variety and precision in random selection',
    url: '/templates/random-number-generator/1-1000',
    useCases: ['Large datasets', 'Statistical sampling', 'Advanced gaming', 'Research applications'],
    features: ['1000 possible outcomes', 'Higher precision', 'Research-grade', 'Extended variety']
  },
  {
    title: '1-10000 Range',
    description: 'Large-scale randomization for enterprise and scientific applications',
    url: '/templates/random-number-generator/1-10000',
    features: ['10000 possible outcomes', 'Enterprise scale', 'Scientific precision', 'Maximum variety']
  },
  {
    title: '1-6 Range (Dice)',
    description: 'Standard six-sided dice simulation for board games and RPGs',
    url: '/templates/random-number-generator/1-6',
    useCases: ['Board games', 'RPG dice rolling', 'Probability teaching', 'Game development'],
    features: ['6 possible outcomes', 'Dice simulation', 'Gaming standard', 'Educational']
  },
  {
    title: '1-49 Range (Lottery)',
    description: 'Lottery-style number generation for prize draws and gaming',
    url: '/templates/random-number-generator/1-49',
    useCases: ['Lottery simulations', 'Prize draws', 'Gaming applications', 'Random contests'],
    features: ['49 possible outcomes', 'Lottery standard', 'Prize draws', 'Gaming compliant']
  },
  {
    title: '1-1000000 Range',
    description: 'Massive range for high-precision scientific and enterprise applications',
    url: '/templates/random-number-generator/1-1000000',
    features: ['1M possible outcomes', 'Scientific grade', 'Maximum precision', 'Enterprise scale']
  }
]

export default function RandomNumberTemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/" className="text-blue-600 hover:underline">Templates</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Random Number Generator</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Number Generator Templates
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Pre-configured random number generator templates for specific use cases. Each template optimized for gaming, statistics, or professional applications.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {numberTemplates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              
              {template.useCases && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.useCases.map((useCase, useIndex) => (
                      <span key={useIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href={template.url}
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Use Template
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Generator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Number Generator</h2>
          <QuickNumberGenerator />
        </div>

        {/* Related Templates */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Templates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/templates/random-name-generator/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">Random Name Generator Templates</h3>
              <p className="text-sm text-gray-600">Pre-configured name generators by gender and type</p>
            </Link>
            <Link href="/examples/numbers/" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-800">Number Examples</h3>
              <p className="text-sm text-blue-600">Real-world number generation examples and patterns</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
