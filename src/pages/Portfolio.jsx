import Project from '../components/Project';
import './Portfolio.css';

function Portfolio() {
  // Project data
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'A weather application that allows users to search for current and forecasted weather conditions for cities around the world.',
      image: 'https://via.placeholder.com/400x200?text=Weather+Dashboard',
      deployedUrl: 'https://example-deploy-url.com/weather-dashboard',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API']
    },
    {
      title: 'Note Taker App',
      description: 'A full-stack application that allows users to create, save, and delete notes. Built with Express.js for the backend API.',
      image: 'https://via.placeholder.com/400x200?text=Note+Taker+App',
      deployedUrl: 'https://example-deploy-url.com/note-taker',
      githubUrl: 'https://github.com/yourusername/note-taker',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js']
    },
    {
      title: 'Tech Blog',
      description: 'A CMS-style blog site where developers can publish articles, blog posts, and comment on other posts.',
      image: 'https://via.placeholder.com/400x200?text=Tech+Blog',
      deployedUrl: 'https://example-deploy-url.com/tech-blog',
      githubUrl: 'https://github.com/yourusername/tech-blog',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Handlebars']
    },
    {
      title: 'E-commerce Backend',
      description: 'A backend for an e-commerce site built with Express.js API and configured to use Sequelize to interact with a MySQL database.',
      image: 'https://via.placeholder.com/400x200?text=E-commerce+Backend',
      deployedUrl: 'https://example-deploy-url.com/ecommerce-backend',
      githubUrl: 'https://github.com/yourusername/ecommerce-backend',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize']
    },
    {
      title: 'Employee Tracker',
      description: 'A command-line application for managing a company\'s employee database, using Node.js, Inquirer, and MySQL.',
      image: 'https://via.placeholder.com/400x200?text=Employee+Tracker',
      deployedUrl: 'https://example-deploy-url.com/employee-tracker',
      githubUrl: 'https://github.com/yourusername/employee-tracker',
      technologies: ['Node.js', 'MySQL', 'Inquirer']
    },
    {
      title: 'Social Network API',
      description: 'An API for a social network web application where users can share thoughts, react to friends\' thoughts, and create a friend list.',
      image: 'https://via.placeholder.com/400x200?text=Social+Network+API',
      deployedUrl: 'https://example-deploy-url.com/social-network-api',
      githubUrl: 'https://github.com/yourusername/social-network-api',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose']
    }
  ];

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;