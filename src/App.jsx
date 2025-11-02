import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-violet-200 selection:text-violet-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <Roadmap />
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-10 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to start your journaling journey?</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Sign up, write your first entry, and invite a friend when youre ready.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="inline-flex justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-medium hover:opacity-90 transition">Create your account</a>
                <a href="#features" className="inline-flex justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Explore features</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Journex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
