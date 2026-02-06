import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProgrammingLanguage {
  name: string;
  symbol: string;
  color: string;
  level: number;
}

interface Tool {
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface SoftSkill {
  name: string;
  icon: string;
  description: string;
}

interface Language {
  name: string;
  flag: string;
  level: string;
  levelClass: string;
}

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent {
  
  programmingLanguages: ProgrammingLanguage[] = [
    { name: 'JavaScript', symbol: 'JS', color: '#F7DF1E', level: 85 },
    { name: 'TypeScript', symbol: 'TS', color: '#3178C6', level: 85 },
    { name: 'Java', symbol: 'J', color: '#ED8B00', level: 80 },
    { name: 'Python', symbol: 'Py', color: '#3776AB', level: 85 },
    { name: 'PHP', symbol: 'PHP', color: '#777BB4', level: 70 },
    { name: 'HTML/CSS', symbol: '<>', color: '#E34F26', level: 90 },
    { name: 'Bash', symbol: '$', color: '#4EAA25', level: 65 },
    { name: 'SQL', symbol: 'SQL', color: '#336791', level: 75 },
  ];

  frontendFrameworks: string[] = ['Angular', 'Vue.js', "React"];
  
  backendFrameworks: string[] = ['Spring Boot', 'Flask', 'Node.js (Express)', "REST API"];
  
  aiFrameworks: string[] = ['TensorFlow', 'Hugging Face', 'Keras', 'LangChain'];

  tools: Tool[] = [
    {
      name: 'GitLab/Github',
      icon: '🦊',
      color: '#FC6D26',
      description: 'Gestion de versions et CI/CD'
    },
    {
      name: 'Docker',
      icon: '🐳',
      color: '#2496ED',
      description: 'Conteneurisation d\'applications'
    },
    {
      name: 'Jenkins',
      icon: '⚡',
      color: '#D24939',
      description: 'Intégration et déploiement continu'
    },
    {
      name: 'Jira',
      icon: '📋',
      color: '#0052CC',
      description: 'Gestion de projets Agile'
    },
    {
      name: 'VS Code',
      icon: '💻',
      color: '#007ACC',
      description: 'Éditeur de code principal'
    },
    {
      name: 'IntelliJ IDEA',
      icon: '💡',
      color: '#000000',
      description: 'IDE pour Java et Spring'
    },
    {
      name: 'Figma',
      icon: '🎨',
      color: '#F24E1E',
      description: 'Design et prototypage UI/UX'
    },
    {
      name: 'Hugging Face',
      icon: '🤗',
      color: '#FFD21E',
      description: 'Déploiement de modèles IA'
    },
    {
      name: "Postman",
      icon: "",
      color: '#ff961e',
      description: 'Requetes vers api'
    },
    {
      name: "Nginx",
      icon: "",
      color: '#1eff1e',
      description: 'Reverse-proxy'
    }
  ];

  softSkills: SoftSkill[] = [
    {
      name: 'Travail en équipe',
      icon: '👥',
      description: 'Collaboration efficace en environnement Agile'
    },
    {
      name: 'Adaptation & Autonomie',
      icon: '🎯',
      description: 'Capacité à m\'adapter rapidement aux nouveaux défis'
    },
    {
      name: 'Apprentissage rapide',
      icon: '📚',
      description: 'Curiosité technique et veille constante'
    },
    {
      name: 'Communication',
      icon: '💬',
      description: 'Présentation claire de solutions techniques'
    },
  ];

  languages: Language[] = [
    {
      name: 'Anglais',
      flag: '🇬🇧',
      level: 'Niveau B2 TOEIC 845',
      levelClass: 'level-high'
    },
    {
      name: 'Espagnol',
      flag: '🇪🇸',
      level: 'Niveau intermédiaire',
      levelClass: 'level-medium'
    },
  ];
}