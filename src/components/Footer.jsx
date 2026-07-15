import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
import { siteConfig, footerColumns, socialLinks } from '../data/siteData'
import cc from '../assets/webp/cc.webp'

// Maps the `label` in siteData's socialLinks to an actual icon component,
// so adding/removing a platform in siteData.js is all you need to do.
const socialIconMap = {
  Instagram, Twitter, LinkedIn: Linkedin, YouTube: Youtube,
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a12] overflow-hidden">
      {/* Ambient glow, consistent with the dark sections elsewhere on the site */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute inset-0 border-t border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={cc}
                alt={`${siteConfig.name || 'Creative Crew'} logo`}
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-semibold tracking-tight text-[16px]">
                {siteConfig.name}.
              </span>
            </Link>
            <h3 className="text-[28px] leading-tight font-bold text-white mb-4">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                unforgettable
              </span>
              .
            </h3>
            <p className="text-white/50 text-sm mb-4">
              Subscribe for the occasional insight — no spam, ever.
            </p>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 min-w-0 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-400/60 transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[13px] font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
              >
                Subscribe <ArrowUpRight size={13} />
              </button>
            </form>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold tracking-wider uppercase text-white/35 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with obsession.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = socialIconMap[s.label]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}