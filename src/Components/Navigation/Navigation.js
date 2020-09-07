import React from 'react'
import './Navigation.css'
const Navigation = ({ status, routeSetter}) => {
	if(status==='SignIn') {
		return(
			<div className='pa3' id='nav'>
				<nav>
					<button onClick={()=>routeSetter('Register')}>Register</button>
				</nav>
			</div>
		)
	}else if(status==='Home'){
		return(
			<div className='pa3' id='nav'>
				<nav>
					<button onClick={()=>routeSetter('SignIn')}>Sign-out</button>
				</nav>
			</div>	
		)
	}else if(status==='Register'){
		return(
			<div className='pa3' id='nav'>
				<nav>
					<button onClick={()=>routeSetter('SignIn')}>Sign-in</button>
				</nav>
			</div>	
		)
	}	
}
export default Navigation