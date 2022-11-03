import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../utils/projects-constants"
import { navbarIcons } from "../../utils/navbar-icons";
import './index.css';

export const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projetos</h2>
                            <p className="line"></p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((currentProject, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...currentProject}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                        <p className="p-0 text-center mb-0 mt-0 github-button">
                                            Para mais projetos acesse meu  <a href="https://github.com/victordsantoss" target="_blank">GitHub</a>
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}