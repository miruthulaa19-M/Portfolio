import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/welcome.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>

          {/* ----- LOGO + LOTTIE ANIMATION ----- */}
          <Link to="/" className={styles.logo}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Lottie 
                animationData={welcomeAnimation} 
                style={{ width: 50, height: 50 }}
                loop={true}
              />
              <span>Portfolio</span>
            </div>
          </Link>

          {/* ----- NAV LINKS ----- */}
          <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

         

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
