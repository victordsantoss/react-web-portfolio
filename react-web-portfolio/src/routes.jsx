import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default ApplicationRoutes;