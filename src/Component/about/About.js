import React from 'react';
import './about.css';
import profile_img from '../../assets/file.svg';

export default function About() {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>
          About <span>me</span>
        </h1>
      </div>

      <div className="about-content">
        <div className="about-left">
          <img src={profile_img} alt="Profile"className='pa' />
        </div>

        <div className="about-right">
          <p>
            I am an experienced Frontend Developer with years of professional expertise in the field. 
            Throughout my career, I’ve worked with top organizations, helping build clean and modern UIs.
          </p>
          <p>
            My passion for frontend development is not only reflected in my experience but also in the dedication 
            I bring to each project.
          </p>

          <div className="about-skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
            </div>
            <div className="skill">
              <span>Next JS</span>
              <div className="bar"><div className="fill" style={{ width: '75%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat"><h1>1+</h1><p>Years Experience</p></div>
        <div className="divider" />
        <div className="stat"><h1>5+</h1><p>Projects Completed</p></div>
        <div className="divider" />
        <div className="stat"><h1>10+</h1><p>Happy Clients</p></div>
      </div>
    </div>
  );
}
