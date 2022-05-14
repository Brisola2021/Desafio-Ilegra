import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CadastroCurriculo from './components/CadastroCurriculo';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Menu from './components/Menu';
import Rodape from './components/Rodape';
import Slider from './components/Slider';
import VisualizarCurriculo from './components/VisualizarCurriculo';
import Curriculo from './components/Curriculo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Menu/>
    
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/CadastroCurriculo" element={<CadastroCurriculo />} />
      <Route exact path="/VisualizarCurriculo" element={<VisualizarCurriculo />} />
      <Route exact path="/Curriculo/:id" element={<Curriculo />} />
    </Routes>
    <Rodape/>
  </Router>

);


reportWebVitals();
