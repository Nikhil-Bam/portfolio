import React from 'react';
import './footer.css';
import footer_logo from '../../assets/logos.png';
import user_icon from '../../assets/user_icon.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className="footor-top-left">
          <img src={footer_logo} alt='' className='apt'/>
          <p>I am a frontend developer from USA with 1 year of experience</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="footer-subscriber">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* ✅ Fixed layout here */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          ©2025 Nikhil Bam. All rights reserved.
        </div>

        <div className="footer-bottom-right">
          <p>Terms of service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}
