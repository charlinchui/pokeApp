import React from 'react';
import { useState } from 'react';
import "./Login.scss";

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const handleIsRegister = () => {
    if (isRegister) {
      setIsRegister(false)
    } else {
      setIsRegister(true);
    }
  }
  //handleIsRegister(false);
  return (
    <div>
      <div className="container">
        <div className="line"></div>
        <div className="ball"></div>
        {isRegister ?
          <div className="form">
            <input type="text" placeholder='Username' className='form-input' />
            <input type="password" placeholder='Password' className='form-input' />
            <div className="btns">
              <button className="login-btn">Log In</button>
              <button className="register-btn" onClick={handleIsRegister}>Register</button>
            </div>
          </div>
          :
          <div className="form">
            <input type="text" placeholder='Username' className='form-input' />
            <input type="email" placeholder='Email' className='form-input' />
            <input type="password" placeholder='Password' className='form-input' />
            <input type="password" placeholder='Confirm Password' className='form-input' />
            <div className="btns">
              <button className="login-btn">Sign In</button>
              <button className="register-btn" onClick={handleIsRegister}>Log in</button>
            </div>
          </div>
        }
      </div>

    </div>
  );
}

export default Login;