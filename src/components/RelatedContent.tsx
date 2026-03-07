import Link from 'next/link';

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedContentProps {
  title: string;
  items: RelatedItem[];
  currentPath?: string;
}

export default function RelatedContent({ title, items, currentPath }: RelatedContentProps) {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-2xl p-6 mt-8">
      <h3 className="text-xl font-bold text-cyan-300 mb-4 font-jetbrains-mono">
        [{title.toUpperCase()}]
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items
          .filter(item => item.href !== currentPath)
          .map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white/5 border border-cyan-500/20 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="text-cyan-400 font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
