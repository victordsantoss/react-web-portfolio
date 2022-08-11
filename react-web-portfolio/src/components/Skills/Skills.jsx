import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import { skills } from '../../utils/skills-constants';
import { responsive } from '../../utils/skills-constants';
import "react-multi-carousel/lib/styles.css";
import './index.css';

export const Skills = () => {
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Habilidades</h2>
                            <p className="title-line"></p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                {
                                    skills.map((skill, index) => {
                                        return <div className='item' key={index}>
                                            <img src={skill.src} alt='image-skill' />
                                            <h5>{skill.text}</h5>
                                        </div>
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}