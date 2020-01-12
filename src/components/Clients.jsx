import React from 'react';
import "./../style/clients.scss"
import Image from "../components/Image"

const commonCss =  { height: '120px', margin: '10px', cursor: 'pointer' }
const logos = [{
	width: '110px',
	name: 'saint-beard.png',
	url: 'https://www.saintbeard.com/'
},{
	width: '200px',
	name: 'nala.png',
	url: 'http://nala.co.in/'
},{
	width: '120px',
	name: 'fit.jpg',
	url: 'http://www.fitcampus.in/'
},{
	width: '100px',
	name: 'redefcorp.png',
	url: 'https://redefcorp.com/'
},{
	width: '110px',
	name: 'hillstone.png',
	url: 'http://www.hillstonegranites.in/'
},{
	width: '210px',
	name: 'vnr.jpeg',
	url: 'http://vnrhomes.com/'
}]
const Clients = () => {
	return ( 
		<div className="clients section">
			<div class="section-header">Trusted By</div>
			<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap' }}>
				{ logos.map(logo => {
					const { url, width, name } = logo
					return (
						<div onClick={()=>window.open(url,'_blank')} style={{border: 'solid #ccc 1px'}}>
							<Image style={{ width, ...commonCss }} imageName={name}/>
						</div>
					)
				}) }
				</div>
		</div>
	 );
}
 
export default Clients;