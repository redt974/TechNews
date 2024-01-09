import React from 'react';
import { useNavigate } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/style-connexion.css";
import Header from '../components/header';
import Footer from '../components/footer';

function Contact() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      surname: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Ce champ est requis'),
      surname: Yup.string().required('Ce champ est requis'),
      email: Yup.string().email('Format d\'email invalide').required('Ce champ est requis'),
      message: Yup.string().required('Ce champ est requis'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3001/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          navigate("/");
          alert("Message Envoyé!");
          formik.resetForm();
        } else {
          // Gérer l'échec de l'envoi du message (par exemple, afficher un message d'erreur)
          console.error('L\'envoi du message a échoué:', data.error || data.message);
        }
      } catch (error) {
        // Gérer les erreurs lors de l'envoi de la requête
        console.error('Erreur lors de l\'envoi du message :', error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  const renderErrorMessage = (field) => {
    return touched[field] && errors[field] && (
      <div className="error-message">{errors[field]}</div>
    );
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
                name="firstName"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {renderErrorMessage('firstName')}
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Surname"
                name="surname"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
              />
              {renderErrorMessage('surname')}
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {renderErrorMessage('email')}
              <i className="fa-regular fa-envelope fa-lg"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Your Message"
                name="message"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {renderErrorMessage('message')}
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