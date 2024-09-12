import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HeadingLevel, MessageType } from '../core/types';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements AfterViewInit {
  @Input() headingLevel: HeadingLevel = 'h1';
  @Input() heading: string = '';
  @Input() slim: boolean = false;
  @Input() hideIcon: boolean = false;
  @Input() type: MessageType = 'info';

  @ViewChild('dynamicHeading', { static: true }) dynamicHeading!: ElementRef;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.createHeadingElement();
    this.updateAlertClass();
    this.cdr.detectChanges();
  }

  private createHeadingElement(): void {
    if (this.heading.trim()) {
      const headingElement = this.renderer.createElement(this.headingLevel);
      const text = this.renderer.createText(this.heading);
      this.renderer.addClass(headingElement, 'usa-alert__heading');
      this.renderer.appendChild(headingElement, text);
      this.renderer.appendChild(
        this.dynamicHeading.nativeElement,
        headingElement
      );
    }
  }

  private updateAlertClass(): void {
    this.alertClass = this.computeAlertClass();
  }

  private computeAlertClass(): string {
    const baseClass = `usa-alert--${this.type}`;
    const additionalClasses = [
      this.slim ? 'usa-alert--slim' : '',
      this.hideIcon ? 'usa-alert--no-icon' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return [baseClass, additionalClasses].filter(Boolean).join(' ');
  }

  public alertClass: string = '';
}
