import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

function Header({ currentPage, setCurrentPage }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path === '') {
      setCurrentPage('about');
    } else {
      setCurrentPage(path);
    }
  }, [location, setCurrentPage]);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" onClick={() => setCurrentPage('about')} className="logo">
          <h1>Joseph Montalvo</h1>
        </Link>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
}

export default Header;