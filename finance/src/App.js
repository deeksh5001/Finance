import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import'./assets/css/app.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import FAQ from './pages/Faq'
import Expense from './pages/Transaction';
import Records from './pages/Records';
import Budget from './pages/Budget';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/t&c' element={<Terms/>}/>
        <Route path='/add' element={<Expense/>}/>
        <Route path='/records' element={<Records/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;