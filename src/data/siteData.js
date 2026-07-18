// ────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here, no need to touch components
// ────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here, no need to touch components
// ────────────────────────────────────────────────────────────

import img1 from '../assets/webp/1.webp'
import img2 from '../assets/webp/2.webp'
import img3 from '../assets/webp/3.webp'
import img4 from '../assets/webp/4.webp'
import img5 from '../assets/webp/5.webp'
import img6 from '../assets/webp/6.webp'
import img7 from '../assets/webp/7.webp'
import img9 from '../assets/webp/9.webp'
import img9Webp from '../assets/webp/9.webp'
import akashImg from '../assets/webp/akash.webp'
import Neeraj from '../assets/webp/Neeraj.webp'
import SohilSir from '../assets/webp/SohilSir.webp'
import Pawan from '../assets/webp/Pawan.webp'
import Samar from '../assets/webp/Samar.webp'
import Chandu from '../assets/webp/Chandu.webp'
import Arman from '../assets/webp/Arman.webp'
import Salman from '../assets/webp/Salman.webp'
import ArjunSir from '../assets/webp/arjunsir.webp'
import Abhishek from '../assets/webp/Abhishek.webp'
import ccLogo from '../assets/webp/cc.webp'
import Ncf from '../assets/webp/NCF.webp'
import SocialMedia from '../assets/webp/SocialMedia.webp'
import Software from '../assets/webp/Software.webp'
import Website from '../assets/webp/Website.webp'
import exploreLottie from '../assets/LottiFIles/Explore.lottie?url'
import strategyLottie from '../assets/LottiFIles/Strategy.lottie?url'
import designDevLottie from '../assets/LottiFIles/Design&Development.lottie?url'
import launchLottie from '../assets/LottiFIles/Lounch.lottie?url'
import growthLottie from '../assets/LottiFIles/Growth.lottie?url'

export const siteConfig = {
  name: 'Creative Crew',
  tagline: 'Let\'s build something unforgettable.',
  email: 'crewcreative98@gmail.com',
  phone: '+91 9971702329',
  location: 'Building No.532/1 Bank Colony Deoli Village New Delhi 110062',
  hours: 'Mon–Sat · 8am–7pm PT',
}

// Top nav + footer both read from this so links always match routes
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'NCF Funnels', to: '/services' },
      { label: 'Social Marketing', to: '/services' },
      { label: 'Web Development', to: '/services' },
      { label: 'Branding & Video', to: '/services' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'No Refund Policy', to: '/no-refund-policy' },
    ],
  },
]

export const trustedBrands = [
  { name: 'NovaCorp', logo: img1 },
  { name: 'Lumos', logo: img2 },
  { name: 'Arcadia', logo: img3 },
  { name: 'Zenith', logo: img4 },
  { name: 'Orbit', logo: img5 },
  { name: 'Kairos', logo: img6 },
  { name: 'Helix', logo: img7 },
  { name: 'Meridian', logo: img9 },
  { name: 'Meridian (Alt)', logo: img9Webp },
]



export const capabilities = [
  {
    icon: 'Rocket',
    title: 'NFC Funnel Marketing',
    desc: 'High-converting sales funnels engineered end-to-end.',
  },
  {
    icon: 'Share2',
    title: 'Social Media Management',
    desc: 'Content, ads, and community that compound.',
  },
  {
    icon: 'Globe',
    title: 'Website Development',
    desc: 'Editorial-grade websites built for scale.',
  },
  {
    icon: 'Code2',
    title: 'Software Development',
    desc: 'Flexible content systems your team can actually manage.',
  },
]


export const stats = [
  { value: '250+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '5+', label: 'Years of craft' },
  { value: '24/7', label: 'Dedicated support' },
]

export const processSteps = [
  { n: "01", title: "Explore", desc: "Deep dive into your goals, users, and unfair advantages.", accent: "from-violet-500 to-fuchsia-500", lottie: exploreLottie },
  { n: "02", title: "Strategy", desc: "Positioning, funnels, KPIs — the master plan.", accent: "from-indigo-500 to-violet-500", lottie: strategyLottie },
  { n: "03", title: "Design & Development", desc: "Fast, scalable, production-grade builds.", accent: "from-blue-500 to-violet-500", lottie: designDevLottie },
  { n: "04", title: "Launch", desc: "A polished go-live your customers remember.", accent: "from-violet-500 to-purple-500", lottie: launchLottie },
  { n: "05", title: "Growth", desc: "Iterate, optimize, compound — every week.", accent: "from-fuchsia-500 to-rose-500", lottie: growthLottie },
]

export const services = [
  {
    n: '01', icon: 'Rocket', title: 'NCF Funnel',
    tagline: 'Funnels that convert while you sleep.',
    desc: 'No chase framework engineered around your customer journey.',
    features: ['Campaign setup & optimize', 'Lead mangament', 'Scripting & Editing', 'Lms & landing page'],
    stack: ['Meta ads', 'Ads creatives', 'Copy writing', 'Startegy development'],
    price: 'From $6.5k',

    image: Ncf
  },
  {
    n: '02', icon: 'Share2', title: 'Social Media Marketing',
    tagline: 'Content that stops scrolls and starts revenue.',
    desc: 'End-to-end social — from creative to paid to community.',
    features: ['Content calendar', 'Reels & shorts', 'Paid ads', 'Community mgmt'],
    stack: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn'],
    price: 'From $3.5k/mo',
    image: SocialMedia
  },
  {
    n: '03', icon: 'Globe', title: 'Website Development',
    tagline: 'Editorial-grade websites that scale.',
    desc: 'Design-led, performance-obsessed, SEO-ready builds.',
    features: ['Design system', 'CMS', 'SEO', 'Analytics'],
    stack: ['Next.js', 'React', 'Node.js', 'Framer Motion'],
    price: 'From $8k',
    image: Website
  },
  {
    n: '04', icon: 'Code2', title: 'Software Development',
    tagline: 'Custom apps built to last.',
    desc: 'Dashboards, portals, automation — production-grade.',
    features: ['LMS', 'Point of sale', 'Automation', 'Integrations'],
    stack: ['Node', 'Postgres', 'Next.js', 'AWS'],
    price: 'From $15k',
    image: Software
  },
]

export const faqs = [
  { q: 'How long does a typical project take?', a: 'Most engagements run 4–10 weeks depending on scope, from discovery through launch. We share a clear timeline before kickoff so there are no surprises.' },
  { q: 'Do you offer retainers?', a: 'Yes — many clients move to a monthly retainer after their first project for ongoing marketing, development, or growth work.' },
  { q: 'Which industries do you serve?', a: 'We work primarily with ambitious consumer, SaaS, and retail brands, but our systems adapt well to most industries.' },
  { q: 'Where are you based?', a: 'We\'re a remote-first team with hubs in San Francisco and Berlin, working with clients across time zones.' },
  { q: 'How do we start?', a: 'Book a free strategy call. We\'ll audit your current funnel or brand and share concrete next steps — no obligation.' },
]

export const testimonials = [
  { quote: 'Creative Crew rebuilt our funnel in 30 days. Revenue doubled the next quarter.', name: 'Sarah Khan', role: 'CEO, Nova Retail' },
  { quote: 'The most obsessive design team I have ever worked with. Every pixel matters.', name: 'Arjun Singh', role: 'Founder, Orbit Studios' },
  { quote: 'They shipped a POS and LMS that our team actually enjoys using. Rare.', name: 'Priya Nair', role: 'COO, Kairos' },
  { quote: 'Best-in-class creative + hard-nosed performance. This is our long-term partner.', name: 'Dinesh', role: 'CMO, Helix Media' },
]

export const portfolioItems = [
  { title: 'Website Developmente', category: 'Web', img: Website },
  { title: 'Social Media Marketing', category: 'Social Media', img: SocialMedia },
  { title: 'Software Development', category: 'Software', img: Software },
  { title: 'NCF Funnel', category: 'Marketing', img: Ncf },
]


export const filterCategories = ['All', 'Marketing', 'Social Media', 'Software', 'Web']

export const teamMembers = [
  { name: 'Sohil Alvi', role: 'Founder & Director', img: SohilSir },
  { name: 'Akash Nagar', role: 'Creative Director', img: akashImg },
  { name: 'Pawan Singh', role: 'Head of Management', img: Pawan },
  { name: 'Arjun Prasad', role: 'Technical Head', img: ArjunSir },
  { name: 'Chandr prakash', role: 'Social Media Head', img: Chandu },
  { name: 'Abhishek Singh', role: 'Video Editing Head', img: Abhishek },
  { name: 'Salman Alvi', role: 'Client Management', img: Salman },
  { name: 'Arman Singh Rawat', role: 'Developer & Designer', img: Arman },
  { name: 'Samresh Mali', role: 'Video Editor', img: Samar },
  { name: 'Neeraj Sharma', role: 'Developer', img: Neeraj },
]

export const timeline = [
  { year: '2022', title: 'Started My Journey as a Designer', desc: 'Built a strong creative foundation through design, branding, and user experience.' },
  { year: '2024', title: 'Delivered My First International Project', desc: 'Successfully completed my first global client project, expanding beyond local markets.' },
  { year: '2025', title: 'Built a Multi-Disciplinary Expert Team', desc: 'Assembled specialists in design, development, marketing, and strategy to deliver end-to-end solutions.' },
  { year: '2026', title: 'Expanded Into a Professional Studio', desc: 'Moved into a dedicated studio and began building a high-performance team with an in-house training system.' },
]

export const values = [
  { n: '01', title: 'Craft over quantity', desc: 'We only take on projects we believe we can make world-class.' },
  { n: '02', title: 'Outcomes, not outputs', desc: 'Deliverables are a means. Growth is the goal.' },
  { n: '03', title: 'Radical transparency', desc: 'Weekly demos, open Slack, no surprises.' },
  { n: '04', title: 'Compound over time', desc: 'We build partnerships, not one-off engagements.' },
]

export const budgetOptions = ['< $5k', '5-10k', '10-25k', '25-50k', '50k+']
