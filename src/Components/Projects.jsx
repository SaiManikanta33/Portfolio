import "./Projects.css";
import { projects } from "../data/Projects.jsx";

function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="container">

        <h2 className="title">Projects</h2>

        <div className="projects-container">

          {
            projects.map((project) => (

              <div className="project-card" key={project.id}>
                <img
                      src={project.image}
                      alt={project.title}
                />

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span>{project.tech}</span>

                  <div className="project-buttons">

                    <a
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Projects;