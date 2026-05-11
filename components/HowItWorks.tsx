'use client'
import { useState } from 'react'

const NODES = [
  {
    id: 'news',
    label: 'news_agent',
    icon: '🔍',
    title: '8 Parallel Searches',
    body: 'Tavily runs 8 focused queries across fintech verticals simultaneously. Watchlist entities get dedicated searches — guaranteed inclusion. Keyword exclusion filters strip share prices and conference noise before the LLM sees anything.',
    color: '#60a5fa',
  },
  {
    id: 'memory',
    label: 'memory_agent',
    icon: '🧬',
    title: 'Semantic Deduplication',
    body: 'All-MiniLM-L6-v2 (80MB, runs offline) embeds every headline. pgvector cosine similarity compares against the last 7 days of sent stories. Near-duplicates are dropped. You never read the same story twice.',
    color: '#c9a96e',
  },
  {
    id: 'curator',
    label: 'curator_agent',
    icon: '✍️',
    title: 'LLM Curation',
    body: "Groq (Llama 3.3 70B) receives novel stories plus your preference profile. Selects the best 6–8, writes 2–3 sentence executive synopses, generates a subject line. If you've rated stories, the profile is injected. If you're new, your onboarding choices apply.",
    color: '#a78bfa',
  },
  {
    id: 'delivery',
    label: 'delivery_agent',
    icon: '📤',
    title: 'Multi-Channel Delivery',
    body: 'Gmail sends the HTML email. Slack posts a threaded digest. Telegram sends individual story messages. WhatsApp delivers a compact mobile format. All channels are independent — one failure never blocks another.',
    color: '#4ade80',
  },
  {
    id: 'calendar',
    label: 'calendar_agent',
    icon: '📅',
    title: 'Audit & Logging',
    body: 'A Google Calendar event is created as an audit trail. The run is persisted to PostgreSQL run_history with status, story count, duration, and any errors. Story embeddings are saved for the next deduplication cycle.',
    color: '#fb923c',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState('news')
  const activeNode = NODES.find((n) => n.id === active)!

  return (
    <section id="how-it-works" className="py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label mb-4">Architecture</p>
          <h2 className="section-title mb-5">
            Six specialist agents.<br />
            <span className="text-gradient">One fault-tolerant pipeline.</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">
            Built on LangGraph's StateGraph with PostgreSQL checkpointing.
            If the server restarts mid-run, the graph resumes from the last completed node never from scratch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pipeline diagram */}
          <div>
            <div className="card-dark p-6">
              <p className="label mb-6">LangGraph StateGraph — digest_graph.py</p>

              <div className="space-y-2">
                {NODES.map((node, i) => (
                  <div key={node.id}>
                    <button
                      onClick={() => setActive(node.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                        active === node.id
                          ? 'border-[#3a3a4a] bg-[#1c1c26]'
                          : 'border-transparent hover:border-[#2a2a3a] hover:bg-[#161620]'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                        style={{ background: `${node.color}18`, border: `1px solid ${node.color}40` }}
                      >
                        {node.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: active === node.id ? node.color : '#94a3b8' }}
                        >
                          {node.label}
                        </span>
                        <p className="text-sm text-cream font-serif mt-0.5">{node.title}</p>
                      </div>
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity"
                        style={{
                          background: node.color,
                          opacity: active === node.id ? 1 : 0.2,
                        }}
                      />
                    </button>
                    {i < NODES.length - 1 && (
                      <div className="flex items-center ml-6 py-1">
                        <div className="w-px h-4 bg-[#2a2a3a]" />
                        <span className="font-mono text-[9px] text-slate ml-2">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[#2a2a3a] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-signal-green" />
                <span className="font-mono text-[10px] text-slate">
                  PostgreSQL checkpoint after every node · Resumes on restart
                </span>
              </div>
            </div>
          </div>

          {/* Active node detail */}
          <div className="lg:sticky lg:top-24">
            <div
              className="card-dark p-8 transition-all duration-300"
              style={{ borderColor: `${activeNode.color}30` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ background: `${activeNode.color}15`, border: `1px solid ${activeNode.color}30` }}
              >
                {activeNode.icon}
              </div>
              <p className="font-mono text-[10px] tracking-[2px] uppercase mb-2" style={{ color: activeNode.color }}>
                {activeNode.label}
              </p>
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">{activeNode.title}</h3>
              <p className="text-slate leading-relaxed">{activeNode.body}</p>

              {/* Code snippet */}
              <div className="mt-6 p-4 bg-[#0a0a0f] rounded-lg border border-[#2a2a3a] font-mono text-xs text-slate overflow-x-auto">
                <span style={{ color: activeNode.color }}>async def </span>
                <span className="text-cream">{activeNode.id}_agent</span>
                <span className="text-slate">(state: DigestState) → dict:</span>
                <br />
                <span className="ml-4 text-slate">"""</span>
                <br />
                <span className="ml-4 text-slate">{activeNode.title}</span>
                <br />
                <span className="ml-4 text-slate">Checkpointed to PostgreSQL on completion.</span>
                <br />
                <span className="ml-4 text-slate">"""</span>
              </div>
            </div>

            {/* Scheduler */}
            <div className="card-dark p-5 mt-4">
              <p className="label mb-3">APScheduler — four jobs</p>
              <div className="space-y-2">
                {[
                  { time: '9:00 AM daily', label: 'Daily digest', color: '#60a5fa' },
                  { time: 'Every 2 hours', label: 'Breaking news scan', color: '#f87171' },
                  { time: 'Fri 8:00 AM', label: 'Weekly synthesis', color: '#a78bfa' },
                  { time: 'Mon 8:00 AM', label: 'Agent health report', color: '#4ade80' },
                ].map((j) => (
                  <div key={j.label} className="flex items-center justify-between">
                    <span className="font-mono text-[10px]" style={{ color: j.color }}>{j.time}</span>
                    <span className="text-sm text-slate">{j.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}