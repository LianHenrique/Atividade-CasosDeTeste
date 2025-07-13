import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { useEffect, useState } from "react";

const Cadastro = () => {

  const [user, setUser] = useState(() => {
    const savedUsers = localStorage.getItem("usuarios");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setconfirmarSenha] = useState("");

  // Uma atualização feita quando a lista user muda de valor
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(user));
  }, [user]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUsers = localStorage.getItem("usuarios");
    if (savedUsers) {
      setUser(JSON.parse(savedUsers));
    }
  }, []);

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

    // Verifica se ja é existente
    const usuarioExiste = user.find(
      (u) => u.email === email
    );

    if (usuarioExiste) {
      alert("Login ja existente")
      return false;
    }

    // Verifica se o nome esta vazio ou contem numeros
    if (temNumero(nome) || nome === "") {
      alert("Nome invalido")
      return false;
    }
    // Verifica se o email é valido
    if (validarEmail(email) != true || email === "") {
      alert("Email invalido")
      return false;
    }
    // Verifica se a confirmação foi efetuada corretamente
    if (senha != confirmarSenha) {
      alert("Confirmação de senha invalida")
      return false;
    }
    // Verifica de a senha não esta vazia
    else if (senha === "") {
      alert("Senha invalida")
      return false;
    }
    // Verifica o tamanho da senha
    else if (senha.length < 8) {
      alert("Senha Fraca (8 characteres ou mais)")
      return false;
    }

    // Adiciona o novo usuario como um item
    const newUser = {
      nome: nome,
      email: email,
      senha: senha
    };

    // Adiciona o newUser a lista user
    const updatedUsers = [...user, newUser];

    // Faz a alteração na lista
    setUser(updatedUsers);

    alert(nome + " cadastrado")

    // Navega até a tela de login
    navigate("/");

    return true;
  }

  return (
    <div
      className={styles.body}>
      <h1
        className={styles.title}>
        Sign up
      </h1>
      <form
        className={styles.baseInput}
        // Faz com que a tela não atualize
        onSubmit={(e) => e.preventDefault()}>

        <input
          className={styles.input}
          onChange={(e) => {
            // Coleta o nome digitado
            setNome(e.target.value)
          }}
          type="text"
          placeholder="Name" />

        <input
          className={styles.input}
          onChange={(e) => {
            // Coleta o email digitado
            setEmail(e.target.value)
          }}
          type="text"
          placeholder="E-mail" />

        <input
          className={styles.input}
          onChange={(e) => {
            // Coleta a senha digitada
            setSenha(e.target.value)
          }}
          type="password"
          placeholder="Password" />

        <input
          className={styles.input}
          onChange={(e) => {
            // Coleta da confirmação de senha
            setconfirmarSenha(e.target.value)
          }}
          type="password"
          placeholder="Confirm password" />

        <div
        className={styles.buttonGroup}>
          <button
            className={styles.button}
            // Navegação para tela login
            onClick={() => navigate("/")}>
            Return
          </button>

          <button
            className={styles.button}
            onClick={cadastrar}>
            register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro