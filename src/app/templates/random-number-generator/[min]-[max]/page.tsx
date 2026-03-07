import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: {
    min: string
    max: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const min = parseInt(params.min)
  const max = parseInt(params.max)
  
  if (isNaN(min) || isNaN(max) || min >= max || min < 0 || max > 1000000) {
    return {
      title: 'Invalid Range - Random Number Generator',
      description: 'Please specify a valid number range.'
    }
  }

  const range = max - min
  const title = `Random Number Generator ${min}-${max} - Free Online Tool`
  const description = `Generate random numbers between ${min} and ${max}. Perfect for games, statistics, and random selection. Free, instant, and no registration required.`

  return {
    title,
    description,
    keywords: [`random number ${min}-${max}`, `number generator ${min} to ${max}`, 'random numbers', 'online generator'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export default function RandomNumberTemplate({ params }: Props) {
  const min = parseInt(params.min)
  const max = parseInt(params.max)
  
  if (isNaN(min) || isNaN(max) || min >= max || min < 0 || max > 1000000) {
    notFound()
  }

  const range = max - min
  const examples = [
    `Perfect for rolling dice (${min}-${max})`,
    `Great for lottery numbers (${min}-${max})`,
    `Ideal for random selections (${min}-${max})`
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/" className="text-blue-600 hover:underline">Templates</Link>
          <span className="mx-2">/</span>
          <Link href="/templates/random-number-generator/" className="text-blue-600 hover:underline">Random Number Generator</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{min}-{max}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Number Generator {min}-{max}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Generate random numbers between {min} and {max} instantly. 
            {range > 100 && ` With ${range.toLocaleString()} possible outcomes, the possibilities are endless!`}
          </p>
        </div>

        {/* Main Generator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-4" id="result">?</div>
              <button 
                onClick={() => {
                  const result = Math.floor(Math.random() * (max - min + 1)) + min
                  document.getElementById('result')!.textContent = result.toString()
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Generate Random Number
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Uses for {min}-{max} Range</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Gaming & Entertainment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Board game dice rolling</li>
                <li>• Card game randomization</li>
                <li>• RPG character stats</li>
                <li>• Video game mechanics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Practical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Statistical sampling</li>
                <li>• Random prize draws</li>
                <li>• Decision making</li>
                <li>• Educational purposes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Examples with {min}-{max} Range</h2>
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Templates */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Number Ranges</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href={`/templates/random-number-generator/1-100/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">1-100</h3>
              <p className="text-sm text-gray-600">Classic percentage range</p>
            </Link>
            <Link href={`/templates/random-number-generator/1-1000/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">1-1000</h3>
              <p className="text-sm text-gray-600">Extended range for more variety</p>
            </Link>
            <Link href={`/templates/random-number-generator/1-10000/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-800">1-10000</h3>
              <p className="text-sm text-gray-600">Large scale randomization</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
