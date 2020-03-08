import React from "react"

import resumeStyles from "./resume.module.scss"

const Resume = () =>{

    return (
        <div className="resume-wrapper">
            <div className={resumeStyles.resumeContent}>
                <div className={resumeStyles.resumeItem}>
                <h3>Education</h3>
                <ul>
                    <li>
                        <h4>Masters Degree</h4>
                        <h4>University Of Melbourne</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, suscipit!</p>
                    </li>
                </ul>
                </div>

                <div className={resumeStyles.resumeItem}>
					<h3>Work Experience</h3>
					<ul>
						<li>
							<h3>App Development <time>2018 - 2019</time></h3>
							<h4>Prologic Solutions Private Limited</h4>
							<h4>Network Management</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, suscipit!</p>
						</li>
						<li>
							<h3>Frelancer <time>2020</time></h3>
							<h4>Upwork</h4>
							<h4>Lorem ipsum.</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, suscipit!</p>
						</li>
					</ul>
				</div>
            </div>
        </div>
        
    )
}



export default Resume