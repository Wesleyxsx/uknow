//--------- Import custom components ---------
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <main>
            <div className='profile'>
                <div className='headerprofile'>
                    <div className='foto'>
                    </div>
                        <img src='perfil-de-usuario.png'/>
                    <div>
                        <h1 className='nomecompleto'>WESLEY MATHEUS SARDINHA</h1>
                        <h3 className='emaildemonstrativo'>wesley_sardinha@hotmail.com</h3>
                    </div>
                </div> 
                <div className='perfilusuario'>
                    <div className='row'>
                        <div className='panel dadospessoais col-md-6 col-12 m-b-md'>
                            <h2>Dados pessoais</h2>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className='panel mudarsenha col-md-6 col-12 m-b-md'>
                            <h2>Senha de acesso</h2>
                            <p>senha atual</p>
                            <p>nova senha</p>
                            <p>repita a nova senha</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}