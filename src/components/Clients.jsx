import React from 'react';
import "./../style/Clients.scss"
import Image from "../components/Image"
import Emoji from "./Emoji"

const commonCss =  { height: '110px', margin: '10px', cursor: 'pointer' }
const logos = [{
	width: '100px',
	name: 'saint-beard.png',
	url: 'https://www.saintbeard.com/'
},{
	width: '190px',
	name: 'nala.png',
	url: 'http://nala.co.in/'
},{
	width: '110px',
	name: 'fit.jpg',
	url: 'http://www.fitcampus.in/'
},{
	width: '90px',
	name: 'redefcorp.png',
	url: 'https://redefcorp.com/'
},{
	width: '100px',
	name: 'hillstone.png',
	url: 'http://www.hillstonegranites.in/'
},{
	width: '180px',
	name: 'vnr.jpeg',
	url: 'http://vnrhomes.com/'
}]
const Clients = () => {
	return ( 
		<div className="clients section">
			<div className="section-header"><Emoji symbol="😊"/>Trusted By</div>
			<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap' }}>
				{ logos.map((logo, key) => {
					const { url, width, name } = logo
					return (
						<div onClick={()=>window.open(url,'_blank')} style={{border: 'solid #ccc 1px'}} key={key}>
							<Image style={{ width, ...commonCss }} imageName={name}/>
						</div>
					)
				}) }
				</div>
		</div>
	 );
}
 
export default Clients;