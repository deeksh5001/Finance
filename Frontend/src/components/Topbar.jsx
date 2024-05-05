import React from 'react'
import logo from '../assets/images/logo1.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { Link } from 'react-router-dom'

const Topbar = () => {
    const user=useSelector(selectUser)
  return (
    <div className='app'>
      <header className="header">
      <Link to='/'><img src={logo} style={{ width:"8vw",height:"5vh"}} alt="Logo" /></Link>
        <div className="profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>&nbsp;
        <h6>{user?user.email:"Guest"}</h6>
          
        </div>
      </header>

    </div>
  )
}

export default Topbar
