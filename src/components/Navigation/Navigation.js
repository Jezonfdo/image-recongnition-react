
import React from 'react';
import './Navigation.css';
import 'tachyons'

function Navigation({ onRouteChange, isSignedIn }) {
	  	if (isSignedIn === true) {
	  		return (
			    <div className="Navigation">
			    	<nav>
			    		<span id="sign-out" onClick={() => onRouteChange("signOut")}>Sign Out</span>
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
export default Navigation;