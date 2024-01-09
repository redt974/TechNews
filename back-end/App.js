// App.js
const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const port = 3001;

const app = express();

app.use(session({
  secret: 'K3@VDTmUQEHs.Y;', 
  resave: false,
  saveUninitialized: true,
}));

const db = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'technews',
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion : " + err.stack);
    process.exit(1);
  }
  console.log("Connexion réussie à la base de données !");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur TechNews !');
});

// Gestionnaire de route pour Inscription.js
app.get('/inscription', (req, res) => {
  res.send("Bienvenue sur la page d'inscription !");
});

app.post('/inscription', 
  [
    // Valider les champs requis
    body('prenom').notEmpty().trim().escape(),
    body('nom').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('motDePasse').isLength({ min: 6 }).trim().escape(),
  ],
  async (req, res) => {
    console.log('Requête d\'inscription reçue. Données reçues:', req.body);
    const { prenom, nom, email, motDePasse } = req.body;

    try {
      // Valider les erreurs de validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: 'Validation des données échouée' });
      }

      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(motDePasse, 10); 

      // Insérer l'utilisateur dans la base de données
      const query = 'INSERT INTO inscription (prenom, nom, email, motDePasse) VALUES (?, ?, ?, ?)';
      const values = [prenom, nom, email, hashedPassword];

      db.query(query, values, (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'inscription:', error);
          res.status(500).json({ error: 'Erreur lors de l\'inscription', message: 'Erreur interne du serveur' });
        } else {
          console.log('Utilisateur inscrit avec succès:', results.insertId);
          res.status(200).json({ message: 'Inscription réussie!' });
        }
      });
    } catch (error) {
      console.error('Erreur lors du hachage du mot de passe:', error);
      res.status(500).json({ error: 'Erreur lors de l\'inscription', message: 'Erreur interne du serveur' });
    }
  }
);

// Gestionnaire de route pour Connexion.js
app.get('/connexion', (req, res) => {
  res.send("Bienvenue sur la page de connexion !");
});

app.post('/connexion', async (req, res) => {
  const { email, motDePasse } = req.body;
  const query = 'SELECT * FROM inscription WHERE email = ?';
  const values = [email];

  db.query(query, values, async (error, results) => {
    if (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({ error: 'Erreur lors de la connexion', message: 'Erreur interne du serveur' });
    } else {
      if (results.length > 0) {
        const passwordMatch = await bcrypt.compare(motDePasse, results[0].motDePasse);

        if (passwordMatch) {
          // Ajout de l'utilisateur à la session
          req.session.userId = results[0].id;
          console.log('Utilisateur connecté avec succès:', results[0].id);
          res.status(200).json({ message: 'Connexion réussie!' });
        } else {
          console.log('Mot de passe incorrect.');
          res.status(401).json({ error: 'Mot de passe incorrect', message: 'Échec de la connexion' });
        }
      } else {
        console.log('Utilisateur non trouvé.');
        res.status(401).json({ error: 'Utilisateur non trouvé', message: 'Échec de la connexion' });
      }
    }
  });
});

// Gestionnaire de route pour contact.js
app.get('/contact', (req, res) => {
  res.send("Bienvenue sur la page de contact !");
});

app.post('/contact', (req, res) => {
  const { firstName, surname, email, message } = req.body;
  const query = 'INSERT INTO messages (inscription_id, message) VALUES (?, ?)';
  const values = [firstName, surname, email, message];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi du message', message: 'Erreur interne du serveur' });
    } else {
      console.log('Message envoyé avec succès:', results.insertId);
      res.status(200).json({ message: 'Message envoyé avec succès!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur le port ${port}`);
});

process.on('SIGINT', () => {
  console.log('Fermeture propre de la connexion MySQL');
  db.end(() => {
    process.exit();
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur');
});