import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-universal';
  myData: string = '';

  ngOnInit(): void
  {
    this.myData = "Mon texte depuis le typescript";
  }
}
