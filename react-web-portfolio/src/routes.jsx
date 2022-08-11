import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProjectDetailsPage from './pages/ProjectDetails/ProjectDetails';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/projects" element={<ProjectDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default ApplicationRoutes;