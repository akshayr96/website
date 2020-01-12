import React from 'react';
import "./../style/Timeline.scss"

const Timeline = ({ children }) => {
	return ( 
		<div className="timeline">
			<div className="event">
				<div className="circle"></div>
				<div className="content">
					{ children }
				</div>
			</div>
		</div>
	);
}
 
export default Timeline;