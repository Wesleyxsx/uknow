//--------- Import custom components ---------
import Header from "./Components/header/index";
import Footer from "./Components/footer/index";
import Videopage from "./pages/video-aula/video-aula";
import Perfil from "./pages/perfil/perfil";
import ListaDeCursos from "./Components/cursos";
import AlunoDashboard from "./Components/aluno-dashboard";

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
      <>

        <AlunoDashboard></AlunoDashboard>
        <Footer />

      </>
  );
}//end App()