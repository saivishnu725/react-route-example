import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

const MultiPage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} /> {/* This route is rendered if no other routes match */}
      </Routes>
    </Router>
  );
};

export default MultiPage