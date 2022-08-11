import React, { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { ProjectContext } from '../../Context/ProjectContext';
import { responsive } from '../../utils/projects-constants';
import Carousel from "react-multi-carousel";

import './index.css';

export const ProjectDetails = () => {
    const navigate = useNavigate();
    const { project } = useContext(ProjectContext);

    useEffect(() => {
        const newPageTitle = `${project.title} | <victordsantoss />`;
        document.title = newPageTitle;
    }, []);


    return (
        <section className="personal-project-container">
            <Container>
                {console.log("PROJETO ATUAL", project)}
                <div className='go-back'>
                    <button onClick={() => navigate(-1)} >
                        <BiArrowBack
                            size={25}
                            color='#eaeaea'
                        />
                        <span>Voltar</span>
                    </button>
                </div>
                <Row>
                    <Col md={12}>
                        <div>
                            <h2>Groovoo Ticketing</h2>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="text-center">
                            <Carousel responsive={responsive} infinite={true} className='project-slider'>
                                {
                                    project.imgs.map((img, index) => {
                                        return <div className='item' key={index}>
                                            <a href="">
                                                <img src={img} alt='image-skill' />
                                            </a>
                                        </div>
                                    })
                                }
                            </Carousel>
                        </div>

                        <div className="row mx-0 my-0 centraliza">
                            {
                                project.skills.map((skill, index) => {
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