// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate, Link } from 'react-router-dom'
import "../App.css"

const Login = () => {
   
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/login", {
            email,
            password,

       }).then(response => {
           if (response.data.status) {
                navigate("/")
            }

       }).catch(err => {
           console.log(err)
})
   }
    Axios.defaults.withCredentials = true;
  return (
    <div className='sign-up-container'>
          <form className="sign-up-form" onSubmit={handleSubmit}>
              <h2 className='sign-up-header'>Log_In
                  <div className='down-header'></div>
              </h2>
              
              
              
              <input type="email" placeholder='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
             
              
              <input type="password" placeholder='password' name="" id="" onChange={(e) => setPassword(e.target.value)}/>
              <button className='btn-btn'>Login</button>
              <Link to="/forgotPassword">Forgot Password ? </Link>
              <p>Do not have any Account  ? <Link to="/signup" >Register</Link> </p>
          </form>
    </div>
  )
}

export default Login;
