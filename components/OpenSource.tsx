'use client'
import { Github, Star, GitFork, Code2, Zap } from 'lucide-react'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/shazam37/FinDigest.ai'

const STACK = [
  { name: 'FastAPI', desc: 'Async API framework', color: '#009688' },
  { name: 'LangGraph', desc: 'Multi-agent orchestration', color: '#f97316' },
  { name: 'Groq', desc: 'Llama 3.3 70B LLM', color: '#a78bfa' },
  { name: 'Tavily', desc: 'AI-native news search', color: '#60a5fa' },
  { name: 'pgvector', desc: 'Semantic deduplication', color: '#4ade80' },
  { name: 'PostgreSQL', desc: 'Checkpointing + memory', color: '#336791' },
  { name: 'Slack SDK', desc: 'Team delivery', color: '#4a154b' },
  { name: 'Twilio', desc: 'WhatsApp delivery', color: '#f22f46' },
  { name: 'reportlab', desc: 'PDF generation', color: '#c9a96e' },
  { name: 'LangSmith', desc: 'Observability + tracing', color: '#38bdf8' },
]

const FILES = [
  { path: 'app/graph/digest_graph.py', desc: 'LangGraph StateGraph + PostgresSaver' },
  { path: 'app/preferences.py', desc: 'Feedback-driven preference learning' },
  { path: 'app/watchlist.py', desc: 'Entity tracking + sentiment velocity' },
  { path: 'app/delivery/channels.py', desc: 'Multi-channel fan-out' },
  { path: 'app/routers/research.py', desc: 'Deep-dive brief + PDF generation' },
  { path: 'extension/src/content.js', desc: 'Browser sidebar + toast notifications' },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="label mb-4">100% Open Source</p> */}
          <h2 className="section-title mb-5">
            Built in public.<br />
            <span className="text-gradient">Free forever.</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">
            Every line of code is on GitHub deploy it yourself,
            fork it, extend it. No SaaS lock-in, no API key required from us.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            {/* <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-8 py-4"
            >
              <Github size={16} />
              View on GitHub
            </a> */}
            <a
              href={`${GITHUB_URL}/fork`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm px-8 py-4"
            >
              <GitFork size={16} />
              Fork
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tech stack */}
          <div className="card-dark p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={18} className="text-gold" />
              <p className="label">Tech stack — all free tier</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {STACK.map((t) => (
                <div key={t.name} className="flex items-center gap-3 p-3 bg-[#161620] rounded-lg border border-[#2a2a3a]">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: t.color }}
                  />
                  <div>
                    <p className="font-mono text-xs text-cream font-bold">{t.name}</p>
                    <p className="font-mono text-[10px] text-slate">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-[#0a0a0f] rounded-lg border border-[#2a2a3a]">
              <p className="font-mono text-[10px] text-gold mb-1">$ monthly cost</p>
              <p className="font-serif text-3xl font-bold text-signal-green">$0</p>
              <p className="font-mono text-[10px] text-slate mt-1">Everything runs on free tiers</p>
            </div>
          </div>

          {/* Key files */}
          <div className="card-dark p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={18} className="text-gold" />
              <p className="label">Key files to explore</p>
            </div>
            <div className="space-y-2">
              {FILES.map((f) => (
                <a
                  key={f.path}
                  href={`${GITHUB_URL}/blob/main/${f.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-[#161620] rounded-lg border border-[#2a2a3a] hover:border-[#3a3a4a] group transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-[11px] text-signal-blue group-hover:text-cream transition-colors">{f.path}</p>
                    <p className="font-mono text-[10px] text-slate mt-0.5">{f.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick deploy */}
            <div className="mt-6 p-4 bg-[#0a0a0f] rounded-lg border border-[#2a2a3a]">
              <p className="font-mono text-[10px] text-gold mb-3">Quick deploy to Render</p>
              <div className="space-y-1.5 font-mono text-[11px] text-slate">
                <div><span className="text-signal-green">$</span> git clone {GITHUB_URL.replace('https://github.com/', 'gh/')}</div>
                <div><span className="text-signal-green">$</span> cp .env.example .env</div>
                <div><span className="text-signal-green">$</span> python scripts/setup_database.py</div>
                <div><span className="text-signal-green">$</span> uvicorn app.main:app --reload</div>
              </div>
            </div>
          </div>
        </div>

        {/* License badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 card-dark px-6 py-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-gold">MIT License</span>
            <span className="text-[#2a2a3a]">·</span>
            <span className="font-mono text-[10px] text-slate">Use freely · Modify freely · Deploy freely · Ship it</span>
          </div>
        </div>
      </div>
    </section>
  )
}