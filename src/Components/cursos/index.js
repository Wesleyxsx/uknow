import { Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Carta from './cards';
import Header from '../header/index';
import Footer from '../footer';
import './index.css';
import SearchBar from './searchBar';
import marcenaria from './imagens/Marcenaria.jpg'
import moda from './imagens/Moda.jpg'


function ListaDeCursos() {
    return (
        <main>
            <Header />
            <section className='body'>
                
                <SearchBar/>

                <Container fluid >
                    <Row>
                        <Col><Carta img={marcenaria} /></Col>
                        <Col><Carta img={moda} /></Col>
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