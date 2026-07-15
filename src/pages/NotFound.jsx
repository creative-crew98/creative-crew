import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[80vh] flex items-center justify-center px-6 bg-[#0a0a12]">
        <Reveal className="text-center">
          <p className="text-7xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
            404
          </p>
          <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
          <p className="text-white/50 text-[14px] mb-8">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#0a0a12] text-[13px] font-semibold px-5 py-2.5 hover:bg-violet-100 transition-colors"
          >
            Back home
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  )
}
