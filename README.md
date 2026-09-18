## ⏳ GRANDE FRISE HISTORIQUE INTERACTIVE

## 🚀 Le challenge

Création d'une application web moderne, interactive et entièrement adaptative (**responsive**) permettant d'explorer les grands tournants de l'Histoire humaine, de l'invention de l'écriture en 3500 av. J.-C. jusqu'aux événements de 2026.

Ce projet a été développé en **HTML5**, **CSS3** et **JavaScript moderne (ES6+ )**.

Cette application dispose de plusieurs fonctionnalités :

- **Navigation fluide:** Défilement horizontal fluide et support du balayage tactile (_swipe_) intuitif sur les smartphones.
- **Riche en contenu :** Près de 30 dates clés documentées et illustrées par des repères visuels.
- **100% Mobile Friendly** : Design moderne et adaptatif (_Responsive Design_) conçu pour offrir une excellente expérience sur smartphones, tablettes et ordinateurs.
- **Accessibilité (A11Y) :** Utilisation de balises HTML sémantiques ( `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`) et d'attributs `aria-label` et `aria-live`

## 📸 Démonstration

Lien vers le projet : https://aperbet56.github.io/grande_frise_historique_interactive/

## 🛠️ Projet développé avec

- Utilisation des balises sémantiques HTML5
- CSS3
- Flexbox
- Animations css (transition, @keyframes)
- Page web responsive
- Desktop first
- Commentaires HTML
- Commentaires CSS
- Importation d'un normaliseur : le fichier normalize
- Importation des polices "Cinzel" et "Inter"
- **FontAwesome (CDN) :** Intégration de la bibliothèque d'icônes vectorielles pour illustrer chaque période historique.
- JavaScript
- Code JavaScript commenté
- Manipulation dynamique du DOM et fonctions fléchées

## 📂 Structure du projet

Le projet se compose de trois fichiers principaux regroupés dans le même répertoire :

```text
├── index.html       # Structure HTML5 et contenu sémantique
├── style.css        # Design complet, animations
├── script.js        # Base de données historique et logique JavaScript
└── README.md        # Documentation du projet (ce fichier)
```

## ⚙️ Comment ajouter vos propres dates ?

La frise est entièrement **dynamique**. Pour ajouter, modifier ou supprimer un événement de l'histoire, il vous suffit d'ouvrir le fichier `script.js` et d'éditer le tableau `historyData`.

Chaque événement doit respecter la structure suivante :

```javascript
{
    date: "Votre Date",
    title: "Le Titre de l'Événement",
    icon: "fa-nom-de-licone", // Utilisez le nom d'une icône gratuite sur fontawesome.com
    description: "Votre description textuelle détaillée ici."
}
```

L'application s'occupe seule de générer les boutons, de lier les animations et d'adapter le défilement !

---

## 📝 Licence

Projet libre de droits. Vous pouvez l'utiliser, le modifier et le distribuer selon vos besoins professionnels ou éducatifs.
