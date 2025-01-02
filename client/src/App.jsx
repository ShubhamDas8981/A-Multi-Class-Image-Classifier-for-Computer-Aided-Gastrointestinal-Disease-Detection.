// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the homepage route */}
        <Route path="/" element={<ImageUpload />} />
        
        {/* You can add more routes for additional pages here */}
      </Routes>
    </Router>
  );
}

export default App;
