import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URL = 'http://localhost:7777'

const getAllUser = () => axios.get(`${URL}/api/user/getAll`, { headers })
const getUserbyId = (id) => axios.get(`${URL}/api/user/getById/${id}`, { headers })
const editUser = (id, user) => axios.put(`${URL}/api/user/update/${id}`, user, { headers })
const deleteUser = (id) => axios.delete(`${URL}/api/user/delete/${id}`, { headers })

const userLogin = (login) => axios.post(`${URL}/api/auth/login`, login, { headers })
const userRegister = (register) => axios.post(`${URL}api/auth/register`, register, { headers })
//const adminLogin = (login) => axios.post(`${URL}api/admin/login`, login, { headers })

const getAllExpense = () => axios.get(`${URI}/api/expense/getAll`, { headers })
const getExpensebyId = (id) => axios.get(`${URI}/api/expense/getById/${id}`, { headers })
const addExpense = (expense) => axios.post(`${URI}/api/expense/save`, expense, { headers })
const editExpense = (id, expense) => axios.put(`${URI}/api/expense/update/${id}`, expense, { headers })
const deleteExpense = (id) => axios.delete(`${URI}/api/expense/delete/${id}`, { headers })


const getAllIncome = () => axios.get(`${URI}/api/income/getAll`, { headers })
const getIncomebyId = (id) => axios.get(`${URI}/api/income/getById/${id}`, { headers })
const addIncome = (Income) => axios.post(`${URI}/api/income/save`, Income, { headers })
const editIncome = (id, Income) => axios.put(`${URI}/api/income/update/${id}`, Income, { headers })
const deleteIncome = (id) => axios.delete(`${URI}/api/income/delete/${id}`, { headers })

export { getAllExpense, getExpensebyId, addExpense, editExpense, deleteExpense ,getAllUser, getUserbyId, editUser, deleteUser,userLogin,userRegister,getAllIncome, getIncomebyId, addIncome, editIncome, deleteIncome }
