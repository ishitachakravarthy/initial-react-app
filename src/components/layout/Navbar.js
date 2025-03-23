import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#583ad4', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
