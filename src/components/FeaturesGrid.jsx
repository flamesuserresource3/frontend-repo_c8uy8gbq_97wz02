import { PenSquare, CalendarDays, Tag, Smile, Shield, Share2, MessageSquare, Bell } from 'lucide-react'

const features = [
  {
    title: 'Rich editor',
    desc: 'Write in a delightful, distraction-free editor with formatting that just works.',
    icon: PenSquare,
  },
  {
    title: 'Calendar view',
    desc: 'Browse entries by day, week, or month to spot patterns and streaks.',
    icon: CalendarDays,
  },
  { title: 'Tags & filters', desc: 'Organize with tags and categories for fast search.', icon: Tag },
  { title: 'Mood tracker', desc: 'Track how you feel with emojis and insights over time.', icon: Smile },
  { title: 'Private by default', desc: 'You control who sees what—always.', icon: Shield },
  { title: 'Share with friends', desc: 'Invite friends or groups to specific spaces.', icon: Share2 },
  { title: 'Comments & reactions', desc: 'Conversations that stay on-topic.', icon: MessageSquare },
  { title: 'Smart reminders', desc: 'Stay consistent with flexible notifications.', icon: Bell },
]

function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Built for private journaling and social moments
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Start simple with a personal diary. Grow into spaces, friends, and collaborative notebooks—all with strong privacy controls.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-violet-600 dark:text-violet-300 grid place-items-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
