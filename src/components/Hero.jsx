export default function Hero() {
  return (
    <section id="home" className="hero section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow">Software & Web Developer</p>
            <h1>
              Hello, I'm <span>Shivani Mandave</span>
            </h1>
            <p className="lead">
              I build modern web applications with clean code, responsive
              interfaces, and practical problem-solving skills.
            </p>
            <p className="mb-4">
              <strong>Career Objective:</strong> To grow as a developer by
              creating robust full-stack solutions, learning new
              technologies, and contributing to meaningful projects.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="/resume.pdf" className="btn btn-primary" download>
                <i className="bi bi-download me-2"></i>Download CV
              </a>
              <a href="#contact" className="btn btn-outline-light">
                <i className="bi bi-envelope me-2"></i>Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src="/profile.png"
              alt="Shivani Mandave"
              className="img-fluid rounded-10 shadow-lg image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
