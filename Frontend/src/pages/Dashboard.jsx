import React, { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import img from '../assets/images/img2.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { getExpenseSum, getIncomeSum } from '../service/api'
import { Link } from 'react-router-dom'


const Dashboard = (isSidebarOpen) => {
  const [expSum,setExpSum]=useState([]);
  const [incSum,setIncSum]=useState([]);
  const [balance,setBalance]=useState([]);
  let uid = localStorage.getItem('xuserId');

  const fetchExpenseSum = async () => {
    try {
      const response=await getExpenseSum(uid)
      setExpSum(response.data)
        
    } catch (error) {
        console.error("Error fetching user expenses:", error);
    }
}


const fetchIncomeSum = async () => {
  try {
    const response=await getIncomeSum(uid)
    setIncSum(response.data)
      
  } catch (error) {
    console.error("Error fetching user expenses:", error);
  }
}


const fetchBalance = async () => {
  try {
    const response1=await getExpenseSum(uid)
    const response2=await getIncomeSum(uid)
    setBalance(response2.data-response1.data)
      
  } catch (error) {
    console.error("Error fetching user expenses:", error);
  }
}

useEffect(() => {
    fetchExpenseSum();
    fetchIncomeSum();
    fetchBalance();
}, []);
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
          <br/>
          
         
            <div class="container">
            <h2 style={{textAlign:"center",color:"darkcyan"}}>ACCOUNT DETAILS</h2><br/>
              <div class="row align-self-center">

                <div class="col">
                <Link to='/budget' style={{textDecoration:"none"}}>
                  <div class="card c" >
                    <img src={img} class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa"}}>INCOME</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'blue'}}>Rs {Number(incSum).toLocaleString()}</p>
                    </div>
                  </div>
                  </Link>
                  <br/>
                </div>

                <div class="col">
                  <Link to='/records' style={{textDecoration:"none"}}>
                  <div class="card c" >
                    <img src="https://blog.darwinbox.com/hubfs/HOW%20Does%20travel%20and%20expense%20management%20improve%20employee%20experience%202.jpg" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>EXPENSE</h5>
                    <p class="card-text"style={{fontSize:'35px',color:'red'}}>Rs {Number(expSum).toLocaleString()}</p>
                    </div>
                  </div>
                  </Link>
                  <br/>
                </div>
                <div class="col">
                  <div class="card c" >
                    <img src="https://www.cflowapps.com/wp-content/uploads/2021/03/expense-management-process-flow.png" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>BALANCE</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'green'}}>Rs {Number(balance).toLocaleString()}</p>
                    </div>
                  </div>
                  <br/>
                </div>

              </div>
              
            </div>
            <br/><br/>
            
            
           
        <br/>
        </div>
        
        </div>
      </div>
    
  )
}

export default Dashboard
