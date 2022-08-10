import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './index.css';

export const ProjectDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        const newPageTitle = 'Landing | <victordsantoss />';
        document.title = newPageTitle;
    }, []);

    return (
        <section className="personal-project-container">
            <Container>
                <div className='go-back'>
                    <button onClick={() => navigate(-1)} >
                        <BiArrowBack
                            size={25}
                            color='#eaeaea'
                        />
                        <span>Voltar</span>
                    </button>
                </div>
                <Row>
                    <Col md={12}>
                        <div className="text-center">
                            <h2>Groovoo Ticketing</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-center">
                            <h2>Imagens</h2>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="text-center">
                            <h2>Descrição</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}