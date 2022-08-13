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

import concursoDeRedacao from '../assets/img/projects/dpu-concurso-de-redacao.png';
import portalDpu from '../assets/img/projects/portal-dpu.png';
import promocaoDeDireitosHumanos from '../assets/img/projects/promocao-de-direitos-humanos.png';
import { ProjectSkillsConstants } from './project-skills-constants';

export const projects = [
    {
        id: 1,
        type: 'web',
        title: 'Groovoo Ticketing',
        acting: 'Desenvolvedor Full stack',
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
        ],
        path: `/projects?project=groovoo_ticketing`,
        link: 'https://groovooapp.com/',
    },
    {
        id: 2,
        type: 'mobile',
        title: 'Groovoo Social Networking',
        acting: 'Desenvolvedor Full stack',
        description: 'O Groovoo Social Networking consiste em um aplicativo para usuários da plataforma de compra de ingressos Groovoo e seu funcionamento baseia-se em além de ser um mecanismo ágil para compra e armazenamento de ingressos, aproximar integrantes de determinados eventos por meio de interesses em comum. Meu papel no desenvolvimento foi de maneira full stack com base no uso de TypeScript e ReactNative',
        imgUrl: groovooSocial1,
        imgs: [
            groovooSocial2,
            groovooSocial3,
            groovooSocial4,
            groovooSocial5,
            groovooSocial6,
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
        ],
        path: `/projects?project=groovoo_social_networking`,
        link: 'https://apps.apple.com/br/app/groovoo-social-networking/id1529056214'
    },
    {
        id: 3,
        type: 'mobile',
        title: 'Groovoo Organizer',
        acting: 'Desenvolvedor Full stack',
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
        ],
        path: `/projects?project=groovoo_organizer`,
        link: 'https://apps.apple.com/br/app/groovoo-organizer/id1593068649'
    },
    {
        id: 4,
        title: 'Concurso de Redação da Defensoria Pública da União',
        description: 'Desenvolvedor fron-end',
        imgUrl: concursoDeRedacao,
        path: `/projects?project=dpu_concurso_de_redacao`,
        link: 'https://concursoderedacao.dpu.def.br/'
    },
    {
        id: 5,
        title: 'Portal DPU',
        description: 'Desenvolvedor front end',
        imgUrl: portalDpu,
        path: `/projects?project=dpu_portal`,
        link: 'https://www.dpu.def.br/'
    },
    {
        id: 6,
        title: 'Portal de Promoção de Direitos Humanos - DPU',
        description: 'Desenvolvedor Full stack',
        imgUrl: promocaoDeDireitosHumanos,
        path: `/projects?project=dpu_direitos_humanos`,
        link: 'https://promocaodedireitoshumanos.dpu.def.br/'
    }
]
