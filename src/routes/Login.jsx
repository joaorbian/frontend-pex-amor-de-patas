import React, { useState } from 'react';
import './Login.css';//ainda não definido, só irei deixar as classes devidamente identificadas para facilitar quem for fazer o css

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (f) => {
    f.preventDefault();
    try {
      const resposta = await fetch('#', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (resposta.ok) {
        const data = await resposta.json();
        // a definir API
        console.log('Login bem-sucedido:', data);
      } else {
        setError('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro de conexão. Tente novamente mais tarde.');
    }
  };
  
  return (
    <div className="login-container">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(f) => setUsername(f.target.value)}
          required/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(f) => setPassword(f.target.value)}
          required/>
        <div>
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(f) => setRememberMe(f.target.checked)}/>
          <label htmlFor="remember-me">Lembrar-me</label>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p><a href="#">Esqueceu sua senha?</a></p>
      <p><a href="#">Criar conta</a></p>
    </div>
  );
}
export default Login;