import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './index.css';

//<div className=''></div>

export default function Header ()
{
    return(
        <header >
            <Navbar variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand className="Brand" href="#home">
                        <img className="d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
                        {" "}Yknow
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <span className="me-auto"/>
                        <Nav>
                            <Nav.Link href="#home" >Home</Nav.Link>
                            <Nav.Link href="src/Components/cursos/index.js">Cursos</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                           <Button className='login' variant="warning">Sign in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}