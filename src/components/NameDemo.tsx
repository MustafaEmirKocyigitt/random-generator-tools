'use client'

import { useState } from 'react'

export default function NameDemo() {
  const [turkishName, setTurkishName] = useState('?')
  const [internationalName, setInternationalName] = useState('?')
  const [neutralName, setNeutralName] = useState('?')

  const generateTurkishName = () => {
    const names = ['Ahmet', 'Zeynep', 'Mustafa', 'Elif', 'Mehmet', 'Ayşe']
    const randomName = names[Math.floor(Math.random() * names.length)]
    setTurkishName(randomName)
  }

  const generateInternationalName = () => {
    const names = ['Oliver', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava']
    const randomName = names[Math.floor(Math.random() * names.length)]
    setInternationalName(randomName)
  }

  const generateNeutralName = () => {
    const names = ['Alex', 'Jordan', 'Taylor', 'Casey', 'Riley', 'Avery']
    const randomName = names[Math.floor(Math.random() * names.length)]
    setNeutralName(randomName)
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Turkish Name</h3>
        <div className="text-3xl font-bold text-purple-600 mb-3">{turkishName}</div>
        <button 
          onClick={generateTurkishName}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Generate
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">International Name</h3>
        <div className="text-3xl font-bold text-blue-600 mb-3">{internationalName}</div>
        <button 
          onClick={generateInternationalName}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Gender-Neutral</h3>
        <div className="text-3xl font-bold text-green-600 mb-3">{neutralName}</div>
        <button 
          onClick={generateNeutralName}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Generate
        </button>
      </div>
    </div>
  )
}
