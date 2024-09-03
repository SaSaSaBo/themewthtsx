import React from 'react';
import './App.css';
import Register from './pages/Register-Login/Register';
import Login from './pages/Register-Login/Login';
import Welcome from './pages/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
      </Routes>

    </>
  );
}

export default App;