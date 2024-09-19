import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent implements AfterContentInit {
  @Input() type: 'group' | 'segmented' = 'group';

  @ContentChildren(ButtonComponent)
  buttons!: QueryList<ButtonComponent>;

  ngAfterContentInit(): void {
    // this.buttonList = this.buttons.toArray();
    console.log(this.buttons);
  }
}
