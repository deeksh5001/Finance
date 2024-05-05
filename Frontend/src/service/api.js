import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URL = 'http://localhost:8181'
const URL2 = 'http://localhost:8182'

const getAllUser = () => axios.get(`${URL}/api/user/getAll`, { headers })
const getUserbyId = (id) => axios.get(`${URL}/api/user/getById/${id}`, { headers })
const editUser = (id, user) => axios.put(`${URL}/api/user/update/${id}`, user, { headers })
const deleteUser = (id) => axios.delete(`${URL}/api/user/delete/${id}`, { headers })

const userLogin = (login) => axios.post(`${URL}/api/auth/login`, login)
const userRegister = (register) => axios.post(`${URL}/api/auth/register`, register)
//const adminLogin = (login) => axios.post(`${URL}api/admin/login`, login, { headers })

const getAllExpense = () => axios.get(`${URL}/api/expense/getAll`, { headers })
const getExpensebyId = (id) => axios.get(`${URL}/api/expense/getById/${id}`, { headers })
const getExpensebyUid = (id) => axios.get(`${URL}/api/expense/getExpenseByUid/${id}`, { headers })
const getExpenseSum = (id) => axios.get(`${URL}/api/expense/getSum/${id}`, { headers })
const addExpense = (expense,id) => axios.post(`${URL}/api/expense/save/${id}`, expense, { headers })
const editExpense = (id, expense) => axios.put(`${URL}/api/expense/update/${id}`, expense, { headers })
const deleteExpense = (id) => axios.delete(`${URL}/api/expense/delete/${id}`, { headers })


const getAllIncome = () => axios.get(`${URL}/api/income/getAll`, { headers })
const getIncomebyId = (id) => axios.get(`${URL}/api/income/getById/${id}`, { headers })
const getIncomebyUid = (id) => axios.get(`${URL}/api/income/getIncomeByUid/${id}`, { headers })
const getIncomeSum = (id) => axios.get(`${URL}/api/income/getSum/${id}`, { headers })
const addIncome = (income,id) => axios.post(`${URL}/api/income/save/${id}`, income, { headers })
const editIncome = (id, Income) => axios.put(`${URL}/api/income/update/${id}`, Income, { headers })
const deleteIncome = (id) => axios.delete(`${URL}/api/income/delete/${id}`, { headers })

const addFeedback=(feedback)=>axios.post(`${URL2}/api/auth/feedback/add`,feedback)
const getFeedback=()=>axios.get(`${URL2}/api/auth/feedback/get`)

export { getAllExpense,getExpensebyUid,getExpenseSum,getIncomebyUid,addFeedback, getFeedback,getExpensebyId,getIncomeSum, addExpense, editExpense, deleteExpense ,getAllUser, getUserbyId, editUser, deleteUser,userLogin,userRegister,getAllIncome, getIncomebyId, addIncome, editIncome, deleteIncome }
