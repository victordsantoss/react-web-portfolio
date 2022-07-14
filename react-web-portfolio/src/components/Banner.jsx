import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ['TypeScript', 'NodeJs', 'ReactJs', 'React Native'];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        isDeleting && setDelta(prevDelta => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xl={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu portfólio</span>
                        <h1>{`Olá, eu sou o Victor`} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>
                            Tenho 22 anos e sou estudante de Engenharia de Software pela Universidade de Brasília.
                            Atualmente tenho 2 anos de experiência de desenvolvimento web e mobile trabalhando de maneira full stack com foco nas tecnologias SQL - Mysql,
                            NoSQL - MongoDb, NodeJs, TypeScript, ReactJs, ReactNative, Bootstrap, CSS e StyledComponents, além de ser um entusiasta em metodologias ágeis.
                        </p>
                        <button onClick={() => console.log("ok")} >Vamos nos conectar <AiOutlineArrowRight size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}