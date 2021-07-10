import React from 'react';

import * as resumeStyles from './resume.module.scss';

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <br />
      <br />
      <div className={resumeStyles.resumeContent}>
        <div className={resumeStyles.resumeItem}>
          <h2>Education</h2>
          <ul>
            <li>
              <h4>Master of Information Technology(Professional Computing)</h4>
              <h4>Swinburne University of Technology</h4>
              <p>I completed my master degree here</p>
            </li>
          </ul>
        </div>

        <div className={resumeStyles.resumeItem}>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>
                App Development <time>2018 - 2019</time>
              </h3>
              <h4>Prologic Solutions Private Limited</h4>
              <h4>Network Management</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                suscipit!
              </p>
            </li>
            <li>
              <h3>
                Frelancer <time>2020</time>
              </h3>
              <h4>Upwork</h4>
              <h4>Lorem ipsum.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                suscipit!
              </p>
            </li>

            <li>
              <h3>Web Designing Course Facilitator</h3>
              <h4>Insight Academy</h4>
              <p>
                I facilitated web designing course for school level students.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
