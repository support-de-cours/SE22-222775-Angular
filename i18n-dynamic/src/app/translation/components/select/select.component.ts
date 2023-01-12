import { environment } from '../../../../environments/environment';
import { Component, Inject, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { DOCUMENT } from '@angular/common';

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
    private _messageService: MessagesService,
    @Inject(DOCUMENT) private document: Document
  ){}

  ngOnInit(): void {
    this.locale = environment.default_locale;
    this.load();
  }

  async load(): Promise<void>
  {
    const data = await import(`./../../../../locale/messages.${this.locale}.json`);
    this._messageService.messages = data.translations;
    this.document.documentElement.lang = this.locale; 
  }
}
