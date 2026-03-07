import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateRandomPassword(config: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  let charset = ''
  if (config.includeUppercase) charset += uppercase
  if (config.includeLowercase) charset += lowercase
  if (config.includeNumbers) charset += numbers
  if (config.includeSymbols) charset += symbols

  if (charset === '') return ''

  let password = ''
  for (let i = 0; i < config.length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }

  return password
}

export function generateRandomColor(): { hex: string; rgb: string } {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
  const rgb = `rgb(${r}, ${g}, ${b})`

  return { hex, rgb }
}

export function generateRandomName(gender: 'male' | 'female' | 'mixed'): string {
  const maleNames = ['Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Murat', 'Fatih']
  const femaleNames = ['Ayşe', 'Fatma', 'Zeynep', 'Elif', 'Meryem', 'Hatice', 'Hacer', 'Kadriye', 'Emine', 'Sümeyye']
  
  let names: string[] = []
  if (gender === 'male') {
    names = maleNames
  } else if (gender === 'female') {
    names = femaleNames
  } else {
    names = [...maleNames, ...femaleNames]
  }

  return names[Math.floor(Math.random() * names.length)]
}

export function pickRandomItem(items: string[]): string {
  if (items.length === 0) return ''
  return items[Math.floor(Math.random() * items.length)]
}
