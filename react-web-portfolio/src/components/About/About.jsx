import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { navbarIcons } from '../../utils/navbar-icons';
import eu from '../../assets/img/about/eu2.png';
import './index.css';
import '../NavBar/index.css';
import { GoBack } from '../GoBack/GoBack';

export const About = () => {
    return (
        <section className="about-container">
            <div className="about-my">
                <Container className="text-center">
                    <GoBack />
                    <Row className="pt-5">
                        <Col md={4} className="about-img">
                            <img src={eu} alt="" />
                        </Col>
                        <Col md={1} />
                        <Col md={7} className="about-description-container">
                            <h2>Victor Samuel dos Santos Lucas</h2>
                            <p>Engenheiro de Software</p>
                            <p className="about-description">
                                Graduando do curso Engenharia de Software pela Universidade de Brasília.
                                Atualmente tenho 2 anos de experiência de desenvolvimento web e mobile trabalhando de maneira full stack com foco nas tecnologias SQL - Mysql, NoSQL - MongoDb, NodeJs, TypeScript, ReactJs, ReactNative, Bootstrap, CSS e StyledComponents, além de ser um entusiasta em metodologias ágeis.
                            </p>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/victorsamuelengenharia/" target="_blank" rel="noreferrer" ><img src={navbarIcons.linkedin} alt="" /></a>
                                <a href="https://github.com/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.github} alt="" /></a>
                                <a href="https://www.instagram.com/victordsantoss/" target="_blank" rel="noreferrer" ><img src={navbarIcons.instagram} alt="" /></a>
                                <a href="https://api.whatsapp.com/send?phone=5561985018286&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20meio%20do%20seu%20portf%C3%B3lio%20web." target="_blank" rel="noreferrer" ><img src={navbarIcons.whatsapp} alt="" /></a>
                                <a href="https://t.me/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.telegram} alt="" /></a>
                            </div>
                            <div className="curriculo-download">
                                <p> Baixe a versão do meu currículo em PDF
                                    <a download href="react-web-portfolio/src/assets/curriculo/cv_victor_samuel.pdf">
                                        <FaDownload
                                            size={30}
                                            className="download"
                                            color="#eaeaea"
                                        />
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}