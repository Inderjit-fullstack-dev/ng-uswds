import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian.component';
import { AccordianItemComponent } from './accordian-item/accordian-item.component';

@NgModule({
  declarations: [AccordianComponent, AccordianItemComponent],
  imports: [CommonModule],
  exports: [AccordianComponent, AccordianItemComponent],
})
export class AccordianModule {}
