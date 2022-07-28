//--------- Import styles ---------
import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo01 from './images/letscode.jpeg';
import logo02 from './images/ifood.png';

import { 
    AiOutlineFacebook,
    AiFillRedditSquare,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillYoutube 
} from 'react-icons/ai'; 

//---------- Footer ---------
/**
 * App Footer
 * 
 * @returns {JSX}
 */
export default function Footer() 
{
  return (
    <footer className='footer'>
        <Container>
        <Row className='first__row'>
            <Col sm={8}>
                <h3 className='titulo'>UKnow</h3>
                <div className='creditos'>Time BlackHat - Let's Code - Hackaton 2022</div>
                <div className='creditos'>CNPJ 00.000.000/0000-00</div>                
            </Col>
            <Col sm={4}>
                Nossas redes sociais
                <div className='redes__sociais'>
                    <ul>
                        <li className='icon'><a href='http://google.com'><AiOutlineFacebook /></a></li>
                        <li className='icon'><a href='http://google.com'><AiFillRedditSquare /></a></li>
                        <li className='icon'><a href='http://google.com'><AiFillTwitterCircle /></a></li>  
                        <li className='icon'><a href='http://google.com'><AiFillInstagram /></a></li>    
                        <li className='icon'><a href='http://google.com'><AiFillYoutube /></a></li>
                    </ul>                  
                </div>
            </Col>                        
        </Row>        
        <Row className='second__row'>
            <Col sm={6} md={2}>
                <h6>Institucional</h6>
                <div className='paths'>
                    <ul>
                        <li><a href='http://google.com'>yo yo yo</a></li>
                        <li><a href='http://google.com'>item2</a></li>
                        <li><a href='http://google.com'>yayaye</a></li>  
                        <li><a href='http://google.com'>outro</a></li>    
                        <li><a href='http://google.com'>algo aqui</a></li>
                    </ul>                  
                </div>
            </Col>
            <Col sm={6} md={2}>
            <h6>A UKnow</h6>
                <div className='paths'>
                    <ul>
                        <li><a href='http://google.com'>yo yo yo</a></li>
                        <li><a href='http://google.com'>item2</a></li>
                        <li><a href='http://google.com'>yayaye</a></li>  
                    </ul>                  
                </div>
            </Col>
            <Col sm={6} md={2}>
            <h6>Conteúdos</h6>
                <div className='paths'>
                    <ul>
                        <li><a href='http://google.com'>yo yo yo</a></li>
                        <li><a href='http://google.com'>item2</a></li>
                    </ul>                  
                </div>
            </Col>                        
            <Col sm={6} md={2}>
                <h6>Fale Conosco</h6>
                <div className='paths'>
                    <ul>
                        <li><a href='http://google.com'>Email</a></li>
                        <li><a href='http://google.com'>Telefone</a></li>
                        <li><a href='http://google.com'>FAQ</a></li>                        
                    </ul>                  
                </div>
            </Col>            
            <Col md={4}>
                <div className='paths'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><h6>Assine nossa Newsletter</h6></Form.Label>
                            <div className='newsletter__form'>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>                                
                            </div>                            
                            <Form.Text className="text-muted">
                            Não compartilharemos seu email com ninguém.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </Col>            
        </Row>
        <Row className='third__row'>
            <h6>Nossos parceiros</h6>
            <Col sm={6} md={3}>
                <a href='https://www.letscode.com.br/'><img src={logo01} alt="Lets Code"/></a>
            </Col>            
            <Col sm={6} md={3}>
            <a href='https://www.ifood.com.br/'><img src={logo02} alt="iFood" /></a>
            </Col>            
        </Row>
        </Container>
        <br />
    </footer>
  );
}//end Footer()