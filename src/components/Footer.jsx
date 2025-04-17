import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Joseph Montalvo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;