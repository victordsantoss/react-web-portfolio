import { Container, Row, Col } from 'react-bootstrap';
import { tecnologyIcons } from '../utils/tecnology-icons';
import colorSharp from '../assets/img/color-sharp.png'

export const Development = () => {
    return (
        <section className="project" id="project">
            <Container>
                <h2>Principais tecnologias</h2>
                <p className="line"></p>
                <div className="development-skills">
                    <div className="development-skills-box">
                        <div className="row">
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.html5}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.css}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.bootstrap}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.javaScript}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.nodeJs}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.reactJs}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.typeScript}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.sql}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.mongoDb}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.github}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.docker}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.scrum}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.ubuntu}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.loading}
                            </div>
                            <div className="col-5 col-md-2 development-skills-box-item">
                                {tecnologyIcons.loading}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}

