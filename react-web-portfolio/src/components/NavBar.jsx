import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoLogoXing } from 'react-icons/io';
import { navbarIcons } from "../utils/navbar-icons";

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
                <Navbar.Brand href="/">
                    <IoLogoXing
                        size={60}
                        className="img-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex justify-content-around">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victorsamuelengenharia/" target="_blank" rel="noreferrer" ><img src={navbarIcons.linkedin} alt="" /></a>
                            <a href="https://github.com/victordsantoss" target="_blank" rel="noreferrer" ><img src={navbarIcons.instagram} alt="" /></a>
                            <a href="https://www.instagram.com/victordsantoss/" target="_blank" rel="noreferrer" ><img src={navbarIcons.github} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
