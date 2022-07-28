//--------- Import custom components ---------
import Header from "./Components/header/index";


//--------- Import styles ---------
import './App.css';
import Footer from "./Components/footer/Footer";


//---------- App ---------
/**
 * Root App
 * 
 * @returns {JSX}
 */
export default function App() 
{
  return (
      <div>
        <Header></Header>
        <main className="big__section">
        </main>
        <Footer />
      </div>
  );
}//end App()