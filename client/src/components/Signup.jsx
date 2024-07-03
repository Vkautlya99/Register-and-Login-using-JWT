// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Axios from "axios"

import "../App.css"
import {useNavigate, Link} from "react-router-dom"

const Signup = () => {
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate() 
  
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/signup", {
            username,
            email,
            password,

        }).then(response => {
            if (response.data.status) {
                navigate("/login")
                console.log(response)
            }
            
       }).catch(err => {
           console.log(err)
})
   }
    
  return (
    <div className='sign-up-container'>
          <form className="sign-up-form" onSubmit={handleSubmit}>
              <h2 className='sign-up-header'>Registration
                  <div className='down-header'></div>
              </h2>
              
              
              <input type="text" placeholder='username'  onChange={(e) => setUsername(e.target.value)}/>
              
              <input type="email" placeholder='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
             
              
              <input type="password" placeholder='password' name="" id="" onChange={(e) => setPassword(e.target.value)}/>
              <button className='btn-btn'>Register</button>
              <p>Allready registered  ? <Link to="/login" >Login</Link> </p>
          </form>
    </div>
  )
}

export default Signup;
