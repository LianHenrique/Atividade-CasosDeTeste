import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Cadastro = () => {

  const [user, setUser] = useState(() => {
    const savedUsers = localStorage.getItem("usuarios");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

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

  const onSubmit = (data) => {
    console.log(data)
    setUser((prevUsers) => [...prevUsers, data]);
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
          Sign up
        </h1>
        <form
          className={styles.baseInput}
          // Faz com que a tela não atualize
          onSubmit={handleSubmit(onSubmit, onError)}>

          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 1,
                  message: "O nome deve ter pelo menos 1 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "O nome deve ter ate 20 caracteres",
                },
              })} />
            {
              errors.nome &&
              <p className="error">
                {errors.nome.message}
              </p>
            }
          </div>

          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="E-mail"
              {
              ...register("email", {
                required: "Email obrigatorio",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Email invalido"
                },
                validate: (value) => value.includes("@") || "Email invalido"
              })} />
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
              placeholder="Password"
              {
              ...register("senha", {
                required: "Senha é obrigatoria"
              })
              } />
            {
              errors.senha &&
              <p className="error">
                {errors.senha.message}
              </p>
            }
          </div>

          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm password"
              {...register("confirmarSenha", {
                required: "Confirmação de senha obrigatória",
                validate: value =>
                  value === watch("senha") || "As senhas não coincidem"
              })} />
            {
              errors.confirmarSenha &&
              <p className="error">
                {errors.confirmarSenha.message}
              </p>
            }
          </div>

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
              type="submit">
              register
            </button>
          </div>
        </form>
      </div >
    </div>
  )
}

export default Cadastro