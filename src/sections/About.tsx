const statement = "I'm Chandan G, a software developer specializing in React and TypeScript. I build production web applications, business software, ERP solutions and mobile-focused digital experiences."

export function About() {
  return (
    <section className="about" id="about">
      <div className="section-index" data-reveal><span>01</span><span>ABOUT</span></div>
      <div className="about-heading" data-reveal>
        <h2>I TURN BUSINESS<br />PROBLEMS INTO</h2>
        <em>digital products</em>
        <h2>PEOPLE CAN<br />ACTUALLY USE.</h2>
      </div>
      <p className="about-reading">{statement.split(' ').map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}</p>
      <div className="about-notes" data-reveal>
        <span>FRONTEND DEVELOPMENT</span><span>ERP SYSTEMS</span><span>MOBILE APPLICATIONS</span><span>DATA & ANALYTICS</span>
      </div>
    </section>
  )
}
