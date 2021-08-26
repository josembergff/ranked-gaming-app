import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/dashboard', icon: 'home' },
    { title: 'User', url: '/user', icon: 'person' },
    { title: 'Team', url: '/team', icon: 'people' },
    { title: 'Tournament', url: '/tournament', icon: 'clipboard' },
    { title: 'Ranking', url: '/ranking', icon: 'compass' },
  ];
  constructor() {}
}
