import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  nom = 'Chrimni Younes';
  parcours = 'Développement';
}
