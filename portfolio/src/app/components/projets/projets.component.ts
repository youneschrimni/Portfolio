import { Component } from '@angular/core';

interface Project {
  id: string;
  semester: 'S3' | 'S4' | 'S5' | 'S6';
  title: string;
  objective: string;
  duration?: string;
  team?: string;
  tools: string[];
  deliverables: string[];
  results?: string;
  value?: string;
  links?: {
    github?: string;
    pdf?: string;
    demo?: string;
  };
}

type Semester = 'Tous' | 'S3' | 'S4' | 'S5' | 'S6';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  // Configuration des filtres
  semesters: Semester[] = ['Tous', 'S3', 'S4', 'S5', 'S6'];
  current: Semester = 'Tous';
  query = '';
  order: 'asc' | 'desc' = 'desc';

  // Données des projets
  projects: Project[] = [
    {
      id: 'S3-01',
      semester: 'S3',
      title: "CinéFilms",
      objective: "Développement d'une interface de gestion pour lister et administrer les applications internes de l'entreprise",
      duration: "6 mois",
      team: "4 personnes",
      tools: ['Html, css, JS','MongoDB', 'API'],
      deliverables: [
        'Code source complet',
        'Documentation technique',
        'Présentation finale'
      ],
      results: 'Interface optimiser affichant les films ainsi que leurs résumer et acteurs ayant jouer dedans',
      value: "Ce projet d'application de répertoire de films, réalisée uniquement avec HTML, CSS et JavaScript, m'a permis d'acquérir des compétences essentielles en développement front-end et en intégration d'APIs externes. L'objectif était de répertorier un grand nombre de films et d'afficher dynamiquement des informations comme les résumés et les acteurs, à l'instar de sites comme IMDb. Ce projet a été une première expérience pour moi dans l'utilisation d'APIs pour récupérer ces données, et cela m'a permis de comprendre comment manipuler et afficher des informations provenant de sources externes. Le défi principal était d'optimiser les scripts pour effectuer des recherches rapides et efficaces en raison de l'énorme quantité de donnée que nous avions, en créant des index et en stockant les données pour limiter les appels API et offrir une meilleure performance. En parallèle, j'ai géré l'intégration d'une fonctionnalité de connexion avec des comptes utilisateurs, me permettant ainsi de travailler sur la gestion d'authentification et la sécurité des données. Ce projet m'a permis de renforcer mes compétences en optimisation de code, gestion d'APIs et développement d'interfaces dynamiques, et m’a donné une meilleure compréhension des défis techniques liés au traitement d’informations volumineuses et à l'interaction avec des services externes.",
      links: {
      }
    },
    {
      id: 'S4-01',
      semester: 'S4',
      title: 'Donjon de la Ruse',
      objective: "Développement d'un jeu mobile de type dungeon crawler avec mécaniques de stratégie et d'aventure",
      duration: "2mois",
      team: "2 personnes",
      tools: ['Android Studio', 'Java'],
      deliverables: [
        'Application mobile Android',
        'Code source documenté',
        'Rapport de conception',
        'Guide de jeu'
      ],
      results: 'Jeu fonctionnel avec plusieurs niveaux et système de sauvegarde',
      value: "Le projet Donjon-De-La-Ruse a été une expérience unique dans le développement de jeux vidéo, en particulier avec Android Studio. Ce projet m’a permis d'explorer un domaine totalement nouveau pour moi : la création d’un jeu d’aventure interactif. L'implémentation d’un système de combat tour par tour et de résolution d'énigmes, combinée à des choix stratégiques influencés par des lancers de dés, m’a permis de comprendre les bases de la logique de jeu, de la gestion des interactions utilisateurs et de la programmation d'éléments dynamiques. Ce projet a non seulement renforcé mes compétences en développement mobile mais aussi m’a donné une meilleure idée de la façon dont les jeux vidéo sont conçus, structurés et rendus interactifs. Ce projet est particulièrement valorisable dans le cadre d'un stage ou d’une future embauche car il démontre ma capacité à apprendre rapidement de nouvelles technologies et à les appliquer de manière créative. L’utilisation d’Android Studio m’a permis de me familiariser avec l’environnement de développement d’applications mobiles et d’acquérir des compétences en programmation Java ainsi qu’en design de jeux vidéo. De plus, la gestion de la logique de jeu, le développement d’interfaces utilisateur interactives et la résolution de problèmes liés à l’intelligence artificielle des ennemis ont élargi mon horizon en développement logiciel. Ce projet a renforcé mon goût pour la création et l’innovation, me poussant à approfondir mes connaissances dans le domaine du développement de jeux et de l’intelligence artificielle pour des applications ludiques et immersives.",
      links: {
        github: 'https://github.com/youneschrimni/Donjon-De-La-Ruse'
      }
    },
    {
      id: 'S5-01',
      semester: 'S5',
      title: 'Simulateur de Loto',
      objective: "Application web simulant un jeu de loto avec règles personnalisables et statistiques avancées",
      duration: "1 mois",
      team: "Tout seule",
      tools: ['Angular', 'Flask', 'MongoDB'],
      deliverables: [
        'Application web full-stack',
        'API REST documentée',
        'Base de données optimisée',
        'Rapport d\'analyse'
      ],
      results: 'Système complet avec interface temps réel et analytics détaillés',
      value: "Le projet du Jeu du Loto a été une expérience particulièrement enrichissante, car il s’agissait de mon premier projet Angular en dehors de mon alternance. Ce jeu m’a permis de concevoir une application complète où l’on peut inscrire des participants, lancer le loto, afficher les gagnants et gérer la répartition des gains de manière méritocratique, selon des critères bien définis. Ce projet m’a non seulement offert l’occasion de découvrir Angular en profondeur, mais il m’a également appris l’importance de la qualité du développement. En effet, le travail était orienté vers des pratiques de développement rigoureuses, telles que l’écriture de tests unitaires, l’ajout de commentaires clairs dans le code et la mise en place de bonnes pratiques de codage pour garantir un code propre et maintenable. Le fait de devoir réaliser ce projet dans un délai limité, tout en répondant à des besoins qui évoluaient au fil du temps, m’a permis de travailler efficacement et d’adopter une approche plus professionnelle dans la gestion des tâches et des priorités. Cette expérience m’a renforcé dans l’idée qu’un bon code ne se limite pas à la fonctionnalité, mais qu’il doit aussi être robuste, bien documenté et facilement maintenable, des qualités essentielles dans un cadre professionnel.",
      links: {
      }
    },
    {
      id: 'S5-02',
      semester: 'S5',
      title: "SmartFace - Prédiction d'âge",
      objective: "Application d'intelligence artificielle pour prédire l'âge d'une personne à partir d'une photo de visage",
      duration: "5 mois",
      team: "4 personnes",
      tools: ['Angular', 'Python', 'TensorFlow','Flask'],
      deliverables: [
        'Modèle IA entraîné',
        'Interface web intuitive',
        'API de prédiction',
        'Documentation scientifique'
      ],
      results: 'Précision de 78% sur le dataset de test avec interface utilisateur optimisée',
      value: "Le projet SmartFace - Prédiction d’âge a été une expérience très formatrice qui m'a permis de plonger profondément dans le domaine de l'intelligence artificielle. Ce qui m'a particulièrement marqué, c'est le fait que nous avons créé nos propres modèles de réseaux de neurones convolutionnels (CNN) dès le départ, sans partir de modèles préexistants. En concevant et en entraînant ces modèles pour la prédiction du genre et de l’âge à partir d'images faciales, j’ai non seulement acquis des compétences techniques solides en apprentissage automatique, mais cela m'a également permis de mieux comprendre les enjeux et les défis de l'IA. Ce processus de construction et d'optimisation des modèles CNN m’a appris à surmonter les difficultés techniques telles que le surapprentissage, l’optimisation des hyperparamètres et la gestion des données. Il m’a aussi permis de découvrir l'importance des techniques de régularisation et des stratégies d'entraînement telles que le transfert d’apprentissage, ce qui a été un réel point d’apprentissage et de satisfaction. La création de ces modèles 'from scratch' a éveillé un fort intérêt pour l'IA, me donnant le goût de continuer à explorer ce domaine et à développer des solutions encore plus sophistiquées. Ce projet est particulièrement valorisable dans le cadre d'un stage ou d’une future embauche, car il démontre ma capacité à concevoir, développer et déployer des solutions intelligentes et robustes en IA. En créant et en affinant des modèles d’intelligence artificielle pour des applications réelles, j’ai non seulement enrichi mes compétences techniques en Python, TensorFlow et Keras, mais j'ai également gagné en expérience dans le développement de modèles IA et leur mise en production. Ce projet m’a donné une vision pratique et approfondie du processus complet de l’IA, de la conception des modèles à leur déploiement, et il a renforcé mon envie de poursuivre une carrière dans ce domaine en pleine expansion.",
      links: {
        github: 'https://github.com/youneschrimni/SmartFace',
        demo: 'http://217.154.22.108/smartface/',
        pdf: 'assets/Rapport_SmartFace.pdf'
      }
    },
    {
      id: 'S6-01',
      semester: 'S6',
      title: 'ChatBot Automobile',
      objective: "Développement d'un chatbot intelligent spécialisé dans le conseil et l'information automobile",
      duration: "1 mois",
      team: "4 personnes",
      tools: ['Angular', 'Flask', 'NLP', 'MongoDB'],
      deliverables: [
        'Chatbot fonctionnel',
        'Base de connaissances',
        'Interface conversationnelle',
        'Mémoire de projet'
      ],
      results: 'Assistant virtuel capable de répondre à plus de 500 questions automobiles',
      value: "Le développement du ChatBot Automobile Intelligent m'a permis d'approfondir mes compétences en intelligence artificielle et en traitement du langage naturel (NLP), en plus de renforcer mes connaissances en développement web avec Angular pour l'interface et Flask pour le backend. Ce projet m'a introduit à des technologies avancées de l'IA, notamment la compréhension et la génération de réponses contextuelles basées sur des questions automobiles. Cette expérience m'a permis de comprendre l'importance de l'intégration d'algorithmes d'IA dans des applications concrètes et d'affiner mes compétences en programmation Python, en particulier dans le domaine du Machine Learning et du NLP. Ce projet a véritablement aiguisé mon intérêt pour l'IA, me poussant à explorer davantage ce domaine et à développer des compétences techniques qui sont aujourd'hui essentielles pour une carrière dans la tech.",
      links: {
        github: 'https://github.com/youneschrimni/ChatBotAutomobile',
        demo: 'http://217.154.22.108/home',
        pdf: 'assets/Rapport_ChatbotAutomobile.pdf'
      }
    }
  ];

  /**
   * Calcule la liste filtrée des projets selon les critères sélectionnés
   */
  get filtered(): Project[] {
    let list = [...this.projects];

    // Filtre par semestre
    if (this.current !== 'Tous') {
      list = list.filter(project => project.semester === this.current);
    }

    // Filtre par recherche textuelle
    const searchQuery = this.query.trim().toLowerCase();
    if (searchQuery) {
      list = list.filter(project => {
        const searchableContent = [
          project.title,
          project.objective,
          project.team || '',
          project.duration || '',
          project.results || '',
          project.value || '',
          ...project.tools,
          ...project.deliverables
        ].join(' ').toLowerCase();

        return searchableContent.includes(searchQuery);
      });
    }

    // Tri par ordre chronologique
    list.sort((a, b) => {
      const comparison = a.id.localeCompare(b.id);
      return this.order === 'asc' ? comparison : -comparison;
    });

    return list;
  }

  // longueur cible de l’extrait (~3-5 lignes selon ta largeur)
private readonly EXCERPT_CHARS = 220;

expanded: Record<string, boolean> = {};

isExpanded(id: string): boolean {
  return !!this.expanded[id];
}

toggleExpanded(id: string): void {
  this.expanded[id] = !this.expanded[id];
}

shouldShowToggle(text?: string): boolean {
  return !!text && text.trim().length > this.EXCERPT_CHARS;
}

getExcerpt(text?: string, limit: number = this.EXCERPT_CHARS): string {
  if (!text) return '';
  const trimmed = text.trim();
  if (trimmed.length <= limit) return trimmed;

  // coupe sur une limite de mot propre (pas en plein milieu)
  const slice = trimmed.slice(0, limit);
  const lastSpace = slice.lastIndexOf(' ');
  const clean = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;

  // peaufine: évite les "...,", "...;" etc.
  return clean.replace(/[,\.;:\-\s]*$/, '') + '…';
}

  /**
   * Fonction de tracking pour optimiser le rendu de la liste
   * @param index Index de l'élément
   * @param project Projet à tracker
   */
  trackByProject(index: number, project: Project): string {
    return project.id;
  }

  /**
   * Réinitialise tous les filtres
   */
  resetFilters(): void {
    this.current = 'Tous';
    this.query = '';
    this.order = 'desc';
  }

  /**
   * Sélectionne un semestre spécifique
   * @param semester Semestre à sélectionner
   */
  selectSemester(semester: Semester): void {
    this.current = semester;
  }

  /**
   * Change l'ordre de tri
   */
  toggleOrder(): void {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
  }

  /**
   * Obtient le nombre total de projets par semestre
   * @param semester Semestre à compter
   */
  getProjectCountBySemester(semester: Semester): number {
    if (semester === 'Tous') {
      return this.projects.length;
    }
    return this.projects.filter(p => p.semester === semester).length;
  }

  /**
   * Vérifie si un projet a des liens disponibles
   * @param project Projet à vérifier
   */
  hasLinks(project: Project): boolean {
    return !!(project.links && (
      project.links.github ||
      project.links.pdf ||
      project.links.demo
    ));
  }

  /**
   * Obtient les technologies les plus utilisées
   */
  get topTechnologies(): { name: string; count: number }[] {
    const techCount = new Map<string, number>();

    this.projects.forEach(project => {
      project.tools.forEach(tool => {
        const current = techCount.get(tool) || 0;
        techCount.set(tool, current + 1);
      });
    });

    return Array.from(techCount.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  /**
   * Obtient les statistiques générales
   */
  get statistics() {
    const totalProjects = this.projects.length;
    const technologies = new Set(this.projects.flatMap(p => p.tools)).size;
    const completedProjects = this.projects.filter(p => p.results).length;

    return {
      total: totalProjects,
      technologies,
      completed: completedProjects,
      completionRate: Math.round((completedProjects / totalProjects) * 100)
    };
  }
}
