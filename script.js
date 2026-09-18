// Tableau régroupant les événements historiques
const historyData = [
  {
    date: "3500 av. J.-C.",
    title: "L'Invention de l'Écriture",
    description:
      "Les Sumériens inventent l'écriture cunéiforme en Mésopotamie (l'actuel Irak). C'est le passage officiel de la Préhistoire à l'Histoire, permettant de graver les lois, de tenir des comptes commerciaux et de transmettre des récits.",
  },
  {
    date: "476",
    title: "Chute de l'Empire Romain d'Occident",
    description:
      "Le dernier empereur romain, Romulus Augustule, est déposé par le chef germanique Odoacre. Cet événement marque l'effondrement d'un empire millénaire et le début officiel de la période du Moyen Âge en Europe.",
  },
  {
    date: "1453",
    title: "L'Invention de l'Imprimerie",
    description:
      "Johannes Gutenberg perfectionne la presse à imprimer avec des caractères métalliques mobiles à Mayence, en Allemagne. La Bible est le premier livre imprimé en série. C'est le début d'une immense révolution culturelle.",
  },
  {
    date: "1492",
    title: "Découverte de l'Amérique",
    description:
      "Le navigateur génois Christophe Colomb, financé par l'Espagne, accoste aux Bahamas en cherchant une nouvelle route vers l'Inde. Cet événement marque le début des grandes explorations et le passage à l'Époque Moderne.",
  },
  {
    date: "1687",
    title: "Loi de la Gravitation Universelle",
    description:
      "Le savant britannique Isaac Newton publie ses théories mathématiques et physiques sur la gravité. Il explique enfin pourquoi les pommes tombent des arbres et comment les planètes tournent autour du Soleil, fondant la physique moderne.",
  },
  {
    date: "1789",
    title: "Prise de la Bastille",
    description:
      "Le 14 juillet 1789, le peuple parisien prend d'assaut la prison de la Bastille, symbole du pouvoir royal. C'est le point de départ de la Révolution Française, qui va abolir les privilèges et proclamer la Déclaration des Droits de l'Homme.",
  },
  {
    date: "1804",
    title: "Le Premier Train à Vapeur",
    description:
      "L'ingénieur anglais Richard Trevithick fait rouler la toute première locomotive à vapeur sur des rails en fer. C'est l'étincelle qui déclenche la Révolution Industrielle, modifiant profondément les transports, l'économie et le travail.",
  },
  {
    date: "1914",
    title: "Début de la Première Guerre Mondiale",
    description:
      "L'assassinat de l'archiduc François-Ferdinand à Sarajevo déclenche l'engrenage des alliances militaires. L'Europe plonge dans une guerre totale et industrielle qui fera plus de 18 millions de morts jusqu'en 1918.",
  },
  {
    date: "1939",
    title: "Début de la Seconde Guerre Mondiale",
    description:
      "Le 1er septembre 1939, l'Allemagne envahit la Pologne, poussant la France et le Royaume-Uni à lui déclarer la guerre. Ce conflit mondial, le plus destructeur de l'histoire humaine, s'achèvera en 1945.",
  },
  {
    date: "1969",
    title: "Premier Pas sur la Lune",
    description:
      "Le 21 juillet 1969, l'astronaute américain Neil Armstrong devient le premier être humain à marcher sur la Lune lors de la mission Apollo 11, prononçant la phrase historique : « C'est un petit pas pour l'homme, un bond de géant pour l'humanité ».",
  },
  {
    date: "1989",
    title: "Chute du Mur de Berlin",
    description:
      "Le 9 novembre 1989, sous la pression populaire, les frontières entre l'Allemagne de l'Est et l'Allemagne de l'Ouest s'ouvrent après 28 ans de séparation. Cet événement symbolise la fin de la Guerre Froide et annonce la réunification de l'Europe.",
  },
  {
    date: "1991",
    title: "Naissance du World Wide Web",
    description:
      "Le chercheur britannique Tim Berners-Lee ouvre le réseau internet au grand public en créant le système des pages web (WWW). Cette invention révolutionne la communication, l'accès au savoir et transforme la société mondiale.",
  },
  {
    date: "2001",
    title: "Attentats du 11 Septembre",
    description:
      "Le réseau terroriste Al-Qaïda détourne des avions civils pour frapper New York et Washington. Cet événement tragique rebat l'ensemble des cartes de la géopolitique mondiale.",
  },
  {
    date: "2007",
    title: "Arrivée du Smartphone Moderne",
    description:
      "La sortie commerciale du tout premier iPhone redéfinit la téléphonie mobile. L'avènement des écrans tactiles connectés en permanence change profondément la vie de tous les jours.",
  },
  {
    date: "2015",
    title: "Signature de l'Accord de Paris",
    description:
      "Lors de la conférence COP21, 196 nations concluent un accord climatique à dimension mondiale, s'engageant à maintenir la hausse des températures sous la barre fatidique des 2°C.",
  },
  {
    date: "2020",
    title: "Pandémie de COVID-19",
    description:
      "La propagation fulgurante du coronavirus force la mise en place de confinements stricts à travers le globe. Elle engendre un recours massif au numérique et au télétravail.",
  },
  {
    date: "2022",
    title: "Avènement de l'IA Générative",
    description:
      "La diffusion d'outils interactifs d'intelligence artificielle grand public (comme ChatGPT) crée un immense choc technologique, modifiant la création et le travail textuel.",
  },
  {
    date: "2023",
    title: "L'Année la Plus Chaude",
    description:
      "Les climatologues enregistrent des anomalies thermiques records partout sur Terre. La transition énergétique devient une priorité urgente face aux dérèglements climatiques visibles.",
  },
  {
    date: "2024",
    title: "Jeux Olympiques de Paris",
    description:
      "La capitale française accueille la planète entière pour célébrer le sport lors des Jeux Olympiques d'été. Un événement marqué par des épreuves organisées au cœur des monuments historiques.",
  },
  {
    date: "2025",
    title: "Boom du Tourisme Spatial",
    description:
      "Les vols orbitaux et suborbitaux commerciaux se multiplient à un rythme soutenu. L'espace s'ouvre progressivement à des projets d'infrastructures privées et de séjours hors Terre.",
  },
  {
    date: "2026",
    title: "Jeux d'Hiver de Milan-Cortina",
    description:
      "L'Italie réunit les plus grands athlètes de sports d'hiver lors des Jeux de Milan et Cortina d'Ampezzo, marquant le retour de grandes compétitions de sports d'hiver axées sur l'éco-responsabilité.",
  },
];

// Récupération des événements HTML5
const eventsContainer = document.querySelector("#timeline-events");
const wrapper = document.querySelector("#timeline-wrapper");
const card = document.querySelector("#event-card");
const dateElement = document.querySelector("#event-date");
const titleElement = document.querySelector("#event-title");
const descriptionElement = document.querySelector("#event-description");
const copyrightYear = document.querySelector(".year");

/**
 * Déclaration de la fonction displayEvent qui va permettre de mettre à jour le texte de la carte d'affichage avec les données de l'événement sélectionné
 */
const displayEvent = (index) => {
  const data = historyData[index];

  dateElement.textContent = data.date;
  titleElement.textContent = data.title;
  descriptionElement.textContent = data.description;

  card.style.animation = "none";
  card.offsetHeight; // Forcer le rafraîchissement
  card.style.animation = "slideUp 0.4s ease-out forwards";
};

/**
 * Déclarartion de la fonction generateTimeline qui va permettre de générer automatiquement les boutons de dates de la frise au démarrage
 */
const generateTimeline = () => {
  // Por chaque élément du tableau historyData
  historyData.forEach((item, index) => {
    // Création de l'élément bouton pour la frise
    const button = document.createElement("button");
    button.classList.add("event-dot");

    // Configuration du texte et des attributs d'accessibilité
    button.textContent = item.date;
    button.setAttribute("data-index", index);
    button.setAttribute("aria-label", `Voir l'événement : ${item.title}`);

    // Activation par défaut du tout premier événement (index 0)
    if (index === 0) {
      button.classList.add("active");
    }

    // Écoute de l'événement "click" sur le bouton créé
    button.addEventListener("click", () => {
      // Désactiver le bouton qui était actif avant le clic
      const currentActive = document.querySelector(".event-dot.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }

      // Activer le bouton qui vient d'être cliqué
      button.classList.add("active");

      // Appel de la fonction displayEvent
      displayEvent(index);

      // Faire glisser la frise pour centrer proprement le bouton cliqué à l'écran
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });

    // Ajout du bouton dans le DOM
    eventsContainer.appendChild(button);
  });
};

// Appel de la fonction generateTimeline()
generateTimeline();

// Appel de la fonction displayEvent(0) pour afficher le tout premier événement
displayEvent(0);

/**
 * Déclartion de la fonction getCurrentYear qui va permettre d'afficher l'année en cours dans le footer
 */
const getCurrentYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  copyrightYear.textContent = `${year}`;
};

// Appel de la fonction getCurrentYear()
getCurrentYear();
