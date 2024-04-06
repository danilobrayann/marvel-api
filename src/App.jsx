import React from 'react';
import Main from './components/main'; // Asegúrate de que la primera letra de "Main" esté en mayúscula
import './index.css'; // Asegúrate de que la carpeta sea "components" en lugar de "Components"
import { Routes, Route } from 'react-router-dom';
import  Marvel  from './components/marvel';
// Asegúrate de importar "Marvel" con mayúscula inicial

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Main />} />
       <Route path='/:id' element={<Marvel />} />
     </Routes>
    </>
  );
}

export default App;
