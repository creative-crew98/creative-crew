import { motion } from 'framer-motion'

// Generic scroll-reveal wrapper. Drop around any section/card to give
// it a fade-up-in animation the first time it enters the viewport.
// Usage: <Reveal><YourJSX /></Reveal>  or  <Reveal delay={0.1}>...</Reveal>
export default function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
