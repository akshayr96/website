import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './../Context'
import { toggleTheme, DARK, LIGHT } from "./../utils/theme"
import "./../style/ThemeToggle.scss"

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(AppContext)
	
	const DAY = 'day'
	const NIGHT = 'night'

	useEffect(()=>{
		const body = document.getElementsByTagName("body")[0];
		body.classList.remove(LIGHT);
		body.classList.remove(DARK);
		body.classList.add(theme);
	},[theme])

	const getToggleState = (themeState) => themeState == LIGHT ? NIGHT : DAY

	return (
		<div>
			<div className={`toggle ${getToggleState(theme)}`} id="toggle" onClick={()=>setTheme(toggleTheme(theme))}>
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
