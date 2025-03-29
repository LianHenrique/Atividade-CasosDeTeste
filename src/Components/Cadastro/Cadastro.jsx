import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { useState } from "react";

const Cadastro = () => {
  const [nome, useNome] = useState("");
  const [email, useEmail] = useState("");
  const [senha, useSenha] = useState("");
  const [senhaConfirma, useSenhaConfirma] = useState("");

  const navigate = useNavigate();

  const temNumero = (str) => {
    // Expressão regular para verificar se a string contém números
    return /\d/.test(str);
  }

  const validarEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const cadastrar = () => {
    // Verifica se o nome esta vazio ou contem numeros
    if (temNumero(nome) || nome === ""){
      alert("Nome invalido")
      return false;
    }
    // Verifica se o email é valido
    if (validarEmail(email) != true || email === ""){
      alert("Email invalido")
      return false;
    }
    // Verifica se a confirmação foi efetuada corretamente
    if (senha != senhaConfirma) {
      alert("Confirmação de senha invalida")
      return false;
    }
    // Verifica de a senha não esta vazia
    else if(senha === ""){
      alert("Senha invalida")
      return false;
    }
    // Verifica o tamanho da senha
    else if(senha.length < 8){
      alert("Senha Fraca (8 characteres ou mais)")
      return false;
    }
    if(cadastrar){
      navigate('/');
    }
    return true;
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Cadastro</h1>
      <div className={styles.baseInput}>
        <input className={styles.input} onChange={(event) => useNome(event.target.value)} type="text" placeholder="Nome"/>
        <input className={styles.input} onChange={(event) => useEmail(event.target.value)} type="text" placeholder="E-mail"/>
        <input className={styles.input} onChange={(event) => useSenha(event.target.value)} type="password" placeholder="Senha"/>
        <input className={styles.input} onChange={(event) => useSenhaConfirma(event.target.value)} type="password" placeholder="Confirmação de Senha"/>
        <button className={styles.button} onClick={() => navigate('/')}>Voltar</button>
        <button className={styles.button} onClick={cadastrar}>Cadastrar</button>
      </div>
    </div>
  )
}

export default Cadastro