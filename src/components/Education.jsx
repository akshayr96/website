import React from 'react';
import Emoji from './Emoji'
import "./../style/Education.scss"
const Education = () => {
	return (
		<div className="section education">
			<div className="section-header"><Emoji symbol="📚"/> Education</div>
			<div className="content">I graduated <Emoji symbol="👨🏻‍🎓"/> with a Bachelors Degree in <Emoji symbol="💻"/> Computer Science and Engineering with a <Emoji symbol="🎖️"/> First Class from <a className="college-name" rel="noopener noreferrer" href="https://kcgcollege.ac.in" target="_blank">KCG College of Technology</a>, Chennai (Anna University <Emoji symbol="🏛️"/>) in 2017</div>
		</div>
	);
}
 
export default Education;