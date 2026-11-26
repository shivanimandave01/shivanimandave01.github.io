export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <p className="eyebrow text-primary">About Me</p>
          <h2>Passionate about building quality software</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            I am a beginner-friendly full-stack developer focused on
            learning, growing, and delivering useful digital experiences
            with strong fundamentals in front-end and back-end development.
          </p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5">My Journey</h3>
                <p>
                  I enjoy working with ASP.NET, front-end frameworks, APIs,
                  databases, and responsive design. I love turning ideas
                  into clear, simple, and functional web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5">What I Bring</h3>
                <p>
                  Strong foundation in HTML, CSS, Bootstrap, JavaScript, and
                  a growing understanding of .NET technologies and database
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
