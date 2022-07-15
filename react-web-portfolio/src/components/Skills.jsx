import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import { skills } from '../utils/skills-constants';
import { responsive } from '../utils/skills-constants';
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Habilidades</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                {
                                    skills.map((skill) => {
                                        return <div className='item'>
                                            <img src={skill.src} alt='image' />
                                            <h5>{skill.text}</h5>
                                        </div>
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}