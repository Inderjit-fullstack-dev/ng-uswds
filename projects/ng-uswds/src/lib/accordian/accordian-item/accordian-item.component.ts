import {
  AfterViewInit,
  Component,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { AccordianComponent } from '../accordian.component';

@Component({
  selector: 'accordian-item',
  templateUrl: './accordian-item.component.html',
  styleUrls: ['./accordian-item.component.css'],
})
export class AccordianItemComponent implements AfterViewInit {
  @Input() heading: string = '';
  @Input() id: string = '';

  isMultiSelectable: boolean;
  isOutlined: boolean;
  show: boolean = false;
  parent!: AccordianComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setParentAttributes();
  }

  /**
   * Sets the component attributes based on the parent accordian component.
   */
  private setParentAttributes(): void {
    if (this.parent) {
      this.isMultiSelectable = this.parent.isMultiSelectable;
      this.isOutlined = this.parent.isOutlined;
    }
    this.cdr.detectChanges();
  }

  /**
   * Toggles the visibility of the accordian content.
   * If `isMultiSelectable` is false, it ensures only one item is open at a time.
   */
  onHeadingClick(id: string): void {
    if (this.isMultiSelectable) {
      this.toggle();
    } else {
      this.parent?.closeOtherItems(id);
      this.show = true; // Ensure the clicked item is opened
    }
  }

  /**
   * Toggles the visibility of the content.
   */
  toggle(): void {
    this.show = !this.show;
  }
}
