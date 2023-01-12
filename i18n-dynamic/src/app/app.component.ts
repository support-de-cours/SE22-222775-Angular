import { Component, OnInit } from '@angular/core';
import { MessagesService } from './translation/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'i18n-dynamic';
  messages: {[key: string]: string} = {};

  constructor(
    private _messageService: MessagesService
  ){}

  ngOnInit(): void {
    this._messageService.messages.subscribe( (data:{[key: string]: string}) => this.messages = data );
  }
}
