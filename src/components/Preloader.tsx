import { useEffect, useState } from 'react'

export function Preloader() {
  const [value, setValue] = useState(0)
  const [done, setDone] = useState(() => sessionStorage.getItem('portfolio-seen') === 'yes')

  useEffect(() => {
    if (done) return
    const values = [25, 58, 82, 100]
    const timers = values.map((next, index) => window.setTimeout(() => setValue(next), 260 + index * 270))
    const finish = window.setTimeout(() => {
      setDone(true)
      sessionStorage.setItem('portfolio-seen', 'yes')
    }, 1550)
    return () => { timers.forEach(window.clearTimeout); window.clearTimeout(finish) }
  }, [done])

  if (done) return null
  return (
    <div className="preloader" aria-label="Loading portfolio">
      <div className="preloader-name"><span>CHANDAN</span><span>GIRISH</span></div>
      <div className="preloader-bottom"><span>PORTFOLIO ©26</span><strong>{String(value).padStart(2, '0')}</strong></div>
      <div className="preloader-line"><i style={{ width: `${value}%` }} /></div>
    </div>
  )
}
