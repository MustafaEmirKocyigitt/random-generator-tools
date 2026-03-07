import { Metadata } from 'next'
import Link from 'next/link'
import QuickNameGenerator from '@/components/QuickNameGenerator'

export const metadata: Metadata = {
  title: 'Random Name Generator Templates - Free Online Tools',
  description: 'Browse our collection of random name generator templates for male, female, and mixed gender names. Perfect for characters, babies, and creative projects.',
  keywords: ['random name templates', 'name generator templates', 'character names', 'baby names', 'gender-specific names'],
  openGraph: {
    title: 'Random Name Generator Templates - Free Online Tools',
    description: 'Browse our collection of random name generator templates for different gender types.',
    type: 'website',
  },
}

const nameTemplates = [
  {
    title: 'Male Names',
    description: 'Traditional and modern male names for characters, babies, and creative projects',
    url: '/templates/random-name-generator/male',
    useCases: ['Baby boy names', 'Male characters', 'Gaming avatars', 'Story writing', 'Username ideas'],
    features: ['Traditional names', 'Modern options', 'Turkish names', 'International names', 'Character-ready'],
    examples: ['Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Ömer', 'Emir', 'Arda', 'Kerem']
  },
  {
    title: 'Female Names',
    description: 'Beautiful female names for characters, babies, and creative projects',
    url: '/templates/random-name-generator/female',
    useCases: ['Baby girl names', 'Female characters', 'Gaming avatars', 'Story writing', 'Pen names'],
    features: ['Traditional names', 'Modern options', 'Turkish names', 'International names', 'Character-ready'],
      examples: ['Zeynep', 'Elif', 'Ayşe', 'Fatma', 'Meryem', 'Sude', 'Azra', 'Ecrin']
  },
  {
    title: 'Mixed Gender Names',
    description: 'Gender-neutral and diverse name options for inclusive character creation',
    url: '/templates/random-name-generator/mixed',
    useCases: ['Gender-neutral names', 'Diverse characters', 'Modern naming', 'Inclusive projects', 'Creative writing'],
    features: ['Gender-neutral', 'Modern choices', 'International', 'Inclusive', 'Versatile'],
    examples: ['Alex', 'Jordan', 'Taylor', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sage']
  }
]

export default function RandomNameTemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/" className="text-blue-600 hover:underline">Templates</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Random Name Generator</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Name Generator Templates
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Pre-configured name generator templates for different gender types and naming preferences. Perfect for character creation, baby naming, and creative projects.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {nameTemplates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {template.useCases.map((useCase, useIndex) => (
                    <span key={useIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Example Names:</h4>
                <div className="flex flex-wrap gap-2">
                  {template.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                href={template.url}
                className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Use Template
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Generator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Name Generator</h2>
          <QuickNameGenerator />
        </div>

        {/* Related Templates */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Templates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/templates/random-number-generator/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">Random Number Generator Templates</h3>
              <p className="text-sm text-gray-600">Pre-configured number generators for different ranges</p>
            </Link>
            <Link href="/examples/names/" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <h3 className="font-semibold text-purple-800">Name Examples</h3>
              <p className="text-sm text-purple-600">Real-world name examples and cultural insights</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
