import { CheckCircle2, CircleDashed, Rocket } from 'lucide-react'

const phases = [
  {
    title: 'Phase 1: Core Diary',
    status: 'current',
    items: [
      'Auth & onboarding',
      'CRUD entries with rich editor',
      'Calendar + tags + mood tracker',
    ],
  },
  {
    title: 'Phase 2: Social Layer',
    status: 'next',
    items: ['Friends & permissions', 'Comments & reactions', 'Notifications'],
  },
  {
    title: 'Phase 3: Groups & Spaces',
    status: 'next',
    items: ['Shared notebooks', 'Group chat threads', 'Mood dashboards'],
  },
  {
    title: 'Phase 4: Engagement & AI',
    status: 'later',
    items: ['Streaks & badges', 'AI summaries & prompts', 'PDF export & voice notes'],
  },
]

function StatusBadge({ status }) {
  const map = {
    current: { label: 'In Progress', color: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-900' },
    next: { label: 'Up Next', color: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900' },
    later: { label: 'Planned', color: 'bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-neutral-800/60 dark:text-neutral-300 dark:border-neutral-700' },
  }
  const cfg = map[status] || map.later
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${cfg.color}`}>
      {status === 'current' ? <CheckCircle2 size={14} /> : <CircleDashed size={14} />}
      {cfg.label}
    </span>
  )
}

function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Clear roadmap from personal to social
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Launch fast with the essentials, then layer in friends, groups, and collaboration.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{phase.title}</h3>
                <StatusBadge status={phase.status} />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-violet-600 dark:text-violet-300"><Rocket size={14} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
