//--------- Import custom components ---------
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//--------- Import custom components ---------
import './login.css'

//--------- Function ---------
/**
 * 
 * @returns {JSX}
 */
export default function Loginpage ()
{
    return(
        <main className='login'>
            <aside className='asidelogin'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='forms' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='forms' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='buttoncadastrar'>
                        <Button variant="primary">
                            Cadastrar
                        </Button>
                        <Form.Text className="text-muted">
                            Não possuo cadastro, desejo me cadastrar.
                        </Form.Text>
                    </div>
                </Form>
            </aside>
        </main>
    );
}