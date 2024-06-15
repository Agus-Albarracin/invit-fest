import React from 'react';
import './App.css'; // Si tienes estilos globales

// Importar las secciones
import Section1 from './sections/firstblock';
import Section2 from './sections/secondblock';

const App = () => {
  return (
    <div className="App">
      {/* Renderizar las secciones */}
      <Section1 />
      <Section2 />
      
    </div>
  );
};

export default App;