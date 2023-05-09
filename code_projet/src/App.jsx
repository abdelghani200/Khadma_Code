import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Recherche from "./Components/RechercheDiv/Recherche";
import Khadma from "./Components/KhadmaDiv/Khadma";
import Valeur from "./Components/ValeurDiv/Valeur";
import Footer from "./Components/FooterDiv/Footer";

const App = ()=> {
  return (
    <div className="w-[85%] m-auto bg-white"> 
      <Navbar/>
      <Recherche/>
      <Khadma/>
      <Valeur/>
      <Footer/>
    </div>
  )
}

export default App;