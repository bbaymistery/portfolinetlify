import { useState } from "react";
import { servicesData } from "./servicesData";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => setToggleState(index);

  return (
    <section className="services section services_section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(" ").map((word, i) => (
                  <span key={i}>  {word}  {i === 0 && <br />}  </span>))}
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(service.id)}   >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === service.id ? "services__modal active-modal" : "services__modal"}     >
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"  ></i>
                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-services grid">
                  {service.services.map((item, index) => (
                    <li className="services__modal-service" key={index}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
