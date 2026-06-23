import "./Navbar.css";
import { useState } from "react";

function Navbar() {

  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <div className="logo">
          CyberVault
        </div>

        <ul className={menu ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#home" onClick={() => setMenu(true)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenu(true)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenu(true)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenu(true)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenu(true)}>
              Contact
            </a>
          </li>

        </ul>

        <div
          className="hamburger"
          onClick={() => setMenu(!menu)}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;