import { projects } from '../data/portfolio'
import { Marquee } from '../components/Marquee'

export function Work() {
  return (
    <section className="work" id="work">
      <div className="work-intro">
        <div className="section-index" data-reveal><span>02</span><span>SELECTED WORK</span></div>
        <h2 data-reveal>SELECTED<br /><em>work</em></h2>
        <span className="work-years">2022 — 2026</span>
      </div>
      <Marquee text="PROJECTS" tone="dark" />
      <div className="projects-list">
        {projects.map((project) => (
          <article className={`project-story project-${project.layout}`} key={project.title}>
            <div className="project-meta">
              <span>{project.number} / {project.year}</span>
              <span>{project.category}</span>
            </div>
            <a className="project-media" href={project.url} target="_blank" rel="noreferrer" data-cursor="project" aria-label={`Open ${project.title}`}>
              <img className="project-image" src={project.screenshot} alt={`${project.title} landing page`} loading="lazy" decoding="async" />
            </a>
            <div className="project-copy">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-bottom">
                <div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.url} target="_blank" rel="noreferrer">VIEW LIVE ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
