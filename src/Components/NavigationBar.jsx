import { useState } from "react";
import { List, XLg } from "react-bootstrap-icons";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", () => setIsActive(window.scrollY > 50));

  return (
    <header
      className="navbar"
      style={isActive ? { backgroundColor: "#1b262c" } : {}}
    >
      <h1 className="navbar-brand">
        Aulia <span>Printing</span>
      </h1>

      <input
        type="checkbox"
        id="checkbox"
        onChange={(e) => {
          setIsActive(e.target.checked || window.scrollY > 50);
        }}
      />
      <label htmlFor="checkbox" className="navbar-toggle">
        <List color="white" id="menu-icon" />
        <XLg color="white" id="close-icon" />
      </label>

      <nav className="navbar-menu">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#about-us" className="navbar-link">
          About Us
        </a>
        <a href="#product" className="navbar-link">
          Product
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavigationBar;
