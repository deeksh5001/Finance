import React from 'react'
import Layout from '../components/Layout'
import img from '../assets/images/img2.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import piechart1 from '../assets/images/piechart1.png'
import donut from '../assets/images/donut.png'

const Dashboard = (isSidebarOpen) => {
  const user=useSelector(selectUser)
  const recordsClass = `records ${isSidebarOpen ? 'sidebar-open' : 'sidebar'}`;
  return (
    <div>
      <Layout/>
      <div className="content">
          <div className={recordsClass}>
            <br/>
          <h4 style={{textAlign:'center'}}>Welcome {user?user.email:"Guest"}!</h4>
          <br/>
          <div className="chart">
              
              <h3 style={{textAlign:"center"}}><b>Analysis of your Expenses</b></h3>
          <img src={piechart1} style={{width:"45%",marginLeft:"5%"}}/>
          <img src={donut} style={{width:"43%",marginLeft:"5%"}}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <div class="container">
            <h2 style={{textAlign:"center"}}>ACCOUNT DETAILS</h2><br/>
              <div class="row align-self-center">

                <div class="col">
                  <div class="card c" >
                    <img src={img} class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa"}}>INCOME</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'blue'}}>$50,000</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div class="col">
                  <div class="card c" >
                    <img src="https://blog.darwinbox.com/hubfs/HOW%20Does%20travel%20and%20expense%20management%20improve%20employee%20experience%202.jpg" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>EXPENSE</h5>
                    <p class="card-text"style={{fontSize:'35px',color:'red'}}>$27,500</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div class="col">
                  <div class="card c" >
                    <img src="https://www.cflowapps.com/wp-content/uploads/2021/03/expense-management-process-flow.png" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>BALANCE</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'green'}}>$22,500</p>
                    </div>
                  </div>
                  <br/>
                </div>

              </div>
              
            </div>
            <br/><br/><br/><br/>
            
            
           
        <br/>
        </div>
        
        </div>
      </div>
    
  )
}

export default Dashboard
