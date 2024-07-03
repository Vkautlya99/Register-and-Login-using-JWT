
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
import "../App.css"
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/forgot-password', {
      email
    }).then(response => {
         if (response.data.status) {
           alert('Check your email to reset your password');
         navigate('/login');
    }
    }).catch(err => {
  
    console.log(err);
     }) 
    }

  return (
    <div>
      <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <h2 className='sign-up-header'>
            Reset Password
            <div className='down-header'></div>
          </h2>
          <input
            type='email'
            placeholder='email'
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className='btn-btn'>Reset</button>
          <p>
            Already registered? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
