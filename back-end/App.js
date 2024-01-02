const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config.json');
const utilisateurModel = require('./models/utilisateur');
const cors = require('cors');

// Configuration de l'application Express :
const app = express();
const port = 3001;

// Configuration de Sequelize :
const sequelize = new Sequelize(config.development);
const Utilisateur = utilisateurModel(sequelize);

// Utilisation de CORS après l'initialisation d'app
app.use(cors());

app.use(express.json());

// Endpoint pour la route racine ("/")
app.get('/', (res) => {
  res.send('Bienvenue sur votre application !');
});

// Endpoint pour créer un utilisateur (inscription)
app.post('/inscription', async (req, res) => {
  try {
    console.log('Requête d\'inscription reçue avec les données :', req.body);
    const { prenom, nom, email, motDePasse } = req.body;
    const utilisateur = await Utilisateur.create({ prenom, nom, email, motDePasse });
    console.log('Utilisateur créé avec succès :', utilisateur);
    res.json(utilisateur);
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    console.error('Détails de l\'erreur Sequelize :', error.errors);
    res.status(500).json({ error: 'Erreur serveur', details: error.message });
  }
});

// Endpoint pour se connecter
app.post('/connexion', async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    // Trouver l'utilisateur par email
    const utilisateur = await Utilisateur.findOne({ where: { email } });

    // Vérifier si l'utilisateur existe
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe
    const motDePasseValide = await bcrypt.compare(motDePasse, utilisateur.motDePasse);

    if (!motDePasseValide) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Authentification réussie
    res.json({ message: 'Connexion réussie' });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Endpoint pour le formulaire de contact
app.post('/contact', async (req, res) => {
  try {
    const { nom, email, sujet, message } = req.body;

    // Exemple de sauvegarde dans la base de données (supposons que vous ayez un modèle Contact défini dans Sequelize) :
    const Contact = sequelize.define('Contact', {
      nom: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      sujet: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
    });

    await Contact.create({ nom, email, sujet, message });

    res.json({ message: 'Formulaire de contact soumis avec succès' });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire de contact :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Synchronisation avec la base de données :
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(port, () => {
      console.log(`Serveur en écoute sur le port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erreur de synchronisation de la base de données :', err);
  });