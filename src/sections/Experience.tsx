import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-head">
        <div className="section-index" data-reveal><span>04</span><span>EXPERIENCE</span></div>
        <h2 data-reveal>EXPERIENCE<br /><em>& journey</em></h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.role}>
            <div className="experience-line" />
            <span className="experience-date">{item.date}</span>
            <div><h3>{item.role}</h3><p>{item.company}</p></div>
            <div><span>{item.location}</span><p>{item.copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
