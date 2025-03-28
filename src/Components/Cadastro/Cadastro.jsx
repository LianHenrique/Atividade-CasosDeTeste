import styles from "./Cadastro.module.css";

const Cadastro = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Cadastro</h1>
      <div className={styles.baseInput}>
        <input className={styles.input} type="text" placeholder="Nome"/>
        <input className={styles.input} type="text" placeholder="E-mail"/>
        <input className={styles.input} type="password" placeholder="Senha"/>
        <input className={styles.input} type="password" placeholder="Confirmação de Senha"/>
      </div>
    </div>
  )
}

export default Cadastro