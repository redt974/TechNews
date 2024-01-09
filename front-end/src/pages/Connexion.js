import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/style-connexion.css";
import Header from '../components/header';
import Footer from '../components/footer';

function Connexion() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Format d\'email invalide').required('Ce champ est requis'),
      password: Yup.string().required('Ce champ est requis'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3001/connexion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          navigate("/");
          alert("Connexion réussie : De retour parmi nous !");
          formik.resetForm();
        } else {
          // Gérer l'échec de la connexion (par exemple, afficher un message d'erreur)
          console.error('La connexion a échoué:', data.error || data.message);
        }
      } catch (error) {
        // Gérer les erreurs lors de l'envoi de la requête
        console.error('Erreur lors de la connexion :', error);
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = formik;

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
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
              <i className="fa-regular fa-envelope fa-lg"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
              <i className="fa-solid fa-lock fa-lg"></i>
            </div>
            <button type="submit" className="btn">
              Log in
            </button>
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/inscription">Register now!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
