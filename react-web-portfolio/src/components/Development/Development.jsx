import { Container } from 'react-bootstrap';
import { tecnologyIcons } from '../../utils/tecnology-icons';
import colorSharp from '../../assets/img/banners/color-sharp.png'

export const Development = () => {
    return (
        <section className="project">
            <Container>
                <h2>Principais tecnologias</h2>
                <p className="line"></p>
                <div className="development-skills">
                    <div className="development-skills-box">
                        <div className="row">
                            {
                                tecnologyIcons.map((icon) => {
                                    return (
                                        <div className="col-5 col-md-2 development-skills-box-item">
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
