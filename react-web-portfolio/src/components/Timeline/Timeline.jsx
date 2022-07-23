import { Container } from 'react-bootstrap';
import { tecnologyIcons } from '../../utils/tecnology-icons';
import colorSharp from '../../assets/img/banners/color-sharp.png'
import './index.css';

export const Timeline = () => {
    return (
        <section className="about-container">
            <div className="about-my">
                <h2>Ola</h2>
            </div>
            <div class="container-timeline">
                <div class="timeline">
                    <ul>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">20th may, 2010</h3>
                                <h1>Heading 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">20th may, 2010</h3>
                                <h1>Heading 2</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">20th may, 2010</h3>
                                <h1>Heading 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">20th may, 2010</h3>
                                <h1>Heading 4</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}
