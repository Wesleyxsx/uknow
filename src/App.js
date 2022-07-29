//--------- Import libs ---------
import React from "react";
import { Routes, Route } from "react-router-dom";


//--------- Import custom components ---------
import Homepage from "./pages/homepage/homepage";
import Loginpage from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Cursos from "./Components/cursos";


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
  return(
    <Routes>
      <Route element={<Homepage />} path="/" exact />
      <Route element={<Loginpage />} path="/login" />
      <Route element={<Cadastro />} path="/cadastro" />
    </Routes>
  );
}//end App()