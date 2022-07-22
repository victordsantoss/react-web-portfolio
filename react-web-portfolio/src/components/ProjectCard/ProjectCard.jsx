import { Col } from "react-bootstrap";
import './index.css';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} width='150px' height={500} />
                <div className="proj-txtx">
                    <a href={link} className="link-project" target='_blank'><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
