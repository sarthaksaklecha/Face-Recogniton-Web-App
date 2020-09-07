import React from 'react'
import robot from './robot.svg'
import './Logo.css'
import Tilt from 'react-tilt'
const Logo = () => {
	return(
		<div className='ma4 mt4 ' >
		 	<Tilt className="Tilt pa2 br2 solid black shadow-5" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"><img alt='' src={robot}/>  </div>
			</Tilt>
		  
		</div>
	)
}
export default Logo
