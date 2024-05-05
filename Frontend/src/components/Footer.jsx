import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer" style={{position:"webkit-sticky"}}>
       Copyright 2023 @Finmate 
        <div className="footer-r">
         <Link to='/privacy'>Privacy Policy</Link>
         <Link to="/t&c">Terms &amp; Conditions</Link>
         <Link to="/FAQ">FAQ</ Link>
         <Link to='/feedback'>Feedback</Link>
        </div>
      </div>

  )
}

export default Footer