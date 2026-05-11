'use client'
import { useState } from 'react'
import { Github, Send, CheckCircle } from 'lucide-react'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/YOUR_USERNAME/fintech-agent'

const AREAS = [
  'Additional delivery channels (Discord, Teams)',
  'Test suite',
  'Multi-language digest support',
  'Firefox extension testing',
  'Docker Compose / self-hosting',
  'Research brief quality',
  'Onboarding UX',
  'New search verticals',
  'Documentation',
  'Something else',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contribute() {
  const [form, setForm] = useState({ name: '', email: '', github: '', message: '' })
  const [areas, setAreas] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const toggleArea = (area: string) =>
    setAreas((prev) => prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, areas }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section id="contribute" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="label mb-4">Open Contribution</p>
            <h2 className="section-title mb-5">
              Build it with us.<br />
              <span className="text-gradient">Make it better for everyone.</span>
            </h2>
            <p className="section-sub mb-8">
              This project was built to ship fast and learn faster.
              It has no tests, probably a few rough edges, and a long list of things
              that would make it significantly better. That's where you come in.
            </p>

            {/* Contribution areas */}
            <div className="card-dark p-6 mb-8">
              <p className="label mb-4">Where help is needed most</p>
              <div className="space-y-3">
                {[
                  { area: 'Test suite', priority: 'HIGH', color: '#f87171' },
                  { area: 'Additional delivery channels (Discord, Teams, LINE)', priority: 'HIGH', color: '#f87171' },
                  { area: 'Multi-language digest support', priority: 'MED', color: '#fbbf24' },
                  { area: 'Firefox extension compatibility', priority: 'MED', color: '#fbbf24' },
                  { area: 'Docker Compose for self-hosting', priority: 'MED', color: '#fbbf24' },
                  { area: 'Helm chart for Kubernetes', priority: 'LOW', color: '#4ade80' },
                ].map((i) => (
                  <div key={i.area} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate">{i.area}</span>
                    <span
                      className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded flex-shrink-0"
                      style={{ color: i.color, background: `${i.color}15`, border: `1px solid ${i.color}30` }}
                    >
                      {i.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center"
            >
              <Github size={16} />
              Browse open issues on GitHub
            </a>
          </div>

          {/* Right — form */}
          <div>
            <div className="card-dark p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-signal-green mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-cream mb-3">You're registered!</h3>
                  <p className="text-slate leading-relaxed">
                    We'll reach out to <strong className="text-cream">{form.email}</strong> and add you
                    to the project channel. Watch the GitHub repo for issues tagged for contributors.
                  </p>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 justify-center"
                  >
                    <Github size={16} />
                    Star the repo
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="label mb-6">Register as a contributor</p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-[10px] tracking-widest uppercase text-slate block mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-[#1c1c26] border border-[#2a2a3a] rounded-lg px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-signal-blue transition-colors placeholder:text-slate"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] tracking-widest uppercase text-slate block mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-[#1c1c26] border border-[#2a2a3a] rounded-lg px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-signal-blue transition-colors placeholder:text-slate"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-slate block mb-2">
                        GitHub username
                      </label>
                      <input
                        type="text"
                        placeholder="your-github-handle"
                        value={form.github}
                        onChange={(e) => setForm({ ...form, github: e.target.value })}
                        className="w-full bg-[#1c1c26] border border-[#2a2a3a] rounded-lg px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-signal-blue transition-colors placeholder:text-slate"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-slate block mb-3">
                        Areas of interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {AREAS.map((area) => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => toggleArea(area)}
                            className={`px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wide transition-all border ${
                              areas.includes(area)
                                ? 'bg-signal-blue/15 border-signal-blue text-signal-blue'
                                : 'bg-transparent border-[#2a2a3a] text-slate hover:border-[#3a3a4a]'
                            }`}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-slate block mb-2">
                        Anything else
                      </label>
                      <textarea
                        rows={3}
                        placeholder="What you'd like to build, your background, questions…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-[#1c1c26] border border-[#2a2a3a] rounded-lg px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-signal-blue transition-colors placeholder:text-slate resize-none"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-signal-red font-mono text-xs mt-3">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center mt-6 py-4 disabled:opacity-50"
                  >
                    <Send size={15} />
                    {status === 'submitting' ? 'Sending…' : 'Register as Contributor'}
                  </button>

                  <p className="font-mono text-[10px] text-slate text-center mt-4">
                    No spam. We'll only contact you about the project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}