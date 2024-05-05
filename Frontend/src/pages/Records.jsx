import React, { useState,useEffect } from "react";
import Layout from "../components/Layout";
import { getExpensebyUid } from "../service/api";

const Records = () => {
  const [expenses,setExpenses]=useState([]);
  let uid = localStorage.getItem('xuserId');

    const fetchExpenses = async () => {
        try {
          const response=await getExpensebyUid(uid);
          setExpenses(response.data)
          
        } catch (error) {
          console.error("Error fetching user expenses:", error);
        }
      }
      console.log(expenses)
      useEffect(() => {
        fetchExpenses();
    }, []);

  return (
    <>
      <Layout />
      <div className="content">
        <div className="records">
          
          <h2 style={{ textAlign: "center" ,color:"darkcyan"}}>ALL TRANSACTIONS</h2>
          <br />
          <table className="table table-striped table-hover" >
                    <thead>
                        <tr class='text-center table-info'>
                            <th> S.NO</th>
                            <th>DATE</th>
                            <th>CATEGORY</th>
                            <th>AMOUNT SPENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(expenses) && expenses.length > 0 ? (
                              expenses.map((exp,index) => (
                                  <tr key={exp.expId}>
                                      <td className="text-center">{index+1}</td>
                                      <td className="text-center">{exp.date}</td>
                                      <td className="text-center">{exp.category}</td>
                                      <td className="text-center text-danger">Rs {Number(exp.expAmount).toLocaleString()}</td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4">No transactions found.</td>
                              </tr>
                          )
                        }
                    </tbody>
                </table>
        </div>
      </div>
    </>
  );
};

export default Records;
