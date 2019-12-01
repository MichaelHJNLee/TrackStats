import React, { useState, useEffect } from 'react';


const SignIn = (props) => {
  const [login, toggleLogin] = useState(false);
  const [signup, toggleSignup] = useState(false);

  return (
    <div>
      <h1>TrackStats</h1>
      <h2 onClick={() =>{toggleLogin(!login); toggleSignup(false)}}>Log-In</h2>
      <h2 onClick={() =>{toggleSignup(!signup); toggleLogin(false)}}>Sign-Up</h2>
      {login && <div>Log-In Username: <input type="text" id="loginName"></input> Password: <input type="password" id="loginPW"></input></div>}
      {signup && <div>Sign Up Username: <input type="text" id="signupName"></input> Password: <input type="password" id="signupPW"></input></div>}
      {(login || signup) && <div onClick={() => {
        if (login) {
          props.login(document.getElementById('loginName').value, document.getElementById('loginPW').value, 'login');
        } else {
          props.login(document.getElementById('signupName').value, document.getElementById('signupPW').value, 'signup')
        }
        }}>Submit</div>}
    </div>
  )
}

export default SignIn;