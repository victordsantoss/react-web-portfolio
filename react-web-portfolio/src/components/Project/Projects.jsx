import React from 'react';
import { Container } from 'react-bootstrap'
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectCardList } from "../ProjectCardList/ProjectCardList";
import { FoldOutReveal } from "../3dFoldOutReveal/3dFoldOutReveal";
import "../ProjectCardList/index.css";
import './index.css';

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <h2>Projetos</h2>
                <p className="line"></p>
            </Container>
            <FoldOutReveal />
        </section>
    )
}