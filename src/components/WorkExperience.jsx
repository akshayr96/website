import React from 'react';
import Image from './../components/Image'
import Timeline from '../components/Timeline'
import "../style/WorkExperience.scss"

const career = [{
	orgnization: 'Visual BI Solutions, Chennai',
	logo: 'visualbi.png',
	timeline: [{
		role: 'Senior BI Developer',
		duration: 'Jan, 2017 - Now'
	},{
		role: 'BI Developer',
		duration: 'June, 2018 - Dec, 2019'
	},{
		role: 'BI Analyst',
		duration: 'June, 2017 - June, 2018'
	}],
	skills: 'ReactJS, Angular JS, NodeJS, HapiJS, Python Flask, PostgreSQL'
},,{
	orgnization: 'Redef Corp Inc, NY',
	logo: 'tredefcorp.png',
	timeline: [{
		role: 'Remote Freelance Developer',
		duration: 'Sep, 2018 - Mar 2019'
	}],
	skills: 'React JS, Express JS, Mongo DB, Figma'
},{
	orgnization: 'Creatrix Studio LLP, Chennai',
	logo: 'cx.jpg',
	timeline: [{
		role: 'Founder & Designer / Developer',
		duration: 'June, 2016 - May 2017'
	}],
	skills: 'HTML, CSS, JQuery, Bootstrap, Adobe Illustrator '
}]

const WorkExperience = () => {
	return ( 
		<div className="work-experience section">
			<div className="section-header">Work Experience</div>
			{career.map(experience => {
				const { logo, orgnization, timeline, skills } = experience
				return (
					<div className="experience-card">
						<Image style={{ width: '50px', height: '50px' }} imageName={logo} />
						<div className="experience-description">
							<div className="organization">{ orgnization }</div>
								{timeline.map(timelineItem => {
									const { role, duration } = timelineItem
									return (
										<Timeline>
											<div className="role">{ role }</div>
											<div className="duration">{ duration }</div>
										</Timeline>
									)
								})}
							<div className="skills">{ skills }</div>
						</div>
					</div>
				)
			})}
		</div> 
	);
}
 
export default WorkExperience;