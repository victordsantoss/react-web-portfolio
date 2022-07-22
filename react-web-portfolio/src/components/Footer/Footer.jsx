import { Container, Row, Col } from "react-bootstrap";
import { navbarIcons } from "../../utils/navbar-icons";
import { IoLogoXing } from 'react-icons/io';
import './index.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <IoLogoXing
                            size={60}
                            className="img-logo"
                        />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navbarIcons.linkedin} alt="Icon" /></a>
                            <a href="#"><img src={navbarIcons.github} alt="Icon" /></a>
                            <a href="#"><img src={navbarIcons.instagram} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
