export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-meta">
        <span>SOFTWARE DEVELOPER</span>
        <span>BASED IN MYSURU, INDIA</span>
        <span>AVAILABLE FOR OPPORTUNITIES</span>
      </div>
      <h1 aria-label="I build digital products that work">
        <span className="hero-line"><span className="hero-line-inner">I BUILD</span></span>
        <span className="hero-line"><span className="hero-line-inner">DIGITAL</span></span>
        <span className="hero-line hero-line-serif"><span className="hero-line-inner">products</span></span>
        <span className="hero-line hero-line-right"><span className="hero-line-inner">THAT WORK.</span></span>
      </h1>
      <div className="hero-support">
        <p>React & TypeScript developer creating useful web applications, ERP software and mobile-focused products for real businesses.</p>
        <div><span>CHANDAN G</span><span>REACT / TYPESCRIPT</span></div>
      </div>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><i>↓</i></a>
      <div className="hero-symbol" aria-hidden="true">✳</div>
    </section>
  )
}
