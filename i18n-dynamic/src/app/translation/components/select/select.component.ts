import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'translation-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // Liste des langues disponible
  locales: string[] = environment.locales;

  // Index de la langue selectionnée
  locale: string = '';

  constructor(
    private _messageService: MessagesService
  ){}

  ngOnInit(): void {
    this.locale = environment.default_locale;
    this.load();
  }

  async load(): Promise<void>
  {
    const data = await import(`./../../../../locale/messages.${this.locale}.json`);
    this._messageService.messages = data.translations;    
  }
}
