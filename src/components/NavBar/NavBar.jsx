import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLogoXing } from 'react-icons/io';
import { navbarIcons } from "../../utils/navbar-icons";
import './index.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const newPageTitle = `${activeLink ? activeLink : 'Home'} | <victordsantoss />`;
        document.title = newPageTitle;
    }, [activeLink]);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                {window.location.pathname.indexOf("/about") === -1 ?
                    <a href="/#home" className="brand">
                        <IoLogoXing
                            size={60}
                            className="img-logo"
                        />
                    </a> :
                    <Link to="/" className="brand">
                        <IoLogoXing
                            size={60}
                            className="img-logo"
                        />
                    </Link>
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {window.location.pathname.indexOf("/about") === -1 ?
                        <Nav className="ms-auto pt-md-responsive ">
                            <Nav.Link href="#home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
                            <Nav.Link href="#development" className={activeLink === 'Tecnologias' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Tecnologias')}>Tecnologias</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'Projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projetos')}>Projetos</Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'Contato' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contato')}>Contato</Nav.Link>
                            <Nav.Link href="/about#start-page" className={'active navbar-link primary'} onClick={() => onUpdateActiveLink('Sobre')}>Sobre</Nav.Link>
                        </Nav> :
                        <Nav className="ms-auto link">
                            <Link to="/" className={'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Link>
                            <Link to="/" className={'navbar-link'} onClick={() => onUpdateActiveLink('Tecnologias')}>Tecnologias</Link>
                            <Link to="/" className={'navbar-link'} onClick={() => onUpdateActiveLink('Projetos')}>Projetos</Link>
                            <Link to="/" className={'navbar-link'} onClick={() => onUpdateActiveLink('Contato')}>Contato</Link>
                            <Nav.Link href="/about#start-page" className={'active navbar-link primary'} onClick={() => onUpdateActiveLink('Sobre')}>Sobre</Nav.Link>
                        </Nav>
                    }
                    <span className="navbar-text d-flex justify-content-around">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victorsamuelengenharia/" target="_blank" rel="noreferrer" ><img src={navbarIcons.linkedin} alt="" /></a>
                            <a href="https://github.com/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.github} alt="" /></a>
                            <a href="https://www.instagram.com/victordsantoss/" target="_blank" rel="noreferrer" ><img src={navbarIcons.instagram} alt="" /></a>
                            <a href="https://api.whatsapp.com/send?phone=5561985018286&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20meio%20do%20seu%20portf%C3%B3lio%20web." target="_blank" rel="noreferrer" ><img src={navbarIcons.whatsapp} alt="" /></a>
                            <a href="https://t.me/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.telegram} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
