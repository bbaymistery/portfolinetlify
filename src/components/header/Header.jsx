import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // 📌 Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📌 Navigation items
  const navItems = [
    { href: "#home", icon: "uil-estate", label: "Home" },
    { href: "#about", icon: "uil-user", label: "About" },
    { href: "#skills", icon: "uil-file-alt", label: "Skills" },
    { href: "#services", icon: "uil-briefcase-alt", label: "Services" },
    { href: "#qualification", icon: "uil-scenery", label: "Qualification" },
    { href: "#contact", icon: "uil-message", label: "Contact" },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="/" className="nav__logo">
         <img style={{width:'80px'}} src={logo} alt="Elgun Ezmemmedov" />
        </a>

        {/* Navigation Menu */}
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <a href={item.href} onClick={() => { setActiveNav(item.href); setToggleMenu(false); }} className={activeNav === item.href ? "nav__link active-link" : "nav__link"}    >
                  <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Close Button (Mobile) */}
          <i className="uil uil-times nav__close" onClick={() => setToggleMenu(false)}    ></i>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="nav__toggle" onClick={() => setToggleMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
