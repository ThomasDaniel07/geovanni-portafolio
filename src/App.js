import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import NavBar from './components/NavBar'
import { Resume } from './components/Resumen';
import { Servicies } from './components/Servicies';
// import { Skills } from './components/Skills';


function App() {

  document.documentElement.classList.add('dark')

  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Servicies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
