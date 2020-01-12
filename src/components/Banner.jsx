import React from 'react';
import Image from './Image'
import './../style/Banner.scss'
const Banner = () => {
	return ( 
		<div className="banner">
			<div className="hero-text">
				<div className="banner-hello-text">Hello, I'm</div>
				<h1 className="banner-main-text">Akshay</h1>
				<h1 className="banner-main-text">Ramesh</h1>
				<div className="banner-desc-text">Full Stack Developer</div>
			</div>
			<div className="image-container">
				<Image style={{ width: '360px' }} imageName="photo.png" />
			</div>
		</div>
	 );
}
 
export default Banner;