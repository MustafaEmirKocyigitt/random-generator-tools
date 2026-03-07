import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: {
    category: string
  }
}

const categories = {
  'lottery': {
    title: 'Lottery Number Examples',
    description: 'Common lottery number patterns and examples for different games',
    examples: [
      { numbers: [7, 14, 23, 31, 42, 48], game: 'Classic 6/49', explanation: 'Evenly distributed across the range' },
      { numbers: [3, 11, 19, 27, 35, 43], game: 'Pattern-based', explanation: 'Every 8th number pattern' },
      { numbers: [5, 12, 18, 29, 36, 44], game: 'Mixed distribution', explanation: 'Mix of low and high numbers' }
    ]
  },
  'dice': {
    title: 'Dice Roll Examples',
    description: 'Common dice roll combinations and probabilities for gaming',
    examples: [
      { numbers: [6, 3, 5, 2, 4, 1], game: 'Six-sided die', explanation: 'Standard d6 rolls' },
      { numbers: [12, 8, 15, 7, 11, 9], game: 'Two dice sum', explanation: 'Sum of two d6 dice' },
      { numbers: [20, 14, 18, 6, 11, 16], game: 'D20 die', explanation: 'Dungeons & Dragons style' }
    ]
  },
  'statistics': {
    title: 'Statistical Sampling Examples',
    description: 'Random sampling examples for statistical analysis and research',
    examples: [
      { numbers: [234, 567, 891, 123, 456, 789], game: 'Large dataset', explanation: 'Sample from 1000-item dataset' },
      { numbers: [42, 17, 83, 29, 65, 91], game: 'Quality control', explanation: 'Random quality checks' },
      { numbers: [101, 250, 399, 550, 701, 850], game: 'Survey sampling', explanation: 'Survey respondent selection' }
    ]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category
  const categoryData = categories[category as keyof typeof categories]
  
  if (!categoryData) {
    return {
      title: 'Invalid Category - Number Examples',
      description: 'Please specify a valid number examples category.'
    }
  }

  return {
    title: `${categoryData.title} - Free Examples`,
    description: categoryData.description,
    keywords: [`${category} numbers`, `${category} examples`, 'random number patterns', 'number combinations'],
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      type: 'website',
    },
  }
}

export default function NumberExamples({ params }: Props) {
  const category = params.category
  const categoryData = categories[category as keyof typeof categories]
  
  if (!categoryData) {
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
          <Link href="/examples/numbers/" className="text-blue-600 hover:underline">Numbers</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 capitalize">{category}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryData.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {categoryData.description}
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categoryData.examples.map((example, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{example.game}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {example.numbers.map((num, numIndex) => (
                  <span key={numIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono">
                    {num}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">{example.explanation}</p>
            </div>
          ))}
        </div>

        {/* Generate Your Own */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate Your Own {categoryData.title.split(' ')[0]} Numbers</h2>
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-4" id="result">?</div>
              <button 
                onClick={() => {
                  let result: number
                  switch(category) {
                    case 'lottery':
                      result = Math.floor(Math.random() * 49) + 1
                      break
                    case 'dice':
                      result = Math.floor(Math.random() * 6) + 1
                      break
                    case 'statistics':
                      result = Math.floor(Math.random() * 1000) + 1
                      break
                    default:
                      result = Math.floor(Math.random() * 100) + 1
                  }
                  document.getElementById('result')!.textContent = result.toString()
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Generate Random Number
              </button>
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Number Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(categories).map(([key, data]) => {
              if (key === category) return null
              return (
                <Link key={key} href={`/examples/numbers/${key}/`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-800">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
