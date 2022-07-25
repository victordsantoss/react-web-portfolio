import { Container, Row, Col } from "react-bootstrap";
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
                                <a href="https://groovooapp.com/" className="project-link" rel="noreferrer" target="_blank" >
                                    <div className="tittle">Groovoo - Ticketing</div>
                                    <div className="description">
                                        O Groovoo consiste em uma plataforma de venda de ingressos para eventos localizados nos Estados Unidos.
                                        Meu papel no desenvolvimento foi de maneira full stack com base no uso de CSS, Bootstrap, NodeJs, TypeScript e ReactJs, além do uso de banco de dados relacionais e tecnologias como AWS, API Rest e Firebase.
                                    </div>
                                    <Row className="section-imgs">
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                        </Col>
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
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src=" https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card-list-container">
                                <a href="https://apps.apple.com/br/app/groovoo-organizer/id1593068649" className="project-link" rel="noreferrer" target="_blank">
                                    <div className="tittle">Groovoo - Organizer</div>
                                    <div className="description">
                                        O Groovoo Organizer consite em um aplicativo voltado para organizadores dos eventos criados dentro da plataforma Groovoo, permitindo-os um fácil acesso a todos os dados do eventos.
                                        Meu papel no desenvolvimento foi de maneira full stack com base no uso de NodeJs, TypeScript e ReactNative, além do uso de banco de dados relacionais.
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
                                            <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src=" https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card-list-container">
                                <a href="https://apps.apple.com/br/app/groovoo-social-networking/id1529056214" className="project-link" rel="noreferrer" target="_blank">
                                    <div className="tittle">Groovoo - Social Networking</div>
                                    <div className="description">
                                        O Groovoo Social Networking consiste em um aplicativo para usuários da plataforma de compra de ingressos Groovoo e seu funcionamento baseia-se em aproximar integrantes de determinados eventos por meio de interesses em comum.
                                        Meu papel no desenvolvimento foi de maneira full stack com base no uso de TypeScript e ReactNative.
                                    </div>
                                    <Row className="section-imgs">
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} sm={6} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="" />
                                        </Col>

                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src=" https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card-list-container">
                                <a href="https://concursoderedacao.dpu.def.br/" className="project-link" rel="noreferrer" target="_blank">
                                    <div className="tittle">Concurso de Redação - DPU</div>
                                    <div className="description">
                                        O Portal do concurso de Redação da DPU consiste em uma plataforma para o lançamento do concurso de redação anual, que visa proporcionar discussões de temas relevantes e presentes na realidade social brasileira e no mundo. Nesse projeto trabalhei no front end com o uso de ReactJs.
                                    </div>
                                    <Row className="section-imgs">
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} sm={6} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card-list-container">
                                <a href="https://www.dpu.def.br/" className="project-link" rel="noreferrer" target="_blank">
                                    <div className="tittle">Portal DPU</div>
                                    <div className="description">
                                        O Portal DPU consiste no portal nacional da Defensoria Pública Geral da União, disponibilizando informações, notícias e documentação para o público em geral. Nesse projeto trabalhei na manutenção usando HTML, CSS e JavaScript.
                                    </div>
                                    <Row className="section-imgs">
                                        <Col md={2} sm={6} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card-list-container">
                                <a href="https://promocaodedireitoshumanos.dpu.def.br/" className="project-link" rel="noreferrer" target="_blank">
                                    <div className="tittle">Portal de Promoção de Direitos Humanos - DPU</div>
                                    <div className="description">
                                        O Portal de Promoão de Direitos Humanos consiste em um platadorma de candidatura a Defensoria Pública da União para ser órgão de Direitos Humanos. Nesse projeto trabalhei como desenvolvedor front end usando CMS Wordpress, HTML, CSS e JavaScript.                                    </div>
                                    <Row className="section-imgs">
                                        <Col md={2} sm={6} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
                                        </Col>
                                        <Col md={2} className="img-tecnology">
                                            <img src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="" />
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}