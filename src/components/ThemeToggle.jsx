import React, { useState } from 'react';
import "./../style/ThemeToggle.scss"

const ThemeToggle = () => {
	const [value, setValue] = useState(true)

	return (
		<div>
			<div className={`toggle ${value ? 'day' : 'night'}`} id="toggle" onClick={()=>setValue(!value)}>
				<div className="cloud">
					<div className="sub-one"></div>
				</div>
				<div className="switch">
					<div className="crater c1"></div>
					<div className="crater c2"></div>
					<div className="crater c3"></div>
				</div>
				<div className="star s1"></div>
				<div className="star s2"></div>
				<div className="star s3"></div>
				<div className="star s4"></div>
			</div>
		</div>
	);
}

export default ThemeToggle;
