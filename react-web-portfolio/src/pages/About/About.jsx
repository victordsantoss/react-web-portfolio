import React, { useEffect } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import { GithubData } from '../../components/GithubData/GithubData';
import { Timeline } from "../../components/Timeline/Timeline";
import { About } from "../../components/About/About";
import { Footer } from '../../components/Footer/Footer';

export const AboutPage = () => {

    useEffect(() => {
        const newPageTitle = 'Sobre | <victordsantoss />';
        document.title = newPageTitle;
    }, []);

    return (
        <div className="app">
            <NavBar />
            <About />
            <Timeline />
            <Footer />
        </div>
    )
}

export default AboutPage;