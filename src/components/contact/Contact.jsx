import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [projectError, setProjectError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
    setProjectError("");
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (project.trim() === "") {
      setProjectError("Project is required");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);

    const message = `Hello, I'm ${name} (%0AEmail: ${email})%0A%0AProject Details:%0A${project}`;
    const phone = "994506330135";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    // Formu temizle
    setName("");
    setEmail("");
    setProject("");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Have a Project in Mind?</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i style={{ color: "blue" }} className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">elgun.ezmemmedov@gmail.com</span>
              <a href="mailto:elgun.ezmemmedov@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i style={{ color: "#2c92bb" }} className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+994506330135</span>
              <a
                href="https://api.whatsapp.com/send?phone=994506330135&text=Interested in Working Together?"
                className="contact__button"
              >
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i style={{ color: "#2c92bb" }} className="fab fa-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/elgun-ezmemmedov-1628a51b4/"
                className="contact__button"
              >
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form onSubmit={handleWhatsAppSend} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className={`contact__form-input ${nameError ? "error-border" : ""}`}
                placeholder="Insert your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className={`contact__form-input ${emailError ? "error-border" : ""}`}
                placeholder="Insert your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className={`contact__form-input ${projectError ? "error-border" : ""}`}
                placeholder="Write your project"
                value={project}
                onChange={handleProjectChange}
              ></textarea>
            </div>

            <button className="button button--flex" disabled={loading}>
              {loading ? "Sending..." : "Send via WhatsApp"}
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7.1 20.7C8.6 21.5 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
