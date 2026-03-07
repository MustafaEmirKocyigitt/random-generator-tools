import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/30 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-6 font-jetbrains-mono neon-glow">
            [ABOUT_RANDOM_TOOLS]
          </h1>
          
          <div className="space-y-6 text-gray-300 font-mono">
            <div className="backdrop-blur-lg bg-black/30 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">[MISSION]</h2>
              <p className="leading-relaxed">
                We provide free, secure, and instant random generation tools powered by AI technology. 
                Our mission is to make random value generation accessible to everyone without compromising 
                privacy or requiring registration.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-black/30 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">[TECHNOLOGY]</h2>
              <p className="leading-relaxed mb-3">
                Built with modern web technologies including:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Next.js 16.1.6 with React Compiler</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for modern styling</li>
                <li>• Client-side processing for maximum security</li>
                <li>• AI-powered generation algorithms</li>
              </ul>
            </div>

            <div className="backdrop-blur-lg bg-black/30 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">[PRIVACY_COMMITMENT]</h2>
              <p className="leading-relaxed">
                All data processing happens locally in your browser. We never collect, store, or transmit 
                your generated values. Your privacy is our priority.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-black/30 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">[CONTACT]</h2>
              <p className="leading-relaxed">
                Have questions or feedback? Reach out to us at{' '}
                <Link 
                  href="mailto:contact@random-generator-tools.com" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  contact@random-generator-tools.com
                </Link>
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Last updated: March 2024 | Version: 2.0.1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
