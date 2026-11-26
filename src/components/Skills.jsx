const SKILL_CARDS = [
  {
    icon: "bi-code-slash",
    title: "Frontend",
    description: "Creating clean, responsive, and user-friendly interfaces.",
    badges: ["HTML5", "CSS3", "Bootstrap", "JavaScript","React .js"],
  },
  {
    icon: "bi-server",
    title: "Backend",
    description: "Building APIs and server-side logic for modern applications.",
    badges: ["ASP.NET Core", "C#", "REST APIs"],
  },
  {
    icon: "bi-database",
    title: "Database",
    description: "Organizing and managing data for reliable applications.",
    badges: ["SQL Server", "Entity Framework", "MySQL"],
  },
];

const PROGRESS = [
  { label: "HTML / CSS / Bootstrap", value: 99 },
  { label: "JavaScript", value: 90 },
  { label: "React", value: 75 },
  { label: ".NET / C#", value: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <div className="section-title text-center">
          <p className="eyebrow text-primary">Skills</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="row g-4 mt-3">
          {SKILL_CARDS.map((skill) => (
            <div className="col-md-6 col-lg-4" key={skill.title}>
              <div className="card skill-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="icon-box">
                      <i className={`bi ${skill.icon}`}></i>
                    </div>
                    <h3 className="h5 mb-0">{skill.title}</h3>
                  </div>
                  <p className="text-muted">{skill.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {skill.badges.map((badge) => (
                      <span className="badge" key={badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm p-4">
              <h3 className="h5 mb-4">Progress Overview</h3>
              {PROGRESS.map((item) => (
                <div className="mb-3" key={item.label}>
                  <div className="d-flex justify-content-between mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
