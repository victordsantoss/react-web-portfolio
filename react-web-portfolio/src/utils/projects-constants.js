import groovooTicketing from '../assets/img/projects/groovoo-ticketing.png';
import groovooSocialNetworking from '../assets/img/projects/groovoo-social-networking.jpeg';
import groovooOrganizer from '../assets/img/projects/groovoo-organizer.jpeg';
import concursoDeRedacao from '../assets/img/projects/dpu-concurso-de-redacao.png';
import portalDpu from '../assets/img/projects/portal-dpu.png';
import promocaoDeDireitosHumanos from '../assets/img/projects/promocao-de-direitos-humanos.png';

export const projects = [
    {
        id: 1,
        title: 'Groovoo Ticketing',
        description: 'Desenvolvedor Full stack',
        imgUrl: groovooTicketing,
        path: `/projects?project=groovoo_ticketing`,
        link: 'https://groovooapp.com/',
    },
    {
        id: 2,
        title: 'Groovoo Social Networking',
        description: 'Desenvolvedor Full stack',
        imgUrl: groovooSocialNetworking,
        path: `/projects?project=groovoo_social_networking`,
        link: 'https://apps.apple.com/br/app/groovoo-social-networking/id1529056214'
    },
    {
        id: 3,
        title: 'Groovoo Ticketing',
        description: 'Desenvolvedor Full stack',
        imgUrl: groovooOrganizer,
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