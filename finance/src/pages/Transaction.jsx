import React from 'react'
import e1 from '../assets/images/e1.gif'
import e2 from '../assets/images/e2.gif'
import '../assets/css/transaction.css'
import Layout from '../components/Layout'
import { Toaster,toast } from 'react-hot-toast'


const Expense = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        toast.promise(
            new Promise((resolve) => {
              // Simulate some asynchronous operation
              setTimeout(() => {
                resolve('Added successfully!');
              }, 1000); // Adjust the delay as needed
            }),
            {
              position:'bottom-right',
              loading: 'Adding...',
              success: 'Added successfully!',
              error: 'An error occurred while adding expense.',
            }
          )
    
    }
      
  return (
    <>
    <Toaster/>
    <Layout/>
    <div class ="whole">
        <div class="container2">
            <img src={e1}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Expense
      </div>
      <form onSubmit={handleSubmit}>
         <div class="form-row">
               
               <div class="mb-3">
                <label for="Input1" class="form-label">Expense</label>
                <input type="number" class="form-control" id="Input1"/>
                </div>

                <div class="mb-3">
                <label for="Input2" class="form-label">Category</label><br/>
                <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">Education</option>
                <option value="2">Rent</option>
                <option value="3">Entertainment</option>
                <option value="4">Food</option>
                <option value="5">Health</option>
                </select>
                </div>
         </div>
        <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner">
                  <button id="sub" type="submit">Add</button>
                  </div>
               </div>
            </div>
      </form>
      </div>

      {/*another container */}


      <div class="container3">
      <img src={e2}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Income
      </div>
      <form onSubmit={handleSubmit}>
      <div class="form-row">
               
               <div class="mb-3">
                <label for="Input1" class="form-label">Income</label>
                <input type="number" class="form-control" id="Input1"/>
                </div>
            </div>
        <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner">
                  <button id="sub" type="submit" >Submit</button>
                  </div>
               </div>
            </div>
      </form>
      </div>


      
      
    </div>
    </>
  )
}

export default Expense