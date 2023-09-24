import React, { useState } from 'react';
import './App.css';
import ecomImage from './assets/ecom2.jpg';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // Added isSignUp state

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
    // Perform form submission logic here, e.g., send data to server
    console.log('Form submitted:', name, email, password);
  };

  return (
    <div>
      <div className="main">
        <div className={`container ${isSignUp ? 'a-container' : 'b-container'}`}>
          <img src={ecomImage} alt="Ecom" className="left-image" />
          <form id="a-form" className="form" onSubmit={handleSubmit}>
            <h2 className="form_title title">
              {isSignUp ? 'Create Account' : 'Sign in to Website'}
            </h2>
            <div className="form__icons"></div>
            {isSignUp && ( // Conditionally render name field only in sign-up mode
              <input
                className="form__input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            )}
            <input
              className="form__input"
              type="text"
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
            <span className="form__span">
              {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
              <button
                className="toggle-button"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </span>
            <button className="form__button button submit" type="submit">
              {isSignUp ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
