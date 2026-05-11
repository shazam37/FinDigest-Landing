'use client'
import { useState, useEffect } from 'react'
import { Github, Chrome, Menu, X } from 'lucide-react'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/YOUR_USERNAME/fintech-agent'
const CHROME_STORE_URL = process.env.NEXT_PUBLIC_CHROME_STORE_URL || '#extension'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Extension', href: '#extension' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'Contribute', href: '#contribute' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-[#2a2a3a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center border border-[#2a2a3a] group-hover:border-gold transition-colors">
            <span className="font-mono text-gold text-xs font-bold">FD</span>
          </div>
          <div>
            <span className="font-serif text-cream font-bold text-sm">FinDigest.ai</span>
            {/* <span className="block font-mono text-[9px] tracking-[2px] text-gold-dark uppercase">Open Source</span> */}
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] tracking-widest uppercase text-slate hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2 px-4"
          >
            <Github size={14} />
            GitHub
          </a>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4">
            <Chrome size={14} />
            Install Extension
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate hover:text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink border-b border-[#2a2a3a] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] tracking-widest uppercase text-slate hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-[#2a2a3a]">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-4 text-[10px]">
              <Github size={13} /> GitHub
            </a>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-[10px]">
              <Chrome size={13} /> Extension
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}