import { useRef } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Marquee } from './components/Marquee'
import { Navigation } from './components/Navigation'
import { Preloader } from './components/Preloader'
import { useEditorialMotion } from './hooks/useEditorialMotion'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Stack } from './sections/Stack'
import { Statement } from './sections/Statement'
import { Work } from './sections/Work'

function App() {
  const root = useRef<HTMLDivElement>(null)
  useEditorialMotion(root)

  return (
    <div className="site" ref={root}>
      <Preloader />
      <CustomCursor />
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <Navigation />
      <main>
        <Hero />
        <Marquee text="REACT · TYPESCRIPT · SOFTWARE · WEB · ERP · MOBILE" />
        <About />
        <Work />
        <Statement />
        <Stack />
        <section className="human" aria-label="Beyond code">
          <div className="section-index" data-reveal><span>05</span><span>BEYOND CODE</span></div>
          <p data-reveal>I enjoy turning business ideas into useful digital products, learning new technologies and shipping work people can <em>actually use.</em></p>
          <div data-reveal><span>MYSURU, INDIA</span><span>SOFTWARE</span><span>TECHNOLOGY</span><span>PRODUCTS</span></div>
        </section>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
