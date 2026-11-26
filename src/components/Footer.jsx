export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0">
          <span>{year}</span> ©Shivani Mandave. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shivani-mandave-b89b26394"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/shivanimandave01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:shivanimandave01@gmail.com" className="text-white">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
