# Plateforme de Lecture et d'Écriture

## 📖 Introduction

Cette plateforme permet aux utilisateurs de lire et d'écrire des histoires. Les utilisateurs peuvent créer un compte, publier leurs propres histoires, suivre d'autres auteurs et enregistrer leurs lectures.

## 🚀 Fonctionnalités principales

- Inscription et connexion des utilisateurs
- Publication et gestion des histoires
- Possibilité de suivre d'autres auteurs
- Enregistrement des histoires pour lecture ultérieure
- Likes et commentaires sur les histoires

## 🛠 Technologies utilisées

### **Front-end**

- Javascript
- (React.js)
- Tailwind CSS
- React Router pour la navigation
- Axios pour les requêtes HTTP

### **Back-end**

- Node.js
- Express.js
- Firebase pour la base de données
- Firebase Storage pour le stockage des images
- Firebase Authentication pour l'authentification

## 📊 Base de données

### **Structure de la base de données**

- Users
- Stories
- Comments
- Likes

### **Déploiement**

- Front-end : Firebase Hosting
- Back-end : Firebase Cloud Functions
- Base de données : Firebase Firestore

## Structure du projet

```
.
├── backend/
│   ├── firestore.rules          # Règles de sécurité Firestore
│   ├── storage.rules            # Règles de sécurité Storage
│   └── functions/               # Cloud Functions
│       └── firebase.json        # Configuration des fonctions
├── frontend/
│   ├── auth/                    # Authentification
│   │   ├── auth.css
│   │   ├── auth.js
│   │   ├── login.html
│   │   └── register.html
│   ├── social/                  # Réseau social
│   │   ├── profile.html
│   │   ├── social.css
│   │   └── social.js
│   ├── stories/                 # Gestion des histoires
│   │   ├── editor.html
│   │   ├── list.html
│   │   ├── stories.css
│   │   └── stories.js
│   └── shared/                  # Code commun
│       ├── firebase-init.js     # Configuration Firebase
│       └── api.js               # API client
├── postman/                     # Tests API
│   ├── collection.json
│   └── environment.json
├── .env.example                 # Variables d'environnement
└── firebase.json                # Configuration globale Firebase
```

## 📦 Installation

### **Pré-requis**

- Node.js installé sur votre machine
- Un compte Firebase pour la base de données
- Un compte Firebase pour l'authentification
- Firebase CLI installé globalement : `npm install -g firebase-tools`

### **Variables d'environnement**

Le fichier `.env.example` à la racine du projet montre les variables d'environnement nécessaires. Vous devez créer un fichier `.env` et le remplir avec vos propres valeurs.

### **Installation du back-end**

```bash
cd server
npm install
```

Créer un fichier `.env` à la racine du dossier `server` avec les informations suivantes :

```
PORT=5000
FIREBASE_API_KEY=
```

Démarrer le serveur :

```bash
npm run dev
```

### **Installation du front-end**

```bash
cd ../frontend
npm install
npm run dev
```

## 🛠 API Endpoints (Back-end)

### **Authentification**

- `POST /api/auth/register` → Inscription d'un utilisateur
- `POST /api/auth/login` → Connexion et retour d'un token JWT

### **Histoires**

- `POST /api/stories` → Publier une histoire (authentification requise)
- `GET /api/stories` → Récupérer toutes les histoires
- `GET /api/stories/:id` → Récupérer une histoire par ID

### **Utilisateurs**

- `GET /api/users/:id` → Récupérer les informations d'un utilisateur
- `POST /api/users/follow/:id` → Suivre un auteur

## ✅ Contribuer

1. Forker le projet
2. Créer une branche `feature/nom-fonctionnalité`
3. Faire vos modifications
4. Pousser votre code et ouvrir une Pull Request

## 📜 Licence

Ce projet est sous licence [MIT License](LICENSE).
