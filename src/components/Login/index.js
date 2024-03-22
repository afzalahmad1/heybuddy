import React from 'react'
import Logo from '../../assets/twitter-logo-4 1.png'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="login">
        <div><img src={Logo} alt='twitter-logo'/></div>
        <h2>Log in to Twitter</h2>
        <div>
            <input type='text' id='username' placeholder='Phone number, email address'/>
        </div>
        <div>
            <input type='text' id='password' placeholder='Password'/>
        </div>
        <div className='btn'>Log in</div>
        <div className='forget-pass'>
            <div className='items'>
                Forget password?
            </div>
            <div className='items' onClick={()=> navigate("/signup")}>
                Sign up to Twitter
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
