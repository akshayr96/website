import React from 'react';
import Particles from "react-particles-js";

export default () => {
	return (
		<Particles className="check"
			params={{
				particles: {
					number: {
						value: 50
					},
					opacity: {
						value: 0.25
					},
					size: {
						value: 3
					},
					line_linked: {
						enable: true 
					},
					move: {
						speed: 10
					}
				}
			}}
			style={{
				width: '100%',
				height: '100%',
				background: 'rgba(0,0,0,0)',
				position: 'absolute'
			}}
		/>
	)
}