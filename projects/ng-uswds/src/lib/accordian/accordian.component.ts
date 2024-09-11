import {
  Component,
  ContentChildren,
  QueryList,
  Input,
  AfterContentInit,
} from '@angular/core';
import { AccordianItemComponent } from './accordian-item/accordian-item.component';

@Component({
  selector: 'accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements AfterContentInit {
  @ContentChildren(AccordianItemComponent)
  accordianItems!: QueryList<AccordianItemComponent>;

  /**
   * Configuration Inputs
   */
  @Input() isAnimated = true;
  @Input() isBordered = false;
  @Input() isMultiSelectable = false;
  @Input() isOutlined = true;

  /**
   * Initialize the accordian items after content is set
   */
  ngAfterContentInit(): void {
    this.accordianItems.forEach((item, index) => {
      item.id = (index + 1).toString();
      item.parent = this;
    });
  }

  /**
   * Close other accordian items, keeping the current one open
   * if multi-selection is disabled.
   */
  closeOtherItems(openedItemId: string): void {
    if (!this.isMultiSelectable) {
      this.accordianItems.forEach((item) => {
        if (item.id !== openedItemId) {
          item.show = false;
        }
      });
    }
  }
}
