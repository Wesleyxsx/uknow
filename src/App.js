//--------- Import custom components ---------
import Header from "./Components/header/index";
import Footer from "./Components/footer/index";
import Loginpage from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Perfil from "./pages/perfil/perfil";
import Videopage from "./pages/video-aula/video-aula";
import Headerusuario from "./Components/header-usuario/header-usuario";

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
        <Headerusuario></Headerusuario>
        <Videopage></Videopage>
        <Footer />
      </>
  );
}//end App()