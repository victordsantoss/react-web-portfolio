import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing/Landing';
import HomePage from './pages/Home/Home';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default ApplicationRoutes;