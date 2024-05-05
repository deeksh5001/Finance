import React,{useState,useEffect} from 'react'
import { deleteUser, getAllUser, getFeedback } from '../../service/api';
import Topbar from '../../components/Topbar';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const [users,setUsers]=useState([]);
  const [feedbacks,setFeedbacks]=useState([]);
  const fetchUsers = async () => {
    try {
      const response=await getAllUser();
      setUsers(response.data)
      
    } catch (error) {
      console.error("Error fetching user users:", error);
    }
  }
  const fetchFeedback = async () => {
    try {
      const response=await getFeedback();
      setFeedbacks(response.data)
      
    } catch (error) {
      console.error("Error fetching user feedback:", error);
    }
  }
  const deleteU= (uid)=>{
  deleteUser(uid);
  window.location.reload(true);
  }
console.log(users)
useEffect(() => {
  fetchUsers();
  fetchFeedback();
}, []);

  return (
    <div>
      <Topbar/>
      <br /><br /><br/>
      &nbsp;<Link to='/'><button className='btn btn-info'>LOGOUT</button></Link>
      <br/>
      <h2 style={{ textAlign: "center" ,color:"darkcyan"}}>ALL USERS</h2>
          <br />
          <table className="table table-striped table-bordered" >
                    <thead>
                        <tr class='text-center table-info'>
                            <th> USER ID</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(users) && users.length > 0 ? (
                              users.map((user) => (
                                  <tr key={user.uid}>
                                      <td className="text-center">{user.uid}</td>
                                      <td className="text-center">{user.name}</td>
                                      <td className="text-center">{user.email}</td>
                                      <td className='text-center'>{user.role}</td>
                                      <td className="text-center">{user.isEnabled?"Active":"Inactive"}</td>
                                      <td className="text-center"> 
                                      <Link  to={`/update/${user.uid}`}><button className='btn btn-info'>UPDATE</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className='btn btn-danger' onClick={()=>deleteU(user.uid) }>DELETE</button>
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4">No users found.</td>
                              </tr>
                          )
                        }
                    </tbody>
                </table>
                <br/> <br/> <br/> 
      <h2 style={{ textAlign: "center",color:"darkcyan" }}> FEEDBACKS</h2>
          <br />
          <table className="table table-striped table-bordered" >
                    <thead>
                        <tr class='text-center table-info'>
                            <th> FEEDBACK ID</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>SUBJECT</th>
                            <th>MESSAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(feedbacks) && feedbacks.length > 0 ? (
                              feedbacks.map((feedback) => (
                                  <tr key={feedback.fid}>
                                      <td className="text-center">{feedback.fid}</td>
                                      <td className="text-center">{feedback.name}</td>
                                      <td className="text-center">{feedback.email}</td>
                                      <td className='text-center'>{feedback.subject}</td>
                                      <td className="text-center">{feedback.message}</td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4">No feedbacks yet.</td>
                              </tr>
                          )
                        }
                    </tbody>
                </table>
                <br/> <br/> <br/>
    </div>
  )
}

export default AdminHome
