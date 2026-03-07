import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generator Examples - Real-World Use Cases',
  description: 'Explore real-world examples and use cases for our random generators. Learn how to use number generators, name generators, and more effectively.',
  keywords: ['generator examples', 'use cases', 'random generator examples', 'real-world applications'],
  openGraph: {
    title: 'Generator Examples - Real-World Use Cases',
    description: 'Explore real-world examples and use cases for our random generators.',
    type: 'website',
  },
}

export default function ExamplesPage() {
  const exampleCategories = [
    {
      title: 'Number Examples',
      description: 'Real-world number generation examples for gaming, statistics, and decision making',
      icon: '🔢',
      href: '/examples/numbers/',
      categories: [
        { name: 'Lottery Numbers', description: 'Common lottery patterns and combinations', href: '/examples/numbers/lottery/' },
        { name: 'Dice Rolls', description: 'Gaming dice combinations and probabilities', href: '/examples/numbers/dice/' },
        { name: 'Statistical Sampling', description: 'Research and analysis sampling methods', href: '/examples/numbers/statistics/' }
      ]
    },
    {
      title: 'Name Examples',
      description: 'Name examples and patterns for different cultures and purposes',
      icon: '👥',
      href: '/examples/names/',
      categories: [
        { name: 'Turkish Names', description: 'Traditional and modern Turkish names', href: '/examples/names/turkish-traditional/' },
        { name: 'International Names', description: 'Popular names from around the world', href: '/examples/names/international-popular/' },
        { name: 'Unique Names', description: 'Distinctive and uncommon name choices', href: '/examples/names/international-unique/' }
      ]
    },
    {
      title: 'Password Examples',
      description: 'Secure password examples and best practices',
      icon: '🔑',
      href: '/random-password-generator/',
      categories: [
        { name: 'Strong Passwords', description: 'High-security password examples', href: '/random-password-generator/' },
        { name: 'Memorable Passwords', description: 'Secure yet memorable passwords', href: '/random-password-generator/' },
        { name: 'Specialized Passwords', description: 'Passwords for specific use cases', href: '/random-password-generator/' }
      ]
    },
    {
      title: 'Color Examples',
      description: 'Color generation examples for design and creative projects',
      icon: '🎨',
      href: '/random-color-generator/',
      categories: [
        { name: 'Web Colors', description: 'HEX and RGB web color examples', href: '/random-color-generator/' },
        { name: 'Color Palettes', description: 'Coordinated color combinations', href: '/random-color-generator/' },
        { name: 'Design Colors', description: 'Professional design color schemes', href: '/random-color-generator/' }
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
          <span className="text-gray-600">Examples</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generator Examples
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Explore real-world examples and use cases for our random generators. Learn from practical applications and discover new ways to use our tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {exampleCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{category.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Popular Examples:</h3>
                <div className="space-y-3">
                  {category.categories.map((cat, catIndex) => (
                    <Link key={catIndex} href={cat.href} className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{cat.name}</span>
                        <span className="text-sm text-gray-500">→</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{cat.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href={category.href}
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View All Examples
              </Link>
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🎮 Gaming & Entertainment</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Board game mechanics</li>
                <li>• RPG character creation</li>
                <li>• Card game randomization</li>
                <li>• Video game development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">💼 Business & Professional</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Statistical sampling</li>
                <li>• Random prize draws</li>
                <li>• Decision making tools</li>
                <li>• Data analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🎨 Creative Projects</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Character naming</li>
                <li>• Design inspiration</li>
                <li>• Story development</li>
                <li>• Artistic projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">📚 Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• How to choose the right generator</li>
                <li>• Understanding random distribution</li>
                <li>• Security considerations</li>
                <li>• Common mistakes to avoid</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🛠️ Advanced Techniques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Combining multiple generators</li>
                <li>• Custom parameter tuning</li>
                <li>• Integration with other tools</li>
                <li>• Automation strategies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/templates/" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <h3 className="font-semibold text-purple-800">Browse Templates</h3>
              <p className="text-sm text-purple-600">Pre-configured generator templates for quick setup</p>
            </Link>
            <Link href="/" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">All Generators</h3>
              <p className="text-sm text-gray-600">Complete collection of random generator tools</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
