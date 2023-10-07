import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/app.css'
import fingerprint from '../assets/images/fingerprint.gif'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import Topbar from '../components/Topbar'

const Register = () => {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
      });
    
    const nav=useNavigate();
    const handleRoute=(e)=>{
        nav('/login')
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    
    const validatePasswordStrength = (password) => {
        // Check if the password meets your strength criteria (e.g., length)
        return password.length >= 8; // You can add more criteria if needed
    };
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!validateEmail(login.email)) {
            setErrors({ ...errors, email: 'Invalid email format' });
            return;
          }
      
          // Validate password strength
          if (!validatePasswordStrength(login.password)) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
            return;
          }
      
          // Clear any previous validation errors
          setErrors({ email: '', password: '' });
      
        console.log(`Email :${login.email}`)
        console.log(`Password :${login.password}`)
        toast.promise(
          new Promise((resolve) => {
            // Simulate some asynchronous operation
            setTimeout(() => {
              resolve('Sign up successfull!');
            }, 2000); // Adjust the delay as needed
          }),
          {
            loading:'Creating your account...',
            success: 'Sign up successfull!',
            error: 'An error occurred while signing in.',
          }
        ).then(() => {
          // Navigate to the next page after the toast is closed or after a delay
          setTimeout(() => {
            nav('/');
          }, 1000); // Adjust the delay as needed
        });

    }
  return (
    <div className='body1'>
        <div><Toaster/></div>
        <Topbar/>
        <div className='main d-flex-c' style={{height:"555px",margin:'5em auto'}}>
          <br/>
          <img src={fingerprint} style={{width:'70px'}}></img>
            <h4>Create your new account</h4>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c'>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    <input type='username' name='username' id="username" className='input-field' placeholder='Username' onChange={handleChange} required/>
                    <input type='password' name='pass' id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
                    {errors.password && <p className="error-text">{errors.password}</p>}
                    <button type='submit' align='center' className='auth-btn' style={{marginTop:"12%"}}>Sign Up</button>
                </div>
            
            <br/>
            <p align='center'>
              <span
                className="text-link"
                onClick={handleRoute}>
                <b>Already have an account? Login here</b>
              </span>
            </p>

            <br/>
            </form>
        </div>
    </div>
  )
}

export default Register
