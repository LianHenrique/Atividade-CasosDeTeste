import React, { useState } from 'react';

const Login = () => {
  // Estado para armazenar os valores dos campos
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  // Função para validar os campos de login
  const validarLogin = () => {
    let validado = true;

    // Limpar erros anteriores
    setErroEmail('');
    setErroSenha('');

    // Validação de e-mail
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErroEmail('E-mail inválido');
      validado = false;
    }

    // Validação de senha
    if (!senha || senha.length < 6) {
      setErroSenha('A senha deve ter pelo menos 6 caracteres');
      validado = false;
    }

    return validado;
  };

  // Função chamada no envio do formulário
  const handleLogin = (e) => {
    e.preventDefault();

    if (validarLogin()) {
      // Aqui você pode adicionar a lógica para enviar os dados de login
      console.log('E-mail:', email);
      console.log('Senha:', senha);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
          {erroEmail && <span className="error">{erroEmail}</span>}
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
          {erroSenha && <span className="error">{erroSenha}</span>}
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
