import { useContext } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { ProjectContext } from "../../Context/ProjectContext";
import './index.css';

export const ProjectCard = (currentProject, key) => {
    const { setProject } = useContext(ProjectContext);
    let navigate = useNavigate();

    const handleProject = () => {
        setProject(currentProject);
        localStorage.setItem('project',  JSON.stringify(currentProject));
        navigate(`${currentProject.path}`)
    }

    return (
        <Col size={12} sm={6} md={4} key={key}>
            <div className="proj-imgbx">
                <img src={currentProject.imgUrl} width='150px' height={500} alt="" />
                <div className="proj-txtx">
                    <span onClick={handleProject} className="link-project" ><h4>{currentProject.title}</h4></span>
                    <span>{currentProject.acting}</span>
                </div>
            </div>
        </Col>
    )
}
