import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h2>FoodExpress</h2>
          <p>Delicious food, delivered fresh & fast.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/placeorder">Place Order</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: support@foodexpress.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.linkedin_icon} alt="Instagram" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 FoodExpress. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
