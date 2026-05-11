'use client'

const FEATURES = [
  {
    icon: '🧠',
    label: 'Gets Smarter Daily',
    title: 'Preference Learning',
    body: 'Click 👍 or 👎 on any story. After 5 signals, the agent builds a preference profile liked topics, trusted sources, key entities and injects it into every subsequent curation prompt. It literally learns your taste.',
    accent: '#60a5fa',
  },
  {
    icon: '🎯',
    label: 'Day-One Personalisation',
    title: 'Upfront Onboarding',
    body: 'Choose your sectors (Payments, Regulation, CBDC, Fraud…), regions (UK, India, US, EU…), and role (Executive, Risk Officer, Product Lead, Investor). Your very first digest is already tailored no waiting.',
    accent: '#c9a96e',
  },
  {
    icon: '🚨',
    label: 'Never Miss Breaking News',
    title: 'Real-Time Alerts',
    body: 'A lighter agent polls every 2 hours and scores each story 1–10 for urgency using Groq. Bank failures, major regulatory actions, large-scale fraud anything scoring 8+ triggers immediate delivery across all channels.',
    accent: '#f87171',
  },
  {
    icon: '👁',
    label: 'Track What Matters',
    title: 'Entity Watchlist',
    body: 'Add companies, regulators, or topics to your watchlist. Every digest run includes targeted searches for your entities they always appear, bypassing the normal ranking gate. Sentiment is tracked and velocity alerts fire when it shifts.',
    accent: '#4ade80',
  },
  {
    icon: '📋',
    label: 'Friday, 8 AM',
    title: 'Weekly Synthesis',
    body: 'Not a summary a narrative. Every Friday the agent reads the week\'s stories and extracts 3–5 macro themes as analytical arcs with direction and implication. Written like The Economist, not a bullet list.',
    accent: '#a78bfa',
  },
  {
    icon: '🔍',
    label: 'Ask Anything',
    title: 'Story Q&A',
    body: 'Ask natural language questions about your archive: "What happened with HSBC this week?", "Any open banking news from the EU?". Semantic search over pgvector finds relevant stories, Groq synthesises an answer with citations.',
    accent: '#34d399',
  },
  {
    icon: '📑',
    label: 'On Demand',
    title: 'Deep-Dive Research',
    body: 'Request a structured research brief on any topic, 15 targeted searches, 30-day window, synthesised into executive summary, key developments, strategic implications, and a downloadable PDF.',
    accent: '#fb923c',
  },
  {
    icon: '📊',
    label: 'Self-Monitoring',
    title: 'Health Reports',
    body: 'Every Monday the agent emails itself a health report: success rate, average stories, run durations, and LLM-analysed error patterns. It tells you when something\'s wrong before you notice.',
    accent: '#38bdf8',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-4">What it does</p>
          <h2 className="section-title mb-5">
            Not a news aggregator.<br />
            <span className="text-gradient">An intelligence system.</span>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">
            Eight coordinated agents working in a LangGraph pipeline each with a single job,
            each checkpointed to PostgreSQL so nothing is ever lost.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-dark p-6 group hover:border-[#3a3a4a] transition-colors relative overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: f.accent }}
              />

              <div className="text-2xl mb-4">{f.icon}</div>
              <p className="font-mono text-[9px] tracking-[2px] uppercase mb-2" style={{ color: f.accent }}>
                {f.label}
              </p>
              <h3 className="font-serif text-lg font-bold text-cream mb-3">{f.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}