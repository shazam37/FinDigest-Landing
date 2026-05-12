'use client'
import { useEffect, useRef, useState } from 'react'
import { Chrome, Github, ArrowDown } from 'lucide-react'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/shazam37/FinDigest.ai'
const CHROME_STORE_URL = process.env.NEXT_PUBLIC_CHROME_STORE_URL || '#extension'

// Simulated live stories for the animated email preview
const STORIES = [
  { num: '01', title: 'HSBC Partners with Behavox to Deploy AI-Driven Fraud Detection', source: 'FT', time: '08:12' },
  { num: '02', title: "EU's PSD3 Final Text Requires Banks to Open Premium Data APIs by Q3 2026", source: 'Reuters', time: '07:44' },
  { num: '03', title: 'BlackRock Acquires Tokenisation Startup Securitize for $400M', source: 'Bloomberg', time: '07:31' },
  { num: '04', title: 'Monzo Granted Full Banking Licence in Germany', source: 'Guardian', time: '07:09' },
  { num: '05', title: 'RBI Issues Corrective Action Framework for Payment Aggregators', source: 'ET', time: '06:58' },
]

function EmailPreview() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
  if (visible < STORIES.length) {
    const t = setTimeout(() => {
      setVisible(v => v + 1)
    }, 500)

    return () => clearTimeout(t)
  }
}, [visible])

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Glow */}
      <div className="absolute inset-0 bg-signal-blue/5 rounded-2xl blur-2xl scale-110 pointer-events-none" />

      <div className="relative bg-cream rounded-xl border border-[#e0d8cc] overflow-hidden shadow-2xl">
        {/* Email header */}
        <div className="bg-navy px-5 py-4">
          <p className="font-mono text-[9px] tracking-[3px] text-gold-dark uppercase mb-1">FinDigest.ai</p>
          <p className="font-serif text-lg font-bold text-cream">Morning Briefing</p>
          <p className="font-mono text-[10px] text-gold-dark mt-1">
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
            {' · '}
            <span className="text-signal-green">{STORIES.length} STORIES</span>
          </p>
        </div>
        {/* Subject bar */}
        <div className="bg-cobalt px-5 py-2">
          <p className="font-serif text-[11px] italic text-[#c8c0e0]">
            EU open banking mandate triggers platform pivot; HSBC deepens AI fraud partnership
          </p>
        </div>
        {/* Stories */}
        <div className="p-5 space-y-3 bg-cream">
          {STORIES.slice(0, visible).map((s, i) => (
            // <div
            //   key={s.num}
            //   className="flex items-start gap-3 border-b border-[#e8e2d9] pb-3 last:border-0 last:pb-0"
            //   style={{ animation: 'fadeUp 0.4s ease forwards', opacity: 0, animationDelay: `${i * 50}ms`, animationFillMode: 'forwards' }}
            // >
            <div
              key={s.num}
              className="flex items-start gap-3 border-b border-[#e8e2d9] pb-3 last:border-0 last:pb-0 animate-fade-up"
            >
              <span className="font-mono text-[10px] font-bold text-gold-dark mt-0.5 flex-shrink-0">{s.num}</span>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-[13px] font-bold text-navy leading-tight line-clamp-2">{s.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[9px] tracking-widest text-gold-dark uppercase">{s.source}</span>
                  <span className="text-[#e0d8cc]">·</span>
                  <span className="font-mono text-[9px] text-slate">{s.time}</span>
                  <span className="ml-auto flex gap-1.5">
                    <span className="text-[10px]">👍</span>
                    <span className="text-[10px]">👎</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          {visible < STORIES.length && (
            <div className="flex items-center gap-2 py-1">
              <div className="w-3 h-3 rounded-full border-2 border-signal-blue border-t-transparent animate-spin" />
              <span className="font-mono text-[10px] text-slate">Curating next story…</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cobalt/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-signal-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2a2a3a] rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse-slow" />
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-gold">Open Source</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.08] mb-6">
              The fintech news{' '}
              <span className="text-gradient">you should have read</span>{' '}
              before your first meeting.
            </h1>

            <p className="text-lg text-slate leading-relaxed mb-8 max-w-lg">
              An AI agent that monitors banks, regulators, and neobanks 24/7.
              Delivers a personalised morning briefing at 9 AM. No share prices,
              no conference noise, just what matters. And it gets smarter every day.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-7 py-3.5">
                <Chrome size={16} />
                Install Browser Extension
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-7 py-3.5">
                <Github size={16} />
                Star on GitHub
              </a>
            </div>

            {/* Social proof stats */}
            <div className="flex items-center gap-8">
              {[
                { value: '$0', label: 'Monthly cost' },
                { value: '9 AM', label: 'Daily delivery' },
                { value: '4', label: 'Channels' },
                { value: 'Every 2 hrs', label: 'Breaking news scan' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-cream">{s.value}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-gold-dark">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated email preview */}
          <div className="flex justify-center lg:justify-end">
            <EmailPreview />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a href="#ticker" className="flex flex-col items-center gap-2 text-slate hover:text-cream transition-colors">
            <span className="font-mono text-[10px] tracking-widest uppercase">Explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}