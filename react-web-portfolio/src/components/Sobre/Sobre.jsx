import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eu from '../../assets/img/about/eu2.png';
import './index.css';

export const Sobre = () => {
    return (
        <section className="about-container">
            <div className="about-my">
                <Container className="text-center">
                    <Row>
                        <Col md={4} className="about-img">
                            <img src={eu} alt="" />
                        </Col>
                        <Col md={8} className="about-description">
                            TEXTO
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}