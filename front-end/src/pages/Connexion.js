import "../styles/style-connexion.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // N'oubliez pas d'importer Link depuis 'react-router-dom'
import Header from '../components/header';
import Footer from '../components/footer';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajoutez ici la logique pour soumettre le formulaire, par exemple, envoyer les données au backend.
    console.log({ email, password });

    // Réinitialisez les champs après la soumission si nécessaire
    setEmail('');
    setPassword('');
  };

  return (
    <div className="Connexion body_font">
      <Header />
      <div className="container-wrapper">
        <div className="wrapper wrapper-connexion">
          <form onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fa-regular fa-envelope fa-lg"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock fa-lg"></i>
            </div>
            <button type="submit" className="btn">
              Log in
            </button>
            <div className="register-link">
              <p>Don't have an account? <Link to="/inscription">Register now!</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
