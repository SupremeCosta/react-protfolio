import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="protfolio-header">
        <div className='header-title'>
            <h2>CjCosta</h2>
        </div>
        <nav>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/protfolio">Protfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
