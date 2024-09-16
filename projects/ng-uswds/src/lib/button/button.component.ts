import { Component, Input } from '@angular/core';
import { ButtonVariant } from '../core/types/button-variants';

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() variant: ButtonVariant = 'default';
  @Input() disabled: boolean = false;
  @Input() ariaDisabled: boolean = false;
  @Input() isUnstyled: boolean = false;
  @Input() isBlocked: boolean = false;
  @Input() size: 'big' | 'normal' = 'normal';

  get btnClasses(): string {
    return this.computeButtonClasses();
  }

  private computeButtonClasses(): string {
    const classes = [`usa-button--${this.variant}`];

    if (this.size === 'big') {
      classes.push('usa-button--big');
    }

    if (this.isUnstyled) {
      classes.push('usa-button--unstyled');
    }

    if (this.isBlocked) {
      classes.push('btn-block');
    }

    return classes.join(' ');
  }
}
