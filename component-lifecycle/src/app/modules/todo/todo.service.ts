import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _items = new BehaviorSubject<string[]>([]);

  get items() {
    return this._items;
  }

  set item(item: string) {
    this._items.next([...this._items.value, item]);
  }

  remove(index: number)
  {
    const roomArr: any[] = this._items.getValue();

    roomArr.forEach((item, key) => {
      if (key === index) { roomArr.splice(key, 1); }
    });

    this._items.next(roomArr);
  }
}




import { Store } from '@ngrx/store';
import { InfoState, getInfoState } from './store/reducers/info.reducer';

export class MyComponent {
  infoState: InfoState;

  constructor(private store: Store<{ info: InfoState }>) {
    this.store.select(getInfoState).subscribe(infoState => {
      this.infoState = infoState;
    });
  }
}