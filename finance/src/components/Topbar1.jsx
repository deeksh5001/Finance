import React from 'react'
import logo from '../assets/images/logo1.png'
import { Link ,useNavigate} from 'react-router-dom'


const Topbar1 = () => {
  const nav=useNavigate();
  const handleClickScroll = () => {
    nav('/')
    const element = document.getElementById('contact');
    if (element) {
      //Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div class="nav-container circleBehind">
      <div className='logo1'>
        <img src={logo}/>
        </div>
        <Link to='/'>HOME</Link>
        <Link to='/aboutus' >ABOUT US</Link>
  
        <a href='/#contact' onClick={handleClickScroll}>CONTACT</a>
        <Link to='/feedback'>FEEDBACK</Link>
        <Link to='/login'>LOGIN </Link>
  
    </div>
  )
}

export default Topbar1
