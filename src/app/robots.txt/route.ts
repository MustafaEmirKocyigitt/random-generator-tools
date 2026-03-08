import { NextResponse } from 'next/server'

export function GET() {
  return new NextResponse(
    `# AI SEO Optimized Robots.txt
# Allows AI search engines while blocking training-only crawlers

# Allow all search engines by default
User-agent: *
Allow: /
Crawl-delay: 1

# AI Search Engines - Allow for citation and visibility
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Googlebot
Allow: /

# Block training-only crawlers (prevents AI training without citation benefit)
User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: GoogleOther
Disallow: /

User-agent: FacebookBot
Disallow: /

# Sitemap for search engines
Sitemap: https://rastgeleolusturucu.com.tr/sitemap.xml`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
