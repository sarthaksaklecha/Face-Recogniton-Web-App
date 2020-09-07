import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInput, onClickButton, status}) => {
	if(status==='Home'){
		return(
			<div className='form'>
				<input placeholder='image url' type='text' onChange={onInput}  ></input>
				<button id='btn2' onClick={onClickButton}>Result</button>
			</div>
		)
	}else{
		return(<div/>)
	}	
}

export default ImageLinkForm





