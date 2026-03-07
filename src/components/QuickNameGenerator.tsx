'use client'

import { useState } from 'react'

export default function QuickNameGenerator() {
  const [result, setResult] = useState('?')

  const generateName = () => {
    const names = ['Ahmet', 'Zeynep', 'Alex', 'Mehmet', 'Elif', 'Jordan']
    const randomName = names[Math.floor(Math.random() * names.length)]
    setResult(randomName)
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="text-6xl font-bold text-purple-600 mb-4">{result}</div>
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={generateName}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Generate Random Name
          </button>
        </div>
      </div>
    </div>
  )
}
