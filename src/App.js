import React,{ Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'; 
import particlesJSON from './Components/ParticlesParams';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import FaceRecognition from  './Components/faceRecognition/faceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
const app = new Clarifai.App({
 apiKey: 'a29a5d363e0c4fe6b0c134bce9e1cfe7'
});

 // const user = {
 //    input:'',
 //    imageURL:'',
 //    box:[],
 //    route:'SignIn',
 //    id:'',
 //    name: '',
 //    email: '',
 //    entries:'',
 //    joined :''
 //  }
    

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:'',
      box:[],
      route:'SignIn',
      id:'',
      name: '',
      email: '',
      entries:'',
      joined :''
    }
  }
  userInfoSetter = ( obj ) => {
    this.setState({
      id: obj.id,
      name: obj.name,
      email: obj.email,
      entries: obj.entries,
      joined: obj.joined
    })
  }
  routeSetter = ( change ) => {
    this.setState({route: change})
  }
  onInput = (event) =>{
      this.setState({input:event.target.value});
    }

  onClickButton = () => {
      this.setState({imageURL:this.state.input});
      app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
                .then((response)=>{
                  console.log(response);
                  if(response){
                    console.log('response');
                    fetch('https://agile-ocean-81765.herokuapp.com/image', {
                      method: 'put',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify({
                          id: this.state.id
                        })
                    })
                    .then((count)=>count.json())
                    .then((count)=>this.setState({entries: count.entries}))  
                    let r1 = response.outputs[0].data.regions.map((obj,index,arr)=>{
                      return obj.region_info.bounding_box
                    })                 
                    return r1
                  }}).then((region)=>this.displayBox(this.calculateBoxDimensions(region)))     
                  .catch((err)=>console.log(err))
                } 
                      
  
  calculateBoxDimensions = (r1) => {
    const img = document.getElementById("fi");
    const width= img.width;
    const height= img.height;
    const dimensionArr= r1.map((boundingBox)=>{
      const obj= {
        mt : boundingBox.top_row*height,
        mb : height- boundingBox.bottom_row*height,
        mr : width - boundingBox.right_col*width,
        ml : boundingBox.left_col*width 
      }
      return obj      
    })
    return dimensionArr;

 } 

  displayBox = (obj) => {
    this.setState({box:obj})
  }
  render(){
    return (
      <div>
        <Particles id="party"
          params={particlesJSON}
        />
        <Navigation status={this.state.route} routeSetter={this.routeSetter}/>
        <Logo />
        <Register userInfoSetter= {this.userInfoSetter} status={this.state.route} routeSetter={this.routeSetter}/>
        <SignIn userInfoSetter= {this.userInfoSetter} status={this.state.route} routeSetter={this.routeSetter}/>        
        <Rank entries={this.state.entries} username={this.state.name}status={this.state.route}/>
        <div id='centralise'>
          <div id='honey'>
            <ImageLinkForm status={this.state.route} onInput={this.onInput} onClickButton={this.onClickButton} />
          </div> 
        </div> 
        <FaceRecognition status={this.state.route} imageUrl= {this.state.imageURL} DimensionsArr={this.state.box} /> 
      </div>
    );
  }
}

export default App;
