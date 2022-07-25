import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';

export const Timeline = () => {
    return (
        <div>
            <h2 className="text-center">
                Experiência Profissional
            </h2>   
            <section class="container-timeline">
                <div class="timeline">
                    <ul>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">12 de dezembro, 2022 - Atualmente</h3>
                                <h1>Defensoria Publica Geral da União - DPGU</h1>
                                <p>Desenvolvimento e manutenção de aplicações com base em Html, CSS, Boostrap e ReactJs, além do uso dos CMS's Joomla e Wordpress. Sendo importante citar meus trabalhos no PortalDPU, portal de Promoção de Direitos Humanos da DPU e o portal do Concurso de Redação da DPU.</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h3 class="date">25 de setembro, 2021 - Atualmente</h3>
                                <h1>Atena Solutions, SAN FRANCISCO, CA - EUA</h1>
                                <p>Desenvolvimento de aplicações de maneira FullStack usando as tecnologias de NodeJs, TypeScript, ReactJs e ReacNative, além de trabalhar diretamente com banco de dados SQL. Sendo importante citar meus trabalhos na aplicação web Groovoo, junto aos apps Groovoo e GroovooOrganizer.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    )
}
