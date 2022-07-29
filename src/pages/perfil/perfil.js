//--------- Import custom components ---------
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//--------- Import custom components ---------
import './perfil.css'

//--------- Function ---------
/**
 * 
 * @returns {JSX}
 */
export default function Perfil ()
{
    return(
        <body>
            <header>
                <Navbar className="nav--component" variant="dark" fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img className="logo d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
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
            <main>
                <div className='profile'>
                    <div className='headerprofile'>
                        <div className='divfoto'>
                            <img className='foto' src='perfil-de-usuario.png'/>
                        </div>
                        <div>
                            <h1 className='nomecompleto'>WESLEY MATHEUS SARDINHA</h1>
                            <h3 className='emaildemonstrativo'>wesley_sardinha@hotmail.com</h3>
                        </div>
                    </div> 
                    <div className='perfilusuario'>
                        <div className='panel dadospessoais m-b-md'>
                            <h2>Dados pessoais</h2>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control className='forms' type="text" placeholder="Nome Completo"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Endereço de Email</Form.Label>
                                <Form.Control className='forms' type="email" placeholder="Endereço de Email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control className='forms' type="date" placeholder="Data de Nascimento"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control className='forms' type="text" placeholder="CPF"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                        <div className='panel mudarsenha m-b-md'>
                            <h2>Senha de acesso</h2>
                            <Form.Text className="text-muted">
                                Para alterar sua senha, confirme sua senha atual e insira uma nova.
                            </Form.Text>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha antiga</Form.Label>
                                <Form.Control className='forms' type="password" placeholder="Senha antiga"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha atual</Form.Label>
                                <Form.Control className='forms' type="password" placeholder="Senha atual"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirme a senha atual</Form.Label>
                                <Form.Control className='forms' type="password" placeholder="Confirme a senha atual"/>
                            </Form.Group>
                            <Button className='alinhar-perfil' variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}