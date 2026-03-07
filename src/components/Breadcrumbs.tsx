import Link from 'next/link';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://random-generator-tools.com${item.href}`
    }))
  };

  return (
    <>
      <SchemaMarkup type="Breadcrumb" data={breadcrumbSchema} />
      <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6 font-mono">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="text-cyan-400 font-semibold">{item.name}</span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
