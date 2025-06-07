import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Elgun Ezmemmedov</h1>
        <p className="footer__subtitle wave-text" style={{ textAlign: 'center' }}>
          {"Front-End Developer".split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
          ))}
        </p>
        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul> */}

        {/* <div className="footer__social">
          <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer"  >
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="https://www.instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer" >
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer"  >
            <i className="bx bxl-twitter"></i>
          </a>
        </div> */}

        <span className="footer__copy">
          © {new Date().getFullYear()}y All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
