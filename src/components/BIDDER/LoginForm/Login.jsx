import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'

const LoginForm = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
    // You can add form validation and authentication logic here
  };

  return (
    
    <div className="lcontainer">
      <form onSubmit={handleSubmit} className="form">
        <h2>Hello there,</h2>
        <h5>Sign in now for great values at Agile BidHub</h5>
        <div className="inputGroup">
          <label>Username</label>
          <input
            type="text"
            /*value={username}*/
            placeholder='Your Username'
            /*onChange={(e) => setusername(e.target.value)}*/
            required
          />
        </div>
        
        <div className="inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Sign In</button>
        <h6>Forgot your <a href="#">Username</a> or <a href="#">Password?</a></h6>
      </form>
      <div className='register-login'>
    <h2>Don&apos;t have an account?</h2>
   <Link to='./register'><button className='button2'>Register</button></Link> 
      </div>
    </div>
  );
}
export default LoginForm;
