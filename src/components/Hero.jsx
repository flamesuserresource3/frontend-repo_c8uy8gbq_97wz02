import { Sparkles, Calendar, ShieldCheck, Users } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/60 via-transparent to-transparent dark:from-violet-500/10 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-900/50 bg-violet-50 dark:bg-violet-950/30 px-3 py-1 text-xs text-violet-700 dark:text-violet-300">
              <Sparkles size={14} />
              Private, social, and delightful
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Your personal diary for you and your closest circles
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
              Capture thoughts, track moods, and share moments with friends and groups. Powerful privacy controls and a beautiful writing experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-medium hover:opacity-90 transition">
                Get Started
              </a>
              <a href="#roadmap" className="inline-flex justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                See Roadmap
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2"><Calendar size={16} /> Calendar view</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16} /> Private by default</div>
              <div className="flex items-center gap-2"><Users size={16} /> Spaces & friends</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-neutral-500">Editor Preview</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-neutral-500 text-sm">Today · Mood: 😊 Happy</div>
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-xl font-semibold">A calm, focused morning</h2>
                  <p>
                    Wrote for 25 minutes with a warm coffee. Planned my week and
                    shared a gratitude note with the group. Feeling energized.
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Streak day 7 🔥</li>
                    <li>Tag: #gratitude #focus</li>
                    <li>Shared with: Close Friends</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
