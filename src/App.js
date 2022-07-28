//--------- Import custom components ---------
import Header from "./Components/header/index";
import Footer from "./Components/footer/index";
import ListaDeCursos from "./Components/cursos/index";

//--------- Import styles ---------
import './App.css';
import Main from "./Components/main";


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
        <Main />
        <ListaDeCursos/>
        <Footer />
        
      </div>
  );
}//end App()