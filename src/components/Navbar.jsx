import { useEffect, useState } from 'react'
import { Rocket, Moon, Sun, Github } from 'lucide-react'

function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <span>Journex</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a>
          <a href="#roadmap" className="hover:text-neutral-900 dark:hover:text-white">Roadmap</a>
          <a href="/" className="hover:text-neutral-900 dark:hover:text-white">Home</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/test"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Open Backend Test
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Github size={16} /> Star
          </a>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
