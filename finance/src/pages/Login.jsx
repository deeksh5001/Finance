import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/app.css'
import fingerprint from '../assets/images/fingerprint.gif'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import Topbar from '../components/Topbar'

const Login = () => {
  const dispatch = useDispatch();

    const[login1,setLogin]=useState({
        email:'',
        password:''
    })

    const [emailError, setEmailError] = useState('');

    const nav=useNavigate();
    const handleRoute=(e)=>{
        nav('/register')
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login1,[e.target.id]:e.target.value})
    }
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        // Validate email
    if (!validateEmail(login1.email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
  
      // Clear any previous email validation error
      setEmailError('');
  
        console.log(`Email :${login1.email}`)
        console.log(`Password :${login1.password}`)
        dispatch(login({
          email :login1.email
        }))
        toast.promise(
          new Promise((resolve) => {
            // Simulate some asynchronous operation
            setTimeout(() => {
              resolve('Logged in successfully!');
            }, 2000); // Adjust the delay as needed
          }),
          {
            loading: 'Logging in...',
            success: 'Logged in successfully!',
            error: 'An error occurred while logging in.',
          }
        ).then(() => {
          // Navigate to the next page after the toast is closed or after a delay
          setTimeout(() => {
            nav('/dashboard');
          }, 1000); // Adjust the delay as needed
        });
       
        
    }
  return (
    <div className='body1'>
        <div><Toaster/></div>
        <Topbar/>
        <div className='main d-flex-c'>
            <br/>
            <img src={fingerprint} style={{width:'100px'}}></img>
            <h3>Login to the website!</h3>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c'>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email / Username' onChange={handleChange} autoFocus required/>
                    {emailError && <p className="error-text">{emailError}</p>}
                    <input type='password' name='pass' id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
                    <button type='submit' align='center' className='auth-btn'>Login</button>
                </div>
            <br/>
            <p align='center'>
              <span
                className="text-link"
                onClick={handleRoute}>
                <b>New user? Sign up here!</b>
              </span>
            </p>
            <br/>
            </form>
        </div>
    </div>
  )
}

export default Login
