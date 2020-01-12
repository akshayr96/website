import React from 'react';
import "./../style/Timeline.scss"

const Timeline = ({ children }) => {
	return ( 
		<div className="timeline">
			<div className="event">
				<div className="circle"></div>
				<div class="content">
					{ children }
				</div>
			</div>
		</div>
	);
}
 
export default Timeline;