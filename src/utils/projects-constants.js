import groovooTicketing1 from '../assets/img/projects/groovoo-ticketing-1.png';
import groovooTicketing2 from '../assets/img/projects/groovoo-ticketing-2.png';
import groovooTicketing3 from '../assets/img/projects/groovoo-ticketing-3.png';
import groovooOrganizer1 from '../assets/img/projects/groovoo-organizer-1.png';
import groovooOrganizer2 from '../assets/img/projects/groovoo-organizer-2.jpeg';
import groovooOrganizer3 from '../assets/img/projects/groovoo-organizer-3.jpeg';
import groovooOrganizer4 from '../assets/img/projects/groovoo-organizer-4.jpeg';
import groovooOrganizer5 from '../assets/img/projects/groovoo-organizer-5.jpeg';
import groovooSocial1 from '../assets/img/projects/groovoo-social-1.jpeg';
import groovooSocial2 from '../assets/img/projects/groovoo-social-2.jpeg';
import groovooSocial3 from '../assets/img/projects/groovoo-social-3.jpeg';
import groovooSocial4 from '../assets/img/projects/groovoo-social-4.jpeg';
import groovooSocial5 from '../assets/img/projects/groovoo-social-5.jpeg';
import groovooSocial6 from '../assets/img/projects/groovoo-social-6.jpeg';
import groovooSocial7 from '../assets/img/projects/groovoo-social-7.jpeg';
import groovooSocial8 from '../assets/img/projects/groovoo-social-8.jpeg';
import concursoDpu1 from '../assets/img/projects/concurso-dpu-1.png';
import concursoDpu2 from '../assets/img/projects/concurso-dpu-2.png';
import portalDpu1 from '../assets/img/projects/portal-dpu-1.png';
import portalDpu2 from '../assets/img/projects/portal-dpu-2.png';
import dndhDpu1 from '../assets/img/projects/dndh-dpu-1.png';
import dndhDpu2 from '../assets/img/projects/dndh-dpu-2.png';
import dndhDpu3 from '../assets/img/projects/dndh-dpu-3.png';
import dndhDpu4 from '../assets/img/projects/dndh-dpu-4.png';
import dndhDpu5 from '../assets/img/projects/dndh-dpu-5.png';

import concursoDeRedacao from '../assets/img/projects/dpu-concurso-de-redacao.png';
import portalDpu from '../assets/img/projects/portal-dpu.png';
import promocaoDeDireitosHumanos from '../assets/img/projects/promocao-de-direitos-humanos.png';
import { ProjectSkillsConstants } from './project-skills-constants';

export const projects = [
    {
        id: 1,
        type: 'web',
        title: 'Groovoo Ticketing',
        acting: 'Desenvolvedor Full Stack',
        description: 'O Groovoo Ticketing consiste é voltada para venda de ingressos para eventos localizados nos Estados Unidos, sendo disponível para usuaários normais e organizdores de eventos. Meu papel no desenvolvimento foi de maneira full stack com base no uso de TypeScript e ReactJs, além do uso de banco de dados relacionais e tecnologias como Firebase e Amazon AWS. ',
        imgUrl: groovooTicketing1,
        imgs: [
            groovooTicketing1,
            groovooTicketing2,
            groovooTicketing3
        ],
        skills: [
            ProjectSkillsConstants.node,
            ProjectSkillsConstants.react,
            ProjectSkillsConstants.typeScript,
            ProjectSkillsConstants.jest,
            ProjectSkillsConstants.mysql,
            ProjectSkillsConstants.firebase,
            ProjectSkillsConstants.docker,
            ProjectSkillsConstants.git,
            ProjectSkillsConstants.aws,

        ],
        path: `/projects?project=groovoo_ticketing`,
        link: 'https://groovooapp.com/',
    },
    {
        id: 2,
        type: 'mobile',
        title: 'Groovoo Social Networking',
        acting: 'Desenvolvedor Full Stack',
        description: 'O Groovoo Social Networking consiste em um aplicativo para usuários da plataforma de compra de ingressos Groovoo e seu funcionamento baseia-se em além de ser um mecanismo ágil para compra e armazenamento de ingressos, aproximar integrantes de determinados eventos por meio de interesses em comum. Meu papel no desenvolvimento foi de maneira full stack com base no uso de TypeScript e ReactNative',
        imgUrl: groovooSocial1,
        imgs: [
            groovooSocial2,
            groovooSocial3,
            groovooSocial4,
            groovooSocial7,
            groovooSocial8,
            groovooSocial5,
            groovooSocial6

        ],
        skills: [
            ProjectSkillsConstants.node,
            ProjectSkillsConstants.react,
            ProjectSkillsConstants.typeScript,
            ProjectSkillsConstants.jest,
            ProjectSkillsConstants.mysql,
            ProjectSkillsConstants.firebase,
            ProjectSkillsConstants.docker,
            ProjectSkillsConstants.git,
            ProjectSkillsConstants.aws,
        ],
        path: `/projects?project=groovoo_social_networking`,
        link: 'https://apps.apple.com/br/app/groovoo-social-networking/id1529056214'
    },
    {
        id: 3,
        type: 'mobile',
        title: 'Groovoo Organizer',
        acting: 'Desenvolvedor Full Stack',
        description: 'O Groovoo Organizer consite em um aplicativo voltado para organizadores dos eventos criados dentro da plataforma Groovoo, seu objetivo é permitir que os organizadores tenham um fácil acesso a todos os dados do eventos. Meu papel no desenvolvimento foi com base no uso de TypeScript e ReactNative.',
        imgUrl: groovooOrganizer1,
        imgs: [
            groovooOrganizer2,
            groovooOrganizer3,
            groovooOrganizer4,
            groovooOrganizer5
        ],
        skills: [
            ProjectSkillsConstants.node,
            ProjectSkillsConstants.react,
            ProjectSkillsConstants.typeScript,
            ProjectSkillsConstants.jest,
            ProjectSkillsConstants.mysql,
            ProjectSkillsConstants.firebase,
            ProjectSkillsConstants.docker,
            ProjectSkillsConstants.git,
            ProjectSkillsConstants.aws,
        ],
        path: `/projects?project=groovoo_organizer`,
        link: 'https://apps.apple.com/br/app/groovoo-organizer/id1593068649'
    },
    {
        id: 4,
        type: 'web',
        title: 'Concurso de Redação da Defensoria Pública da União - DPU',
        acting: 'Desenvolvedor Fron-end',
        description: 'O Portal do concurso de Redação da DPU consiste em uma plataforma para o lançamento do concurso de redação anual, que visa proporcionar discussões de temas relevantes e presentes na realidade social brasileira e no mundo. Nesse projeto trabalhei no front-ent com o uso de ReactJs.',
        imgUrl: concursoDeRedacao,
        imgs: [
            concursoDpu1,
            concursoDpu2,
        ],
        skills: [
            ProjectSkillsConstants.react,
            ProjectSkillsConstants.typeScript,
            ProjectSkillsConstants.firebase,
            ProjectSkillsConstants.docker,
            ProjectSkillsConstants.git,
        ],
        path: `/projects?project=dpu_concurso_de_redacao`,
        link: 'https://concursoderedacao.dpu.def.br/'
    },
    {
        id: 5,
        type: 'web',
        title: 'Portal DPU',
        acting: 'Desenvolvedor Front-end',
        description: 'O Portal DPU consiste no portal nacional da Defensoria Pública Geral da União, disponibilizando informações, notícias e documentação para o público em geral. Neste projeto trabalhei na manutenção usando JavaScript, HTML, CSS e o CMS Joomla.',
        imgUrl: portalDpu,
        imgs: [
            portalDpu1,
            portalDpu2,
        ],
        skills: [
            ProjectSkillsConstants.html,
            ProjectSkillsConstants.css,
            ProjectSkillsConstants.javaScript,
            ProjectSkillsConstants.wordpress,

        ],
        path: `/projects?project=dpu_portal`,
        link: 'https://www.dpu.def.br/'
    },
    {
        id: 6,
        type: 'web',
        title: 'Portal de Promoção de Direitos Humanos - DPU',
        acting: 'Desenvolvedor Front-end',
        description: 'O Portal de Promoão de Direitos Humanos consiste em um platadorma de candidatura a Defensoria Pública da União para ser órgão de Direitos Humanos. Sendo desenvolvido com uso do CMS Wordpress, HTML e CSS.',
        imgUrl: promocaoDeDireitosHumanos,
        imgs: [
            dndhDpu1,
            dndhDpu2,
            dndhDpu3,
            dndhDpu4,
            dndhDpu5
        ],
        skills: [
            ProjectSkillsConstants.html,
            ProjectSkillsConstants.css,
            ProjectSkillsConstants.javaScript,
            ProjectSkillsConstants.wordpress,
        ],
        path: `/projects?project=dpu_direitos_humanos`,
        link: 'https://promocaodedireitoshumanos.dpu.def.br/'
    }
]
