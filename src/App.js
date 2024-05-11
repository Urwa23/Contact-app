import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
const App =() =>{
  return (
    <div className="App">
      {/* add contact route */}
      {/* edit route */}

      <ToastContainer></ToastContainer>

      <Navbar></Navbar>
   
      <Routes>
        <Route path="/" element={<Home welcomeMesaage="hellow world"/>}></Route>
        {/* add */}
        <Route path="/add" element={<AddContact/>}></Route>
        {/* edit */}
        <Route path="/edit/:id" element={<EditContact></EditContact>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
