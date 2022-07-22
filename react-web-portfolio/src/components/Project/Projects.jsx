import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorSharp2 from "../../assets/img/banners/color-sharp2.png";
import { projects } from "../../utils/projects-constants"
import './index.css';

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>

                        <h2>Projetos</h2>
                        <p className="line"></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}