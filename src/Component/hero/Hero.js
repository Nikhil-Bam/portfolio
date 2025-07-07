import React from 'react';
import './hero.css';
import profile from '../../assets/file.svg'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Hero() {
  const handleResumeClick = () => {
    // This ensures the correct base path is used, works in development and production
    window.open(process.env.PUBLIC_URL + '/Nikhil_resume.pdf', '_blank');
  };

  return (
    <div id='home' className="hero">
      <img src={profile} alt="Profile" className="profile" />
      <h1>
        <span>I am Nikhil Jung Bam</span>,<br />Frontend Developer from Nepal
      </h1>
      <p>I am a frontend developer from Kathmandu, with 1 year of experience</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleResumeClick}>
          My Resume
        </div>
      </div>
    </div>
  );
}
