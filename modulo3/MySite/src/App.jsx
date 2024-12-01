//import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filmes from './pages/filmes';
import Series from './pages/series';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Filmes />} />
          <Route path='/series' element={ <Series /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
