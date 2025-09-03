import { Component } from '@angular/core';

type SemId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6';
type CompId = 1 | 2 | 3 | 4 | 5 | 6;
type EvidenceType = 'GitHub' | 'Démonstration' | 'PDF' | 'Rapport' | 'Autre';

interface Evidence {
  title: string;
  type: EvidenceType;
  link?: string; // optionnel, '#' ou vide = pas de lien
}

interface SemesterDef {
  id: SemId;
  label: string;
  comps: CompId[];         // compétences visibles pour ce semestre
  ueCodes: string[];       // ex: ['61','62','66']
  resources: [string, string][]; // code + libellé (optionnel)
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent {
  // --- Libellés des compétences ---
  private compTitles: Record<CompId, string> = {
    1: 'Réaliser un développement d’application',
    2: 'Optimiser des applications informatiques',
    3: 'Administrer des systèmes informatiques communicants',
    4: 'Gérer des données de l’information',
    5: 'Conduire un projet',
    6: 'Travailler dans une équipe informatique',
  };

  // --- Semestres (S1 & S2 ajoutés) ---
// Remplace ENTIEREMENT ton tableau `semesters` par celui-ci
semesters: SemesterDef[] = [
  // {
  //   id: 'S3',
  //   label: 'Semestre 3',
  //   comps: [1, 2, 3, 4, 5, 6],
  //   ueCodes: ['31', '32', '33', '34', '35', '36'],
  //   resources: [
  //     ['R3.01', 'Développement web'],
  //     ['R3.02', 'Développement efficace'],
  //     ['R3.03', 'Analyse'],
  //     ['R3.04', 'Qualité de développement'],
  //     ['R3.05', 'Programmation système'],
  //     ['R3.06', 'Architecture des réseaux'],
  //     ['R3.07', 'SQL dans un langage de programmation'],
  //     ['R3.08', 'Probabilités'],
  //     ['R3.09', 'Cryptographie et sécurité'],
  //     ['R3.10', 'Management des systèmes d’information'],
  //     ['R3.11', 'Droit des contrats et du numérique'],
  //     ['R3.12', 'Anglais professionnel'],
  //     ['R3.13', 'Communication professionnelle'],
  //     ['R3.14', 'Projet personnel et professionnel'],
  //   ],
  // },
  // {
  //   id: 'S4',
  //   label: 'Semestre 4',
  //   comps: [1, 2, 3, 4, 5, 6],
  //   ueCodes: ['41', '42', '43', '44', '45', '46'],
  //   resources: [
  //     ['R4.01',  'Architecture logicielle'],
  //     ['R4.02',  'Qualité de développement'],
  //     ['R4.03',  'Qualité & Non-relationnel'],
  //     ['R4.04',  "Méthodes d'optimisation"],
  //     ['R4.05',  'Anglais'],
  //     ['R4.06',  'Communication interne'],
  //     ['R4.07',  'Projet Personnel et Professionnel'],
  //     ['R4.A.08','Virtualisation'],
  //     ['R4.A.09','Management avancé des systèmes d’information'],
  //     ['R4.A.10','Complètement web'],
  //     ['R4.A.11','Développement pour applications mobiles'],
  //     ['R4.A.12','Automates et langages'],
  //   ],
  // },
  {
    id: 'S5',
    label: 'Semestre 5',
    comps: [1, 2, 6],
    ueCodes: ['51', '52', '56'],
    resources: [
      ['R5.01',   "Initiation au management d’une équipe de projet informatique"],
      ['R5.A.02', 'Projet personnel et professionnel'],
      ['R5.03',   'Politique de communication'],
      ['R5.A.04', 'Qualité algorithmique'],
      ['R5.A.05', 'Programmation avancée'],
      ['R5.A.06', 'Sensibilisation à la programmation multimédia'],
      ['R5.A.07', 'Automatisation de la chaîne de production'],
      ['R5.A.08', 'Qualité de développement'],
      ['R5.A.09', 'Virtualisation avancée'],
      ['R5.A.10', 'Nouveaux paradigmes de base de données'],
      ['R5.A.11', "Méthodes d’optimisation pour l’aide à la décision"],
      ['R5.A.12', 'Modélisations mathématiques'],
      ['R5.A.13', 'Économie durable et numérique'],
      ['R5.A.14', 'Anglais'],
    ],
  },
  {
    id: 'S6',
    label: 'Semestre 6',
    comps: [1, 2, 6],
    ueCodes: ['61', '62', '66'],
    resources: [
      ['R6.01',  'Initiation à l’entrepreneuriat'],
      ['R6.02',  'Droit du numérique et de la propriété intellectuelle'],
      ['R6.03',  'Communication : organisation et diffusion de l’information'],
      ['R6.04',  'Projet personnel et professionnel'],
      ['R6.A.05','Développement avancé'],
      ['R6.A.06','Maintenance applicative'],
    ],
  },
];

  current: SemesterDef = this.semesters[0];

  private summaries: Record<CompId, Partial<Record<SemId, string>>> = {
    1: {
      S5: "J’ai développé une application de loto en Angular/Python (Angular est un framework que j’ai appris en entreprise). Les règles étaient très complexes, ce qui a rendu la logique d’implémentation plus difficile. Pour la SAÉ, nous avons créé une application capable de prédire l’âge à partir d’un visage. Nous avons conçu quatre modèles nous-mêmes, ce qui a été exigeant, notamment pour bien les optimiser. Ce projet a constitué une véritable introduction à l’IA.",
      S6: "Nous avons développé un backend Flask pour un chatbot auto, avec MongoDB pour stocker comptes, sessions et messages, et JWT pour l’authentification. Le cœur est un RAG : on encode la question et nos documents (SentenceTransformer), on récupère les 3 passages les plus proches (similarité cosinus), puis on envoie ce contexte + l’historique au LLM Mistral via l’API Hugging Face pour générer la réponse. L’API expose des routes simples (login, sessions, ask, historique) et gère les erreurs/CORS proprement. Résultat : des réponses pertinentes, stables et maîtrisées en coût.",
    },
    2: {
      S5: "Pour optimiser SmartFace, on a d’abord simplifié le modèle pour éviter qu’il “apprenne par cœur” et qu’il reste efficace (moins de paramètres inutiles). On a aussi arrêté l’entraînement au bon moment (quand les progrès se bloquaient) et ralenti automatiquement l’apprentissage quand c’était nécessaire. Ensuite, on est passés à un modèle pré-entraîné léger (déjà bon pour reconnaître des formes sur des images) : cela a accéléré l’entraînement et amélioré la précision. Enfin, le fait de prédire à la fois le genre et l’âge a mieux guidé l’apprentissage, ce qui a encore réduit l’erreur sur l’âge. Résultat : un modèle plus fiable, plus rapide à entraîner et plus juste.",
      S6: "Sur le chatbot, j’ai intégré un RAG fonctionnel : embeddings pré-calculés avec all-MiniLM-L6-v2, cosine similarity et sélection top_k=3 pour limiter le contexte injecté au LLM. J’ai aussi reconstruit un historique condensé par session (suffisant pour le contexte) et persisté les messages/sessions en MongoDB. Côté déploiement, les appels LLM passent par l’Inference API (stabilité/latence correctes). Concrètement, cela a réduit le coût token et les temps de réponse sont devenus prévisibles sur des questions courtes à moyennes",
    },
    3: {},
    4: {},
    5: {},
    6: {
      S5: "Nous avons travaillé à quatre sur la SAE et fait plusieurs exercices et présentation en groupe durant ce semestre dans plusieurs autres ressources.",
      S6: `Travail d’équipe à 4 sur la SAE. D'autre exercice de communication en ppp et communication.`,
    },
  };

  private evidences: Record<CompId, Partial<Record<SemId, Evidence[]>>> = {
    1: {
      S3: [{ title: 'SAÉ S3 — CinéFilms (repo)', type: 'GitHub', link: '#' }],
      S4: [{ title: 'SAÉ S4 — Donjon de la Ruse (repo)', type: 'GitHub', link: 'https://github.com/youneschrimni/Donjon-De-La-Ruse' }],
      S5: [
        { title: 'SAÉ S5 — SmartFace (repo)', type: 'GitHub', link: 'https://github.com/youneschrimni/SmartFace' },
        { title: 'Projet perso — Simulateur de Loto (repo)', type: 'GitHub', link: 'https://github.com/youneschrimni/loto-simulator' },
      ],
      S6: [{ title: 'SAÉ S6 — ChatBot Automobile (repo)', type: 'GitHub', link: 'https://github.com/youneschrimni/ChatBotAutomobile' }],
    },
    2: {
      S3: [{ title: 'Refactor & tests CinéFilms', type: 'Rapport' }],
      S4: [{ title: 'Optimisations perfs — Donjon de la Ruse', type: 'Rapport' }],
      S5: [{ title: 'Qualité code — SmartFace', type: 'GitHub', link:"https://github.com/youneschrimni/SmartFace" }],
      S6: [{ title: 'Perf & pertinence — ChatBot', type: 'GitHub', link: "https://github.com/youneschrimni/ChatBotAutomobile"}],
    },
    3: {
      S4: [{ title: 'Packaging / tooling Android', type: 'Autre' }],
    },
    4: {},
    5: {},
    6: {
      S5: [{ title: 'Code reviews / PR — SmartFace', type: 'Rapport', link: 'assets/Rapport_SmartFace.pdf' }],
      S6: [{ title: 'Collaboration front/back — ChatBot', type: 'Rapport', link: 'assets/Rapport_ChatbotAutomobile.pdf' }],
    },
  };

  private reflections: Record<CompId, Partial<Record<SemId, string[]>>> = {
    1: { S3: [], S4: [], S5: ["Côté développement web, je suis à l’aise : l’implémentation a été rapide et efficace sur mes deux projets (SAÉ et qualité de développement – Jeu du Loto). Mes axes de progrès portent surtout sur la qualité logicielle : renforcer les tests unitaires (couverture, scénarios de régression, outillage) et approfondir la compréhension des modèles IA (RAG, évaluation, limites) pour gagner en fiabilité et en précision."], S6: ["Pour le développement de l’application, nous avons été limités par l’obligation d’utiliser Streamlit, qui ne permet pas de réaliser une interface réellement professionnelle. Ce choix restait toutefois pertinent pour exécuter les modèles via Hugging Face. Côté développement web, étant très à l’aise sur ce terrain, l’implémentation a été rapide et maîtrisée. Côté IA, je sens une progression, mais pas encore au niveau d’un résultat « parfait ». Je dois encore approfondir l’usage des modèles et du RAG afin de concevoir un chatbot plus précis et robuste."] },
    2: { S3: [], S4: [], S5: ["L’optimisation rejoint ce que j’ai dit sur la compréhension des modèles d’IA pour offrir de meilleures performances. Il me reste encore des efforts à faire sur ce point, même si ce que nous avons livré était très correct. Mais pour le projet jeu du loto j'ai su bien gérer l'optimisation car je suis habitué au côté angular/python."], S6: ["Je sais identifier quand une application a besoin d’optimisation en termes de performance, comme dans chaque SAE impliquant une application où nous devions améliorer l’efficacité. Aujourd’hui, je me sens confiant de dire que je peux optimiser une application, et ce, dans plusieurs technologies différentes (SQL, Python, IA, JavaScript, MongoDB). Je l’ai démontré ce semestre avec la SAE sur le Chatbot. Objectivement, je sens qu’il me reste encore quelques efforts à fournir concernant la performance en SQL, notamment avec l’utilisation des index, etc."] },
    3: { S3: [], S4: [], S5: [], S6: [] },
    4: { S3: [], S4: [], S5: [], S6: [] },
    5: { S3: [], S4: [], S5: [], S6: [] },
    6: { S3: [], S4: [], S5: ["Mes compétences en travail d’équipe sont plutôt bonnes, comme j’ai pu l’expérimenter sur cette SAÉ. Je pense toutefois pouvoir mieux communiquer sur ce que je fais : il m’arrive de coder des fonctionnalités sans en informer immédiatement le reste du groupe, ce qui crée parfois un léger déséquilibre dans notre organisation. Sinon pour les autres travaux en équipe mon niveau est satisfaisant."], S6: ["Concernant le travail d'équipe je sens une net améliorations par rapport à mes anciens travaux collectif. En effete avec ce que j'ai vue en entreprise et avec tout les autres travails d'équipe que nous avons fait en cours, je sens que naturellement je commencais m'habitué à communiquer avec l'équipe et à prendre les devants pour mener le projets à bien et inconciemment prendre le rôle de leader pour faire avancer le projet."] },
  };

  setSem(s: SemesterDef) { this.current = s; }

  compTitle(comp: CompId) { return this.compTitles[comp]; }

  ueCode(sem: SemId, comp: CompId): string {
    const semNum = Number(sem.replace('S', ''));
    return `${semNum}${comp}`;
  }

  getSummary(comp: CompId, sem: SemId): string {
    return this.summaries[comp][sem] ?? '';
  }

  summaryTitle(sem: SemId): string {
    return sem === 'S6' ? 'S6 — ChatBot Automobile' : `Synthèse ${sem}`;
  }

  getEvidence(comp: CompId, sem: SemId): Evidence[] {
    return this.evidences[comp][sem] ?? [];
  }

  getReflection(comp: CompId, sem: SemId): string[] {
    return this.reflections[comp][sem] ?? [];
  }

  compCss(comp: CompId): string {
    switch (comp) {
      case 1: return 'realiser';
      case 2: return 'optimiser';
      case 3: return 'administrer';
      case 4: return 'gerer';
      case 5: return 'conduire';
      case 6: return 'collaborer';
    }
  }
}
