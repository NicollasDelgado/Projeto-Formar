import React, { useState } from 'react';
import logo from './assets/logo.png';

function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Alterna o modo escuro/claro no body
  React.useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className={`login-container${darkMode ? ' dark' : ''}`}>
      <button
        className="toggle-theme"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Alternar modo claro/escuro"
      >
        {darkMode ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
      <img src={logo} alt="Instituto Formar" className="logo" />
      <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" required autoComplete="username" />
        </div>
        <div className="form-group password-group">
          <label>Senha:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />
          <button
            type="button"
            className="btn-eye"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        {!isLogin && (
          <div className="form-group password-group">
            <label>Confirmar Senha:</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              className="btn-eye"
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
              aria-label={showConfirm ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showConfirm ? '🙈' : '👁️'}
            </button>
          </div>
        )}
        <button type="submit" className="btn-primary">
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
      </form>
      <div className="toggle-link">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="btn-link"
        >
          {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
        </button>
      </div>
    </div>
  );
}

export default Home;
