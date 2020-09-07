import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl , DimensionsArr, status }) => {
	if(status==='Home'){
		return(
			<div className='center ma' id='outter'>
				<div className='absolute'>
					<img id='fi' alt='' src={imageUrl} />
					{
						DimensionsArr.map((Dimensions)=>{
							return(
								<div 
									id='boxface'
									style={{top:Dimensions.mt, bottom:Dimensions.mb, right:Dimensions.mr, left:Dimensions.ml}}>
								</div>
							)	
						})
					}
				</div>
			</div>
		)
	}else{
		return(<div/>)
	}	

}

export default FaceRecognition