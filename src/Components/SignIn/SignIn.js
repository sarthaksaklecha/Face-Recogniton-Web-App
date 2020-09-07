import React from 'react';
import './SignIn.css';


class SignIn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			emailSignIn: '',
			passwordSignIn: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({emailSignIn: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({passwordSignIn: event.target.value})
	}

	onSumbitSignIn = () => {
		console.log(this.state);
		fetch('https://agile-ocean-81765.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
					email : this.state.emailSignIn,
					password : this.state.passwordSignIn
				}
			)
		})
		.then((response)=>response.json())
		.then((user)=>{
			if(user.id){
				this.props.userInfoSetter(user);
				this.props.routeSetter('Home');
			}else{
				console.log('error');
			}	
		})

	}
	render(){
		let { status, routeSetter } = this.props;
		if(status==='SignIn'){
			return(
		    	<div>
		    		<main className="pa4 black-80">
					  <div className="measure center br2 shadow-2 pa2">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="center f4 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange ={this.onEmailChange}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password"
					        	onChange ={this.onPasswordChange}
					        />
					      </div>
					    </fieldset>
					    <div>
					      <input onClick={this.onSumbitSignIn}  className="ml5 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
					    </div>
					    <div className="lh-copy mt3">
					      <p onClick={()=>routeSetter('Register')}  className="f6 link dim black db pointer">Not a member? Register Now</p>
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

export default SignIn