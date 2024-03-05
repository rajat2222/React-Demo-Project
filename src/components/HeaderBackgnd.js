import React from 'react'
import './cssCustom/headerbckgnd.css';

export default function HeaderBackgnd(props) {
  return (
    <div>
      <div className='container'>
      <div className="bg-image">
        <div className='myclass'>
        {/*<div className='mycontainer'>
            <div className='bg-image-image'>
                
            </div>
  </div>*/}
            <div className="login-page"  >
              
              <div className="form" style={{background: props.mode === 'light'?'white':'#4d6d8a'}}>
              <div style={{color: props.mode === 'dark'?'white':'black'}}><h3>Login Form</h3></div>
              <form className="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
              </form>
              <form className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
