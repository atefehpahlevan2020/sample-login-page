import React from 'react';
import './App.css';


function App() {
  return (
    <div className='login'>
      <div className="login-screen">
        <div className="app-title">
          <h1>ورود</h1>
        </div>
        <div className="login-form">
          <div className="group-control">
            <input type="text" className='login-field' placeholder='نام کاربری'/>
          </div>
          <div className="group-control">
            <input type="text" className='login-field' placeholder='رمز عبور'/>
          </div>
          <div className="group-control">
            <input type="submit" className='login-btn' value='ورود'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
