const PROJECTS = [
  {
    image: "/project1.png",
    title: "Honey E-Commerce Website",
    description:
      "Developed a responsive Ayurvedic e-commerce website, Vedanya Ayurveda, using React.js, HTML, CSS, and JavaScript to showcase and sell natural honey and Ayurvedic products.",
    badges: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/shivanimandave01",
    demo: "https://vedanyahoney.netlify.app/",
  },
  {
    image: "/project2.png",
    title: "Agricultural Products Billing App",
    description:
      "Desktop application for agricultural products like fertilizers and seeds.",
    badges: ["C#", "SQL"],
    github: "https://github.com/shivanimandave01",
  },
  {
    image: "/project3.png",
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with menu, layout, and interactive UI elements.",
    badges: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/shivanimandave01",
    demo: "https://shivani-foodie-restaurent-website.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <p className="eyebrow text-primary">Projects</p>
          <h2>Selected work and practice projects</h2>
        </div>

        <div className="row g-4 mt-3">
          {PROJECTS.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <div className="card project-card h-100 border-0 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body p-4">
                  <h3 className="h5">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.badges.map((badge) => (
                      <span className="badge" key={badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
