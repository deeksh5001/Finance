import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { getExpensebyUid } from '../service/api';
import Topbar from '../components/Topbar';
import '../assets/css/Graph.css'
import Layout from '../components/Layout';
import Graph from '../components/Graph';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6663', '#66FF91'];

const ChartPage = () => {
  const [chartType, setChartType] = useState('bar');
  const [categoryData, setCategoryData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = localStorage.getItem('xuserId');
        const response = await getExpensebyUid(userId);
        const expensesData = response.data;

        // Process the expenses data and calculate the chart data based on the selected chart type
        let chartData = [];

        const counts = {};
        
        expensesData.forEach((item) => {
            const { category , expAmount } = item;
            if (counts[category]) {
                counts[category]+=expAmount;
            } else {
                counts[category] = expAmount;
            }
        });
        
        
          chartData = Object.entries(counts).map(([name, value], index) => ({
            name,
            value,
            fill: COLORS[index % COLORS.length],
          }));
       
        setExpenses(expensesData);
        setCategoryData(chartData);
      } catch (error) {
        console.error('Error fetching and processing data:', error);
      }
    }

    fetchData();
  }, [chartType]);

  return (
    <div>
        <Layout/>
    
    <div className='c-container'>
    <div className='chart-container'/>
        <h2 style={{color:"darkcyan",letterSpacing:"2px"}}>&nbsp;&nbsp;Analysis of your expenses</h2><br/>
      <div>
        <select class="form-select" value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="bar">Bar Chart</option>
          <option value="Pie Chart">Pie Chart</option>
          <option value="doughnut">Doughnut Chart</option>
        </select>
        <br/><br/>
      </div>

      {expenses.length === 0 ? (
        <div>
          <br />
          <p style={{ color: "black", fontSize: "20px" ,border:"1px solid black",padding: "10px"}}>No data available yet.</p>
        </div>
      ) : (
        <div>
          {chartType === 'bar' && (
            <BarChart width={500} height={450} data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          )}

          {chartType === 'Pie Chart' && (
             <PieChart width={500} height={450}>
             <Pie
               data={categoryData}
               dataKey="value" // Use "value" instead of "count"
               nameKey="name"
               cx="50%"
               cy="50%"
               outerRadius={180}
               fill="#8884d8"
               label
             >
               {categoryData.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={entry.fill} />
               ))}
             </Pie>
             <Tooltip />
           </PieChart>
   
          )}

          {chartType === 'doughnut' && (
            <PieChart width={500} height={450}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={190}
                innerRadius={95}
                paddingAngle={1}
                startAngle={20}
                endAngle={450}
                animationBegin={10} // Set animationBegin to control when the animation starts
                animationDuration={800}
                fill="#8884d8"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>
      )}
    </div>
    <Graph/>
    </div>
  );
};

export default ChartPage;