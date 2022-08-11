import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import { projects } from '../../utils/projects-constants';
import { responsive } from '../../utils/projects-constants';
import "react-multi-carousel/lib/styles.css";
import './index.css';

export const ProjectCarousel = ({ imgs, link }) => {
    return (
        <section>
            <Carousel responsive={responsive} infinite={true} className='project-slider'>
                {
                    imgs.map((img, index) => {
                        return <div className='item' key={index}>
                            <a href={link} target="_blank">
                                <img src={img} alt='image-skill' />
                            </a>
                        </div>
                    })
                }
            </Carousel>
        </section>
    )
}