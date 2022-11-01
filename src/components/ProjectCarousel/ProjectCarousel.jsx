import Carousel from "react-multi-carousel";
import { responsiveProjectWeb, responsiveProjectMobile } from '../../utils/responsive-constants';
import "react-multi-carousel/lib/styles.css";
import './index.css';

export const ProjectCarousel = ({ imgs, link, type }) => {
    return (
        <section>
            <Carousel responsive={type === "web" ? responsiveProjectWeb : responsiveProjectMobile} infinite={true} className='project-slider' itemClass="carousel-item-padding-40-px"
            >
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