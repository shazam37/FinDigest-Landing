'use client'
import { Github, Chrome, Mail } from 'lucide-react'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/shazam37/FinDigest.ai'
const CHROME_STORE_URL = process.env.NEXT_PUBLIC_CHROME_STORE_URL || 'https://github.com/shazam37/FinDigest.ai/releases/download/v1.0.0/findigest-extension.zip'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.onrender.com'

const LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Browser Extension', href: '#extension' },
    // { label: 'Live Demo', href: `${APP_URL}/preview` },
    // { label: 'API Docs', href: `${APP_URL}/docs` },
  ],
  Developer: [
    { label: 'GitHub Repo', href: GITHUB_URL },
    { label: 'Open Issues', href: `${GITHUB_URL}/issues` },
    { label: 'Releases', href: `${GITHUB_URL}/releases` },
    { label: 'Deploy to Render', href: 'https://render.com' },
    { label: 'LangGraph Docs', href: 'https://langchain-ai.github.io/langgraph/' },
  ],
  Community: [
    { label: 'Contribute', href: '#contribute' },
    // { label: 'Subscribe to Digest', href: `${APP_URL}/subscribe` },
    { label: 'MIT License', href: `${GITHUB_URL}/blob/main/LICENSE` },
    { label: 'Changelog', href: `${GITHUB_URL}/releases` },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-[#2a2a3a] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center border border-[#2a2a3a]">
                <span className="font-mono text-gold text-xs font-bold">FD</span>
              </div>
              <div>
                <p className="font-serif text-cream font-bold text-sm">FinDigest.ai</p>
                <p className="font-mono text-[9px] tracking-[2px] text-gold-dark uppercase">Open Source Agent</p>
              </div>
            </div>
            <p className="text-sm text-slate leading-relaxed mb-5">
              A self-improving AI agent for fintech news intelligence.
              Free forever. MIT licensed.
            </p>
            <div className="flex gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate hover:text-cream hover:border-[#3a3a4a] transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate hover:text-cream hover:border-[#3a3a4a] transition-colors"
              >
                <Chrome size={15} />
              </a>
              <a
                href={`${APP_URL}/subscribe`}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#2a2a3a] text-slate hover:text-cream hover:border-[#3a3a4a] transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="label mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate hover:text-cream transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-slate tracking-wide">
            © {new Date().getFullYear()} FinDigest.ai Contributors · MIT License
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-slate">
              Built with{' '}
              <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">LangGraph</a>
              {' · '}
              <a href="https://groq.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Groq</a>
              {' · '}
              <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">FastAPI</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}