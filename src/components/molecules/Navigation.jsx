import { useState, useEffect } from 'react';
import NavLink from '../atoms/NavLink';
import Icon from '../atoms/Icon';
import hamburgerIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import './navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        type="button"
        className="navigation__toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <img src={hamburgerIcon} alt="" aria-hidden="true" />
      </button>

      <nav 
        id="main-navigation"
        className={`navigation ${isOpen ? 'navigation--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div 
          className="navigation__overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
        
        <div className="navigation__content">
          <Icon 
            src={closeIcon} 
            alt="Close menu" 
            onClick={closeMenu}
            className="navigation__close"
          />
          
          <ul className="navigation__list">
            <li>
              <NavLink href="#home" onClick={closeMenu}>home</NavLink>
            </li>
            <li>
              <NavLink href="#shop" onClick={closeMenu}>shop</NavLink>
            </li>
            <li>
              <NavLink href="#about" onClick={closeMenu}>about</NavLink>
            </li>
            <li>
              <NavLink href="#contact" onClick={closeMenu}>contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
