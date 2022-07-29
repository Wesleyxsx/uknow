import { Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Carta from './cards';
import Header from '../header';
import Footer from '../footer';
import './index.css';
import SearchBar from './searchBar';

function ListaDeCursos() {
    return (
        <main>
            <Header />
            <section className='body'>
                
                <SearchBar/>

                <Container fluid className='cursos'>
                    <Row>
                        <Col><Carta img='public/Marcenaria.jpg' /></Col>
                        <Col><Carta img='public\Marcenaria.jpg' /></Col>
                        <Col><Carta titulo='Curso de nodejs' img='public\Marcenaria.jpg' /></Col>
                        <Col><Carta /></Col>
                    </Row>
                    <Row>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                    </Row>
                    <Row>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                        <Col><Carta /></Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </main>
    );
}

export default ListaDeCursos;