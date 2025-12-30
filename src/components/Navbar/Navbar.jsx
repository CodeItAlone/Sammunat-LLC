import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.logo}>
          Sammunat
        </a>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="#cta" className={styles.ctaLink} onClick={closeMenu}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
