import "./About.css";
import Profile from "../assets/Profile.png";

function About() {
  return (
    <section className="about section" id="about">

      <div className="container">

        <h2 className="title">About Me</h2>

        <div className="about-container">

          <div className="about-image">

            <img
              src={Profile}
              alt="profile"
            />

          </div>

          <div className="about-content">

            <h3>
              Cyber Security Student & Python Developer
            </h3>

            <p>
              I am Sai Manikanta, a passionate Cyber Security student
              from Raghu Engineering College.
            </p>

            <p>
              I love Ethical Hacking, Python Development,
              Networking, and SOC Analysis.
            </p>

            <p>
              Currently learning Python and building
              cybersecurity projects.
            </p>

            <a href="/Resume.pdf" download className="btn">
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;