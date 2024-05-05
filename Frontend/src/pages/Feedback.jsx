import React,{useState} from "react";
import {Toaster,toast} from 'react-hot-toast'
import Topbar1 from "../components/Topbar1";
import Footer from "../components/Footer";
import img from '../assets/images/communicate.gif'
import { addFeedback } from "../service/api";
const Feedback=()=>{
  const[feedback,setFeedback]=useState({
    name:'',
    email:'',
    subject:'',
    message:''
})
const handleChange=(e)=>{
  e.preventDefault();
  setFeedback({...feedback,[e.target.id]:e.target.value})
}
    const handleSubmit=async(e)=>{

        e.preventDefault();
        try{
          const res=await addFeedback(feedback);

          if((res.status) == "200")
          {
            toast.promise(
                new Promise((resolve) => {
                  // Simulate some asynchronous operation
                  setTimeout(() => {
                    resolve('Sent successfully!');
                  }, 1000); // Adjust the delay as needed
                }),
                {
                  position:'bottom-right',
                  loading: 'Sending...',
                  success: 'Sent successfully!',
                  error: 'An error occurred while sending your feedback.',
                }
              ).then(() => {
                // Navigate to the next page after the toast is closed or after a delay
                window.location.reload(true);
              });

          }
        }
        catch(e){
          toast.error('An error occured')
        }
    
    }
    return(
        <div className='body1'>
        <div><Toaster/></div>
        <Topbar1/>
        <div className='main d-flex-c' style={{margin:"5em auto"}}>
            <br/>
           <img src={img} style={{width:"17%"}}/>
            <h3>Feedback</h3>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c' style={{ paddingTop: "1%"}}>
                    <input type='text' name='Name' id="name" className='input-field' style={{marginTop: "1rem"}} placeholder='Name*'  autoFocus required onChange={handleChange}/>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email*'   required onChange={handleChange}/>
                    <input type='text' name='Subject' id="subject" className='input-field' placeholder='Subject*'   required onChange={handleChange}/>
                    
                    <textarea name="message" id="message" class="input-field" placeholder="Message*" style={{height: "15vh" }}required onChange={handleChange}></textarea>

                    <button type='submit' align='center' className='auth-btn' style={{marginTop: "5%"}}>Submit</button>
                </div>
            
            
            <br/>
            </form>
        </div>
        <Footer/>
    </div>
    )
}
export default Feedback