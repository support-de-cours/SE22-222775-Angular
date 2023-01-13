import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@pageTitle:Play with angular`;
  name:string = "john";

  fruits: string[] = ['apple'];

  fruitsMessageMap: {[key: string]: string} = {
    '=0': $localize`:@@no.fruit:0 fruit (en)`,
    '=1': $localize`:@@one.fruit:1 fruit (en)`,
    'other': $localize`:@@many.fruits:# fruits (en)`
  }
}
