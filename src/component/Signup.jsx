// SignUp.js
import React, { useState } from 'react';
import '../styles/global.css';
import NavBar from './NavBar';
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, e.g., send data to server
    console.log('Sign up submitted:', name, email, password);
  };

  return (
    <div>
      <NavBar/>
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form_title title">Create Account</h2>
      <input
        className="form__input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
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
     
      <div className='sign_up'>
      <p>Already have an account? <a href="/Login">Sign in</a> </p>
      </div>
      
      <button className="form__button button submit" type="submit">
        SIGN UP
      </button>
    </form>
    </div>
  );
}

export default SignUp;
