import React, { useState } from 'react';
import '../assets/css/Budget.css'
import Layout from '../components/Layout';
function Budget() {
  // Example state for budget data
  

  return (
    <>
    <Layout/>
    <div className='content'>
    <div className='records'>
    <h1>Budgetting</h1>

    <h5>Rent - 95%</h5>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '95%'}}></div>
    </div>
    <br/>
    <h5>Education - 35%</h5>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-striped bg-info" style={{width: '35%'}}></div>
    </div>
    <br/>
    <h5>Entertainment - 55%</h5>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-striped bg-warning" style={{width: '55%'}}></div>
    </div>
    <br/>
    <h5>Health - 25%</h5>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-striped bg-danger" style={{width: '25%'}}></div>
    </div>
    <br/>
    <h5>Food - 65%</h5>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-striped bg-success" style={{width: '65%'}}></div>
    </div>

    <br/>
    <div className="budget-page">
    <table >
  <thead>
    <tr className="table-success">
      <th scope="col">S.No</th>
      <th scope="col">AMOUNT SPENT</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">BUDGET AMOUNT</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>$3000</td>
      <td>Entertainment</td>
      <td>$8500</td>
    </tr>
    <tr>
    <td>2</td>
      <td>$2000</td>
      <td>Education</td>
      <td>$5000</td>
    </tr>
    <tr>
    <td>3</td>
      <td>$4000</td>
      <td>Food</td>
      <td>$6000</td>
    </tr>
    <tr>
    <td>4</td>
      <td>$1500</td>
      <td>Health</td>
      <td>$10000</td>
    </tr>
    <tr>
    <td>5</td>
      <td>$10000</td>
      <td>Rent</td>
      <td>$11000</td>
    </tr>
    <tr>
    <td>6</td>
      <td>$2000</td>
      <td>Entertainment</td>
      <td>$8500</td>
    </tr>
    
  </tbody>
</table>
      
    </div>
    </div>
    </div>
    </>
  );
}

export default Budget;
