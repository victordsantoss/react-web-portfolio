import { Container } from 'react-bootstrap';
import { tecnologyIcons } from '../../utils/tecnology-icons';
import colorSharp from '../../assets/img/banners/color-sharp.png';
import "./index.css";

export const Development = () => {
    return (
        <section className="development" id='development'>
            <Container>
                <h2>Tecnologias</h2>
                <p className="line"></p>
                <div className="development-skills">
                    <div className="development-skills-box">
                        <div className="row mx-0 my-0">
                            {
                                tecnologyIcons.map((icon, index) => {
                                    return (
                                        <div className="col-5 col-md-2 development-skills-box-item" key={index}>
                                            {icon.icon}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}

