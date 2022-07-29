//--------- Import Custom components ---------
import Header from "../../Components/header";
import Main from "../../Components/main";
import Footer from "../../Components/footer";
import Cursos from "../../Components/cursos";


//---------- App ---------
/**
 * Homepage
 * 
 * @returns {JSX}
 */
export default function Homepage() 
{
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}//end Homepage()