import { Routes } from '@angular/router';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { AlternanceComponent } from './components/alternance/alternance.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'alternance', component: AlternanceComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
