import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generator Templates - Free Online Tools',
  description: 'Browse our collection of generator templates for random numbers, names, passwords, colors, and more. Find the perfect template for your needs.',
  keywords: ['generator templates', 'random generators', 'online tools', 'free templates'],
  openGraph: {
    title: 'Generator Templates - Free Online Tools',
    description: 'Browse our collection of generator templates for random numbers, names, passwords, colors, and more.',
    type: 'website',
  },
}

export default function TemplatesPage() {
  const templates = [
    {
      title: 'Random Number Generator Templates',
      description: 'Pre-configured number ranges for games, statistics, and random selection',
      icon: '🎲',
      category: 'Numbers',
      href: '/templates/random-number-generator/',
      examples: [
        { name: '1-100', description: 'Perfect for percentages' },
        { name: '1-6', description: 'Dice rolling' },
        { name: '1-49', description: 'Lottery numbers' },
        { name: '1-1000', description: 'Extended range' }
      ]
    },
    {
      title: 'Random Name Generator Templates',
      description: 'Gender-specific and mixed name generators for various purposes',
      icon: '👤',
      category: 'Names',
      href: '/templates/random-name-generator/',
      examples: [
        { name: 'Male Names', description: 'Traditional and modern male names' },
        { name: 'Female Names', description: 'Popular female names' },
        { name: 'Mixed Names', description: 'Gender-neutral options' }
      ]
    },
    {
      title: 'Random Password Generator Templates',
      description: 'Secure password templates with different strength levels',
      icon: '🔐',
      category: 'Security',
      href: '/random-password-generator/',
      examples: [
        { name: '8 Characters', description: 'Basic security' },
        { name: '16 Characters', description: 'High security' },
        { name: 'With Symbols', description: 'Maximum strength' }
      ]
    },
    {
      title: 'Random Color Generator Templates',
      description: 'Color generation templates for design and creative projects',
      icon: '🎨',
      category: 'Design',
      href: '/random-color-generator/',
      examples: [
        { name: 'HEX Colors', description: 'Web design format' },
        { name: 'RGB Colors', description: 'Digital design' },
        { name: 'Color Palettes', description: 'Multiple colors' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Templates</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generator Templates
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Browse our collection of pre-configured generator templates. Each template is optimized for specific use cases and ready to use instantly.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{template.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{template.title}</h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{template.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{template.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Popular Templates:</h3>
                <div className="space-y-2">
                  {template.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                      <span className="font-medium text-gray-700">{example.name}</span>
                      <span className="text-sm text-gray-500">{example.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                href={template.href}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Templates
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use Our Templates?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">⚡ Instant Setup</h3>
              <p className="text-gray-600">Pre-configured templates save time and eliminate setup complexity</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🎯 Purpose-Built</h3>
              <p className="text-gray-600">Each template optimized for specific use cases and scenarios</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🔄 Consistent Results</h3>
              <p className="text-gray-600">Reliable outputs with proven configurations</p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/examples/" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-800">View Examples</h3>
              <p className="text-sm text-blue-600">See real-world usage examples and patterns</p>
            </Link>
            <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">All Generators</h3>
              <p className="text-sm text-gray-600">Browse our complete collection of generators</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
