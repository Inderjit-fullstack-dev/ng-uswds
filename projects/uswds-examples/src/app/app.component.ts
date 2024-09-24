import { CardOptions } from './../../../ng-uswds/src/lib/core/interfaces/card.options';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cardOptions: CardOptions = {
    headerFirst: false,
    gridLayout: {
      desktop: 6,
      mobile: 12,
      widescreen: 6,
      tablet: 12,
    },
    externalClass: null,
  };

  btnClicked() {
    console.log('clicked');
  }
}
