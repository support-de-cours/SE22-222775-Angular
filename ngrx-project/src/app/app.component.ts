import { Component } from '@angular/core';
import { Params, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectFragment, selectQueryParams, selectRouteParams, selectTitle, selectUrl } from './core/selectors/router.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title?: string;
  currentRoute?: Route;
  url?: string;
  fragment?: string;
  queryParams?: Params;
  routeParams?: Params;
  constructor(private store: Store) { }

  ngOnInit(): void {
  	this.store.select(selectTitle).subscribe(title => this.title = title);
  	this.store.select(selectCurrentRoute).subscribe(currentRoute => this.currentRoute = currentRoute);
  	this.store.select(selectUrl).subscribe(url => this.url = url);
  	this.store.select(selectFragment).subscribe(fragment => this.fragment = fragment);
  	this.store.select(selectQueryParams).subscribe(queryParams => this.queryParams = queryParams);
  	this.store.select(selectRouteParams).subscribe(routeParams => this.routeParams = routeParams);
  }
}
