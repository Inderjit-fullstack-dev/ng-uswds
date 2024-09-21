import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [ButtonGroupComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonGroupComponent],
})
export class ButtonGroupModule {}
