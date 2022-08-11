import { useContext, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { ProjectContext } from "../../Context/ProjectContext";
import './index.css';

export const ProjectCard = (currentProject) => {
    const { project, setProject } = useContext(ProjectContext);
    let navigate = useNavigate()

    const handleProject = () => {
        setProject(currentProject);
        navigate(`${currentProject.path}`)
    }

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={currentProject.imgUrl} width='150px' height={500} />
                <div className="proj-txtx">
                    <p onClick={handleProject} className="link-project" ><h4>{currentProject.title}</h4></p>
                    <span>{currentProject.description}</span>
                </div>
            </div>
        </Col>
    )
}
