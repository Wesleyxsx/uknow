//--------- Import custom components ---------
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//--------- Import styles ---------
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//--------- Function ---------
/**
 * 
 * @returns {JSX}
 */
export default function Header ()
{
    return(
        <header>
            <Navbar variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand className="brand" href="#home">
                        <img className="d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
                        {" "}Uknow
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <span className="me-auto"/>
                        <Nav>   
                            <Nav.Link href="#home" >Home</Nav.Link>
                            <Nav.Link href="#cursos">Cursos</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Button className='buttonlogin me-2' variant="warning"><a className='textButton' href='#login'>Sign in</a></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}