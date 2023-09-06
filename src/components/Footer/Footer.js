import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button } from '@aws-amplify/ui-react'
import './Footer.css'

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className='footer-links'>
            <Button 
            variation='link'
            onClick={() => navigate('/about')}>
              About Us
            </Button>
            <Button 
            variation='link'
            onClick={() => navigate('/contact-us')}>
              Contact Us
            </Button>
            <Button 
            variation='link'
            onClick={() => navigate('/privacy-policy')}>
              Privacy Policy
            </Button>
          </div>
          <div className="footer-copyright">
          &copy; {new Date().getFullYear()} RepTitles. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;