import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Help from './pages/Help';
import Local from './pages/Local';
import Plano from './pages/Plano';
import Formulario from './pages/Formulario';
import Rotinas from './pages/Rotinas';
import Biblioteca from './pages/Biblioteca';
import DiretorioSuporte from './pages/DiretorioSuporte';
import Calendario from './pages/Calendario';
import Formulario1 from './pages/Formulario1';
import Formulario2 from './pages/Formulario2';
import Formulario3 from './pages/Formulario3';
import Formulario4 from './pages/Formulario4';
import Formulario5 from './pages/Formulario5';
import Formulario6 from './pages/Formulario6';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/help" element={<Help />} />
      <Route path="/local" element={<Local />} />
      <Route path="/plano" element={<Plano />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/rotinas" element={<Rotinas />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
      <>
      <Route path="/diretorio-suporte" element={<DiretorioSuporte />} />
      <Route path="/calendario" element={<Calendario />} /></>
      <Route path="/formulario1" element={<Formulario1 />} />
      <Route path="/formulario2" element={<Formulario2 />} />
      <Route path="/formulario3" element={<Formulario3 />} />
      <Route path="/formulario4" element={<Formulario4 />} />
      <Route path="/formulario5" element={<Formulario5 />} />
      <Route path="/formulario6" element={<Formulario6 />} />
    </Routes>
  )
}

export default App
