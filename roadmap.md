# Roadmap WriteReadHub

## État actuel (Phase 1 - Fondation Firebase) (en cours)

### Configuration Firebase complète

- [x] Initialisation Firebase dans `firebase-init.js` avec les clés d'API
- [x] Règles de sécurité Firestore et Storage déployées
- [x] Structure de base de données définie (Users, Stories, Comments, Likes)
- [x] Intégration de Firebase Hosting et Cloud Functions

### Architecture du projet

- [x] Séparation claire frontend/backend
- [x] Système d'authentification basique (login/register)
- [x] Structure modulaire pour les composants sociaux et stories

### Environnement de développement

- [x] Configuration TypeScript et Postman pour les tests
- [x] Variables d'environnement sécurisées (.env.example)
- [x] Création du fichier .env fonctionnel
- [x] Configuration du serveur de développement
- [x] Correction du point d'entrée index.html
- [x] Tests de connexion Firebase réussis

## Sécurité & Déploiement (Firebase)

- [x] Renforcement des règles de sécurité Firestore (exigence d'authentification)
- [x] Suppression du déploiement Remote Config (inutilisé)
- [x] Correction de la structure de `firebase.json`

## Plan détaillé des prochaines étapes

### Phase 2 - Authentification avancée

- [ ] Implémenter l'authentification email/mot de passe
- [ ] Ajouter les providers OAuth (Google, Facebook)
- [ ] Gestion des sessions avec JWT
- [ ] Mots de passe oubliés + vérification email
- [ ] Règles de sécurité Firestore pour les données utilisateurs

### Phase 3 - Profil utilisateur

- [ ] Page profil avec :
  - Bio personnalisable
  - Bibliothèque de lectures
  - Statistiques d'activité
- [ ] Système de suivi d'auteurs
- [ ] Upload d'avatar avec Firebase Storage

### Phase 4 - Publication d'histoires

- [ ] Éditeur de texte enrichi (Markdown/HTML)
- [ ] Gestion des brouillons/versions
- [ ] Système de catégories/tags
- [ ] Recherche plein texte avec Algolia

### Phase 5 - Interactions sociales

- [ ] Likes/Bookmarks avec Firestore Transactions
- [ ] Commentaires hiérarchiques
- [ ] Notifications en temps réel
- [ ] Flux d'activité personnalisé

## [En cours] - UI/UX Improvements

- [x] Création d'une palette de couleurs thématique "bibliothèque vintage"
- [x] Refonte des pages d'authentification avec nouvelle charte graphique
- [ ] Appliquer la nouvelle palette aux autres sections (social, stories)
