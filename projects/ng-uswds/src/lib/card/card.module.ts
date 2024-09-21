import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    CardsComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardContentComponent,
    CardsComponent,
  ],
})
export class CardModule {}
