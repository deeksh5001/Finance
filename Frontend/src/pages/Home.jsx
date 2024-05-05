import React from 'react'
import Topbar1 from '../components/Topbar1'
import Footer from '../components/Footer'
import '../assets/css/Home.css'
import img from '../assets/images/arrow.gif'
import video from '../assets/images/video1.mp4'
import img1 from '../assets/images/vector.png';
import f0 from '../assets/images/f0.png'
import f1 from '../assets/images/f1.png'
import f3 from '../assets/images/f3.png'
import icon1 from '../assets/images/salary.png'
import icon2 from '../assets/images/money.png'
import icon3 from '../assets/images/budget.png'
import icon4 from '../assets/images/pie-chart.png'
import logo from '../assets/images/logo1.png'
import email from '../assets/images/email.png'
import insta from '../assets/images/instagram.png'
import twit from '../assets/images/twitter.png'
import yt from '../assets/images/youtube.png'
import fb from '../assets/images/facebook.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  localStorage.clear()
  const nav=useNavigate();
  const handleLog=()=>{
    nav('/login')
  }
  const handleSign=()=>{
    nav('/register')
  }
  
  return (
    <div>
      
        <Topbar1/>
        <video autoPlay muted loop id='aboutme'>
      <source src={video} type='video/mp4' />
      </video>
      
      <div className='about-content' id='aboutme'>
      <h1>Take Control of Your Expenses</h1>
      <p>Effortlessly Manage, Track, and Optimize Your Finances with Our Powerful Expense Tracker. Start Saving and Achieving Your Financial Goals Today!</p>
      <h2>Get Started Here!</h2>
      <img src={img} style={{width:"7%",marginRight:"10%"}}/>
      <br/>
      <div className='buttons'>
        <button className='btn1' onClick={handleSign}>SIGN UP</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn1' onClick={handleLog}>LOG IN</button>
      </div>
      <div className='vector'>
      <img src={img1} />
      </div>
      </div>
      
      <div className="features">
        <br/><br/>
     <h1 style={{color:"rgb(45, 88, 180)"}}>How FinMate works</h1>
     
     <div className="container-xl">
      <h5 style={{fontStyle:"italic",fontSize:"25px"}}>Track your expenses!<p>Empower Your Finances, Unleash Control Start Tracking Your Expenses for a Brighter Tomorrow :)</p></h5>
      <img src={f1} style={{width:"220px",marginLeft:"30%"}}/>
      <h5 style={{fontStyle:"italic",fontSize:"25px"}}>Keep track of your incomes!<p>Transform Your Money Management skills with an Income tracker That Never Misses a Beat ;)</p></h5>
      <img src={f0} style={{width:"220px",marginLeft:"30%"}}/>
      <h5 style={{fontStyle:"italic",fontSize:"25px"}}>Save for big expenses!<p>Transform Big Dreams into Reality
      Supercharge Your Savings for the Extraordinary!</p></h5>
      <img src={f3} style={{width:"220px",marginLeft:"30%"}}/>
     </div>
    <section class="related-apps">
    <div class="content-wrap bottom-animated animated middle-animated">
      <h2>Features of FinMate</h2>
      <div class="related-apps-cnt">
        <div class="flex-content">

          <div class="flex-part-five">
            <div class="related-apps-card">
              <a style={{height: "168px"}}>
                <div class="related-apps-icon">
                  <img src={icon1} alt=""/>
                </div>
                
                  <p style={{color:"black"}}>Enhanced Income Management</p>
              </a>
            </div>
          </div>
                  <div class="flex-part-five">
                    <div class="related-apps-card">
                      <a style={{height: "168px"}}>
                        <div class="related-apps-icon">
                        <img src={icon2} alt=""/>
                        </div>
                          <p style={{color:"black"}}>Custom Expense Management</p>
                      </a>
                    </div>
                  </div>

                          <div class="flex-part-five">
                            <div class="related-apps-card">
                              <a  style={{height: "168px"}}>
                                <div class="related-apps-icon">
                                <img src={icon3}alt=""/>
                                </div>
                                  <p style={{color:"black"}}>Organized Budgetting with categories </p>
                              </a>
                            </div>
                          </div>

                                  <div class="flex-part-five">
                                    <div class="related-apps-card">
                                      <a  style={{height: "168px"}}>
                                        <div class="related-apps-icon">
                                        <img src={icon4} alt=""/>
                                        </div>
                                        <p style={{color:"black"}}>Record and show financial status</p>
                                      </a>
                                    </div>
                                  </div>
      </div>
    </div>
    </div>
    <br/><br/> <br/><br/>
    <div id="contact">
    <img src={logo} style={{width:"15%"}}/><br/> <br/> 
    <h2 > Contact Us</h2>
      <p >
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at team@finmate.com. We are here to assist you and address any inquiries you may have.
      </p>

   
   <br/>
    <a href='mailto:team@finmate.org' style={{fontSize:"20px"}}><img src={email} style={{width:"6%",marginRight:'1rem'}}/>team@finmate.org</a>
    <br/>
    <div className='social'>
      <a href='https://www.instagram.com/'><img src={insta}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='https://www.facebook.com/'><img src={twit}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='https://www.youtube.com/'><img src={yt}/></a>&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;
      <a href='https://twitter.com/'><img src={fb}/></a>
    </div>

    </div>
    <br/>
    </section>
    </div>
      
    <Footer/>
    
    </div>
  )
}

export default Home
