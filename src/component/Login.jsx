// Login.js
import React, { useState } from 'react';
import '../styles/global.css';
import NavBar from './NavBar';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send data to server
    console.log('Login submitted:', email, password);
  };

  return (
    <div>
    <NavBar/>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form_title title">Sign in to Website</h2>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
           <div className='forgot_pass'>
           <p><a href="/#">Forgot Password</a> </p>
          </div>
          <div className='sign_up'>
          <p>Don't have an account? <a href="/Signup">Sign up</a> </p>
          </div>
          <button className="form__button button submit" type="submit">
            SIGN IN
          </button>
        </form>
        </div>
  );
}

export default Login;
