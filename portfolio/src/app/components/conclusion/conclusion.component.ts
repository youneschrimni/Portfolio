import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent {
  showCopyFeedback = false;

  forts = [
    "Autonomie croissante sur des projets web complexes avec Angular et TypeScript (Alerte, Hubsupervise)",
    "Rigueur de code et sens de la qualité (tests, revues, structuration)",
    "Communication claire en équipe (daily, démos, comptes-rendus)",
    "Capacité d'adaptation et d'apprentissage rapide de nouvelles technologies"
  ];

  vigilances = [
    "Mieux anticiper et gérer la dette technique sur les projets long terme",
    "Cadrer plus tôt les user stories (critères d'acceptation, risques, dépendances)",
    "Approfondir les connaissances en CI/CD et tests end-to-end",
    "Améliorer l'estimation des tâches complexes et la gestion du temps"
  ];

  pratiques = [
    "Git flow (feature → MR → review)",
    "Checklist de revue de code",
    "Documentation technique (README, ADR)",
    "Composants réutilisables",
    "Mesure continue (lint, tests, coverage)",
    "Méthodologies agiles",
    "Code reviews constructives",
    "Tests unitaires systématiques"
  ];

  acquis = [
    "Angular avancé (MatDialog, formulaires réactifs, RxJS, routing)",
    "APIs REST et intégration de services tiers",
    "Bases de données SQL/NoSQL et optimisation des requêtes",
    "Organisation agile et collaboration en équipe",
    "Tests unitaires et stratégies de testing",
    "Accessibilité web et principes UX/UI",
    "Déploiement et monitoring d'applications"
  ];

  projection = "Poursuivre ma montée en compétences en tant que développeur full-stack (Angular + Spring/Flask), avec un focus sur la qualité, les tests automatisés et le déploiement cloud. Mon objectif est de contribuer à des projets innovants tout en développant ma expertise technique et mon leadership.";

  steps = [
    {
      title: "Consolider CI/CD",
      text: "Mettre en place des pipelines robustes (lint/tests/build/deploy) sur mes projets personnels et professionnels.",
      duration: "3 mois"
    },
    {
      title: "Projet vitrine full-stack",
      text: "Développer une application publique avec authentification, API documentée et interface moderne.",
      duration: "4 mois"
    },
    {
      title: "Dashboard analytique",
      text: "Créer un tableau de bord avec recherche avancée, cache côté client et visualisations de données.",
      duration: "3 mois"
    }
  ];

  getSkillLevel(index: number): number {
    const levels = [85, 90, 75, 80, 88, 70, 82];
    return levels[index] || 80;
  }

  print() {
    window.print();
  }

  copy() {
    const text = this.generateSummaryText();
    navigator.clipboard.writeText(text).then(() => {
      this.showCopyFeedback = true;
      setTimeout(() => {
        this.showCopyFeedback = false;
      }, 3000);
    }).catch(() => {
      alert('Impossible de copier automatiquement. Veuillez sélectionner et copier manuellement le texte.');
    });
  }

  private generateSummaryText(): string {
    return `CONCLUSION & PERSPECTIVES - PORTFOLIO DÉVELOPPEUR

POINTS FORTS:
${this.forts.map(f => `• ${f}`).join('\n')}

POINTS D'AMÉLIORATION:
${this.vigilances.map(v => `• ${v}`).join('\n')}

BONNES PRATIQUES MAÎTRISÉES:
${this.pratiques.map(p => `• ${p}`).join('\n')}

COMPÉTENCES ACQUISES:
${this.acquis.map(a => `• ${a}`).join('\n')}

VISION ET OBJECTIFS:
${this.projection}

FEUILLE DE ROUTE:
${this.steps.map((s, i) => `${i + 1}. ${s.title} (${s.duration}): ${s.text}`).join('\n')}

---
Généré le ${new Date().toLocaleDateString('fr-FR')}`;
  }
}
