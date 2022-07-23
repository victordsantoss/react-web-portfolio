import { Container, Row, Col } from "react-bootstrap";
import { HiExternalLink } from 'react-icons/hi';
import './index.css';

export const ProjectCardList = () => {
    return (
        <Container>
        <Row>
            <Col size={12}>
                <h2>Projetos</h2>
                <p className="line"></p>
                <Row>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Groovoo - Ticketing</div>
                            <div className="description">
                                O Groovoo consiste em uma plataforma de venda de ingressos para eventos localizados nos Estados Unidos.
                                Meu papel no desenvolvimento foi de maneira full stack com base no uso de NodeJs, TypeScript e ReactJs, além do uso de banco de dados relacionais e tecnologias como AWS, API Rest e Firebase.
                            </div>
                            <Row className="section-imgs">
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                </Col>
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                                </Col>
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=whit" alt="" />
                                </Col>

                                <Col md={2} sm={6} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                                </Col>
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Groovoo - Ticketing</div>
                            <div className="description">
                                O Groovoo Organizer consite em um aplicativo voltado para organizadores dos eventos criados dentro da plataforma Groovoo, permitindo-os um fácil acesso a todos os dados do eventos.
                                Meu papel no desenvolvimento foi de maneira full stack com base no uso de NodeJs, TypeScript e ReactNative, além do uso de banco de dados relacionais e tecnologias como AWS, API Rest e Firebase.
                            </div>
                            <Row className="section-imgs">
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                </Col>
                                <Col md={2} sm={6} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                                </Col>
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=whit" alt="" />
                                </Col>

                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                                </Col>
                                <Col md={2} className="img-tecnology">
                                    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Groovoo - Social NetWorking</div>
                            <div>Descrição</div>
                            <div>Tecnologias</div>
                            <div className="external-link"><HiExternalLink size={30} /></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Concurso de Redação DPU</div>
                            <div>Descrição</div>
                            <div>Tecnologias</div>
                            <div className="external-link"><HiExternalLink size={30} /></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Portal da DPU</div>
                            <div>Descrição</div>
                            <div>Tecnologias</div>
                            <div className="external-link"><HiExternalLink size={30} /></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="project-card-list-container">
                            <div className="tittle">Portal de Promoção de Direitos Humanos</div>
                            <div>Descrição</div>
                            <div>Tecnologias</div>
                            <div className="external-link"><HiExternalLink size={30} /></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}