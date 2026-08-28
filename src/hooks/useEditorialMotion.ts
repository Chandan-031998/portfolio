import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function useEditorialMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = root.current
    if (!element) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis: Lenis | null = null
    let ticker: ((time: number) => void) | null = null
    let hashTimer: number | null = null
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--progress', String(total > 0 ? window.scrollY / total : 0))
    }

    if (!reduced) {
      lenis = new Lenis({ duration: 1.08, smoothWheel: true, wheelMultiplier: .9, touchMultiplier: 1.15 })
      lenis.on('scroll', ScrollTrigger.update)
      ticker = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(ticker)
      gsap.ticker.lagSmoothing(0)
      if (window.location.hash) {
        window.requestAnimationFrame(() => lenis?.scrollTo(window.location.hash, { immediate: true }))
        hashTimer = window.setTimeout(() => lenis?.scrollTo(window.location.hash, { immediate: true }), 1750)
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    const context = gsap.context(() => {
      if (reduced) {
        gsap.set('[data-reveal], .hero-line-inner, .project-media', { clearProps: 'all' })
        return
      }

      const introDelay = sessionStorage.getItem('portfolio-seen') === 'yes' ? .2 : 1.45
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: introDelay })
      intro
        .from('.hero-meta > *', { y: 18, opacity: 0, duration: .7, stagger: .08 })
        .from('.hero-line-inner', { yPercent: 115, rotate: 2, duration: 1.05, stagger: .1 }, '-=.38')
        .from('.hero-support', { y: 25, opacity: 0, duration: .75 }, '-=.52')
        .from('.hero-scroll', { opacity: 0, duration: .55 }, '-=.3')

      gsap.to('.hero-line:nth-child(1) .hero-line-inner', { yPercent: -24, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.hero-line-serif', { xPercent: 18, rotate: -2, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 } })
      gsap.to('.hero-line:nth-child(4) .hero-line-inner', { xPercent: -8, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((item) => {
        gsap.from(item, { y: 72, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 88%' } })
      })

      gsap.utils.toArray<HTMLElement>('.about-reading span').forEach((word, index) => {
        gsap.to(word, { opacity: 1, ease: 'none', scrollTrigger: { trigger: '.about-reading', start: `top+=${index * 7} 76%`, end: `top+=${index * 7 + 80} 60%`, scrub: true } })
      })

      gsap.utils.toArray<HTMLElement>('.project-story').forEach((story) => {
        const media = story.querySelector('.project-media')
        const image = story.querySelector('.project-image')
        const title = story.querySelector('.project-title')
        gsap.fromTo(media, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', ease: 'none', scrollTrigger: { trigger: story, start: 'top 82%', end: 'top 24%', scrub: 1 } })
        gsap.fromTo(image, { scale: 1.12, yPercent: -3 }, { scale: 1, yPercent: 3, ease: 'none', scrollTrigger: { trigger: story, start: 'top bottom', end: 'bottom top', scrub: 1.15 } })
        gsap.fromTo(title, { yPercent: 24 }, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: story, start: 'top bottom', end: 'bottom top', scrub: 1.2 } })
      })

      gsap.utils.toArray<HTMLElement>('.stack-row').forEach((row, index) => {
        gsap.from(row, { x: index % 2 ? 55 : -55, opacity: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 88%' } })
      })
      gsap.from('.experience-line', { scaleX: 0, transformOrigin: 'left', stagger: .14, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.experience-list', start: 'top 75%' } })
      gsap.from('.statement-word', { yPercent: 120, rotate: 3, stagger: .12, duration: 1.1, ease: 'power4.out', scrollTrigger: { trigger: '.statement', start: 'top 68%' } })
    }, element)

    return () => {
      context.revert()
      window.removeEventListener('scroll', updateProgress)
      if (hashTimer !== null) window.clearTimeout(hashTimer)
      if (lenis) {
        if (ticker) gsap.ticker.remove(ticker)
        lenis.destroy()
      }
    }
  }, [root])
}
