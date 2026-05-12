'use client'
import { Chrome, MousePointer, Sidebar, Search } from 'lucide-react'

const CHROME_STORE_URL = process.env.NEXT_PUBLIC_CHROME_STORE_URL || '#'
const EXT_ZIP_URL = process.env.NEXT_PUBLIC_EXTENSION_ZIP_URL || '#'

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Ask about any page',
    body: 'Reading a Reuters article about a bank? Click Ask → the extension searches your story archive and surfaces everything you\'ve already been briefed on about this company, with citations.',
    color: '#60a5fa',
  },
  {
    icon: MousePointer,
    title: 'One-click watchlist',
    body: 'Select any company name on any webpage. Right-click → "Add to FinTech Watchlist". Done. The entity appears in tomorrow\'s digest with dedicated coverage.',
    color: '#c9a96e',
  },
  {
    icon: Sidebar,
    title: 'Persistent sidebar',
    body: 'Open a sidebar panel that slides in on any page. It auto-searches your archive using the page title and shows AI-synthesised answers with source citations without leaving the page.',
    color: '#4ade80',
  },
]

export default function Extension() {
  return (
    <section id="extension" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — popup mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-2xl scale-110 pointer-events-none" />

              {/* Browser chrome */}
              <div className="relative w-80 bg-[#1c1c26] rounded-xl border border-[#2a2a3a] overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="bg-[#13131a] px-4 py-3 flex items-center gap-3 border-b border-[#2a2a3a]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
                  </div>
                  <div className="flex-1 bg-[#0a0a0f] rounded-md px-3 py-1 font-mono text-[10px] text-slate">
                    reuters.com/markets/europe/bank...
                  </div>
                  {/* Extension icon in toolbar */}
                  <div className="w-6 h-6 bg-navy rounded flex items-center justify-center border border-[#2a2a3a]">
                    <span className="font-mono text-[8px] text-gold font-bold">FD</span>
                  </div>
                </div>

                {/* Extension popup */}
                <div className="bg-[#0f0f17] p-0">
                  {/* Popup header */}
                  <div className="bg-[#13131a] border-b border-[#2a2a3a] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🏦</span>
                      <div>
                        <p className="font-serif text-[12px] font-bold text-cream">FinDigest.ai</p>
                        <p className="font-mono text-[8px] tracking-widest uppercase text-gold-dark">Agent Extension</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-signal-green" />
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-[#2a2a3a] bg-[#13131a]">
                    {['Ask', 'Watchlist', 'Status', 'Settings'].map((t, i) => (
                      <div
                        key={t}
                        className={`flex-1 py-2 text-center font-mono text-[9px] tracking-widest uppercase border-b-2 ${
                          i === 0
                            ? 'text-signal-blue border-signal-blue'
                            : 'text-slate border-transparent'
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  {/* Ask tab content */}
                  <div className="p-4">
                    <div className="flex gap-2 mb-3">
                      <div className="flex-1 bg-[#1c1c26] border border-[#2a2a3a] rounded-lg px-3 py-2 font-mono text-[10px] text-slate">
                        Barclays open banking news…
                      </div>
                      <div className="bg-signal-blue text-white rounded-lg px-3 py-2 font-mono text-[9px] uppercase tracking-widest">
                        Ask
                      </div>
                    </div>
                    <div className="bg-[#13131a] border border-[#2a2a3a] rounded-lg p-3 mb-3">
                      <p className="font-serif text-[11px] text-slate leading-relaxed">
                        Barclays has been active in open banking this week. <span className="text-cream">[1]</span> They announced a partnership with Yapily to expand their API coverage…
                      </p>
                    </div>
                    <p className="font-mono text-[8px] tracking-widest uppercase text-gold-dark mb-2">From your archive</p>
                    {[
                      { source: 'FT', title: 'Barclays doubles down on open banking APIs' },
                      { source: 'Reuters', title: 'UK banks face PSD3 compliance deadline' },
                    ].map((s) => (
                      <div key={s.title} className="bg-[#13131a] border border-[#2a2a3a] rounded-md px-3 py-2 mb-1.5 cursor-pointer hover:border-[#3a3a4a]">
                        <p className="font-mono text-[8px] text-gold-dark mb-0.5">{s.source}</p>
                        <p className="font-serif text-[10px] text-cream">{s.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <p className="label mb-4">Browser Extension</p>
            <h2 className="section-title mb-5">
              Your agent,{' '}
              <span className="text-gradient">on every page.</span>
            </h2>
            <p className="section-sub mb-10">
              A Manifest V3 extension for Chrome and Firefox that brings your story archive
              into every webpage without leaving the tab.
            </p>

            <div className="space-y-6 mb-10">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    <c.icon size={16} style={{ color: c.color }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cream mb-1">{c.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Chrome size={16} />
                Chrome Web Store (Soon)
              </a>
              <a href={EXT_ZIP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Download .zip
              </a>
            </div>

            <p className="font-mono text-[10px] text-slate mt-4 tracking-wide">
              Firefox: load the .zip via about:debugging → Load Temporary Add-on
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}