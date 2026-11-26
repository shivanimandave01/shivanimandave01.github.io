import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "vYEmzf58DJityCAnp";
const EMAILJS_SERVICE_ID = "service_kp7zhsw";
const EMAILJS_TEMPLATE_ID = "template_2bu25xt";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ text: "", type: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ text: "", type: "" });

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus({
        text: "Message sent successfully! I'll get back to you soon.",
        type: "text-success",
      });
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        text: "Something went wrong. Please try again.",
        type: "text-danger",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark text-white">
      <div className="container">
        <div className="section-title text-center">
          <p className="eyebrow text-info">Contact</p>
          <h2>Let's connect</h2>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm contact-card h-100">
              <div className="card-body p-4">
                <h3 className="h5">Contact Details</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-3">
                    <i className="bi bi-envelope-fill me-2 text-primary"></i>
                    shivanimandave01@gmail.com
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-telephone-fill me-2 text-primary"></i>
                    +91 87665 30548
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                    Karad, Satara, Maharashtra
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-linkedin me-2 text-primary"></i>
                    <a
                      href="https://www.linkedin.com/in/shivani-mandave-b89b26394"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      linkedin.com/in/shivani-mandave-b89b26394
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-github me-2 text-primary"></i>
                    <a
                      href="https://github.com/shivanimandave01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      github.com/shivanimandave01
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  disabled={sending}
                >
                  <i className="bi bi-send me-2"></i>
                  {sending ? "Sending..." : "Send Message"}
                </button>
                {status.text && (
                  <p className={`mt-3 ${status.type}`}>{status.text}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
