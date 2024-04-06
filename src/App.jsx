import React from 'react';
import Home from './container/home/Home'; 
import './index.css'; 
import { Routes, Route } from 'react-router-dom';
import  Secondarycard  from './components/secondarycard/secondarycard';


function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/:id' element={<Secondarycard  />} />
     </Routes>
    </>
  );
}

export default App;
