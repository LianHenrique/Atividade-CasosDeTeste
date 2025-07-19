import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Cadastro from './Components/Cadastro/Cadastro'
import Login from './Components/Login/Login'

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
