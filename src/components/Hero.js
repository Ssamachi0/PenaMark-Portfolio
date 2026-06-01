function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-kicker">Aspiring Web & Game Developer</p>

      <h1>Mark Kenneth Peña</h1>

      <h2>Building clean web experiences while growing in software development.</h2>

      <p>
        I create modern portfolio and school-based projects, improve my frontend
        skills, and continuously explore game development through hands-on practice.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="primary-btn">
          View Projects
        </a>

        <a href="#contact" className="secondary-btn">
          Contact Me
        </a>
      </div>

      <div className="socials">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Email Me</a>
      </div>
    </section>
  );
}

export default Hero;