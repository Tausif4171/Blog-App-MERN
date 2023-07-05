import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#dbdada] w-full min-h-screen'>
      <Router>
        <Route path="/" element={<Header />} />
      </Router>
    </div>
  );
}

export default App;
