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
      <Footer></Footer>
    </div>
  );
}//end App()