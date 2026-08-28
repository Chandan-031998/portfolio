import { useEffect, useState } from 'react'

const links = [['01', 'About', 'about'], ['02', 'Work', 'work'], ['03', 'Stack', 'stack'], ['04', 'Experience', 'experience'], ['05', 'Contact', 'contact']]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const close = () => setOpen(false)
  return (
    <header className={`editorial-nav ${scrolled ? 'compact' : ''}`}>
      <a className="nav-identity" href="#home" onClick={close} aria-label="Chandan Girish home">
        <img src="/profile-photo.png" alt="" />
        <span>CHANDAN<br />GIRISH</span>
      </a>
      <nav className={open ? 'nav-menu open' : 'nav-menu'} aria-label="Primary navigation">
        {links.slice(0, 4).map(([number, label, id]) => <a key={id} href={`#${id}`} onClick={close}><i>{number}</i>{label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={close}><i>05</i>Contact</a>
      </nav>
      <a className="nav-contact magnetic" href="#contact">LET'S TALK ↗</a>
      <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu"><i /><i /></button>
    </header>
  )
}
