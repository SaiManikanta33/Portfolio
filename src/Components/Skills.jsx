import "./Skills.css";

function Skills() {

  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Ethical Hacking",
    "Linux",
    "Networking",
    "Cyber Security",
    "HTML",
    "CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section className="skills section" id="skills">

      <div className="container">

        <h2 className="title">My Skills</h2>

        <div className="skills-container">

          {
            skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Skills;