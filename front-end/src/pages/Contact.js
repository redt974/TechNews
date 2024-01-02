import "../styles/style-connexion.css";
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajoutez ici la logique pour soumettre le formulaire, par exemple, envoyer les données au backend.
    console.log({ firstName, surname, email, message });

    // Réinitialisez les champs après la soumission si nécessaire
    setFirstName('');
    setSurname('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="Contact body_font">
      <Header />
      <div className="container-wrapper">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="First name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Surname"
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
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
                type="text"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
