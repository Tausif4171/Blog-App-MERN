import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Post from './components/Post';

function App() {
  return (
    <div className='bg-[#dbdada] w-full min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Post />} />
            <Route path='/about' element={<>about</>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
