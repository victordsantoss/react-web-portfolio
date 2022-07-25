import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLogoXing } from 'react-icons/io';
import { navbarIcons } from "../../utils/navbar-icons";
import './index.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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
                <Link to="/" className="brand">
                    <IoLogoXing
                        size={60}
                        className="img-logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {window.location.pathname.indexOf("home") !== -1 ?
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contato</Nav.Link>
                            <Link to="/sobre" className={activeLink === 'sobre' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sobre')}>Sobre</Link>
                        </Nav> :
                        <Nav className="ms-auto link">
                            <Link to="/home" className={'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
                            <Link to="/home" className={'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Link>
                            <Link to="/home" className={'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Link>
                            <Link to="/home" className={'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contato</Link>
                            <Link to="/sobre" className={'active navbar-link primary'} onClick={() => onUpdateActiveLink('projects')}>Sobre</Link>
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
