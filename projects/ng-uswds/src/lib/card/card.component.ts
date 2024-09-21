import { Component, Input, OnInit } from '@angular/core';
import { CardOptions } from '../core/interfaces/card.options';
import { GridLayout } from '../core/interfaces/grid.layout';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() cardOptions: CardOptions;

  @Input() mediaSrc: string = '';
  @Input() mediaSrcAlt: string = 'Card  media';
  @Input() mediaSrcPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() mediaFitType: 'insert' | 'extended' = 'insert';

  ngOnInit(): void {
    console.log(this.cardOptions);
  }

  getGridClasses(): string {
    const gridLayout: GridLayout = this.cardOptions?.gridLayout || {};
    const layoutMappings: { [key: string]: string } = {
      mobile: 'mobile:grid-col-',
      mobileLarge: 'mobile-lg:grid-col-',
      tablet: 'tablet:grid-col-',
      tabletLarge: 'tablet-lg:grid-col-',
      desktop: 'desktop:grid-col-',
      desktopLarge: 'desktop-lg:grid-col-',
      widescreen: 'widescreen:grid-col-',
    };

    return Object.keys(gridLayout)
      .filter((key) => gridLayout[key as keyof GridLayout])
      .map(
        (key) => `${layoutMappings[key]}${gridLayout[key as keyof GridLayout]}`
      )
      .join(' ');
  }
}
