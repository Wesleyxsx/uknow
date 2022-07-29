//--------- Import styles ---------
import { Button, Container, Dropdown, Form } from 'react-bootstrap';

import pic01 from './images/metalurgia.jpeg';
import pic02 from './images/tosagem.jpeg';
import Footer from '../footer';


//----------- Custom Style Import ---------
import './index.css';


import { FaUserCircle } from 'react-icons/fa'; 
import { BsFillCaretDownFill } from 'react-icons/bs'; 

 

//---------- AlunoDashboard ---------
/**
 * Aluno Dashboard
 * 
 * @returns {JSX}
 */
export default function AlunoDashboard() {

    function handleLogoClick(e) {
        e.preventDefault();
        window.location.href='http://google.com';
    }

    return (
        <div className='aluno__dashboard'>
            <header>
                <div id='header__item__01' className='header__flex__item'>
                    <img id='user__header__logo' className="logo" src='Logoamarelo.png' alt='Logo-amarelo' onClick={(e) => handleLogoClick(e)} />
                    <span>&nbsp;</span>
                    <span onClick={(e) => handleLogoClick(e)}>UKnow</span>
                </div>

                <div id='header__item__02' className='header__flex__item'>
                    <div className='search__bar'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <div className='newsletter__form'>
                                <Form.Control type="text" placeholder="pesquisar" />
                                <Button variant="primary">
                                    Enviar
                                </Button>                                
                            </div>                            
                        </Form.Group>
                    </Form>
                    </div>
                </div>

                <div id='header__item__03' className='header__flex__item'>
                </div>

                <div id='header__item__04' className='header__flex__item'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <div id='menu__perfil'>
                                <div id='nome__usuario'>
                                    Armando P.
                                </div>
                                <div id='down__icon'>
                                    &nbsp;<BsFillCaretDownFill />
                                </div>
                                <div>
                                    <FaUserCircle id='pic__usuario' className='big__menu__obj'/>
                                </div>
                            </div>    
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Meu Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Meu Perfil</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Carrinho</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Minha Conta</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Configurações</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    
                </div>

            </header>




            <main className='dashboard__content'>
                <section id='section__01'>
                    <div id="banner">
                        <h1>Meu Dashboard</h1>
                        <span>Seja bem vindo Armando!</span>
                    </div>
                </section>

                <section id='section__02'>
                    <br />
                    <br />
                    <Container>
                        <h3>Cursos adquiridos</h3>
                        <hr />
                        <div className='card__group'>
                            <div className='my__card'>
                                <img src={pic01} alt='curso' />
                            </div>
                            <div className='my__card'>
                                <img src={pic02} alt='curso' />
                            </div>                            
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </div>
    );
} //end Footer()