// Footer.js
import React from 'react';
import '../../css/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      <p>© 2023 Car Rental Service</p>
    </footer>
  );
};

export default Footer;
