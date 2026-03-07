import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SchemaMarkup from "@/components/SchemaMarkup";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Rastgele Oluşturucu - Ücretsiz Türkçe Rastgele Sayı, Şifre, İsim Üretici",
  description: "Türkiye'nin en iyi rastgele araçları. Rastgele sayı üretici, şifre oluşturucu, isim generator, renk seçici ve picker. %100 ücretsiz, Türkçe, hızlı ve modern.",
  keywords: ["rastgele sayı üretici", "şifre oluşturucu", "rastgele isim generator", "random password generator", "rastgele renk üretici", "random.org alternatifi", "türkçe rastgele araçlar", "ücretsiz random generator"],
  authors: [{ name: "Rastgele Oluşturucu", url: "https://rastgeleolusturucu.com.tr" }],
  alternates: {
    canonical: 'https://rastgeleolusturucu.com.tr',
    languages: {
      'tr': 'https://rastgeleolusturucu.com.tr',
      'en': 'https://rastgeleolusturucu.com.tr/en',
    },
  },
  openGraph: {
    title: "Rastgele Oluşturucu - 5 Araç Bir Arada | Türkçe Rastgele Araçlar",
    description: "Rastgele sayı, şifre, isim, renk ve seçim için 5 ücretsiz araç. Random.org alternatifi, %100 Türkçe ve modern arayüz.",
    type: "website",
    url: "https://rastgeleolusturucu.com.tr",
    locale: 'tr_TR',
    siteName: 'Rastgele Oluşturucu',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rastgele Oluşturucu - Türkçe Rastgele Araçlar",
    description: "5 araç bir arada: Rastgele sayı, şifre, isim, renk ve seçim. %100 ücretsiz ve Türkçe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rastgele Oluşturucu',
  description: 'Türkiye\'nin en iyi rastgele araçları platformu. Rastgele sayı, şifre, isim, renk ve seçim için 5 ücretsiz Türkçe araç.',
  url: 'https://rastgeleolusturucu.com.tr',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rastgeleolusturucu.com.tr/{search_term}',
    'query-input': 'required name="search_term"'
  },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Rastgele Oluşturucu Araçları',
    applicationCategory: 'Utility',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY'
    },
    featureList: [
      'Rastgele Sayı Üretici',
      'Rastgele Şifre Oluşturucu', 
      'Rastgele İsim Üretici',
      'Rastgele Renk Üretici',
      'Rastgele Seçici Araç'
    ],
    inLanguage: 'tr',
    author: {
      '@type': 'Organization',
      name: 'Rastgele Oluşturucu',
      url: 'https://rastgeleolusturucu.com.tr'
    }
  },
  dateModified: '2024-03-07'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <SchemaMarkup type="WebApplication" />
        <BreadcrumbSchema />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-mono bg-black`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
