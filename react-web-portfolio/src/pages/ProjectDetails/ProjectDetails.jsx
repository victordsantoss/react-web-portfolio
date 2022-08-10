import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectDetails } from '../../components/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = ()=>{
    return (
        <div className="app">
            <NavBar />
            <ProjectDetails/>
            <Footer />
        </div>
    )
}

export default ProjectDetailsPage;