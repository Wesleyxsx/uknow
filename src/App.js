//--------- Import custom components ---------
import Header from "./Components/header/index";
import Footer from "./Components/footer/index";
import Loginpage from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Perfil from "./pages/perfil/perfil";

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
      <Perfil></Perfil>
      <Footer></Footer>
    </div>
  );
}//end App()