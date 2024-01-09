import Home from '../pages/Home/Home.js';
import React from "react";
import Dashboard from '../pages/dashboard/Dashboad.js';
import NotFound from '../pages/NotFound/NotFound'
import MemePage from '../pages/memes/MemePage.js';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login.js';
import Signup from '../pages/signup/Signup.js';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/meme/:id" element={<MemePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
             <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default AppRoutes;