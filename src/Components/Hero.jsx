import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero section" id="home">

      <div className="container hero-container">

        <div className="hero-content">

          <h1>
            Hi, I'm <span>Sai Manikanta</span>
          </h1>

          <h2>

            <TypeAnimation
              sequence={[
                "Cyber Security Student",
                2000,
                "Python Developer",
                2000,
                "Ethical Hacker",
                2000,
                "SOC Analyst",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </h2>

          <p>
            Passionate about Ethical Hacking,
            Python Development and Cyber Security.
          </p>

          <div className="social-icons">
            <a href="https://github.com/SAIMANIKANTA1919" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saimanikanta-m" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_spideyyy__19?igsh=MTl6czJjYjh6bTNwaw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;