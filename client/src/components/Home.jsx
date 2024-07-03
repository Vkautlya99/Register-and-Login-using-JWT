// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className='navbar'>
        <nav className='navbar-items'>
          <h4><Link to="/dashboard">Admin</Link></h4>
          <h4><Link to="/employeestatus" >Employee</Link>
               
          </h4>
          <h4><Link to="/employeestatus" >Student</Link></h4>
          {/* <h4>Student</h4> */}
        </nav>
      </div>
    </>
  )
}

export default Home
