<<<<<<< HEAD
import React from 'react';
import './Navigation.css';
import 'tachyons'

function Navigation({ onRouteChange, isSignedIn }) {
	  	if (isSignedIn) {
	  		return (
			    <div className="Navigation">
			    	<nav>
			    		<span id="sign-out" onClick={() => onRouteChange("signIn")}>Sign Out</span>
			    	</nav>
			    </div>
		    );
		} else {
			return (
				<div className="Navigation">
				   	<nav>
				   		<span id="sign-out" onClick={() => onRouteChange("signIn")}>Sign in </span>
				   		<span> | </span>
				   		<span id="sign-out" onClick={() => onRouteChange("register")}> Register</span>
				   	</nav>
				</div>
			);
		}
}

=======
import React from 'react';
import './Navigation.css';
import 'tachyons'

function Navigation() {
  return (
    <div className="Navigation">
    	<nav>
    		<span id="sign-out">Sign Out</span>
    	</nav>
    </div>
  );
}

>>>>>>> 76d330c52d2c4cc345fa08e5bccd7f0c06cdd2a0
export default Navigation;