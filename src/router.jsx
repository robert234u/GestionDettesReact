import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Connection from './pages/Connection';
import Register from './pages/Register';
import './index.css';
import Home from './pages/Home';
import { ConnectionContext } from './hooks/useConnection';

function AuthRoutes({ element }) {
  const { isAuth } = useContext(ConnectionContext);

  return isAuth() ? element : <Navigate replace to="/connection" />;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoutes element={<Home />} />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}
