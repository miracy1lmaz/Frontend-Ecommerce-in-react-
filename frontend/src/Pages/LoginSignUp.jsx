import React from 'react' 
import "./CSS/LoginSignUp.css"
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>

        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email"  placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account?<span>Login</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe inventore, illum nam ipsum distinctio quas.</p>
          </div>
        </div>


    </div>
  )
}

export default LoginSignUp
