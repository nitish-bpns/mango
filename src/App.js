import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Mango from './pages/Mango';
import UserDetail from './pages/UserDetail';
import Targeting from './pages/users/Targeting';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route exact path='/signin' element={<Signin />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/reports' element={<Reports />}></Route>
        <Route exact path='/products/*' element={<Products />}></Route>
        <Route path='/mango/*' element={<Mango />}></Route>
        <Route path='/userDetail' element={<UserDetail />}></Route>
        <Route path='/userDetail/:index/*' element={<UserDetail />}></Route>
        {/* <Route path='/userDetails/targeting' render={() => (<Targeting />)}></Route> */}

      </Routes>
    </Router >
  );
}

export default App;
