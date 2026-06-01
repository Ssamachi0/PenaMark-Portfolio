function Hero() {
  return (
    <section className="hero">

      <h1>
        Mark Kenneth Peña
      </h1>

      <h2>
        Aspiring Web Developer &
        Game Developer
      </h2>

      <p>
        Building modern websites and
        exploring game development through
        continuous learning and projects.
      </p>

      <div className="hero-buttons">

        <a
          href="#projects"
          className="primary-btn"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="secondary-btn"
        >
          Resume
        </a>

      </div>

      <div className="socials">

        <a href="#">
          GitHub
        </a>

        <a href="#">
          Facebook
        </a>

        <a href="#">
          Email
        </a>

      </div>

    </section>
  );
}

export default Hero;