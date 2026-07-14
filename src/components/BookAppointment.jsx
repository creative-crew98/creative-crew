import { useEffect, useMemo, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Calendar, Clock, Check, ChevronDown, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteData'

// Same Apps Script Web App used for the contact form — it handles both
// storing bookings in a "Bookings" sheet AND emailing the client + you.
// See google-apps-script/Code.gs for the backend, and BOOKING_SETUP.md for
// deployment steps.
const BOOKING_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwJNVWQ9DDpVrQu9rFW83EZQFkTr5CKX590jVvmi8PZkNba0_6VyvDCsrqI7PjrJ9SQLQ/exec'

const serviceOptions = services.map((s) => s.title)

// Business hours — edit freely. 24h "HH:MM" is easier to reason about,
// we format it for display.
const TIME_SLOTS = [
    '11:00', '12:00',
    '01:00', '03:00', '04:00', '05:00', '06:00'
]

// 0 = Sunday ... 6 = Saturday. Days NOT in this list are unbookable.
const WORKING_DAYS = [1, 2, 3, 4, 5, 6] // Mon–Fri

const DAYS_AHEAD = 30

function formatTime(t) {
    const [h, m] = t.split(':').map(Number)
    const period = h >= 12 ? 'PM' : 'AM'
    const hour12 = h % 12 === 0 ? 12 : h % 12
    return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

function toISODate(d) {
    return d.toISOString().slice(0, 10)
}

function formatDateLabel(iso) {
    const d = new Date(`${iso}T00:00:00`)
    return d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
}

// Builds the list of bookable dates (next DAYS_AHEAD days, minus non-working days)
function getBookableDates() {
    const out = []
    const today = new Date()
    for (let i = 1; i <= DAYS_AHEAD; i++) {
        const d = new Date(today)
        d.setDate(d.getDate() + i)
        if (WORKING_DAYS.includes(d.getDay())) out.push(toISODate(d))
    }
    return out
}

export default function BookAppointment() {
    const bookableDates = useMemo(() => getBookableDates(), [])

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: serviceOptions[0] || '',
        message: '',
    })
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [bookedTimes, setBookedTimes] = useState([])
    const [loadingSlots, setLoadingSlots] = useState(false)
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
    const updateService = (value) => setForm((f) => ({ ...f, service: value }))

    // Whenever the date changes, fetch which times are already taken for that
    // day so we can grey them out — this is what stops two people picking the
    // same slot.
    useEffect(() => {
        if (!date) {
            setBookedTimes([])
            return
        }
        let cancelled = false
        setLoadingSlots(true)
        setTime('')
        fetch(`${BOOKING_ENDPOINT}?date=${date}`)
            .then((res) => res.json())
            .then((data) => {
                if (cancelled) return
                setBookedTimes((data.booked || []).map((b) => b.time))
            })
            .catch(() => {
                if (!cancelled) setSubmitError('Could not load availability. Please try again.')
            })
            .finally(() => {
                if (!cancelled) setLoadingSlots(false)
            })
        return () => {
            cancelled = true
        }
    }, [date])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const next = {}
        if (!form.name.trim()) next.name = 'Please enter your name.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
        if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
        else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
        if (!form.service) next.service = 'Please select a service.'
        if (!date) next.date = 'Please pick a date.'
        if (!time) next.time = 'Please pick a time.'
        setErrors(next)
        if (Object.keys(next).length > 0) return

        setSubmitting(true)
        setSubmitError('')
        try {
            const res = await fetch(BOOKING_ENDPOINT, {
                method: 'POST',
                // text/plain avoids a CORS preflight so Apps Script can respond
                // with a readable JSON body (see BOOKING_SETUP.md).
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    service: form.service,
                    message: form.message,
                    date,
                    time,
                }),
            })
            const data = await res.json()

            if (!data.ok && data.error === 'slot_taken') {
                // Someone else grabbed it between page-load and submit — refresh
                // the slot list and ask them to pick again.
                setBookedTimes((prev) => [...prev, time])
                setTime('')
                setSubmitError('That time was just booked by someone else — please pick another slot.')
                setSubmitting(false)
                return
            }
            if (!data.ok) {
                throw new Error(data.error || 'Unknown error')
            }

            setSubmitted(true)
        } catch (err) {
            setSubmitError('Something went wrong booking your appointment. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <section id="book-a-call" className="bg-[#0a0a12] pb-28 px-6 scroll-mt-24">
                <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-10 flex flex-col items-center text-center">
                    <span className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-5">
                        <CalendarCheck size={22} className="text-white" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">You're booked</h3>
                    <p className="text-white/55 text-sm max-w-sm">
                        {formatDateLabel(date)} at {formatTime(time)}. A confirmation has been sent to{' '}
                        <span className="text-white/80">{form.email}</span>.
                    </p>
                </div>
            </section>
        )
    }

    return (
        // id="book-a-call" is the anchor the navbar's "Book a call" link jumps
        // to. scroll-mt-24 keeps the fixed navbar from covering the top of the
        // section once the browser scrolls it into view.
        <section id="book-a-call" className="bg-[#0a0a12] pb-28 px-6 scroll-mt-24">
            <Reveal className="max-w-2xl mx-auto text-center mb-12">
                <SectionHeading eyebrow="Book a call" title="Pick a" accent="time" dark />
                <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
                    Grab a slot that works for you. Once it's booked, no one else can take it.
                </p>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
                >
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <Field label="Date" error={errors.date}>
                            <div className="relative">
                                <Listbox value={date} onChange={setDate}>
                                    <div className="relative">
                                        <Listbox.Button className={`${inputClass(errors.date)} flex items-center justify-between text-left`}>
                                            <span className={`flex items-center gap-2 ${date ? '' : 'text-white/30'}`}>
                                                <Calendar size={14} className="text-white/40 shrink-0" />
                                                {date ? formatDateLabel(date) : 'Select a date'}
                                            </span>
                                            <ChevronDown size={15} className="text-white/40 shrink-0" />
                                        </Listbox.Button>
                                        <Listbox.Options className="absolute z-30 mt-2 w-full rounded-xl border border-white/10 bg-[#141221] shadow-xl overflow-hidden focus:outline-none max-h-60 overflow-y-auto">
                                            {bookableDates.map((d) => (
                                                <Listbox.Option
                                                    key={d}
                                                    value={d}
                                                    className={({ active }) =>
                                                        `flex items-center justify-between px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${active ? 'bg-violet-500/15 text-white' : 'text-white/70'
                                                        }`
                                                    }
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span>{formatDateLabel(d)}</span>
                                                            {selected && <Check size={14} className="text-violet-400" />}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </div>
                                </Listbox>
                            </div>
                        </Field>

                        <Field label="Service" error={errors.service}>
                            <Listbox value={form.service} onChange={updateService}>
                                <div className="relative">
                                    <Listbox.Button className={`${inputClass(errors.service)} flex items-center justify-between text-left`}>
                                        <span className={form.service ? '' : 'text-white/30'}>
                                            {form.service || 'Select a service'}
                                        </span>
                                        <ChevronDown size={15} className="text-white/40 shrink-0" />
                                    </Listbox.Button>
                                    <Listbox.Options className="absolute z-30 mt-2 w-full rounded-xl border border-white/10 bg-[#141221] shadow-xl overflow-hidden focus:outline-none max-h-60 overflow-y-auto">
                                        {serviceOptions.map((s) => (
                                            <Listbox.Option
                                                key={s}
                                                value={s}
                                                className={({ active }) =>
                                                    `flex items-center justify-between px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${active ? 'bg-violet-500/15 text-white' : 'text-white/70'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span>{s}</span>
                                                        {selected && <Check size={14} className="text-violet-400" />}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </div>
                            </Listbox>
                        </Field>
                    </div>

                    <Field label="Time" error={errors.time} className="mb-5">
                        {!date ? (
                            <p className="text-[13px] text-white/35 py-2">Pick a date first to see open times.</p>
                        ) : loadingSlots ? (
                            <p className="text-[13px] text-white/35 py-2">Checking availability…</p>
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {TIME_SLOTS.map((t) => {
                                    const taken = bookedTimes.includes(t)
                                    const active = time === t
                                    return (
                                        <button
                                            type="button"
                                            key={t}
                                            disabled={taken}
                                            onClick={() => setTime(t)}
                                            className={`rounded-lg border px-2 py-2.5 text-[13px] font-medium transition-colors flex items-center justify-center gap-1.5 ${taken
                                                ? 'border-white/5 bg-white/[0.02] text-white/20 line-through cursor-not-allowed'
                                                : active
                                                    ? 'border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
                                                    : 'border-white/10 bg-white/5 text-white/70 hover:border-violet-400/60'
                                                }`}
                                        >
                                            <Clock size={12} className={active ? 'text-white' : 'text-white/40'} />
                                            {formatTime(t)}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </Field>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <Field label="Your name" error={errors.name}>
                            <input
                                type="text"
                                placeholder="Arman rawat"
                                value={form.name}
                                onChange={update('name')}
                                className={inputClass(errors.name)}
                            />
                        </Field>
                        <Field label="Email" error={errors.email}>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={update('email')}
                                className={inputClass(errors.email)}
                            />
                        </Field>
                    </div>

                    <Field label="Phone number" error={errors.phone} className="mb-5">
                        <input
                            type="tel"
                            placeholder="+91 123 456 7890"
                            value={form.phone}
                            onChange={update('phone')}
                            className={inputClass(errors.phone)}
                        />
                    </Field>

                    <Field label="Anything we should know? (optional)" className="mb-7">
                        <textarea
                            rows={4}
                            placeholder="Goals, links, questions..."
                            value={form.message}
                            onChange={update('message')}
                            className={inputClass() + ' resize-y'}
                        />
                    </Field>

                    {submitError && <p className="text-[12px] text-rose-400 mb-4">{submitError}</p>}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[14px] font-semibold py-3.5 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {submitting ? 'Booking...' : 'Confirm appointment ↗'}
                    </button>
                </form>
            </Reveal>
        </section>
    )
}

function Field({ label, error, children, className = '' }) {
    return (
        <div className={className}>
            <label className="block text-[13px] text-white/60 mb-1.5">{label}</label>
            {children}
            {error && <p className="text-[12px] text-rose-400 mt-1.5">{error}</p>}
        </div>
    )
}

function inputClass(error) {
    return `w-full rounded-xl bg-white/5 border px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:outline-none transition-colors ${error ? 'border-rose-400/60' : 'border-white/10 focus:border-violet-400/60'
        }`
}