import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private _messages = new BehaviorSubject<{[key: string]: string}>({});

  get messages()
  {
    return this._messages;
  }

  set messages(data: any)
  {
    this._messages.next(data);
  }
}
