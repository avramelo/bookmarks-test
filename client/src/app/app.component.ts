import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avaloq project';
  links = [
    { path: '/bookmarks', icon: 'work', label: 'Bookmarks' },
    { path: '/grouped-bookmarks', icon: 'work', label: 'Grouped Bookmarks' },
  ];
  constructor() { }

  isSidenaveOpen(component: any) {
    return component.opened ;
  }
}
