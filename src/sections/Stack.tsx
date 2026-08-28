import { technologies } from '../data/portfolio'

export function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="stack-head">
        <div className="section-index" data-reveal><span>03</span><span>TECHNOLOGY</span></div>
        <h2 data-reveal>THE TOOLS<br />BEHIND THE <em>work.</em></h2>
      </div>
      <div className="stack-list">
        {technologies.map(([name, type], index) => (
          <div className="stack-row" key={name}><i>{String(index + 1).padStart(2, '0')}</i><strong>{name}</strong><span>{type}</span><b>↗</b></div>
        ))}
      </div>
    </section>
  )
}
