'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * useScrollPin
 *
 * Pins `pinRef`'s element while the user scrolls through `triggerRef`'s
 * element, and reports scroll progress (0 → 1) plus a derived step index —
 * the same job the old manual `getBoundingClientRect` + `position: sticky`
 * calculation was doing, but driven by ScrollTrigger so it's frame-accurate
 * and handles the pin/unpin/resize edge cases for you.
 *
 * Usage:
 *   const triggerRef = useRef(null)
 *   const pinRef = useRef(null)
 *   const { progress, activeStep } = useScrollPin({
 *     triggerRef,
 *     pinRef,
 *     stepCount: steps.length,
 *   })
 *
 * @param {Object} options
 * @param {React.RefObject} options.triggerRef - element that defines when pinning starts/ends
 * @param {React.RefObject} options.pinRef - element that gets pinned (defaults to triggerRef if omitted)
 * @param {number} options.stepCount - number of discrete steps to derive activeStep from
 * @param {number} options.pxPerStepDesktop - scroll distance (px) per step on desktop, default 600
 * @param {number} options.pxPerStepMobile - scroll distance (px) per step on mobile, default 380
 * @param {number} options.scrub - GSAP scrub value/smoothing, default 1
 * @param {boolean} options.enabled - set false to tear down the ScrollTrigger (default true)
 */
export function useScrollPin({
  triggerRef,
  pinRef,
  stepCount,
  // Multiplier of viewport height PER STEP, not a fixed px guess. This is
  // what actually fixes "start/end feels wrong on mobile" — a fixed px
  // value (e.g. 380) is a huge distance on a short phone screen and a tiny
  // one on a tall monitor, so the pace felt inconsistent across devices.
  // Scaling by innerHeight makes the pace consistent everywhere.
  viewportMultiplierDesktop = 0.9,
  viewportMultiplierMobile = 0.7,
  scrub = 1,
  enabled = true,
}) {
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const triggerInstanceRef = useRef(null)

  useEffect(() => {
    if (!enabled || !triggerRef.current || stepCount <= 0) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions
          const viewportMultiplier = isDesktop ? viewportMultiplierDesktop : viewportMultiplierMobile

          const trigger = ScrollTrigger.create({
            trigger: triggerRef.current,
            // 'top top' = pin engages the instant the section's top edge
            // reaches the viewport's top edge — this is the correct, clean
            // "start" for both mobile and desktop; the perceived "abrupt
            // start" people usually hit is actually the *distance* being
            // wrong (fixed above), not this line.
            start: 'top top',
            end: () => `+=${stepCount * window.innerHeight * viewportMultiplier}`,
            pin: pinRef?.current ?? triggerRef.current,
            pinSpacing: true,
            scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // Prevents a pile-up of intermediate scroll events on fast
            // mobile flicks near the end of the pin — this is what caused
            // the "ending" to feel jerky/late on touch devices.
            fastScrollEnd: true,
            // Settles the timeline at the nearest step instead of leaving
            // it stopped mid-transition wherever the user's scroll/finger
            // happened to stop — gives both the start and every step a
            // deliberate, "snapped" finish rather than a loose float.
            snap: {
              snapTo: stepCount > 1 ? 1 / (stepCount - 1) : 1,
              duration: 0.3,
              ease: 'power1.inOut',
            },
            onUpdate: (self) => {
              const idx = Math.min(stepCount - 1, Math.floor(self.progress * stepCount))
              setProgress(self.progress)
              setActiveStep((prev) => (prev === idx ? prev : idx))
            },
          })

          triggerInstanceRef.current = trigger
          return () => trigger.kill()
        }
      )
    }, triggerRef)

    // Mobile browser chrome (address bar) hiding/showing on scroll changes
    // innerHeight mid-session without a resize event firing reliably —
    // orientationchange + visualViewport resize catch that and force GSAP
    // to recompute the pin distance, so the "end" doesn't drift stale.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('orientationchange', refresh)
    window.visualViewport?.addEventListener('resize', refresh)

    return () => {
      ctx.revert()
      window.removeEventListener('orientationchange', refresh)
      window.visualViewport?.removeEventListener('resize', refresh)
    }
  }, [enabled, stepCount, viewportMultiplierDesktop, viewportMultiplierMobile, scrub, triggerRef, pinRef])

  return { progress, activeStep, setActiveStep }
}