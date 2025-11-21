import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Local from './pages/Local';
import Help from './pages/Help';
import Vinculacao from './pages/Vinculacao';
import Plano from './pages/Plano';
import Formulario from './pages/Formulario';
import Rotinas from './pages/Rotinas';
import Biblioteca from './pages/Biblioteca';
import DiretorioSuporte from './pages/DiretorioSuporte';
import Calendario from './pages/Calendario';
import Perfil from './pages/Perfil';
import Formulario1 from './pages/Formulario1';
import Formulario2 from './pages/Formulario2';
import Formulario3 from './pages/Formulario3';
import Formulario4 from './pages/Formulario4';
import Formulario5 from './pages/Formulario5';
import Formulario6 from './pages/Formulario6';
import DashboardResponsavel from './pages/DashboardResponsavel';
import PerfilResponsavel from './pages/PerfilResponsavel';
import Autenticacao from './pages/Autenticacao';
import Codigo from './pages/Codigo';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/local" element={<Local />} />
      <Route path="/vinculacao" element={<Vinculacao />} />
      <Route path="/help" element={<Help />} />
      <Route path="/plano" element={<Plano />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/rotinas" element={<Rotinas />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
      <Route path="/diretorio-suporte" element={<DiretorioSuporte />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/formulario1" element={<Formulario1 />} />
      <Route path="/formulario2" element={<Formulario2 />} />
      <Route path="/formulario3" element={<Formulario3 />} />
      <Route path="/formulario4" element={<Formulario4 />} />
      <Route path="/formulario5" element={<Formulario5 />} />
      <Route path="/formulario6" element={<Formulario6 />} />
      <Route path="/dashboard-responsavel" element={<DashboardResponsavel />} />
      <Route path="/perfil-responsavel" element={<PerfilResponsavel />} />
      <Route path="Autenticacao" element={<Autenticacao/>} />
      <Route path="Codigo" element={<Codigo/>} />Codigo
    </Routes>
  )
}

export default App