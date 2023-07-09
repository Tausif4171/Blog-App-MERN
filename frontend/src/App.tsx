import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#dbdada] w-full min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
