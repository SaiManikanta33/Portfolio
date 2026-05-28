import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (

    <footer className="footer">

      <div className="container footer-container">

        <h2>CyberVault</h2>

        <div className="footer-icons">

          <a href="https://github.com/SAIMANIKANTA1919">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/saimanikanta-m">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/spideyyy_19">
            <FaInstagram />
          </a>

        </div>

        <p>
          © 2026 Sai Manikanta | All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;