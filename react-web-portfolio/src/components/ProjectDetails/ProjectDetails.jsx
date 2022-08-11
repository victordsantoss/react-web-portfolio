import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectContext } from '../../Context/ProjectContext';
import { ProjectCarousel } from '../ProjectCarousel/ProjectCarousel';
import { GoBack } from '../GoBack/GoBack';
import './index.css';

let newPageTitle = null;

export const ProjectDetails = () => {

    const { project, setProject } = useContext(ProjectContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProject();
    }, []);

    const fetchProject = () => {
        if (!project) {
            let current_project = JSON.parse(localStorage.getItem('project'))
            newPageTitle = `${current_project.title} | <victordsantoss />`;
            setProject(current_project);
        } else {
            newPageTitle = `${project.title} | <victordsantoss />`;
        }
        document.title = newPageTitle;
        setLoading(false);
    }

    if (loading) {
        return <div>LOADING ...</div>
    }

    if (project) {
        return (
            <section className="personal-project-container">
                <Container>
                    <GoBack/>
                    <Row>
                        <Col md={12}>
                            <div>
                                <h2>{project.title}</h2>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="text-center">
                                <ProjectCarousel
                                    imgs={project.imgs}
                                    link={project.link}
                                />
                            </div>
                            <div className="row mx-0 my-0 centraliza">
                                {
                                    project && project.skills.map((skill, index) => {
                                        return (
                                            <div className="col-5 col-md-1 development-skills-box-item" key={index}>
                                                <img src={skill} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                        <Col md={5}>
                            <div>
                                <p>{project.acting}</p>
                                <p>{project.description}</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }


}