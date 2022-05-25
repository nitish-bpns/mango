import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Mango from './pages/Mango';
import UserDetail from './pages/UserDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/reports' element={<Reports />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/mango' element={<Mango />}></Route>
        <Route exact path='/userDetail' element={<UserDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
