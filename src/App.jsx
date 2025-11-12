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
      <Route path="/diretorio-suporte" element={<DiretorioSuporte />} />
      <Route path="/calendario" element={<Calendario />} />
    </Routes>
  )
}

export default App