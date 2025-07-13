import { useEffect, useState } from "react";
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // Lista para coletar as informações do localStorage
  const [user, setUser] = useState([]);

  // Coleta as indormações do localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("usuarios");
    if (savedUsers) {
      setUser(JSON.parse(savedUsers));
    }
  }, []);

  // States que coletam as informações dos inputs
  const [emailInput, setEmailInput] = useState();
  const [senhaInput, setSenhaInput] = useState();

  const navegate = useNavigate();

  // Função para confirmar login
  const logar = () => {
    // Find para procurar se email e senha digitados existem
    const usuarioExiste = user.find(
      (u) => u.email === emailInput && u.senha === senhaInput
    );

    // Confirmação do find
    if (!usuarioExiste) {
      alert("Login inválido");
    }
    else {
      // Find returna o objeto encontrado com todos deus valores
      alert("Bem vindo " + usuarioExiste.nome);
    }
  };

  return (
    <div
      className={styles.body}>
      <h1
        className={styles.title}>
        Sign in
      </h1>
      <form
        className={styles.baseInput}
        // para a tela não recarregar
        onSubmit={(e) => {
          e.preventDefault();
        }}>

          <input
            className={styles.input}
            type="email"
            id="email"
            // Coleta o email
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="E-mail"
          />

          <input
            className={styles.input}
            type="password"
            id="senha"
            // Coleta a senha
            onChange={(e) => setSenhaInput(e.target.value)}
            placeholder="Password"
          />

        <div
          className={styles.buttonGroup}>
          <button
            className={styles.button}
            type="submit"
            onClick={logar}>
            Enter
          </button>
          <a
            href="/cadastro">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
