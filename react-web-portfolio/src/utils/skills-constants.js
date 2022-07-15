import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';

export const skills = [
    {
        src: meter1,
        text: "Desenvolvimento Front-end",
    },
    {
        src: meter2,
        text: "Desenvolvimento Back-end",
    },
    {
        src: meter3,
        text: "Desenvolvimento Mobile",
    },
    {
        src: meter3,
        text: "Metodologias Ágeis de Desenvolvimento",
    },
    {
        src: meter3,
        text: "Versionamento de Código e boas práticas de programação",
    },
];

export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};