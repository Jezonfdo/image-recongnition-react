import React from 'react';
import './SignIn.css';
import 'tachyons'

function SignIn({ onRouteChange }) {
  return (
    <div classNameName="SignIn">
	  <section id="wrapper">

	    <div id="one">
	      <form>
	        <label for="emailIn" className="label">Email</label>
	        <p><input type="email" id="emailIn" placeholder="Enter valid email" autocomplete="off" className="input"/></p>

	        <label for="passwordIn" className="label">Password</label>
	        <p><input type="password" id="passwordIn" placeholder="8 characters minimum" className="input" /></p>

		    <div id="button-5">
			  <input type="submit" onClick={() => onRouteChange('home')} value="Sign In" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-orange"/>
			</div>

	      </form>
	    </div>
	    <p><div id="button" className="button" onClick={() => onRouteChange('register')}>Register</div></p>
	  </section>
    </div>
  );
}

export default SignIn;