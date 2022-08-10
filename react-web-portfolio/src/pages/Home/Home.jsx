import React, { useEffect } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Banner } from '../../components/Banner/Banner';
import { Skills } from '../../components/Skills/Skills';
import { Development } from '../../components/Development/Development';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <Skills />
            <Development />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;