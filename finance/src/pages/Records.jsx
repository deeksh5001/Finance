import React from "react";
import Layout from "../components/Layout";

const Records=()=>{
    return(
        <>
        <Layout/>
        <div className="content">
            <div className="records" >
                <br/>
                <h2 style={{textAlign:"center"}}>ALL TRANSACTIONS</h2>
                <br/>
        <table class="table">
  <thead>
    <tr class="table-info">
      <th scope="col">S.No</th>
      <th scope="col">AMOUNT SPENT</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">BALANCE</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td >1</td>
      <td>$3000</td>
      <td>Entertainment</td>
      <td>47000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>$2000</td>
      <td>Education</td>
      <td>45000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>$4000</td>
      <td>Food</td>
      <td>41000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>$1500</td>
      <td>Health</td>
      <td>39500</td>
    </tr>
    <tr>
      <td>5</td>
      <td>$10000</td>
      <td>Rent</td>
      <td>29500</td>
    </tr>
    <tr>
      <td>6</td>
      <td>$2000</td>
      <td>Entertainment</td>
      <td>29500</td>
    </tr>
    
  </tbody>
</table>
</div>
</div>
        </>
    )
}

export default Records