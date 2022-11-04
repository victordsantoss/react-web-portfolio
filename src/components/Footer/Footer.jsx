import { Container, Row, Col } from "react-bootstrap";
import { navbarIcons } from "../../utils/navbar-icons";
import { IoLogoXing } from 'react-icons/io';
import './index.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="align-items-center">
                        <IoLogoXing
                            size={100}
                            className="img-logo"
                        />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victorsamuelengenharia/" target="_blank" rel="noreferrer" ><img src={navbarIcons.linkedin} alt="" /></a>
                            <a href="https://github.com/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.github} alt="" /></a>
                            <a href="https://www.instagram.com/victordsantoss/" target="_blank" rel="noreferrer" ><img src={navbarIcons.instagram} alt="" /></a>
                            <a href="https://api.whatsapp.com/send?phone=5561985018286&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20meio%20do%20seu%20portf%C3%B3lio%20web." target="_blank" rel="noreferrer" ><img src={navbarIcons.whatsapp} alt="" /></a>
                            <a href="https://t.me/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.telegram} alt="" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
