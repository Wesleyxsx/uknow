//--------- Import custom components ---------
import Header from "./Components/header/index";
import Footer from "./Components/footer/index";


//--------- Import styles ---------
import './App.css';


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