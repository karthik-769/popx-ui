import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  const [profile, setProfile] = useState({});

  return (
    <div className="app-root">
      <div className="mobile-frame">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setProfile={setProfile} />} />
            <Route path="/register" element={<Register setProfile={setProfile} />} />
            <Route path="/profile" element={<Profile profile={profile} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
