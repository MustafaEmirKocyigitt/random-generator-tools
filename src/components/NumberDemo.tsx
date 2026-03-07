'use client'

import { useState } from 'react'

export default function NumberDemo() {
  const [diceResult, setDiceResult] = useState('?')
  const [lotteryResult, setLotteryResult] = useState('?')
  const [sampleResult, setSampleResult] = useState('?')

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1
    setDiceResult(result.toString())
  }

  const generateLottery = () => {
    const result = Math.floor(Math.random() * 49) + 1
    setLotteryResult(result.toString())
  }

  const generateSample = () => {
    const result = Math.floor(Math.random() * 1000) + 1
    setSampleResult(result.toString())
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Dice Roll (D6)</h3>
        <div className="text-4xl font-bold text-blue-600 mb-3">{diceResult}</div>
        <button 
          onClick={rollDice}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Roll Dice
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Lottery Number</h3>
        <div className="text-4xl font-bold text-green-600 mb-3">{lotteryResult}</div>
        <button 
          onClick={generateLottery}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Generate
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Random Sample</h3>
        <div className="text-4xl font-bold text-purple-600 mb-3">{sampleResult}</div>
        <button 
          onClick={generateSample}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Sample
        </button>
      </div>
    </div>
  )
}
