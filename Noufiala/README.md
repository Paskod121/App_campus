# Plateforme Numérique pour Étudiants et Entrepreneurs à Lomé

Une plateforme numérique conçue pour soutenir les étudiants et entrepreneurs à Lomé dans la gestion de leurs emplois du temps, tâches et projets.

## Fonctionnalités

- Gestion des utilisateurs (inscription, connexion, profil)
- Gestion des emplois du temps
- Gestion des tâches et projets
- Interface utilisateur intuitive

## Technologie utilisée

- **Backend**: Node.js, Express.js
- **Base de données**: MongoDB avec Mongoose
- **Authentification**: JWT (JSON Web Tokens)
- **Frontend**: HTML, CSS, JavaScript (avec Bootstrap)

## Installation

1. Cloner le dépôt:
   ```
   git clone https://github.com/votre-utilisateur/plateforme-lome.git
   cd plateforme-lome
   ```

2. Installer les dépendances:
   ```
   npm install
   ```

3. Configurer les variables d'environnement:
   - Créer un fichier `.env` à la racine du projet
   - Ajouter les variables suivantes:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/plateforme-lome
     JWT_SECRET=votre_clé_secrète_jwt
     JWT_EXPIRE=30d
     ```

4. Démarrer le serveur:
   ```
   npm start
   ```

5. Accéder à l'application dans votre navigateur:
   ```
   http://localhost:5000
   ```

## Contribution

Les contributions sont les bienvenues! N'hésitez pas à soumettre des pull requests ou à signaler des problèmes.

## Licence

MIT