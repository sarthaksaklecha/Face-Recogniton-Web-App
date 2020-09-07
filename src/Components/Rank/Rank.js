import React from 'react'
import './Rank.css'

const Rank = ({ entries, status, username }) => {
	if(status==='Home'){
		return(
			<div>
				<p>{username}, your entry count is:</p>
				<p>{entries}</p>
				<p className='f3'>Enter Image url to identify faces</p>
			</div>
		)
	}else{
		return(<div/>)
	}	
}
export default Rank