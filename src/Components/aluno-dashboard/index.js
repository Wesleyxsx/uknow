//--------- Import styles ---------
import { Container } from 'react-bootstrap';

import pic01 from './images/metalurgia.jpeg';
import pic02 from './images/tosagem.jpeg';



import Footer from '../footer';
import Header2 from '../header2';


//----------- Custom Style Import ---------
import './index.css';

 

//---------- AlunoDashboard ---------
/**
 * Aluno Dashboard
 * 
 * @returns {JSX}
 */
export default function AlunoDashboard() {

    return (
        <div className='aluno__dashboard'>
            <Header2 />

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