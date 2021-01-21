import React from 'react';
import './Register.css';
import 'tachyons'

function Register({ onRouteChange }) {
  return (
    <div classNameName="Register">
	  <section id="wrapper">
		  	<div id="one">
		      <form>
		        <label for="fName" className="label">Full name</label>
		        <p><input type="text" id="fName" autocomplete="off" className="input" /></p>

		        <label for="email" className="label">Email</label>
		        <p><input type="email" id="email" placeholder="Enter valid email" autocomplete="off" className="input" /></p>

		        <label for="password" className="label">Password</label>
		        <p><input type="password" id="password" placeholder="8 characters minimum" className="input" /></p>

				<div id="button-5">
			  		<input type="submit" onClick={() => onRouteChange('register')} value="Register" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-orange"/>
				</div>
		      </form>
		    </div>
		    <div id="button" onClick={() => onRouteChange('signIn')}>Sign In</div>
	  </section>
    </div>
  );
}

export default Register;