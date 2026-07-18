'use client'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'

// Shared shell for all legal pages (Privacy Policy, Terms, No Refund Policy).
// Renders a dark hero, a sticky in-page nav that tracks scroll position,
// and a prose column for the section content — reused across all three pages
// so they read as one consistent document family, not three one-off pages.
export default function LegalLayout({ eyebrow, title, lastUpdated, sections }) {
    const [activeId, setActiveId] = useState(sections[0]?.id)

    useEffect(() => {
        const headings = sections
            .map((s) => document.getElementById(s.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (visible[0]) setActiveId(visible[0].target.id)
            },
            { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
        )

        headings.forEach((h) => observer.observe(h))
        return () => observer.disconnect()
    }, [sections])

    return (
        <main className="bg-[#0a0a12] min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 px-6">
                <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />
                <div className="max-w-4xl mx-auto relative">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-white/50 text-[13px] font-medium hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={14} />
                        Back to home
                    </Link>
                    <p className="text-[13px] font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">
                        {eyebrow}
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                        {title}
                    </h1>
                    <div className="flex items-center gap-1.5 text-white/40 text-[13px]">
                        <Clock size={13} />
                        Last updated {lastUpdated}
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="relative px-6 pb-28">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">
                    {/* Sticky TOC — desktop only */}
                    <nav className="hidden lg:block sticky top-28 self-start">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/30 mb-4">
                            On this page
                        </p>
                        <ul className="space-y-1 border-l border-white/10">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className={`block pl-4 py-1.5 text-[13px] leading-snug -ml-px border-l-2 transition-colors ${activeId === s.id
                                                ? 'border-violet-400 text-white font-medium'
                                                : 'border-transparent text-white/40 hover:text-white/70'
                                            }`}
                                    >
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Content */}
                    <div className="min-w-0">
                        {sections.map((s) => (
                            <div key={s.id} id={s.id} className="scroll-mt-28 pb-12 border-b border-white/5 mb-12 last:border-0 last:mb-0 last:pb-0">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                    {s.title}
                                </h2>
                                <div className="text-[15px] leading-relaxed text-white/60 space-y-4 [&_strong]:text-white/85 [&_strong]:font-semibold [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-violet-300 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-violet-200">
                                    {s.content}
                                </div>
                            </div>
                        ))}

                        {/* Cross-links to the other two policies */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                            <p className="w-full text-[13px] text-white/40 mb-1">Related policies</p>
                            <Link
                                to="/privacy-policy"
                                className="text-[13px] font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-[13px] font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                to="/no-refund-policy"
                                className="text-[13px] font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 transition-colors"
                            >
                                No Refund Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}