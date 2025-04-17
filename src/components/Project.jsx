import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

function Project({ project }) {
  const { title, description, image, deployedUrl, githubUrl, technologies } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;