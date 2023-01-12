import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  // Liste des langues disponible
  locales: string[] = [];

  // Index de la langue selectionnée
  locale: string = '';
}
