import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './index.css';

export const ProjectCard = ({ title, description, imgUrl, path }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} width='150px' height={500} />
                <div className="proj-txtx">
                    <Link to={path} className="link-project" ><h4>{title}</h4></Link>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
