import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkles, Phone, Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change (via popstate/click)
  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-[#0a0a12]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Sparkles size={14} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="text-white font-semibold tracking-tight text-[15px]">Creative Crew</span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 text-[13.5px] text-white/70">
          {navLinks.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+14155550142"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Call us"
          >
            <Phone size={13} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#0a0a12] text-[13px] font-semibold px-4 py-2.5 hover:bg-violet-100 transition-colors"
          >
            Book a call
          </Link>
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a12]/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 text-[15px] transition-colors ${
                      isActive ? 'text-white' : 'text-white/70'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
