import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './../Context'
import "./../style/ThemeToggle.scss"

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(AppContext)

	useEffect(()=>{
		const body = document.getElementsByTagName("body")[0];
		body.classList.remove('light');
		body.classList.remove('dark');
		body.classList.add(theme);
	},[theme])

	return (
		<div>
			<div className={`toggle ${theme == 'dark' ? 'night' : 'day'}`} id="toggle" onClick={()=>setTheme(theme == 'dark' ? 'light': 'dark')}>
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
