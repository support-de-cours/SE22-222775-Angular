import { Component, VERSION } from '@angular/core';

const getRandomInt = (max = 1000) => {
  return Math.floor(Math.random() * Math.floor(max));
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items: any[] = [...new Array(1000)].map((el, i) => ({id: i, value: getRandomInt()}));

  update(id: number) {
    const item = this.items[id];
    item.value = getRandomInt();
  }
}
