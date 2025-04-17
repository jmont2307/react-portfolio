import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';

function Resume() {
  // List of proficiencies
  const frontEndProficiencies = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 
    'Responsive Design', 'Bootstrap', 'Material UI', 'jQuery'
  ];
  
  const backEndProficiencies = [
    'Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 
    'MySQL', 'Sequelize ORM', 'REST APIs', 'GraphQL'
  ];
  
  const devToolsProficiencies = [
    'Git & GitHub', 'Command Line', 'npm', 'Webpack', 
    'Jest', 'Agile Methodology', 'VS Code', 'Chrome DevTools'
  ];

  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
      
      <div className="resume-download">
        <a href="/resume.pdf" download className="download-btn">
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </div>
      
      <div className="resume-content">
        <div className="proficiencies">
          <div className="proficiency-group">
            <h3>Front-End Proficiencies</h3>
            <ul className="skills-list">
              {frontEndProficiencies.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="proficiency-group">
            <h3>Back-End Proficiencies</h3>
            <ul className="skills-list">
              {backEndProficiencies.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="proficiency-group">
            <h3>Dev Tools & Other</h3>
            <ul className="skills-list">
              {devToolsProficiencies.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="education-experience">
          <div className="education">
            <h3>Education</h3>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4>Full Stack Web Development Bootcamp</h4>
                <span className="timeline-date">2023 - 2024</span>
              </div>
              <p className="timeline-location">University of Coding, Online</p>
              <p className="timeline-description">
                Intensive 24-week bootcamp focusing on MERN stack development and modern web technologies.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-header">
                <h4>Bachelor of Science in Computer Science</h4>
                <span className="timeline-date">2018 - 2022</span>
              </div>
              <p className="timeline-location">Tech University</p>
              <p className="timeline-description">
                Focused on software engineering and web development fundamentals.
              </p>
            </div>
          </div>
          
          <div className="experience">
            <h3>Experience</h3>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4>Junior Web Developer</h4>
                <span className="timeline-date">2022 - Present</span>
              </div>
              <p className="timeline-location">TechSolutions Inc.</p>
              <p className="timeline-description">
                Developing responsive web applications using React and Node.js.
                Working in an Agile team to deliver high-quality software solutions.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-header">
                <h4>Web Development Intern</h4>
                <span className="timeline-date">2021 - 2022</span>
              </div>
              <p className="timeline-location">InnovateTech</p>
              <p className="timeline-description">
                Assisted in front-end development using HTML, CSS, and JavaScript.
                Contributed to UI/UX improvements and responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;