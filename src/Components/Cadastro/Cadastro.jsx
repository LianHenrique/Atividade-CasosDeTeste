import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { useState } from "react";

const Cadastro = () => {
  const [nome, useNome] = useState("");
  const [email, useEmail] = useState("");
  const [senha, useSenha] = useState("");
  const [senhaConfirma, useSenhaConfirma] = useState("");

  const navigate = useNavigate();

  const changeNome = (event) => {
    useNome(event.target.value);
  }
  const changeEmail = (event, use) => {
    useEmail(event.target.value);
  }
  const changeSenha = (event, use) => {
    useSenha(event.target.value);
  }
  const changeConfirmarSenha = (event, use) => {
    useSenhaConfirma(event.target.value);
  }

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
    const isEmpty = (str) => str.trim() === "";
    // Verifica se o nome esta vazio ou contem numeros
    if (temNumero(nome) || isEmpty(nome)){
      alert("Nome invalido")
    }
    // Verifica se o email é valido
    if (validarEmail(email) != true){
      alert("Email invalido")
    }
    // Verifica se a confirmação foi efetuada corretamente
    if (senha != senhaConfirma) {
      alert("Confirmação de senha invalida")
    }
    // Verifica de a senha não esta vazia
    else if(isEmpty(senha)){
      alert("Senha invalida")
    }
    // Verifica o tamanho da senha
    else if(senha.length < 8){
      alert("Senha Fraca (8 characteres ou mais)")
    }
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Cadastro</h1>
      <div className={styles.baseInput}>
        <input className={styles.input} onChange={changeNome} type="text" placeholder="Nome"/>
        <input className={styles.input} onChange={changeEmail} type="text" placeholder="E-mail"/>
        <input className={styles.input} onChange={changeSenha} type="password" placeholder="Senha"/>
        <input className={styles.input} onChange={changeConfirmarSenha} type="password" placeholder="Confirmação de Senha"/>
        <button className={styles.button} onClick={() => navigate('/')}>Retornar</button>
        <button className={styles.button} onClick={cadastrar}>Cadastrar</button>
      </div>
    </div>
  )
}

export default Cadastro