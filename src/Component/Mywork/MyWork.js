import React from 'react';
import './mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

export default function MyWork() {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="project-item" key={index}>
            <img src={work.w_img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="mywork-more">
        <p>Show more</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
}
