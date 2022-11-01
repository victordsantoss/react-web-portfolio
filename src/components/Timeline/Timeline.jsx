import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import '../../App.css';

export const Timeline = () => {
    return (
        <Container>
            <h2 className="text-center tittle">
                Experiência Profissional
            </h2>
            <div className="centraliza">
                <p className="line"></p>
            </div>
            <section class="container-timeline">
                <div class="timeline">
                    <ul>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">12 de dezembro, 2020 - Atualmente</h3>
                                <h1>Defensoria Publica Geral da União - DPGU</h1>
                                <h3 class="function">Desenvolvedor Front end</h3>
                                <p>Desenvolvimento e manutenção de aplicações com base em Html, CSS, Boostrap e ReactJs, além do uso dos CMS's Joomla e Wordpress. Sendo importante citar meus trabalhos no PortalDPU, portal de Promoção de Direitos Humanos da DPU e o portal do Concurso de Redação da DPU.</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">25 de setembro, 2021 - Atualmente</h3>
                                <h1>Atena Solutions, SAN FRANCISCO, CA - EUA</h1>
                                <h3 class="function">Desenvolvedor Full stack</h3>
                                <p>Desenvolvimento de aplicações de maneira FullStack usando as tecnologias de NodeJs, TypeScript, ReactJs e ReacNative, além de trabalhar diretamente com banco de dados SQL. Sendo importante citar meus trabalhos na aplicação web Groovoo, junto aos apps Groovoo e GroovooOrganizer.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>

    )
}
