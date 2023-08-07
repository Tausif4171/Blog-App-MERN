import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Post from './components/Post';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <div className='bg-[#dbdada] w-full min-h-screen'>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Post />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
