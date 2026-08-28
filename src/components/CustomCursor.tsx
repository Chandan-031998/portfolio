import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'default' | 'link' | 'project'>('default')

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const move = (event: PointerEvent) => {
      if (cursor.current) {
        cursor.current.style.opacity = '1'
        cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`
      }
      const target = event.target as HTMLElement
      setMode(target.closest('[data-cursor="project"]') ? 'project' : target.closest('a,button') ? 'link' : 'default')
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={cursor} className={`custom-cursor ${mode}`} aria-hidden="true"><span>VIEW<br />LIVE ↗</span></div>
}
