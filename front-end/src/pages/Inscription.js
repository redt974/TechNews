import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "../styles/style-connexion.css";
import Header from "../components/header";
import Footer from "../components/footer";

function Inscription() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      prenom: "",
      nom: "",
      email: "",
      motDePasse: "",
    },
    validationSchema: Yup.object({
      prenom: Yup.string().required("Ce champ est requis"),
      nom: Yup.string().required("Ce champ est requis"),
      email: Yup.string()
        .email("Format d'email invalide")
        .required("Ce champ est requis"),
      motDePasse: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .required("Ce champ est requis"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:3001/inscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          navigate("/");
          alert("Inscription réussie : Bienvenue !");
          formik.resetForm();
        } else {
          console.error("L'inscription a échoué:", data.error || data.message);
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
      }
    },
  });

  const formikProps = {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    values: formik.values,
    touched: formik.touched,
    errors: formik.errors,
  };

  return (
    <div className="Inscription body_font">
      <Header />
      <div className="container-wrapper">
        <div className="wrapper">
          <form onSubmit={formikProps.handleSubmit}>
            <h1>Inscription :</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Prenom"
                name="prenom"
                required
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.prenom}
              />
              {formikProps.touched.prenom && formikProps.errors.prenom && (
                <div className="error-message">{formikProps.errors.prenom}</div>
              )}
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                required
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.nom}
              />
              {formikProps.touched.nom && formikProps.errors.nom && (
                <div className="error-message">{formikProps.errors.nom}</div>
              )}
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.email}
              />
              {formikProps.touched.email && formikProps.errors.email && (
                <div className="error-message">{formikProps.errors.email}</div>
              )}
              <i className="fa-regular fa-envelope fa-lg"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Mot de Passe"
                name="motDePasse"
                required
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.motDePasse}
              />
              {formikProps.touched.motDePasse && formikProps.errors.motDePasse && (
                <div className="error-message">{formikProps.errors.motDePasse}</div>
              )}
              <i className="fa-solid fa-lock fa-lg"></i>
            </div>
            <button type="submit" className="btn"> Register </button>
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
