import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  books:any[] = [
    {id: 1, title: "book 1", description: "lorem ipsum 1"},
    {id: 2, title: "book 2", description: "lorem ipsum 2"},
    {id: 3, title: "book 3", description: "lorem ipsum 3"},
    {id: 4, title: "book 4", description: "lorem ipsum 4"},
  ];

}
