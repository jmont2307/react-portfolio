import './AboutMe.css';
import profileImage from '../assets/images/profile.jpg';

function AboutMe() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src={profileImage} alt="Joseph Montalvo" />
          </div>
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Joseph Montalvo, a passionate web developer with a knack for creating
            interactive and responsive web applications. My journey in web development started
            with a curiosity about how websites work, and it has evolved into a deep passion for
            crafting exceptional digital experiences.
          </p>
          <p>
            With a strong foundation in both front-end and back-end technologies, I enjoy
            building applications that are not only visually appealing but also functionally
            robust. I specialize in JavaScript and modern frameworks like React, along with
            server-side technologies including Node.js and MongoDB.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or learning about web accessibility and user experience
            design. I believe in continuous learning and staying up-to-date with the latest
            industry trends.
          </p>
          <p>
            I'm passionate about building software that solves real-world problems and enhances
            the user experience. I approach each project with dedication, creativity, and a
            commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;