import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-buy';
  activePage = 'recipe';

  onNavigate(feature: string) {
    this.activePage = feature;

  }
}
