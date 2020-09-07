import React from 'react';
import '../SignIn/SignIn.css';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}	
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}	

	onSumbitRegister = () => {
		fetch('https://agile-ocean-81765.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
					email : this.state.email,
					password : this.state.password,
					name: this.state.name
				}
			)
		})
		.then((response)=>response.json())
		.then((user)=>{
			if(user.id){
				this.props.userInfoSetter(user);
				this.props.routeSetter('Home');
			}else{
				this.props.routeSetter('Register');				
			}
		})
	}	

		
		

		
	render(){
		let { status } = this.props;
		if(status==='Register'){
			return(
		    	<div>
		    		<main className="pa4 black-80">
					  <div className="measure center br2 shadow-2 pa2">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="center f4 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name"
					        	onChange= {this.onNameChange}
					        />
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange= {this.onEmailChange}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Create Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password"
					        	onChange={this.onPasswordChange}
					        />
					      </div>
					    </fieldset>
					    <div >
					      <div className="">
					      	<input onClick={this.onSumbitRegister}  className="ml5 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
				    	  </div>
					    </div>
					  </div>
					</main>
		    	</div>
		    )
		}else{
			return(
				<div/>
			)
	    }
	}    
}

export default Register