import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connection from './pages/Connection';
import Register from './pages/Register';
import './styles/index.css';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
