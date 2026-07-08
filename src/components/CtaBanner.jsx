import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-fuchsia-600 py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-4">
          Ready?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Let's make your brand impossible to ignore.
        </h2>
        <p className="mt-4 text-white/80 text-[15px] max-w-xl mx-auto">
          Book a free 30-minute strategy call. We'll audit your funnel and share 3 wins you can
          implement this week.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-violet-700 text-[14px] font-semibold px-6 py-3 hover:bg-violet-100 transition-colors"
          >
            Book free consultation ↗
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 text-white text-[14px] font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
          >
            See portfolio
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
