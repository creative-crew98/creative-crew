import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ensures every route navigation starts scrolled to the top of the page,
// same behaviour users expect from a traditional multi-page site.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
