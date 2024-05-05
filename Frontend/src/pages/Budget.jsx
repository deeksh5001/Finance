import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import {  getIncomebyUid} from '../service/api';

const Budget = () => {

  const [incomes, setIncomes] = useState([]);


  const fetchUserIncomes = async () => {
    try {
      const response = await getIncomebyUid(localStorage.getItem('xuserId'));
      setIncomes(response.data);
    } catch (error) {
      console.error('Error fetching incomes:', error);
    }
  };
  useEffect(() => {
    
    fetchUserIncomes();
  }, []);

  

  return (
    <div>
      <Layout/>
      <main className="content">
        
        <div className="records">
          <h3 style={{ textAlign: 'center', color: 'cornflowerblue' }}>INCOME MANAGEMENT</h3>
          <br />
          <div className="tab">
            <h4 style={{ textAlign: 'center', color:'cornflowerblue' }}>&nbsp;&nbsp;RECORD OF  INCOMES THIS MONTH</h4>
            <br />
            <table className="table table-bordered table-hover" style={{float:"right"}}>
              <thead>
                <tr className='table-info '>
                  <th scope="col">S.no</th>
                  <th scope="col">Income Category</th>
                  <th scope="col">Income Amount</th>
                </tr>
              </thead>
              <tbody>
              {
                Array.isArray(incomes) && incomes.length>0 ?(
              incomes.map((income, index) => (
                  <tr key={income.id}>
                    <td>{index + 1}</td>
                    <td>{income.incCategory}</td>
                    <td className='text-success'>Rs {Number(income.incAmount).toLocaleString()}</td>
                   
                  </tr>
                ))
                ):
                (
                  
                  <td colSpan="4">No transactions found.</td>
                  
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    
    </div>
  )
}

export default Budget