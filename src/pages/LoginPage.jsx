import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (!email.includes('@')) {
      setError('Veuillez entrer un email valide');
      return;
    }

    if (password.length < 3) {
      setError('Le mot de passe doit contenir au moins 3 caractères');
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Erreur lors de la connexion');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h1>Bienvenue</h1>
          <p className="login-subtitle">Connexion à votre boutique</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-input"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-button">
              Se connecter
            </button>
          </form>

          <p className="login-demo">
            <strong>Demo :</strong> Utilisez n'importe quel email et mot de passe
          </p>
        </div>
      </div>
    </div>
  );
}
