import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { name: 'About Me', path: '/about', id: 'about' },
    { name: 'Portfolio', path: '/portfolio', id: 'portfolio' },
    { name: 'Contact', path: '/contact', id: 'contact' },
    { name: 'Resume', path: '/resume', id: 'resume' },
  ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link
              to={item.path}
              onClick={() => setCurrentPage(item.id)}
              className={currentPage === item.id ? 'nav-link active' : 'nav-link'}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;