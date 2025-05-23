import './App.css';
import Register from './components/Register';
import LoginUsers from './components/LoginUsers';
import Admin from './components/Admin';
import Main from './components/Main'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminForgotPassword from './components/AdminForgotPassword';
import UserForgotPassword from './components/UserForgotPassword';
import FeedBack from './components/FeedBack';
import Home from './components/Home';
import Store from './components/Stores';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/LoginUser' element={<LoginUsers />}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/AdminForgotPassword' element={<AdminForgotPassword/>}/>
        <Route path='/UserForgotPassword' element={<UserForgotPassword/>}/>
        <Route path='/FeedBack' element={<FeedBack/>}/>
        <Route path='/Store' element={<Store/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
