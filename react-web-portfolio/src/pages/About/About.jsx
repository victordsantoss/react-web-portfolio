import React, { useEffect } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import { Timeline } from "../../components/Timeline/Timeline";
import { About } from "../../components/About/About";

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
        </div>
    )
}

export default AboutPage;