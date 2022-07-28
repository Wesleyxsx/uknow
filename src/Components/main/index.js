//--------- Import styles ---------
import { Col, Container, Row } from 'react-bootstrap';
import './index.css';


import pic01 from './images/harold.jpg';
import pic02 from './images/lalmano.png';
import pic03 from './images/jerma.webp';


import Fade from 'react-reveal/Fade';


//---------- Main ---------
/**
 * App main content
 * 
 * @returns {JSX}
 */
export default function Main() 
{
  return (
    <main>
      <div className="big__section"></div>              
      <section className='first__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='hide__on__mobile'>
              <Fade>
                <img src={pic01} alt="business man" />
              </Fade>  
            </Col>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h2>Trabalhamos com educação</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
      </section>
       <section className='second__section'>
          <br />
          <br />        
          <Container>
            <Row>
              <Col className='texto__container'>
                <div className='texto'>
                  <Fade bottom>
                    <h1>Estudar pode ser divertido</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
                  </Fade>                  
                </div>              
              </Col>
              <Col className='hide__on__mobile'>
                <Fade>
                  <img src={pic02} alt="gamer man" />
                </Fade>
              </Col>
            </Row>
          </Container>        
          <br />        
          <br />        
       </section>
       <section className='third__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='hide__on__mobile'>
              <Fade>            
                <img src={pic03} alt="popular man" />
              </Fade>              
            </Col>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h2>A democratização do ensino</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
       </section>
       <div className="big__section"></div>              
    </main>
  );
}//end Main()