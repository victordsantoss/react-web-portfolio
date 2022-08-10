import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

export const GithubData = () => {
    return (
        <section className="github-data-container">
            <Container>
                <Row className="text-center">
                    <Col md={4}>
                        <a href="https://github.com/victordsantoss">
                            <img src="https://github-readme-stats.vercel.app/api?username=victordsantoss&count_private=true&include_all_commits=true&show_icons=true&theme=dracula&hide_border=false&show_owner=true" />
                        </a>
                    </Col>
                    <Col md={8}>
                        <a href="https://github.com/victordsantoss">
                            <img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}