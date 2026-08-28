export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-kicker" data-reveal>HAVE SOMETHING IN MIND?</div>
      <h2 data-reveal>LET'S <em>build</em><br />SOMETHING<br />USEFUL.</h2>
      <div className="contact-layout">
        <div className="contact-direct" data-reveal>
          <a href="mailto:Chandangirish95@gmail.com">Chandangirish95<br />@gmail.com ↗</a>
          <a href="tel:+919945943353">+91 9945943353</a>
          <div><a href="https://github.com/Chandan-031998" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/chandan-g-85941a1a5/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/chandangirish95@gmail.com" method="POST" data-reveal>
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
          <label>NAME<input name="name" required placeholder="Your name" /></label>
          <label>EMAIL<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>MESSAGE<textarea name="message" rows={3} required placeholder="Tell me about the opportunity" /></label>
          <button type="submit">SEND MESSAGE ↗</button>
        </form>
      </div>
    </section>
  )
}
