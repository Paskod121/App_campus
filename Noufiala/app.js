const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importer les routes après l'initialisation de l'app
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const timetableRoutes = require('./routes/timetable');
const taskRoutes = require('./routes/task');

// Définir les routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/tasks', taskRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connexion à MongoDB réussie !');
    })
    .catch(err => {
        console.error('Erreur de connexion à MongoDB :', err);
    });

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});