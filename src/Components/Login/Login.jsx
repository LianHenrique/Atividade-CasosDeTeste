import { useEffect, useState } from "react";
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("usuarios");
    if (savedUsers) {
      setUser(JSON.parse(savedUsers));
    }
  }, []);

  const [emailInput, setEmailInput] = useState();
  const [senhaInput, setSenhaInput] = useState();

  const navegate = useNavigate();

  // Função chamada no envio do formulário
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const logar = () => {
    const usuarioExiste = user.find(
      (u) => u.email === emailInput && u.senha === senhaInput
    );
    
    if (!usuarioExiste) {
      alert("Login inválido");
    }
    else{
      alert("Bem vindo "+usuarioExiste.nome);
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.baseInput} onSubmit={handleLogin}>
        <div>
          <input
            className={styles.input} 
            type="email"
            id="email"
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="E-mail"
          />
        </div>

        <div>
          <input
            className={styles.input} 
            type="password"
            id="senha"
            onChange={(e) => setSenhaInput(e.target.value)}
            placeholder="Senha"
          />
        </div>
        <button 
        className={styles.button} 
        type="submit" 
        onClick={() => {
          navegate("/cadastro")
        }}>
          Cadastrar
        </button>
        <button 
        className={styles.button} 
        type="submit"
        onClick={logar}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
