import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const SignIn = (props) => {
  const [login, toggleLogin] = useState(false);
  const [signup, toggleSignup] = useState(false);

  return (
    <div>
      <h1>TrackStats</h1>
      <h2 onClick={() =>{toggleLogin(!login)}}>Log-In</h2>
      <h2 onClick={() =>{toggleSignup(!signup)}}>Sign-Up</h2>
      {login && <input type="text"></input>}
      {signup && <input type="text"></input>}
      <div onClick={() => props.setLogged(true)}>hi</div>
    </div>
  )
}

export default SignIn;