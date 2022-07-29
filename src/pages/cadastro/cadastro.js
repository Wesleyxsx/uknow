//--------- Import custom components ---------

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//--------- Import styles ---------
import './cadastro.css'

//--------- Function ---------
/**
 * 
 * @returns {JSX}
 */
export default function Cadastro ()
{
    return(
        <main className='login'>
            <aside className='asidecadastro'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control className='forms' type="text" placeholder="Nome Completo"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control className='forms' type="date" placeholder="Data de Nascimento"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control className='forms' type="text" placeholder="CPF"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control className='forms' type="email" placeholder="Endereço de Email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirmar Email</Form.Label>
                        <Form.Control className='forms' type="email" placeholder="Confirmar Endereço de Email"/>
                    <Form.Text className="text-muted">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Senha</Form.Label>
                        <Form.Control className='forms' type="password" placeholder=" Senha"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control className='forms' type="password" placeholder="Confirmar Senha"/>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Nunca compartilharemos sua senha com mais ninguém.
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </aside>
        </main>
    );
}