import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing/Landing';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/Sobre/Sobre';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/sobre" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default ApplicationRoutes;