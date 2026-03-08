import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Box-Muller transform for Gaussian distribution
export function generateGaussianNumber(min: number, max: number): number {
  const u = 1 - Math.random()
  const v = Math.random()
  const standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  // Normalize to 0..1 range roughly, then scale
  const normalized = Math.min(Math.max(0.5 + standardNormal / 6, 0), 1)
  const value = min + normalized * (max - min)
  return Math.round(value)
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

export function generateColorPalette(count: number): { hex: string; rgb: string }[] {
  const safeCount = Math.min(Math.max(count, 2), 12)
  const baseHue = Math.floor(Math.random() * 360)
  const palette: { hex: string; rgb: string }[] = []

  for (let i = 0; i < safeCount; i++) {
    const hue = (baseHue + i * (360 / safeCount)) % 360
    const saturation = 62 + Math.random() * 10 // keep saturation consistent
    const lightness = 45 + Math.sin(i) * 8 // slight wave for depth
    const { hex, rgb } = hslToRgbColor(hue, saturation, lightness)
    palette.push({ hex, rgb })
  }

  return palette
}

function hslToRgbColor(h: number, s: number, l: number): { hex: string; rgb: string } {
  const sNorm = s / 100
  const lNorm = l / 100
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lNorm - c / 2

  let r1 = 0, g1 = 0, b1 = 0
  if (h < 60) { r1 = c; g1 = x; b1 = 0 }
  else if (h < 120) { r1 = x; g1 = c; b1 = 0 }
  else if (h < 180) { r1 = 0; g1 = c; b1 = x }
  else if (h < 240) { r1 = 0; g1 = x; b1 = c }
  else if (h < 300) { r1 = x; g1 = 0; b1 = c }
  else { r1 = c; g1 = 0; b1 = x }

  const r = Math.round((r1 + m) * 255)
  const g = Math.round((g1 + m) * 255)
  const b = Math.round((b1 + m) * 255)

  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
  const rgb = `rgb(${r}, ${g}, ${b})`
  return { hex, rgb }
}

export function generateRandomName(gender: 'male' | 'female' | 'mixed'): string {
  const maleNames = [
    'Ahmet','Mehmet','Mustafa','Ali','Hüseyin','Hasan','İbrahim','Ömer','Murat','Fatih',
    'Can','Emre','Burak','Kaan','Eren','Deniz','Baran','Oğuz','Tolga','Serkan',
    'Onur','Selim','Kerem','Yunus','Batuhan','Furkan','Berk','Levent','Gökhan','Volkan'
  ]
  const femaleNames = [
    'Ayşe','Fatma','Zeynep','Elif','Meryem','Hatice','Hacer','Kadriye','Emine','Sümeyye',
    'Melisa','Defne','Duru','İrem','Ece','Ceren','Selin','Nazlı','Seda','Gamze',
    'Buse','Yasemin','Gül','Aslı','Sude','Ela','Nehir','Gizem','Esra','Tuğçe'
  ]
  const surnames = [
    'Yılmaz','Kaya','Demir','Çelik','Şahin','Yıldız','Yıldırım','Aydın','Öztürk','Aslan',
    'Doğan','Arslan','Koç','Kurt','Bulut','Özdemir','Polat','Avcı','Özkan','Kara'
  ]
  
  let names: string[] = []
  if (gender === 'male') {
    names = maleNames
  } else if (gender === 'female') {
    names = femaleNames
  } else {
    names = [...maleNames, ...femaleNames]
  }

  const first = names[Math.floor(Math.random() * names.length)]
  const last = surnames[Math.floor(Math.random() * surnames.length)]
  return `${first} ${last}`
}

export function pickRandomItem(items: string[]): string {
  if (items.length === 0) return ''
  return items[Math.floor(Math.random() * items.length)]
}
