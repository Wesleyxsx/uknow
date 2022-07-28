//--------- Import styles ---------
import './App.css';
import Footer from './layout/footer/Footer';


//---------- App ---------
/**
 * Root App
 * 
 * @returns {JSX}
 */
export default function App() 
{
  return (
    <main>
      <div className='big__section'>
        Hello World!
      </div>

      <Footer />
    </main>
  );
}//end App()