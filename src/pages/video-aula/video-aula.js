//---------- Import libs ---------
import React from 'react';


//---------- Import Styles ---------
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


//--------- Import custom components ---------
import './video-aula.css'


export default function Videopage ()
{
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <body>
            <header>
                <Navbar className="nav--component" variant="dark" fixed="top" expand="lg">
                    <Container>
                        <>  
                            <Button variant="warning" onClick={handleShow}>
                                Aulas
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton className='aside'>
                                    <Offcanvas.Title>Aulas</Offcanvas.Title>
                                </Offcanvas.Header >
                                <Offcanvas.Body className='aside'>
                                    <h1>Video Aulas</h1>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 01</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 02</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 03</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 04</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 05</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 06</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 07</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 08</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 09</a>
                                    <a href='#' className='linkaula'>Video Aula Bijuteria 10</a>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                        <Navbar.Brand href="/">
                            <img className="logouser d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
                            {" "}Yknow
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                            <span className="me-auto"/>
                            <Nav>
                                <Nav.Link href="/" >Meus Cursos</Nav.Link>
                                <Nav.Link href="/" >Cursos</Nav.Link>
                                <Nav.Link href="/" >Perfil</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className='pageaula'>
                    <div className='aula'>
                        <div className='tela'>
                            <img className='video' src='bijuterias.jpg'></img>
                        </div>
                    </div>
                    <div className='material'>
                        <div className='text'>
                            <p>Neste curso online e gratuito as pessoas poderão aprender a criar peças de bijuterias, seja para uso próprio ou seja para venda. De uma forma geral, este curso acaba sendo interessante especialmente para as pessoas que pretendem começar a entender o processo de criação de joias, uma vez que ele não exige conhecimentos mais avançados sobre o tema.</p>
                        </div>
                    </div>
            </main>
        </body>
    );
}