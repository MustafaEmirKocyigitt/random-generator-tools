'use client'

import { useState } from 'react'

export default function QuickNumberGenerator() {
  const [result, setResult] = useState('?')

  const generateNumber = () => {
    const randomResult = Math.floor(Math.random() * 100) + 1
    setResult(randomResult.toString())
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="text-6xl font-bold text-blue-600 mb-4">{result}</div>
        <button 
          onClick={generateNumber}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Generate Random Number (1-100)
        </button>
      </div>
    </div>
  )
}
