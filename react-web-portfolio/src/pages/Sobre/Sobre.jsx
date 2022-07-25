import React, { useEffect } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import { Timeline } from "../../components/Timeline/Timeline";
import { Sobre } from "../../components/Sobre/Sobre";

export const AboutPage = () => {

    useEffect(() => {
        const newPageTitle = 'About | <victordsantoss />';
        document.title = newPageTitle;
    }, []);

    return (
        <div className="app">
            <NavBar />
            <Sobre />
            <Timeline />
        </div>
    )
}

export default AboutPage;