'use client'

const HEADLINES = [
  'EU PSD3 mandates premium API access by Q3 2026',
  'BlackRock closes $400M tokenisation acquisition',
  'Monzo receives full BaFin banking licence',
  'RBI introduces corrective framework for payment aggregators',
  'HSBC deploys AI fraud detection across 40M accounts',
  'Goldman Sachs closes $3.2B private credit fund',
  'Stripe launches embedded finance for SMBs',
  'Bank of England publishes CBDC consultation response',
  'Revolut valued at $45B in secondary share sale',
  'FCA issues guidance on AI use in financial services',
]

export default function NewsTicker() {
  const doubled = [...HEADLINES, ...HEADLINES]

  return (
    <section id="ticker" className="bg-navy border-y border-[#2a2a3a] py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 border-r border-[#2a2a3a] mr-6">
          <span className="font-mono text-[9px] tracking-[3px] uppercase text-gold font-bold">
            LIVE INTEL
          </span>
        </div>
        <div className="ticker-wrap flex-1">
          <div className="ticker-track">
            {doubled.map((h, i) => (
              <span key={i} className="inline-flex items-center gap-6">
                <span className="font-mono text-[11px] text-slate hover:text-cream transition-colors cursor-default">
                  {h}
                </span>
                <span className="text-[#2a2a3a] text-lg">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}