import React, { useState } from "react";
import "./qualification.css";
const QualificationTabs = ({ toggleState, toggleTab }) => {
  return (
    <div className="qualification__tabs">
      <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}   >
        <i className="uil uil-graduation-cap qualification__icon"></i>
        Education
      </div>

      <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}   >
        <i className="uil uil-briefcase-alt qualification__icon"></i>
        Experience
      </div>
    </div>
  );
};



const EducationActiveSection = ({ toggleState }) => {
  return (
    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

      {/* JavaScript */}
      <div className="qualification__data">
        <div>
          <h3 className="qualification__title">JavaScript </h3>
          <span className="qualification__subtitle">
            Self-taught via Udemy
          </span>
          <div className="qualification__calender">2020 - 2021</div>
        </div>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      {/* University */}
      <div className="qualification__data">
        <div></div>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
        <div>
          <h3 className="qualification__title">Bachelor's in Finance</h3>
          <span className="qualification__subtitle">
            Sakarya University – Turkey<br />
            <em style={{ fontSize: "0.875rem", display: "block", marginTop: "4px" }}>
              Graduated with 2 Honor Certificates
            </em>
          </span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2016 - 2020
          </div>
        </div>
      </div>

      {/* English Course */}
      <div className="qualification__data">
        <div>
          <h3 className="qualification__title">English Language Course</h3>
          <span className="qualification__subtitle">British Town – Sakarya, Turkey</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2013 - 2014
          </div>
        </div>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      {/* School */}
      <div className="qualification__data">
        <div></div>
        <div>
          <span className="qualification__rounder"></span>
        </div>
        <div>
          <h3 className="qualification__title">Primary & Secondary </h3>
          <span className="qualification__subtitle">Turkish School</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2002 - 2013
          </div>
        </div>
      </div>
    </div>
  );
};


const ExperienceActiveSection = ({ toggleState }) => {
  return (
    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >
      <div className="qualification__data">
        <div>
          <h3 className="qualification__title">Freelance Front-End Developer</h3>
          <span className="qualification__subtitle">
            Remote / Project-Based
          </span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2023 – Present
          </div>
        </div>

        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </div>

      {/* Airport Pickups London */}
      <div className="qualification__data">
        <div></div>

        <div>
          <span className="qualification__rounder" />
          <span className="qualification__line" />
        </div>

        <div>
          <h3 className="qualification__title">Next.js Developer</h3>
          <span className="qualification__subtitle">
            <a style={{ color: 'black', fontWeight: 'bold' ,fontSize:'13px'}} href="https://www.airport-pickups-london.com/">
              Airport Pickups London
            </a>
          </span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> March 2021 – 2026
          </div>
        </div>
      </div>

      {/* Deirvlon Company */}
      <div className="qualification__data">
        <div>
          <h3 className="qualification__title">React Developer (Internship)</h3>
          <span className="qualification__subtitle">Deirvlon Company</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2021 (3-month)
          </div>
        </div>

        <div>
          <span className="qualification__rounder" />
        </div>
      </div>
    </div>
  )
}

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification"  className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <QualificationTabs toggleState={toggleState} toggleTab={toggleTab} />

        <div className="qualification__sections">
          <EducationActiveSection toggleState={toggleState} />

          <ExperienceActiveSection toggleState={toggleState} />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
