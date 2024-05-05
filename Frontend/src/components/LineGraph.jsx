import React, { useEffect, useState } from 'react';
import { BarChart, Bar,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getExpensebyUid } from '../service/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6663', '#66FF91'];

const BarGraph = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = localStorage.getItem('xuserId');
        const response = await getExpensebyUid(userId);
        const expensesData = response.data;

        // Process the expenses data and calculate category counts
        const counts = {};

        expensesData.forEach((item) => {
          const { category } = item;
          if (counts[category]) {
            counts[category]++;
          } else {
            counts[category] = 1;
          }
        });

        // Convert counts into categoryData for the bar graph
        const categoryData = Object.entries(counts).map(([name, value], index) => ({
          name,
          value,
          fill: COLORS[index % COLORS.length],
        }));

        // Set both expenses and categoryData states
        setExpenses(expensesData);
        setCategoryData(categoryData);
      } catch (error) {
        console.error('Error fetching and processing data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
        <br/>
        <LineChart width={400} height={400} data={categoryData}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
</LineChart>
    </div>
  );
};

export default BarGraph;
