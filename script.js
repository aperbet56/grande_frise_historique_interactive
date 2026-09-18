// Tableau régroupant les événements historiques
// ==========================================================================
// 1. BASE DE DONNÉES HISTORIQUE INTÉGRALE AVEC ICÔNES FONTAWESOME
// ==========================================================================
const historyData = [
  {
    date: "3500 av. J.-C.",
    icon: "fa-feather-alt", // Plume pour l'écriture
    title: "L'Invention de l'Écriture",
    description:
      "Les Sumériens inventent l'écriture cunéiforme en Mésopotamie. C'est le passage de la Préhistoire à l'Histoire, permettant de graver les lois et de transmettre des récits durables.",
  },
  {
    date: "2560 av. J.-C.",
    title: "La Grande Pyramide de Khéops",
    icon: "fa-monument", // Monument / Pyramide
    description:
      "Chef-d'œuvre architectural de l'Égypte antique, elle reste pendant plus de 3 800 ans le monument le plus haut jamais construit par l'homme, servant de sépulture royale au pharaon Khéops.",
  },
  {
    date: "508 av. J.-C.",
    title: "Naissance de la Démocratie",
    icon: "fa-users", // Peuple / Citoyens
    description:
      "Le réformateur Clisthène pose les fondations du premier système démocratique à Athènes. Les citoyens participent dès lors directement aux choix politiques majeurs de leur cité.",
  },
  {
    date: "44 av. J.-C.",
    title: "Assassinat de Jules César",
    icon: "fa-gavel", // Pouvoir / Sénat (ou épée/poignard fictif)
    description:
      "Le général et dictateur romain est poignardé en plein Sénat par un groupe de conspirateurs. Cet événement précipite la fin de la République romaine et annonce l'avènement de l'Empire.",
  },
  {
    date: "476",
    title: "Chute de l'Empire Romain",
    icon: "fa-chess-rook", // Tour brisée / Fin d'une ère
    description:
      "Le Concert du dernier empereur romain d'Occident s'éteint lorsqu'il est destitué par des chefs germaniques. Cela marque la fin d'un empire géant et le début officiel du Moyen Âge.",
  },
  {
    date: "800",
    title: "Sacre de Charlemagne",
    icon: "fa-crown", // Couronne royale
    description:
      "Le roi des Francs Charlemagne est couronné Empereur d'Occident à Rome. Il unifie une grande partie de l'Europe occidentale et stimule l'apprentissage, les écoles et l'art.",
  },
  {
    date: "1215",
    title: "Signature de la Magna Carta",
    icon: "fa-scroll", // Parchemin de lois
    description:
      "Le roi d'Angleterre Jean sans Terre concède la « Grande Charte ». Ce texte limite pour la première fois les pleins pouvoirs d'un roi et sème les graines des droits de l'homme.",
  },
  {
    date: "1453",
    title: "L'Invention de l'Imprimerie",
    icon: "fa-print", // Imprimerie / Presse
    description:
      "Johannes Gutenberg perfectionne la presse à imprimer avec des caractères métalliques mobiles en Allemagne. Les livres se diffusent en série, provoquant une immense avancée pour la science et l'alphabétisation.",
  },
  {
    date: "1492",
    title: "Découverte de l'Amérique",
    icon: "fa-ship", // Navire d'exploration
    description:
      "Christophe Colomb accoste aux Antilles en cherchant la route des Indes orientales. Cet événement initie l'ère des grandes explorations maritimes et la transition vers l'Époque Moderne.",
  },
  {
    date: "1610",
    title: "Le Télescope de Galilée",
    icon: "fa-binoculars", // Longue-vue / Télescope
    description:
      "Galilée fabrique sa première lunette astronomique de précision. En observant l'espace, il confirme que la Terre tourne autour du Soleil, bousculant les croyances de l'époque.",
  },
  {
    date: "1687",
    title: "Loi de la Gravitation",
    icon: "fa-apple-alt", // La pomme de Newton
    description:
      "Isaac Newton formule ses théories physiques mathématiques sur l'attraction universelle. Il jette ainsi les bases scientifiques pour comprendre le mouvement de tous les corps célestes.",
  },
  {
    date: "1789",
    title: "Prise de la Bastille",
    icon: "fa-landmark", // Bastille / Monument politique
    description:
      "Le 14 juillet, le peuple de Paris s'empare de la forteresse de la Bastille. C'est l'étincelle de la Révolution Française qui abolit la monarchie absolue et les privilèges seigneuriaux.",
  },
  {
    date: "1804",
    title: "Le Premier Train à Vapeur",
    icon: "fa-train", // Locomotive
    description:
      "Richard Trevithick conçoit la première locomotive à vapeur fonctionnelle sur rails métalliques. Cet événement majeur ouvre le chemin à la grande Révolution Industrielle.",
  },
  {
    date: "1885",
    title: "Vaccin contre la Rage",
    icon: "fa-syringe", // Seringue médicale
    description:
      "Louis Pasteur inocule son vaccin expérimental à un enfant mordu par un animal malade. Le succès est total, ouvrant la voie à la médecine moderne préventive.",
  },
  {
    date: "1914",
    title: "Première Guerre Mondiale",
    icon: "fa-shield-alt", // Tranchées / Bouclier militaire
    description:
      "L'attentat de Sarajevo déclenche par alliances le conflit le plus meurtrier d'alors. L'Europe plonge dans une guerre industrielle dévastatrice qui durera quatre ans.",
  },
  {
    date: "1939",
    title: "Seconde Guerre Mondiale",
    icon: "fa-fighter-jet", // Avion de combat
    description:
      "L'Allemagne attaque la Pologne, provoquant l'entrée en guerre de la France et du Royaume-Uni. Le conflit mondial ne se fermera qu'en septembre 1945 après d'immenses pertes.",
  },
  {
    date: "1944",
    title: "Vote des Femmes en France",
    icon: "fa-female", // Égalité / Symbole féminin
    description:
      "Une ordonnance rétablit l'égalité civique complète en accordant le droit de vote et d'éligibilité aux citoyennes. Elles voteront pour la première fois en avril 1945.",
  },
  {
    date: "1969",
    title: "Premier Pas sur la Lune",
    icon: "fa-rocket", // Fusée spatiale
    description:
      "Neil Armstrong foule le sol lunaire au cours de la mission spatiale américaine Apollo 11, prononçant sa célèbre maxime sur le « bond de géant pour l'humanité ».",
  },
  {
    date: "1989",
    title: "Chute du Mur de Berlin",
    icon: "fa-hammer", // Outil pour détruire le mur
    description:
      "La frontière séparant Berlin-Est et Berlin-Ouest s'ouvre sous les cris de joie de la foule. C'est la fin du rideau de fer et le prélude à l'unification politique européenne.",
  },
  {
    date: "1991",
    title: "Naissance du World Wide Web",
    icon: "fa-globe", // Réseau internet mondial
    description:
      "Tim Berners-Lee conçoit le protocole fondamental du Web grand public (WWW). Internet relie désormais les réseaux privés et transforme l'accès mondial au savoir.",
  },
  {
    date: "2001",
    title: "Attentats du 11 Septembre",
    icon: "fa-plane", // Avion géopolitique
    description:
      "Le réseau terroriste Al-Qaïda détourne des avions civils pour frapper New York et Washington. Cet événement tragique rebat l'ensemble des cartes de la géopolitique mondiale.",
  },
  {
    date: "2007",
    title: "Arrivée du Smartphone Moderne",
    icon: "fa-mobile-alt", // Smartphone tactile
    description:
      "La sortie commerciale du tout premier iPhone redéfinit la téléphonie mobile. L'avènement des écrans tactiles connectés en permanence change profondément la vie de tous les jours.",
  },
  {
    date: "2015",
    title: "Signature de l'Accord de Paris",
    icon: "fa-leaf", // Écologie / Feuille verte
    description:
      "Lors de la conférence COP21, 196 nations concluent un accord climatique à dimension mondiale, s'engageant à maintenir la hausse des températures sous la barre fatidique des 2°C.",
  },
  {
    date: "2020",
    title: "Pandémie de COVID-19",
    icon: "fa-virus", // Virus médical
    description:
      "La propagation fulgurante du coronavirus force la mise en place de confinements stricts à travers le globe. Elle engendre un recours massif au numérique et au télétravail.",
  },
  {
    date: "2022",
    title: "Avènement de l'IA Générative",
    icon: "fa-brain", // Intelligence artificielle
    description:
      "La diffusion d'outils interactifs d'intelligence artificielle grand public (comme ChatGPT) crée un immense choc technologique, modifiant la création et le travail textuel.",
  },
  {
    date: "2023",
    title: "L'Année la Plus Chaude",
    icon: "fa-temperature-high", // Thermomètre climat
    description:
      "Les climatologues enregistrent des anomalies thermiques records partout sur Terre. La transition énergétique devient une priorité urgente face aux dérèglements climatiques visibles.",
  },
  {
    date: "2024",
    title: "Jeux Olympiques de Paris",
    icon: "fa-trophy", // Trophée / Médaille olympique
    description:
      "La capitale française accueille la planète entière pour célébrer le sport lors des Jeux Olympiques d'été. Un événement marqué par des épreuves organisées au cœur des monuments historiques.",
  },
  {
    date: "2025",
    title: "Boom du Tourisme Spatial",
    icon: "fa-satellite", // Satellite en orbite
    description:
      "Les vols orbitaux et suborbitaux commerciaux se multiplient à un rythme soutenu. L'espace s'ouvre progressivement à des projets d'infrastructures privées et de séjours hors Terre.",
  },
  {
    date: "2026",
    title: "Jeux d'Hiver de Milan-Cortina",
    icon: "fa-snowflake", // Flocon de neige pour les jeux d'hiver
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

    // Configuration de l'icone, du texte et des attributs d'accessibilité
    button.innerHTML = `<i class="fas ${item.icon}" style="display:block; margin-bottom:5px; font-size:1.1rem;"></i> <span>${item.date}</span>`;

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
