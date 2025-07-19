import { useEffect, useState } from "react";
import styles from "./Login.module.css"
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {

  // Coleta as indormações do localStorage

  const [showPopup, setShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [loginError, setLoginError] = useState('');

  const savedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];

  const onSubmit = (data) => {
    const found = savedUsers.find(
      (user) => user.email === data.email && user.senha === data.senha
    );
    if (found) {
      setShowPopup(true);
      setCurrentUser(found);
    } else {
      setLoginError('Login ou senha inválidos');
    }

    console.log(data);
  }

  const onError = (erros) => {
    console.log(erros)
  }

  return (
    <div
      style={{
        height: "100vh",
        alignContent: "center",
        justifyItems: "center"
      }}>
      <div
        className={styles.body}>
        <h1
          className={styles.title}>
          Sign in
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className={styles.baseInput}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="email"
              id="email"
              {
              ...register("email", {
                required: "Email obrigatorio",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Email invalido"
                },
                validate: (value) => value.includes("@") || "Email invalido"
              })}
              onChange={() => {setLoginError('');}}
              placeholder="E-mail"
            />
            {
              errors.email &&
              <p className="error">
                {errors.email.message}
              </p>
            }
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="password"
              id="senha"
              {
              ...register("senha", {
                required: "Senha é obrigatoria"
              })
              }
              onChange={() => {setLoginError('');}}
              placeholder="Password"
            />
            {errors.senha && (
              <p className="error">{errors.senha.message}</p>
            )}

            {!errors.senha && loginError && (
              <p className="error">{loginError}</p>
            )}
          </div>

          <div
            className={styles.buttonGroup}>
            <button
              className={styles.button}
              type="submit">
              Enter
            </button>
            <Link
              to="/cadastro">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px"
            }}>
              <p>Login realizado com sucesso!</p>
              <p>Bem vindo {currentUser.nome}!</p>
            </div>
            <button
              className={styles.popUpButton}
              onClick={() => {
                setShowPopup(false);
              }}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
