import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import SinglePostDetail from './components/SinglePostDetail';

function App() {
  return (
    <>
      <div className='bg-[#dbdada] w-full min-h-screen'>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Blogs />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/post/:id' element={<SinglePostDetail />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
