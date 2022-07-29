
//--------- Import styles ---------
import { Button, Dropdown, Form } from 'react-bootstrap';

//----------- Custom Style Import ---------
import './index.css';


import { FaUserCircle } from 'react-icons/fa'; 
import { BsFillCaretDownFill } from 'react-icons/bs'; 
import { AiOutlineBell } from 'react-icons/ai'; 

//---------- Header2 ---------
/**
 * App header interna
 * 
 * @returns {JSX}
 */
export default function Header2() 
{

    function handleLogoClick(e) {
        e.preventDefault();
        window.location.href='http://google.com';
    }   

    return (
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
                    <span>00.00 tK</span>
                    <div id='notif__bell'><AiOutlineBell />&nbsp;&nbsp;&nbsp;|</div>
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
    );
}//end Footer()