import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation'
import ImageDumper from '../components/ImageDumper/ImageDumper'
import ImageURL from '../components/ImageURL/ImageURL'
import Image from '../components/Image/Image'
import SignIn from '../components/SignIn/SignIn'
import Register from '../components/Register/Register'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

// module.exports = global.Clarifai = {
//   FACE_DETECT_MODEL: '53e1df302c079b3db8a0a36033ed2d15',
//   DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
//   CELEBRITY_MODEL: 'e466caa0619f444ab97497640cefc4dc'
// };

var app = new Clarifai.App({
 apiKey: "ec651b3a38af4956bc4689fb8b914932"
});

var paramsOpts = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
            	

class App extends Component {
  	constructor() {
	    super();
	    this.state = {
		    input: '',
		    imageUrl: '',
		    box: {},
		    route: 'signIn',
		    isSignedIn: 'false'
	    }
	}
	
	calculateFaceLocation = (data) => {
	    var clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
	    var image = document.getElementById('inputimage');
	    var width = Number(image.width);
	    var height = Number(image.height);
	    console.log(clarifaiFace);
	    return {
	      leftCol: clarifaiFace.left_col * width,
	      topRow: clarifaiFace.top_row * height,
	      rightCol: width - (clarifaiFace.right_col * width),
	      bottomRow: height - (clarifaiFace.bottom_row * height)
	    }
	}

	OnButtonSubmit = (click) => {
		this.setState({imageURL: this.state.input})
		console.log(click)
		//  Clarifai.DEMOGRAPHICS_MODEL, Clarifai.CELEBRITY_MODEL,
    	app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response))).catch(error => console.log(error));
	}
	OnInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	displayFaceBox = (box) => {
		this.setState({box: box});
	}
	onRouteChange = (route) => {
		if (route === 'signOut') {
			this.setState({isSignedIn: false})
		} else if (route === 'home') {
			this.setState({isSignedIn: true})
		}
		this.setState({route: route})
	}
	0
	render() {
	  	return (
		    <div className="App">
		    	<Particles params={ paramsOpts } className="particles" />
		      	<Navigation onRouteChange={this.onRouteChange}/>
		      	{ this.state.route === 'home' 
		      		?	<div>
					     	<ImageDumper />	
					      	<ImageURL OnInputChange={this.OnInputChange} OnButtonSubmit={this.OnButtonSubmit} />
					    	<Image box={this.state.box} imageURL={this.state.imageURL}/>
					    </div>
					: 	(
							this.state.route === 'signIn'
							? <SignIn onRouteChange={this.onRouteChange}/>
							: <Register onRouteChange={this.onRouteChange}/>
						)
		    	}
		    </div>
	  	);}
}

export default App;




