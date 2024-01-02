import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function Inscription() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [_errorMessage, setErrorMessage] = useState('');

  // Utilisez useNavigate pour gérer la redirection après l'inscription réussie
  const navigate = useNavigate();

  const inscription = async () => {
    console.log({ prenom, nom, email, motDePasse });
    try {
      const response = await fetch('http://localhost:3001/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prenom, nom, email, motDePasse }),
      });
  
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        navigate('/');
      } else {
        console.error('L\'inscription a échoué:', data.error || data.message);
        setErrorMessage('L\'inscription a échoué. Veuillez vérifier vos informations.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setErrorMessage('Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="Inscription body_font">
      <Header />
      <div className="container-wrapper">
        <div className="wrapper">
          <form onSubmit={(e) => { e.preventDefault(); inscription(); }}>
            <h1>Inscription :</h1>
            <div className="input-box">
              <input type="text" placeholder="Prenom" name="prenom" required onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Nom" name="nom" required onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email address" name="email" required onChange={(e) => setEmail(e.target.value)} />
              <i className="fa-regular fa-envelope fa-lg"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" name="motDePasse" required onChange={(e) => setMotDePasse(e.target.value)} />
              <i className="fa-solid fa-lock fa-lg"></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="register-link">
              <p>Do you have an account? <Link to="/connexion">Log in !</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inscription;
