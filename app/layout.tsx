import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinTech Intelligence — AI-Powered Daily Briefings',
  description:
    'A self-improving AI agent that monitors fintech news across banks, regulators, and neobanks — delivering a personalised morning briefing before your first meeting.',
  keywords: ['fintech', 'AI agent', 'news briefing', 'LangGraph', 'banking intelligence', 'open source'],
  authors: [{ name: 'FinTech Intelligence Contributors' }],
  openGraph: {
    title: 'FinTech Intelligence — AI-Powered Daily Briefings',
    description: 'No share prices. No conference noise. Just what matters in fintech, every morning at 9 AM.',
    type: 'website',
    url: 'https://fintech-intelligence.vercel.app',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'FinTech Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinTech Intelligence',
    description: 'AI-powered fintech briefings. Open source. Free.',
    images: ['/og.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-ink-deep text-cream antialiased">
        {children}
      </body>
    </html>
  )
}