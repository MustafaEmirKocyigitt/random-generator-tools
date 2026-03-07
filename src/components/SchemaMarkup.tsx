interface SchemaMarkupProps {
  type: 'WebApplication' | 'HowTo' | 'FAQ' | 'Breadcrumb';
  data?: any;
}

const webApplicationSchema = {
  '@type': 'WebApplication',
  name: 'Rastgele Üreteç Araçları',
  description: 'Rastgele sayılar, isimler, şifreler, renkler ve daha fazlasını AI destekli araçlarımızla üretin. Hızlı, güvenli ve ücretsiz online rastgele üreteçler.',
  url: 'https://random-generator-tools.com',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  featureList: [
    'Rastgele Sayı Üreteci',
    'Rastgele İsim Üreteci',
    'Rastgele Şifre Üreteci',
    'Rastgele Renk Üreteci',
    'Rastgele Seçim Aracı'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1'
  },
  dateModified: '2024-03-07'
};

const howToSchema = {
  '@type': 'HowTo',
  name: 'Rastgele Sayı Nasıl Üretilir',
  description: 'Rastgele sayı üreteci kullanarak belirlediğiniz aralıkta sayılar üretin',
  image: 'https://random-generator-tools.com/og-image.jpg',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Minimum ve maksimum değerleri girin',
      text: 'Rastgele sayı için alt ve üst sınır değerlerini belirleyin',
      image: 'https://random-generator-tools.com/step1.jpg'
    },
    {
      '@type': 'HowToStep',
      name: 'Üret butonuna tıklayın',
      text: 'Rastgele sayı üretmek için butona tıklayın',
      image: 'https://random-generator-tools.com/step2.jpg'
    },
    {
      '@type': 'HowToStep',
      name: 'Sonucu kopyalayın',
      text: 'Üretilen rastgele sayıyı kopyalayarak kullanabilirsiniz',
      image: 'https://random-generator-tools.com/step3.jpg'
    }
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Rastgele Sayı Üreteci'
    }
  ],
  totalTime: 'PT30S'
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Rastgele üreteç araçları ücretsiz mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, tüm rastgele üreteç araçlarımız tamamen ücretsizdir. Kayıt gerektirmez ve sınırsız kullanım imkanı sunar.'
      }
    },
    {
      '@type': 'Question',
      name: 'Üretilen veriler güvenli mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, tüm rastgelelemeler client-side gerçekleşir. Verileriniz sunucularımıza gönderilmez ve kaydedilmez.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kaç farklı rastgele üreteç aracı var?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Şu anda 5 farklı rastgele üreteç aracı sunuyoruz: Sayı, İsim, Şifre, Renk ve Liste seçim araçları.'
      }
    },
    {
      '@type': 'Question',
      name: 'Mobil cihazlarda çalışıyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, tüm araçlarımız mobil uyumludur ve responsive tasarıma sahiptir. Herhangi bir cihazda sorunsuz çalışır.'
      }
    }
  ]
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Ana Sayfa',
      item: 'https://random-generator-tools.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Rastgele Araçlar',
      item: 'https://random-generator-tools.com/tools'
    }
  ]
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema: any;

  switch (type) {
    case 'WebApplication':
      schema = webApplicationSchema;
      break;
    case 'HowTo':
      schema = howToSchema;
      break;
    case 'FAQ':
      schema = faqSchema;
      break;
    case 'Breadcrumb':
      schema = breadcrumbSchema;
      break;
    default:
      schema = webApplicationSchema;
  }

  if (data) {
    schema = { ...schema, ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
