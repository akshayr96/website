import React from 'react';
import Image from './../components/Image'
import "../style/WorkExperience.scss"

const WorkExperience = () => {
	return ( 
		<div className="work-experience section">
			<div className="section-header">Work Experience</div>
			<div className="experience-card">
				<Image style={{ width: '50px', height: '50px' }} imageName="visualbi.png" />
				<div className="experience-description">
					<div className="role">Senior BI Developer</div>
					<div className="organization">Visual BI Solutions, Chennai</div>
					<div className="duration">June, 2017 - Now</div>
					<div className="skills">ReactJS, Angular JS, NodeJS, HapiJS, Python Flask, PostgreSQL</div>
				</div>
			</div>
			<div className="experience-card">
				<Image style={{ width: '50px', height: '50px' }} imageName="cx.jpg" />
				<div className="experience-description">
					<div className="role">UI Developer Intern</div>
					<div className="organization">Creatrix Studio LLP, Chennai</div>
					<div className="duration">June, 2017 - Now</div>
					<div className="skills">HTML, CSS, JQuery, Bootstrap</div>
				</div>
			</div>
		</div> 
	);
}
 
export default WorkExperience;