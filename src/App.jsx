import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Cadastro from './Components/Cadastro/Cadastro'
import Login from './Components/Login/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
