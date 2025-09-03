import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { AlternanceComponent } from './components/alternance/alternance.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'alternance', component: AlternanceComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'conclusion', component: ConclusionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent, CompetencesComponent, AlternanceComponent,
    ProjetsComponent, ConclusionComponent, ContactComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
