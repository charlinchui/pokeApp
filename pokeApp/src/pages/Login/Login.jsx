import React from 'react';
import "./Login.scss";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="line"></div>
        <div className="ball"></div>
        <div className="form">
          <input type="text" placeholder='Username' className='form-input' />
          <input type="password" placeholder='Password' className='form-input' />
          <div className="btns">
            <button className="login-btn">Log In</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;